"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button, Modal, Typography, Box, TextField, Rating, Drawer, IconButton } from '@mui/material';
import axios from 'axios';
import { Book } from '../../../../../../m1-api/src/modules/books/books.model';
import SortIcon from '@mui/icons-material/Sort';

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const BookDetailPage: React.FC = () => {
  const params = useParams();
  const { id: bookId } = params as { id: string };
  const router = useRouter();

  const [book, setBook] = useState<Book | null>(null);
  const [reviews, setReviews] = useState<any[]>([]); // State to store reviews
  const [editBookModalOpen, setEditBookModalOpen] = useState(false);
  const [deleteBookModalOpen, setDeleteBookModalOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false); // Modal to add review
  const [rating, setRating] = useState<number | null>(null); // Rating (1 to 5)
  const [comment, setComment] = useState<string>(''); // Optional comment
  const [error, setError] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false); // State to manage the Drawer visibility
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc'); // Sort order for reviews
  const [date, setDate] = useState<string>(''); // Date entrée par l'utilisateur
  const [averageRating, setAverageRating] = useState<number>(0); // State to store the average rating

  useEffect(() => {
    if (!bookId) {
      setError("ID du livre non spécifié.");
      return;
    }

    // Fetch book details
    axios.get(`http://localhost:3001/books/${bookId}`)
      .then((response) => {
        setBook(response.data);
        setError(null);
      })
      .catch((error) => {
        console.error('Error fetching book:', error);
        setError("Livre non trouvé ou erreur lors de la récupération.");
      });

    // Fetch reviews for the book
    axios.get(`http://localhost:3001/reviews/book/${bookId}`)
      .then((response) => {
        setReviews(response.data);
        // Calculate average rating
        const totalRating = response.data.reduce((sum: number, review: { mark: any; }) => sum + review.mark, 0);
        const average = response.data.length > 0 ? totalRating / response.data.length : 0;
        setAverageRating(average); // Store the average rating
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error);
      });
  }, [bookId]);

  // Sort reviews by date
  const sortedReviews = reviews
    .sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

  if (error) return <div>{error}</div>;
  if (!book) return <div>Chargement...</div>;

  const handleDeleteBook = async () => {
    try {
      await axios.delete(`http://localhost:3001/books/${bookId}`);
      setDeleteBookModalOpen(false);
      router.push('/pages/books');
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleAddReview = async () => {
    if (!rating) {
      alert("Veuillez sélectionner une note.");
      return;
    }

    if (!date) { // Vérification si la date est vide
      alert("Veuillez entrer une date.");
      return;
    }

    const newReview = {
      mark: rating,
      reviews_description: comment || '', // Si aucun commentaire n'est fourni, on envoie une chaîne vide
      bookId: bookId, // Le bookId est déjà défini
      createdAt: new Date(date), // Passer la date sélectionnée
    };

    try {
      await axios.post(`http://localhost:3001/reviews`, newReview);
      setReviewModalOpen(false);
      setRating(null); // Réinitialiser la note
      setComment(''); // Réinitialiser le commentaire
      setDate(''); // Réinitialiser la date
      // Optionnellement, vous pouvez récupérer à nouveau les avis pour mettre à jour l'interface
      const response = await axios.get(`http://localhost:3001/reviews/book/${bookId}`);
      setReviews(response.data); // Mettre à jour les avis
      // Recalculer la moyenne après ajout du nouvel avis
      const totalRating = response.data.reduce((sum: number, review: { mark: any; }) => sum + review.mark, 0);
      const average = response.data.length > 0 ? totalRating / response.data.length : 0;
      setAverageRating(average);
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'avis :', error);
    }
  };

  if (error) return <div>{error}</div>;
  if (!book) return <div>Chargement...</div>;

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {book.book_image && (
        <>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <img src={book.book_image} style={{ width: '200px', height: 'auto', borderRadius: '10px' }} />
          </div>
        </>
      )}
      <Typography variant="h4" gutterBottom>{book.title}</Typography>
      <div className="flex flex-col justify-between h-20">
        <p className="text-lg text-gray-600" style={{ fontFamily: 'Pacifico, cursive' }}>
          Par{" "}
          {book.author && (
            <a href={`/pages/authors/${book.author.id}`} style={{ cursor: 'pointer', color: '#inherit' }}>
              {book.author ? `${book.author.firstName} ${book.author.lastName}` : 'Auteur inconnu'}
            </a>
          )}
        </p>
      </div>
      <Typography variant="body1" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', marginBottom: '20px' }}>
        Année de publication: {book.yearPublished}
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '20px' }}>
        Prix: ${book.price}
      </Typography>

      {/* Affichage de la moyenne des avis */}
      <Typography variant="body1" style={{ marginBottom: '20px' }}>
      Moyenne des avis: {isNaN(averageRating) ? 'Pas encore d\'avis' : averageRating.toFixed(1)} / 5
      </Typography>

      <Button variant="contained" color="secondary" onClick={() => setDeleteBookModalOpen(true)} style={{ margin: '10px' }}>
        Supprimer le livre
      </Button>
      <Button variant="contained" color="inherit" onClick={() => setReviewModalOpen(true)} style={{ margin: '10px' }}>
        Ajouter un avis
      </Button>
      <Button variant="contained" color="info" onClick={() => setDrawerOpen(true)} style={{ margin: '10px' }}>
        Voir les avis
      </Button>

      {/* Drawer for reviews */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 400, padding: '20px' }}>
          <Typography variant="h6" gutterBottom>Avis</Typography>
          <IconButton onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
            <SortIcon />
          </IconButton>
          <div style={{ marginTop: '20px' }}>
            {/* Vérifiez les avis affichés */}

            {sortedReviews.length > 0 ? (
              sortedReviews.map((review, index) => (
                <Box key={index} sx={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
                  <Rating value={review.mark} readOnly />
                  <Typography variant="body2" style={{ marginBottom: '10px' }}>
                    {review.reviews_description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </Typography>
                </Box>
              ))
            ) : (
              <Typography variant="body2">Aucun avis disponible.</Typography>
            )}
          </div>
        </Box>
      </Drawer>

      {/* Modal for deleting book */}
      <Modal
        open={deleteBookModalOpen}
        onClose={() => setDeleteBookModalOpen(false)}
        aria-labelledby="delete-book-modal"
        aria-describedby="delete-book-description"
      >
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>Confirmer la suppression</Typography>
          <Typography variant="body1">
            Êtes-vous sûr de vouloir supprimer ce livre ?
          </Typography>
          <Button onClick={handleDeleteBook} variant="contained" color="error" style={{ marginTop: '20px' }}>
            Supprimer
          </Button>
          <Button onClick={() => setDeleteBookModalOpen(false)} variant="contained" color="inherit" style={{ marginTop: '20px' }}>
            Annuler
          </Button>
        </Box>
      </Modal>

      {/* Modal for adding review */}
      <Modal
        open={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
        aria-labelledby="add-review-modal"
        aria-describedby="add-review-description"
      >
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>Ajouter un avis</Typography>
          <Rating
            name="rating"
            value={rating || 0}
            onChange={(event, newValue) => setRating(newValue)}
            max={5}
          />
          <TextField
            label="Commentaire"
            multiline
            rows={4}
            fullWidth
            margin="normal"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <TextField
            label="Date de l'avis"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Button onClick={handleAddReview} variant="contained" color="primary" style={{ marginTop: '20px' }}>
            Ajouter l'avis
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default BookDetailPage;

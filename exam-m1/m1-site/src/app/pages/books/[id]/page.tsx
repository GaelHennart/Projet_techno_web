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
    axios.get(`http://localhost:3001/reviews?bookId=${bookId}`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error);
      });
  }, [bookId]);

  // Sort reviews by date
  const sortedReviews = reviews.sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
  });

  const handleDeleteBook = async () => {
    try {
      await axios.delete(`http://localhost:3001/books/${bookId}`);
      setDeleteBookModalOpen(false);
      router.push('/pages/books');
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleEditBook = async () => {
    const title = (document.getElementById('editBookTitle') as HTMLInputElement).value;
    const yearPublished = Number((document.getElementById('editBookYear') as HTMLInputElement).value);
    const price = Number((document.getElementById('editBookPrice') as HTMLInputElement).value);

    if (!title || isNaN(yearPublished) || isNaN(price)) {
      alert("Veuillez remplir tous les champs correctement.");
      return;
    }

    const updatedBook = {
      title,
      yearPublished,
      price,
      authorId: book?.authorId || "",  // Assume authorId is already set
    };

    try {
      const response = await axios.put(`http://localhost:3001/books/${bookId}`, updatedBook);
      setBook(response.data);
      setEditBookModalOpen(false);
    } catch (error) {
      console.error('Error updating book:', error);
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
      const response = await axios.get(`http://localhost:3001/reviews?bookId=${bookId}`);
      setReviews(response.data); // Mettre à jour les avis
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'avis :', error);
    }
  };
  

  if (error) return <div>{error}</div>;
  if (!book) return <div>Chargement...</div>;

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>{book.title}</Typography>
      {/* Ajout de l'affichage de l'auteur */}
      <div className="flex flex-col justify-between h-20">
        <p className="text-lg text-gray-600" style={{ fontFamily: 'Pacifico, cursive' }}>
          Par{" "}
          {/* Utiliser Link pour rendre le nom de l'auteur cliquable */}
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

      <Button variant="contained" color="secondary" onClick={() => setDeleteBookModalOpen(true)} style={{ margin: '10px' }}>
        Supprimer le livre
      </Button>
      <Button variant="contained" color="primary" onClick={() => setEditBookModalOpen(true)} style={{ margin: '10px' }}>
        Modifier le livre
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
            {sortedReviews.length > 0 ? (
              sortedReviews.map((review, index) => (
                <Box key={index} sx={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
                  <Rating value={review.mark} readOnly size="small" />
                  <Typography variant="body2" style={{ marginTop: '5px' }}>
                    {review.reviews_description || 'Pas de commentaire'}
                  </Typography>
                  <Typography variant="caption" color="textSecondary" style={{ marginTop: '5px' }}>
                    {new Date(review.createdAt).toLocaleDateString()}
                  </Typography>
                </Box>
              ))
            ) : (
              <Typography variant="body2" color="textSecondary">Aucun avis pour ce livre.</Typography>
            )}
          </div>
        </Box>
      </Drawer>

      {/* Modal pour édition */}
      <Modal open={editBookModalOpen} onClose={() => setEditBookModalOpen(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>Modifier les informations du livre</Typography>
          <div>
            <label htmlFor="editBookTitle">Titre</label>
            <input type="text" id="editBookTitle" defaultValue={book.title} style={{ display: 'block', marginBottom: '20px', marginTop: '10px' }} className="border p-2 w-full rounded" />
            <label htmlFor="editBookYear">Année de publication</label>
            <input type="number" id="editBookYear" defaultValue={book.yearPublished} style={{ display: 'block', marginBottom: '20px', marginTop: '10px' }} className="border p-2 w-full rounded" />
            <label htmlFor="editBookPrice">Prix</label>
            <input type="number" id="editBookPrice" defaultValue={book.price} style={{ display: 'block', marginBottom: '20px', marginTop: '10px' }} className="border p-2 w-full rounded" />
          </div>
          <Button variant="contained" color="primary" onClick={handleEditBook} sx={{ mt: 2 }}>
            Enregistrer
          </Button>
          <Button variant="outlined" onClick={() => setEditBookModalOpen(false)} sx={{ mt: 2 }}>
            Annuler
          </Button>
        </Box>
      </Modal>

      {/* Modal pour suppression */}
      <Modal open={deleteBookModalOpen} onClose={() => setDeleteBookModalOpen(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>Êtes-vous sûr de vouloir supprimer ce livre ?</Typography>
          <Button variant="contained" color="error" onClick={handleDeleteBook} sx={{ mr: 2 }}>
            Oui
          </Button>
          <Button variant="outlined" onClick={() => setDeleteBookModalOpen(false)}>
            Non
          </Button>
        </Box>
      </Modal>

      {/* Modal pour ajouter un avis */}
      <Modal open={reviewModalOpen} onClose={() => setReviewModalOpen(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>Ajouter un avis</Typography>
          <div>
            <Rating
              value={rating}
              onChange={(event, newValue) => setRating(newValue)}
              precision={0.5}
              size="large"
            />
          </div>
          <TextField
            label="Date de l'avis"
            type="date"
            fullWidth
            value={date}
            onChange={(e) => setDate(e.target.value)} // Mise à jour de l'état `date`
            InputLabelProps={{
              shrink: true,
            }}
          />
          <div style={{ marginTop: '10px' }}>
            <TextField
              label="Commentaire (optionnel)"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <Button variant="contained" color="primary" onClick={handleAddReview} sx={{ mt: 2 }}>
            Ajouter l'avis
          </Button>
          <Button variant="outlined" onClick={() => setReviewModalOpen(false)} sx={{ mt: 2 }}>
            Annuler
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default BookDetailPage;

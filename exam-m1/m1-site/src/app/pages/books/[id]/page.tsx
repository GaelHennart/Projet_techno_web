"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button, Modal, Typography, Box } from '@mui/material';
import axios from 'axios';
import { Book } from '../../../../../../m1-api/src/modules/books/books.model';

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
  const [editBookModalOpen, setEditBookModalOpen] = useState(false);
  const [deleteBookModalOpen, setDeleteBookModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!bookId) {
      setError("ID du livre non spécifié.");
      return;
    }

    axios.get(`http://localhost:3001/books/${bookId}`)
      .then((response) => {
        setBook(response.data);
        setError(null);
      })
      .catch((error) => {
        console.error('Error fetching book:', error);
        setError("Livre non trouvé ou erreur lors de la récupération.");
      });
  }, [bookId]);

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

  if (error) return <div>{error}</div>;
  if (!book) return <div>Chargement...</div>;

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>{book.title}</Typography>
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
    </div>
  );
};

export default BookDetailPage;

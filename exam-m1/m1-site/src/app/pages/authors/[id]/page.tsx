"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button, Modal, Typography, Box } from '@mui/material';
import axios from 'axios';

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const AuthorDetailPage: React.FC = () => {
  const params = useParams();
  const { id } = params as { id: string };
  const router = useRouter();

  const [author, setAuthor] = useState<any>(null);
  const [books, setBooks] = useState<any[]>([]);
  const [deleteAuthorModalOpen, setDeleteAuthorModalOpen] = useState(false);
  const [addBookModalOpen, setAddBookModalOpen] = useState(false);
  const [deleteBookModalOpen, setDeleteBookModalOpen] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("ID de l'auteur non spécifié.");
      return;
    }

    // Récupère les informations de l'auteur
    axios.get(`http://localhost:3001/authors/${id}`)
      .then((response) => {
        setAuthor(response.data);
        setError(null);
      })
      .catch((error) => {
        console.error('Error fetching author:', error);
        setError("Auteur non trouvé ou erreur lors de la récupération.");
      });

    // Récupère les livres de cet auteur en fonction de son ID
    axios.get(`http://localhost:3001/books/author/${id}`)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, [id]);

  const handleDeleteAuthor = async () => {
    try {
      await axios.delete(`http://localhost:3001/authors/${id}`);
      setDeleteAuthorModalOpen(false);
      router.push('/pages/authors');
    } catch (error) {
      console.error('Error deleting author:', error);
    }
  };

  const handleAddBook = async (title: string) => {
    try {
      const response = await axios.post(`http://localhost:3001/books`, {
        title,
        authorId: id,
      });
      setBooks([...books, response.data]);
      setAddBookModalOpen(false);
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleDeleteBook = async (bookId: string) => {
    try {
      await axios.delete(`http://localhost:3001/books/${bookId}`);
      setBooks(books.filter((book) => book.id !== bookId));
      setDeleteBookModalOpen(null);
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  if (error) return <div>{error}</div>;
  if (!author) return <div>Chargement...</div>;

  return (
    <div>
      <Typography variant="h4">{author.firstName} {author.lastName}</Typography>
      {author.imageUrl && (
        <img src={author.imageUrl} alt={`${author.firstName} ${author.lastName}`} style={{ width: '200px', height: 'auto' }} />
      )}
      <Typography variant="h6">Livres:</Typography>
      <ul>
        {books.length > 0 ? (
          books.map((book: any) => (
            <li key={book.id}>
              <a href={`/books/${book.id}`}>{book.title}</a>
              <span style={{ marginRight: '10px' }}></span>
              <Button variant="contained" color="error" onClick={() => setDeleteBookModalOpen(book.id)}>
                Supprimer
              </Button>
            </li>
          ))
        ) : (
          <Typography variant="body1">Aucun livre disponible</Typography>
        )}
      </ul>
      
      <Button variant="contained" color="primary" onClick={() => setAddBookModalOpen(true)}>
        Ajouter un livre
      </Button>
      <Button variant="contained" color="secondary" onClick={() => setDeleteAuthorModalOpen(true)}>
        Supprimer l'auteur
      </Button>

      {/* Modal pour ajouter un livre */}
      <Modal open={addBookModalOpen} onClose={() => setAddBookModalOpen(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6">Ajouter un nouveau livre</Typography>
          <input type="text" placeholder="Titre du livre" id="newBookTitle" />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              const title = (document.getElementById('newBookTitle') as HTMLInputElement).value;
              handleAddBook(title);
            }}
            sx={{ mt: 2 }}
          >
            Ajouter
          </Button>
          <Button variant="outlined" onClick={() => setAddBookModalOpen(false)} sx={{ mt: 2 }}>
            Annuler
          </Button>
        </Box>
      </Modal>

      {/* Modal pour confirmer la suppression de l'auteur */}
      <Modal open={deleteAuthorModalOpen} onClose={() => setDeleteAuthorModalOpen(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6">Êtes-vous sûr de vouloir supprimer cet auteur ?</Typography>
          <Button variant="contained" color="error" onClick={handleDeleteAuthor} sx={{ mr: 2 }}>
            Oui
          </Button>
          <Button variant="outlined" onClick={() => setDeleteAuthorModalOpen(false)}>
            Non
          </Button>
        </Box>
      </Modal>

      {/* Modal pour confirmer la suppression d'un livre */}
      <Modal open={!!deleteBookModalOpen} onClose={() => setDeleteBookModalOpen(null)}>
        <Box sx={modalStyle}>
          <Typography variant="h6">Êtes-vous sûr de vouloir supprimer ce livre ?</Typography>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              if (deleteBookModalOpen) handleDeleteBook(deleteBookModalOpen);
            }}
            sx={{ mr: 2 }}
          >
            Oui
          </Button>
          <Button variant="outlined" onClick={() => setDeleteBookModalOpen(null)}>
            Non
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AuthorDetailPage;

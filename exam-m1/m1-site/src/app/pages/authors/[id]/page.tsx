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

const AuthorDetailPage: React.FC = () => {
  const params = useParams();
  const { id: authorId } = params as { id: string };
  const router = useRouter();

  const [author, setAuthor] = useState<any>(null);
  const [books, setBooks] = useState<Book[]>([]);
  const [deleteAuthorModalOpen, setDeleteAuthorModalOpen] = useState(false);
  const [addBookModalOpen, setAddBookModalOpen] = useState(false);
  const [deleteBookModalOpen, setDeleteBookModalOpen] = useState<string | null>(null);
  const [editAuthorModalOpen, setEditAuthorModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!authorId) {
      setError("ID de l'auteur non spécifié.");
      return;
    }

    axios.get(`http://localhost:3001/authors/${authorId}`)
      .then((response) => {
        setAuthor(response.data);
        setError(null);
      })
      .catch((error) => {
        console.error('Error fetching author:', error);
        setError("Auteur non trouvé ou erreur lors de la récupération.");
      });

    axios.get(`http://localhost:3001/books/author/${authorId}`)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, [authorId]);

  const handleDeleteAuthor = async () => {
    try {
      await axios.delete(`http://localhost:3001/authors/${authorId}`);
      setDeleteAuthorModalOpen(false);
      router.push('/pages/authors');
    } catch (error) {
      console.error('Error deleting author:', error);
    }
  };

  const handleEditAuthor = async () => {
    const firstName = (document.getElementById('editAuthorFirstName') as HTMLInputElement).value;
    const lastName = (document.getElementById('editAuthorLastName') as HTMLInputElement).value;
    const imageUrl = (document.getElementById('editAuthorImageUrl') as HTMLInputElement).value;
    const biography = (document.getElementById('editAuthorBiography') as HTMLTextAreaElement).value;

    if (!firstName || !lastName || !authorId) {
      alert("Veuillez remplir tous les champs correctement.");
      return;
    }

    const updatedAuthor = {
      firstName,
      lastName,
      imageUrl,
      biography,
    };

    try {
      const response = await axios.put(`http://localhost:3001/authors/${authorId}`, updatedAuthor);
      setAuthor(response.data);
      setEditAuthorModalOpen(false);
    } catch (error) {
      console.error('Error updating author:', error);
    }
  };

  const handleAddBook = async () => {
    const title = (document.getElementById('newBookTitle') as HTMLInputElement).value;
    const yearPublished = Number((document.getElementById('newBookYear') as HTMLInputElement).value);
    const price = Number((document.getElementById('newBookPrice') as HTMLInputElement).value);

    if (!title || isNaN(yearPublished) || isNaN(price) || !authorId) {
      alert("Veuillez remplir tous les champs correctement.");
      return;
    }

    const newBook: Omit<Book, 'id'> = {
      title,
      yearPublished,
      price,
      authorId,
      average: 1
    };

    try {
      const response = await axios.post<Book>(`http://localhost:3001/books`, newBook);
      setBooks([...books, response.data]);
      setAddBookModalOpen(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error adding book:', error.response?.data || error.message);
      } else if (error instanceof Error) {
        console.error('Error adding book:', error.message);
      } else {
        console.error('Unexpected error adding book:', JSON.stringify(error, null, 2));
      }
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
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {author.imageUrl && (
        <>
          <Typography variant="h4" gutterBottom>{`${author.firstName} ${author.lastName}`}</Typography>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <img src={author.imageUrl} alt={`${author.firstName} ${author.lastName}`} style={{ width: '200px', height: 'auto', borderRadius: '10px' }} />
          </div>
        </>
      )}
      <Typography variant="body1" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', marginBottom: '20px' }}>{author.biography}</Typography>
      <Typography variant="h5" gutterBottom>Livres:</Typography>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {books.length > 0 ? (
          books.map((book) => (
            <li key={book.id} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <a href={`/pages/books/${book.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{book.title}</a> - {book.yearPublished} - ${book.price}
              <Button variant="contained" color="error" onClick={() => setDeleteBookModalOpen(book.id)} style={{ marginLeft: '10px' }}>
                Supprimer
              </Button>
            </li>
          ))
        ) : (
          <Typography variant="body1">Aucun livre disponible</Typography>
        )}
      </ul>
      
      <Button variant="contained" color="primary" onClick={() => setAddBookModalOpen(true)} style={{ margin: '10px' }}>
        Ajouter un livre
      </Button>
      <Button variant="contained" color="secondary" onClick={() => setDeleteAuthorModalOpen(true)} style={{ margin: '10px' }}>
        Supprimer l'auteur
      </Button>
      <Button variant="contained" color="primary" onClick={() => setEditAuthorModalOpen(true)} style={{ margin: '10px' }}>
        Modifier l'auteur
      </Button>
      <Modal open={addBookModalOpen} onClose={() => setAddBookModalOpen(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>Ajouter un nouveau livre</Typography>
          <div>
            <label htmlFor="newBookTitle">Titre du livre</label>
            <input type="text" id="newBookTitle" style={{ display: 'block', marginBottom: '20px', marginTop: '10px' }} className="border p-2 w-full rounded" />
            <label htmlFor="newBookYear">Année de publication</label>
            <input type="number" id="newBookYear" style={{ display: 'block', marginBottom: '20px', marginTop: '10px' }} className="border p-2 w-full rounded" />
            <label htmlFor="newBookPrice">Prix</label>
            <input type="number" id="newBookPrice" style={{ display: 'block', marginBottom: '20px', marginTop: '10px' }} className="border p-2 w-full rounded" />
          </div>
          <Button variant="contained" color="primary" onClick={handleAddBook} sx={{ mt: 2 }}>
            Ajouter
          </Button>
          <Button variant="outlined" onClick={() => setAddBookModalOpen(false)} sx={{ mt: 2 }}>
            Annuler
          </Button>
        </Box>
      </Modal>
      <Modal open={deleteAuthorModalOpen} onClose={() => setDeleteAuthorModalOpen(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>Êtes-vous sûr de vouloir supprimer cet auteur ?</Typography>
          <Button variant="contained" color="error" onClick={handleDeleteAuthor} sx={{ mr: 2 }}>
            Oui
          </Button>
          <Button variant="outlined" onClick={() => setDeleteAuthorModalOpen(false)}>
            Non
          </Button>
        </Box>
      </Modal>
      <Modal open={!!deleteBookModalOpen} onClose={() => setDeleteBookModalOpen(null)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>Êtes-vous sûr de vouloir supprimer ce livre ?</Typography>
          <Button variant="contained" color="error" onClick={() => deleteBookModalOpen && handleDeleteBook(deleteBookModalOpen)} sx={{ mr: 2 }}>
            Oui
          </Button>
          <Button variant="outlined" onClick={() => setDeleteBookModalOpen(null)}>
            Non
          </Button>
        </Box>
      </Modal>
      <Modal open={editAuthorModalOpen} onClose={() => setEditAuthorModalOpen(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>Modifier les informations de l'auteur</Typography>
          <div>
            <label htmlFor="editAuthorFirstName">Prénom</label>
            <input type="text" id="editAuthorFirstName" defaultValue={author.firstName} style={{ display: 'block', marginBottom: '20px', marginTop: '10px' }} className="border p-2 w-full rounded" />
            <label htmlFor="editAuthorLastName">Nom</label>
            <input type="text" id="editAuthorLastName" defaultValue={author.lastName} style={{ display: 'block', marginBottom: '20px', marginTop: '10px' }} className="border p-2 w-full rounded" />
            <label htmlFor="editAuthorImageUrl">URL de l'image</label>
            <input type="text" id="editAuthorImageUrl" defaultValue={author.imageUrl} style={{ display: 'block', marginBottom: '20px', marginTop: '10px' }} className="border p-2 w-full rounded" />
            <label htmlFor="editAuthorBiography">Biographie</label>
            <textarea id="editAuthorBiography" defaultValue={author.biography} style={{ display: 'block', marginBottom: '20px', marginTop: '10px' }} className="border p-2 w-full rounded" />
          </div>
          <Button variant="contained" color="primary" onClick={handleEditAuthor} sx={{ mt: 2 }}>
            Enregistrer
          </Button>
          <Button variant="outlined" onClick={() => setEditAuthorModalOpen(false)} sx={{ mt: 2 }}>
            Annuler
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AuthorDetailPage;

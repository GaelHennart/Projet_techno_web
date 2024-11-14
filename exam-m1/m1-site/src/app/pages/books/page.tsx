"use client";
import React, { useState, useEffect } from 'react';
import BookItem from '../../Components/Books/BookCard';
import SearchBar from '../../Components/SearchBar';
import AddBookModal from '../../Components/Books/BookModal';
import { Book } from '../../../../../m1-api/src/modules/books/books.model';
import axios from 'axios';
import BookSorter from '../../Components/Books/BookSorter';

const BooksPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [authors, setAuthors] = useState([]); // État pour stocker les auteurs
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Chargement des livres
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3001/books');
        const booksWithRatings = await Promise.all(
          response.data.map(async (book: Book) => {
            const reviewsResponse = await axios.get(`http://localhost:3001/reviews/book/${book.id}`);
            const reviews = reviewsResponse.data;
            const averageRating = reviews.length > 0
              ? reviews.reduce((sum: number, review: any) => sum + review.mark, 0) / reviews.length
              : 0;

            return { ...book, averageRating };
          })
        );
        setBooks(booksWithRatings);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);

  // Chargement des auteurs
  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get('http://localhost:3001/authors');
        setAuthors(response.data);
      } catch (error) {
        console.error('Error fetching authors:', error);
      }
    };

    fetchAuthors();
  }, []);

  // Filtrer les livres
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Ajouter un nouveau livre
  const handleAddBook = async (newBook: { title: string; yearPublished: number; price: number; authorId: string; averageRating: number }) => {
    try {
      const response = await axios.post('http://localhost:3001/books', newBook);
      const addedBook = response.data;
      setBooks((prevBooks) => [...prevBooks, addedBook]);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  // Gérer l'ouverture/fermeture du modal
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  // Mettre à jour le terme de recherche
  const handleSearch = (term: string) => setSearchTerm(term);

  // Gérer le tri des livres
  const handleSort = (sortedBooks: Book[]) => {
    setBooks(sortedBooks);
  };

  return (
    <>
      {/* Barre de recherche */}
      <div className="w-full max-w-md mx-auto">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Tri des livres */}
      <div className="w-full max-w-md mx-auto mt-4">
        <BookSorter books={filteredBooks} onSort={handleSort} />
      </div>

      {/* Message si aucun livre n'est trouvé */}
      {filteredBooks.length === 0 && searchTerm && (
        <p className="text-black mt-4 text-center">Aucun livre trouvé pour "{searchTerm}"</p>
      )}

      {/* Bouton pour ajouter un livre */}
      <button
        onClick={toggleModal}
        className="bg-blue-500 text-white p-2 rounded mt-4"
      >
        Ajouter un livre
      </button>

      {/* Liste des livres */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-items-center">
        {filteredBooks.map((book) => (
          <div key={book.id} className="flex flex-col items-center">
            <BookItem book={book} averageRating={book.averageRating} />
          </div>
        ))}
      </div>

      {/* Modale pour ajouter un livre */}
      <AddBookModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onAddBook={(newBook) => handleAddBook({
          ...newBook,
          title: newBook.title,
          yearPublished: newBook.yearPublished,
          price: newBook.price,
          authorId: newBook.authorId,
          averageRating: 0,
        })}
        authors={authors} // Passer les auteurs à AddBookModal
      />
    </>
  );
};

export default BooksPage;

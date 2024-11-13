"use client";
import React, { useState, useEffect } from 'react';
import BookItem from '../../Components/Books/BookCard';
import SearchBar from '../../Components/SearchBar';
import AddBookModal from '../../Components/Books/BookModal';
import { Book } from '../../../../../m1-api/src/modules/books/books.model';

import axios from 'axios';

const BooksPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initial loading of books from the API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);

  // Filter books based on search term
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to add a new book and post it to the API
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

  // Toggle modal open/close state
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  // Update search term
  const handleSearch = (term: string) => setSearchTerm(term);

  return (
    <>
      {/* Search Bar */}
      <div className="w-full max-w-md mx-auto">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Message if no books found */}
      {filteredBooks.length === 0 && searchTerm && (
        <p className="text-black mt-4 text-center">Aucun livre trouvé pour "{searchTerm}"</p>
      )}

      {/* Button to add a book */}
      <button
        onClick={toggleModal}
        className="bg-blue-500 text-white p-2 rounded mt-4"
      >
        Ajouter un livre
      </button>

      {/* List of books */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-items-center">
        {filteredBooks.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>

      {/* Add Book Modal */}
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
              })} authors={[]}      />
    </>
  );
};

export default BooksPage;

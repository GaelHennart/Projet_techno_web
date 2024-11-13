"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "../../components/books/bookCard";
import SearchBar from "../../components/searchBar";
import BookSorter from "../../components/books/bookSorter";
import AddBookModal from "../../components/books/bookModal";

interface Author {
  id: string;
  firstName: string;
  lastName: string;
}

interface Book {
  id: string;
  book_image: string;
  title: string;
  authorId: string;
  publishDate: string;
  rating: number;
}

const BooksPage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/books');
      setBooks(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des livres:", error);
    }
  };

  const fetchAuthors = async () => {
    try {
      const response = await axios.get('http://localhost:3001/authors');
      setAuthors(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des auteurs:", error);
    }
  };

  const handleAddBook = async (newBook: { title: string; publication_date: string; authorId: string; book_image: string }) => {
    try {
      const response = await axios.post('http://localhost:3001/books', newBook);
      const addedBook = response.data;
      setBooks((prevBooks) => [...prevBooks, addedBook]);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Erreur lors de l\'ajout du livre:', error);
    }
  };

  const getAuthorById = (authorId: string) => {
    const author = authors.find((author) => author.id === authorId);
    return author ? `${author.firstName} ${author.lastName}` : "Auteur inconnu";
  };

  useEffect(() => {
    fetchBooks();
    fetchAuthors();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (term: string) => setSearchTerm(term);
  const handleSort = (sorted: Book[]) => setBooks(sorted);
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <>
      <section className="p-4 mt-5 flex justify-center">
        <SearchBar onSearch={handleSearch} />
      </section>
      <section className="p-4 mt-5 flex justify-start">
          {/* <BookSorter books={books} onSort={handleSort} /> */}
        <button onClick={toggleModal} className="bg-blue-500 text-white p-2 rounded mt-4">Ajouter un livre</button>
      </section>
      <section className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-items-center">
        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            book={{
              ...book,
              author: getAuthorById(book.authorId)
            }}
          />
        ))}
      </section>
      <AddBookModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onAddBook={(newBook) =>
          handleAddBook({
            ...newBook,
            title: newBook.title,
            publication_date: newBook.publication_date,
            authorId: newBook.authorId,
            book_image: newBook.book_image,
          })
        }
        authors={authors}
      />
    </>
  );
};

export default BooksPage;

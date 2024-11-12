"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "../../components/books/bookCard";
import SearchBar from "../../components/searchBar";
import BookSorter from "../../components/books/bookSorter";
import BookModal from "../../components/books/bookModal";

interface Book {
  id: string;
  book_image: string;
  title: string;
  author: string;
  publishDate: string;
  rating: number;
}

const BooksPage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortedBooks, setSortedBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/books');
      setBooks(response.data);
      setSortedBooks(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des livres:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const filteredBooks = sortedBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleSort = (sorted: Book[]) => {
    setSortedBooks(sorted);
  };

  const handleAddBook = (newBook: { title: string; publication_date: Date; author: string; book_image: string }) => {
    const newId = (books.length + 1).toString();
    const newBookWithId: Book = {
      id: newId,
      title: newBook.title,
      author: newBook.author,
      publishDate: newBook.publication_date.toISOString(),
      book_image: newBook.book_image,
      rating: 0
    };
    setBooks((prevBooks) => {
      const updatedBooks = [...prevBooks, newBookWithId];
      setSortedBooks(updatedBooks);
      return updatedBooks;
    });
  };

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <>
      <section className="p-4 mt-5 flex justify-center">
        <SearchBar onSearch={handleSearch} />
      </section>
      <section className="p-4 mt-5 flex justify-start">
        <BookSorter books={books} onSort={handleSort} />
        <button onClick={toggleModal} className="bg-blue-500 text-white p-2 rounded mt-4">Ajouter un livre</button>
      </section>
      <section className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-items-center">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </section>
      <BookModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onAddBook={handleAddBook}
      />
    </>
  );
};

export default BooksPage;

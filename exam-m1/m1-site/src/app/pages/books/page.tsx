"use client";
import React, { useState } from "react";
import BookCard from "../../components/books/bookCard";
import SearchBar from "../../components/searchBar";
import BookSorter from "../../components/books/BookSorter";
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
  const initialBooks: Book[] = [
    { id: "1", book_image: "/images/salameche.png", title: "Salameche", author: "Gaël", publishDate: "Existe depuis toujours", rating: 4.5 },
    { id: "2", book_image: "/images/pikachu.webp", title: "Pikachu", author: "Sacha", publishDate: "Existe depuis toujours", rating: 4.5 },
  ];

  const [books, setBooks] = useState<Book[]>(initialBooks); // Initialiser les livres avec initialBooks
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortedBooks, setSortedBooks] = useState<Book[]>(initialBooks); // Books triés

  // Fonction pour filtrer les livres en fonction du terme de recherche
  const filteredBooks = sortedBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fonction de mise à jour du terme de recherche
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  // Fonction pour gérer le tri des livres
  const handleSort = (sorted: Book[]) => {
    setSortedBooks(sorted);
  };

  // Fonction pour ajouter un livre
  const handleAddBook = (newBook: { title: string; publication_date: Date; author: string; book_image: string }) => {
    const newId = (books.length + 1).toString(); // Générer un ID unique
    const newBookWithId: Book = { 
      id: newId, 
      title: newBook.title, 
      author: newBook.author, 
      publishDate: newBook.publication_date.toISOString(), 
      book_image: newBook.book_image, // Ajouter l'image téléchargée
      rating: 0 // Note par défaut
    };
    setBooks((prevBooks) => {
      const updatedBooks = [...prevBooks, newBookWithId];
      setSortedBooks(updatedBooks); // Assurez-vous que la liste triée est mise à jour avec le nouvel livre
      return updatedBooks;
    });
  };

  // Fonction pour ouvrir/fermer la modale
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

"use client";
import React, { useState } from 'react';
import AuthorItem from '../../Components/AuthorCard';
import SearchBar from '../../Components/SearchBar';
import AddAuthorModal from '../../Components/AuthorModale';

interface Author {
  id: number;
  name: string;
  photo: string;
  bookCount: number;
  averageRating: number;
}

const initialAuthors: Author[] = [
  {
    id: 1,
    name: "Victor Hugo",
    photo: "/images/victor_hugo.jpg",
    bookCount: 12,
    averageRating: 4.5,
  },
  {
    id: 2,
    name: "George Orwell",
    photo: "/images/george_orwell.jpg",
    bookCount: 5,
    averageRating: 4.7,
  },
  // Ajoutez d'autres auteurs si nécessaire
];

const AuthorsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [authors, setAuthors] = useState<Author[]>(initialAuthors);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtrer les auteurs en fonction du terme de recherche
  const filteredAuthors = authors.filter((author) =>
    author.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fonction pour ajouter un nouvel auteur
  const handleAddAuthor = (newAuthor: { name: string; photo: string; bookCount: number; averageRating: number }) => {
    const newId = authors.length ? authors[authors.length - 1].id + 1 : 1; // Assigner un id unique
    const newAuthorWithId = { ...newAuthor, id: newId };
    setAuthors((prevAuthors) => [...prevAuthors, newAuthorWithId]);
    setIsModalOpen(false); // Fermer la modale après l'ajout
  };

  // Fonction pour ouvrir/fermer la modale
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  // Fonction de mise à jour du terme de recherche
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <>
      {/* Barre de recherche */}
      <div className="w-full max-w-md mx-auto">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Message si aucun auteur n'est trouvé */}
      {filteredAuthors.length === 0 && searchTerm && (
        <p className="text-white mt-4">Aucun auteur trouvé pour "{searchTerm}"</p>
      )}

      {/* Bouton pour ajouter un auteur */}
      <button
        onClick={toggleModal}
        className="bg-blue-500 text-white p-2 rounded mt-4"
      >
        Ajouter un auteur
      </button>

      {/* Liste des auteurs */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-items-center">
        {filteredAuthors.map((author) => (
          <AuthorItem key={author.id} author={author} />
        ))}
      </div>

      {/* Modale d'ajout d'auteur */}
      <AddAuthorModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onAddAuthor={(newAuthor) => handleAddAuthor({ ...newAuthor, averageRating: 0 })}
      />
    </>
  );
};

export default AuthorsPage;
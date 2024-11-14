"use client";
import React, { useState, useEffect } from 'react';
import AuthorItem from '../../Components/Authors/AuthorCard';
import SearchBar from '../../Components/SearchBar';
import AddAuthorModal from '../../Components/Authors/AuthorModale';
import { Author } from '../../../../../m1-api/src/modules/authors/author.model';
import axios from 'axios';

const AuthorsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [authors, setAuthors] = useState<Author[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Chargement initial des auteurs depuis l'API
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

  // Filtrer les auteurs en fonction du terme de recherche
  const filteredAuthors = authors.filter((author) =>
    `${author.firstName} ${author.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fonction pour ajouter un nouvel auteur et l'envoyer à l'API
  const handleAddAuthor = async (newAuthor: { firstName: string; lastName:string; biography: string; averageRating: number; bookCount: number }) => {
    try {
      const response = await axios.post('http://localhost:3001/authors', newAuthor);
      // Récupère la liste complète des auteurs après ajout pour s'assurer que tout est bien synchronisé
      const updatedAuthorsResponse = await axios.get('http://localhost:3001/authors');
      setAuthors(updatedAuthorsResponse.data); // Met à jour la liste avec les données les plus récentes
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error adding author:', error);
    }
  };

  // Fonction pour ouvrir/fermer la modale
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  // Fonction de mise à jour du terme de recherche
  const handleSearch = (term: string) => setSearchTerm(term);

  return (
    <>
      {/* Barre de recherche */}
      <div className="w-full max-w-md mx-auto">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Message si aucun auteur n'est trouvé */}
      {filteredAuthors.length === 0 && searchTerm && (
        <p className="text-black mt-4 text-center">Aucun auteur trouvé pour "{searchTerm}"</p>
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
        onAddAuthor={(newAuthor) =>
          handleAddAuthor({
            ...newAuthor,
            firstName: newAuthor.firstName,
            lastName: newAuthor.lastName,
            averageRating: 0,
            bookCount: 0,
          })
        }
      />
    </>
  );
};

export default AuthorsPage;

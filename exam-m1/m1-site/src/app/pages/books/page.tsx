"use client";
import React, { useState } from 'react';
import BookCard from '../../Components/BookCard';
import SearchBar from '../../Components/SearchBar';


const BooksPage = () => {
    const exampleBook = {
        coverUrl: "URL_DE_L_IMAGE_DU_LIVRE",
        title: "Titre du Livre",
        author: "Nom de l'Auteur",
        description: "Description du Livre",
        publishDate: "Date de Parution",
        rating: 4.5
    };
    const [searchTerm, setSearchTerm] = useState('');
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
            <section className="p-4 mt-5 flex justify-center">
                <BookCard book={exampleBook} />
            </section>
        
        </>
    );
};

export default BooksPage;

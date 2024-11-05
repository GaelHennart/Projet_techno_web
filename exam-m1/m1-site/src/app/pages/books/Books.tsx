import React from 'react';
import BookCard from '../../Components/BookCard';

const BooksPage = () => {
    const exampleBook = {
        coverUrl: "URL_DE_L_IMAGE_DU_LIVRE",
        title: "Titre du Livre",
        author: "Nom de l'Auteur",
        description: "Description du Livre",
        publishDate: "Date de Parution",
        rating: 4.5
    };

    return (
        <>
            <section className="p-4 mt-5 flex justify-center">
                <BookCard book={exampleBook} />
            </section>
        </>
    );
};

export default BooksPage;

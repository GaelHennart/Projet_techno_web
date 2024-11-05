import React from 'react';

interface Book {
    title: string;
    author: string;
    description: string;
}

interface BookCardProps {
    book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
    return (
        <div>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <p>{book.description}</p>
        </div>
    );
};

export default BookCard;
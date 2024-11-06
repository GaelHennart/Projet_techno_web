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
    const randomColor = 'bg-blue-500'; // Define a default color or implement a function to generate a random color
    return (
        <div className={`mt-0 rounded-lg shadow-lg p-4 w-[215px] h-[330px] hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-xl ${randomColor}`}>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <p>{book.description}</p>
        </div>
    );
};

export default BookCard;
"use client";

import React from 'react';
import Link from 'next/link';
import '../../styles/global.css';
import { Book } from '../../../../../m1-api/src/modules/books/books.model';

const BookCard: React.FC<{ book: Book, averageRating: number }> = ({ book, averageRating }) => {
    return (
        <Link
            key={book.id}
            href={`/pages/books/${book.id}`}
            className="mt-0 rounded-lg shadow-lg p-4 w-[215px] h-[330px] hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-xl bg-blue-200"
        >
            {/* Book Cover Image */}
            <div className="h-40 mb-2">
                <img
                    src={book.book_image}
                    alt={`Couverture de ${book.title}`}
                    className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            {/* Title */}
            <div className="h-10 overflow-hidden mb-2">
                <h3
                    className="text-sm font-bold text-gray-800 line-clamp-2"
                    title={book.title}
                >
                    {book.title}
                </h3>
            </div>

            {/* Book Details */}
            <div className="flex flex-col justify-between h-20">
                {/* Author Information */}
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Pacifico, cursive' }}>
                    Par {book.author ? `${book.author.firstName} ${book.author.lastName}` : 'Auteur Inconnu'}
                </p>

                {/* Publication Year */}
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Pacifico, cursive' }}>
                    Publié le : {book.yearPublished}
                </p>

                {/* Average Rating */}
                <div className="flex items-center" style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
                    <span className="text-yellow-500 font-bold text-lg mr-1">{averageRating.toFixed(1)}</span>
                    <span className="text-sm text-gray-500">/ 5</span>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;

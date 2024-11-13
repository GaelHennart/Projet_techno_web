"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../styles/global.css';

interface Book {
  id: string;
  book_image: string;
  title: string;
  author: string; // L'auteur est maintenant une chaîne de caractères complète
  publishDate: string;
  rating: number;
}

const BookCard: React.FC<{ book: Book }> = ({ book }) => {

  return (
    <Link
      key={book.id}
      href={`/books/${book.id}`}
      className={`mt-0 rounded-lg shadow-lg p-4 w-[215px] h-[330px] hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-xl`}
    >
      <div className="relative w-full h-40 overflow-hidden mb-4">
        <Image
          src={book.book_image}
          alt={book.title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="h-10 overflow-hidden mb-2">
        <h3
          className="text-sm font-bold text-gray-800 line-clamp-2"
          title={book.title}
        >
          {book.title}
        </h3>
      </div>
      <div className="flex flex-col justify-between h-20">
        <p className="text-sm text-gray-600" style={{ fontFamily: 'Pacifico, cursive' }}>
          Par {book.author}
        </p>
        <p className="text-sm text-gray-600" style={{ fontFamily: 'Pacifico, cursive' }}>
          Publié le : {book.publishDate}
        </p>
        <div className="flex items-center" style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
          <span className="text-yellow-500 font-bold text-lg mr-1">{book.rating}</span>
          <span className="text-sm text-gray-500">/ 5</span>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;

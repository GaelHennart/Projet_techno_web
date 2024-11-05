import React from 'react';
import Image from 'next/image';

interface Book {
  image_livre: string;
  title: string;
  author_name: string;
  publishDate: string;
  rating: number;
}

// Définir une liste de couleurs
const colors = [
  'bg-red-200',
  'bg-blue-200',
  'bg-green-200',
  'bg-yellow-200',
  'bg-purple-200',
];

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  // Générer un index aléatoire
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className={`mt-0 rounded-lg shadow-md p-4 w-[215px] h-[330px] ${randomColor}`}>
      <div className="relative w-full h-40 overflow-hidden mb-4">
        <Image
          src={book.image_livre}
          alt={book.title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{book.title}</h3>
      <p className="text-sm text-gray-600">Par {book.author_name}</p>
      <p className="text-sm text-gray-600">Publié le : {book.publishDate}</p>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500 font-bold text-lg mr-1">{book.rating}</span>
        <span className="text-sm text-gray-500">/ 5</span>
      </div>
    </div>
  );
};

export default BookCard;

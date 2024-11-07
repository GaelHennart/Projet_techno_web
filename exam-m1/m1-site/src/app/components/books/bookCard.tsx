import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface Book {
  id: string;  // Assure-toi d'avoir un identifiant unique pour chaque livre
  book_image: string;
  title: string;
  author: string;
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
  const [color, setColor] = useState('');

  useEffect(() => {
    // Vérifie si une couleur est déjà stockée pour ce livre
    const storedColor = localStorage.getItem(`bookColor-${book.id}`);
    if (storedColor) {
      setColor(storedColor);
    } else {
      // Sinon, génère une nouvelle couleur aléatoire et la stocke
      const newColor = colors[Math.floor(Math.random() * colors.length)];
      localStorage.setItem(`bookColor-${book.id}`, newColor);
      setColor(newColor);
    }
  }, [book.id]);

  const pathname = usePathname(); // Récupération du chemin actuel
  const isBookPage = pathname.includes('/books/id'); // Utilisation correcte de pathname

  return (
    <Link key={book.id} href={`/books/${book.id}`} className={`mt-0 rounded-lg shadow-lg p-4 w-[215px] h-[330px] hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-xl ${color}`}>
      <div className="relative w-full h-40 overflow-hidden mb-4">
        <Image
          src={book.book_image}
          alt={book.title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>{book.title}</h3>
      <p className="text-sm text-gray-600" style={{ fontFamily: 'Pacifico, cursive' }}>Par {book.author}</p>
      <p className="text-sm text-gray-600" style={{ fontFamily: 'Pacifico, cursive' }}>Publié le : {book.publishDate}</p>
      <div className="flex items-center mt-2" style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
        <span className="text-yellow-500 font-bold text-lg mr-1">{book.rating}</span>
        <span className="text-sm text-gray-500">/ 5</span>
      </div>
    </Link>
  );
};

export default BookCard;

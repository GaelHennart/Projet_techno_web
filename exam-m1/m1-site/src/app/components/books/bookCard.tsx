import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface Book {
  id: string;
  book_image: string;
  title: string;
  author: string;
  publishDate: string;
  rating: number;
}

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
    const storedColor = localStorage.getItem(`bookColor-${book.id}`);
    if (storedColor) {
      setColor(storedColor);
    } else {
      const newColor = colors[Math.floor(Math.random() * colors.length)];
      localStorage.setItem(`bookColor-${book.id}`, newColor);
      setColor(newColor);
    }
  }, [book.id]);

  const pathname = usePathname();
  const isBookPage = pathname.includes('/books/[id]');

  return (
    <Link key={book.id} href={`/pages/books/${book.id}`} className={`mt-0 rounded-lg shadow-lg p-4 w-[215px] h-[330px] hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-xl ${color}`}>
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
          title={book.title} // Affiche le titre complet en infobulle
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {book.title}
        </h3>
      </div>
      <div className="flex flex-col justify-between h-20">
        <p className="text-sm text-gray-600" style={{ fontFamily: 'Pacifico, cursive' }}>Par {book.author}</p>
        <p className="text-sm text-gray-600" style={{ fontFamily: 'Pacifico, cursive' }}>Publié le : {book.publishDate}</p>
        <div className="flex items-center" style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
          <span className="text-yellow-500 font-bold text-lg mr-1">{book.rating}</span>
          <span className="text-sm text-gray-500">/ 5</span>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;

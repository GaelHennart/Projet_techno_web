import React from 'react';

interface Book {
  coverUrl: string;
  title: string;
  author: string;
  publishDate: string;
  rating: number;
}

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4  w-[215px] h-[310px]">
      <img
        src={book.coverUrl}
        alt={book.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-bold text-gray-800">{book.title}</h3>
      <p className="text-sm text-gray-600">Par {book.author}</p>
      <p className="text-sm text-gray-600">Publié le : {book.publishDate}</p>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500 font-bold text-lg mr-1">{book.rating}</span>
        <span className="text-sm text-gray-500">/ 5</span>
      </div>
    </div>
  );
};

export default BookCard;

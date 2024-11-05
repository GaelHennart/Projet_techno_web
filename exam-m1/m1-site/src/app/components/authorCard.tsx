import React from 'react';

interface Author {
  author: string;
}

const BookCard: React.FC<{ book: Author }> = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4  w-[215px] h-[310px]">
        <h3 className="text-xl font-bold text-gray-800">{book.author}</h3>
    </div>
  );
};

export default BookCard;

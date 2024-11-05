// app/Components/AuthorItem.tsx
import React from 'react';

interface Author {
  id: number;
  name: string;
  photo: string;
  bookCount: number;
  averageRating: number;
}

interface AuthorItemProps {
  author: Author;
}

const AuthorItem: React.FC<AuthorItemProps> = ({ author }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <img src={author.photo} alt={author.name} className="w-full h-auto rounded-md" />
      <h2 className="text-white text-xl mt-2">{author.name}</h2>
      <p className="text-gray-400">Livres : {author.bookCount}</p>
      <p className="text-gray-400">Note moyenne : {author.averageRating}</p>
    </div>
  );
};

export default AuthorItem;

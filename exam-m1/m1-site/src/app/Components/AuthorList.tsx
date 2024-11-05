import React from 'react';
import AuthorItem from './AuthorItem';

// Définir les props pour le composant AuthorList
interface Author {
  id: number;
  name: string;
  photo: string;
  bookCount: number;
  averageRating: number;
}

interface AuthorListProps {
  authors: Author[];
}

const AuthorList: React.FC<AuthorListProps> = ({ authors }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {authors.map(author => (
        <AuthorItem key={author.id} author={author} />
      ))}
    </div>
  );
};

export default AuthorList;

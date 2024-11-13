import React from 'react';
import AuthorItem from './AuthorCard';
import { Author } from '../../../../../m1-api/src/modules/authors/author.model';

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

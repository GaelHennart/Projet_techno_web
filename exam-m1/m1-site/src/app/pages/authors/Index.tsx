// app/pages/authors/index.tsx
import React from 'react';
import AuthorItem from '../../Components/AuthorItem'; 

interface Author {
  id: number;
  name: string;
  photo: string;
  bookCount: number;
  averageRating: number;
}

const authors: Author[] = [
  {
    id: 1,
    name: "Victor Hugo",
    photo: "/images/victor_hugo.jpg",
    bookCount: 12,
    averageRating: 4.5,
  },
  {
    id: 2,
    name: "George Orwell",
    photo: "/images/george_orwell.jpg",
    bookCount: 5,
    averageRating: 4.7,
  },
  // Ajoutez d'autres auteurs si nécessaire
];

const AuthorsPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-white text-2xl mb-4">Liste des Auteurs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {authors.map((author) => (
          <AuthorItem key={author.id} author={author} />
        ))}
      </div>
    </div>
  );
};

export default AuthorsPage;

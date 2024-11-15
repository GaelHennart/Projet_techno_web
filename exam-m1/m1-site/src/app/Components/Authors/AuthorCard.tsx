import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Author } from '../../../../../m1-api/src/modules/authors/author.model';

const AuthorItem: React.FC<{ author: Author }> = ({ author }) => {
  const pathname = usePathname(); // Récupération du chemin actuel
  const isAuthorPage = pathname.includes('/authors/[id]'); // Utilisation correcte de pathname

  return (
    <Link href={`/pages/authors/${author.id}`}>
      <div
        className={`mt-0 rounded-lg shadow-lg p-4 w-[215px] h-[330px] hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-xl bg-blue-200`}
      >
        {/* Container pour l'image avec largeur et hauteur fixes */}
        <div className="w-full h-[200px] overflow-hidden rounded-md">
          <img
            src={author.imageUrl}
            alt={`${author.firstName} ${author.lastName}`}
          />
        </div>
        {author.firstName} {author.lastName}
        <p className="text-gray-400">Livres : {author.bookCount}</p>
        <p className="text-gray-400">Note moyenne : {author.averageRating}</p>
      </div>
    </Link>
  );
};

export default AuthorItem;

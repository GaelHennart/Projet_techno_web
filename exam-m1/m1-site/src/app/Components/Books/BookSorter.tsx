import React, { useState } from 'react';
import { FaSortAlphaDown, FaSortAlphaUp, FaUser, FaStar } from 'react-icons/fa';
import { IconContext } from 'react-icons';

interface Book {
  id: string;
  title: string;
  author: string;
  publishDate: string;
  rating: number;
  book_image: string;
}

interface BookSorterProps {
  books: Book[];
  onSort: (sortedBooks: Book[]) => void; // Nouvelle prop pour transmettre les livres triés
}

const BookSorter: React.FC<BookSorterProps> = ({ books, onSort }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const sortBooks = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  
    let sorted = [...books];
    switch (option) {
      case 'title-asc':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'author':
        sorted.sort((a, b) => {
          const authorA = a.author || '';  // Si author est undefined, utiliser une chaîne vide
          const authorB = b.author || '';  // Idem pour b.author
          return authorA.localeCompare(authorB);
        });
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
  
    onSort(sorted); // Transmet les livres triés à BooksPage
  };
  

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full max-w-4xl mx-auto mt-4">
      <div className="relative inline-block text-left mb-4">
        <button
          onClick={toggleMenu}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          Trier par {selectedOption ? `: ${selectedOption}` : ''}
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
            <IconContext.Provider value={{ className: 'mr-2' }}>
              <div className="py-1">
                <button onClick={() => sortBooks('title-asc')}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <FaSortAlphaDown />
                  Titre (A-Z)
                </button>
                <button onClick={() => sortBooks('title-desc')}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <FaSortAlphaUp />
                  Titre (Z-A)
                </button>
                <button onClick={() => sortBooks('author')} 
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <FaUser />
                  Auteur
                </button>
                <button onClick={() => sortBooks('rating')}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <FaStar />
                  Note
                </button>
              </div>
            </IconContext.Provider>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookSorter;

import React, { useState } from 'react';

interface AddBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBook: (book: {
      price: number;
      yearPublished: number; title: string; authorId: string; book_image: string 
}) => void;
  authors: { id: string; firstName: string; lastName: string }[];
}

const AddBookModal: React.FC<AddBookModalProps> = ({ isOpen, onClose, onAddBook, authors }) => {
  const [title, setTitle] = useState('');
  const [publication_date, setPublicationDate] = useState('');
  const [author, setAuthor] = useState('');
  const yearPublished = new Date(publication_date).getFullYear();
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const authorId = authors.find((a) => `${a.firstName} ${a.lastName}` === author)?.id;

    if (authorId) {
      onAddBook({
        title, yearPublished, authorId, book_image: imageURL,
        price: 0
      });
      onClose();
    } else {
      alert("Veuillez sélectionner un auteur valide.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-80">
        <h2 className="text-xl mb-4">Ajouter un Livre</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2">Titre</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 w-full rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="publication_date" className="block mb-2">Date de publication</label>
            <input
              type="date"
              id="publication_date"
              value={publication_date}
              onChange={(e) => setPublicationDate(e.target.value)}
              className="border p-2 w-full rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="block mb-2">Auteur</label>
            <select
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border p-2 w-full rounded"
            >
              <option value="">Sélectionnez un auteur</option>
              {authors.map((author) => (
                <option key={author.id} value={`${author.firstName} ${author.lastName}`}>
                  {author.firstName} {author.lastName}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="imageURL" className="block mb-2">URL de l'image du livre</label>
            <input
              type="text"
              id="imageURL"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              className="border p-2 w-full rounded" />
          </div>
          <div className="flex justify-between">
            <button type="button" onClick={onClose} className="bg-gray-300 p-2 rounded">
              Annuler
            </button>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBookModal;

// app/Components/AddAuthorModal.tsx
import React, { useState } from 'react';

interface AddAuthorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddAuthor: (author: { name: string; photo: string; bookCount: number; averageRating: number }) => void;
}

const AddAuthorModal: React.FC<AddAuthorModalProps> = ({ isOpen, onClose, onAddAuthor }) => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [bookCount, setBookCount] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddAuthor({ name, photo, bookCount, averageRating });
    onClose(); // Fermer la modale après l'ajout
  };

  if (!isOpen) return null; // Si la modale n'est pas ouverte, ne rien afficher

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-80">
        <h2 className="text-xl mb-4">Ajouter un Auteur</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Nom</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="photo" className="block mb-2">Photo URL</label>
            <input
              type="text"
              id="photo"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="border p-2 w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bookCount" className="block mb-2">Nombre de livres</label>
            <input
              type="number"
              id="bookCount"
              value={bookCount}
              onChange={(e) => setBookCount(Number(e.target.value))}
              className="border p-2 w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="averageRating" className="block mb-2">Note moyenne</label>
            <input
              type="number"
              id="averageRating"
              value={averageRating}
              onChange={(e) => setAverageRating(Number(e.target.value))}
              className="border p-2 w-full rounded"
              min="0"
              max="5"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 p-2 rounded"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAuthorModal;

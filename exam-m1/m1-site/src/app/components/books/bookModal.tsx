import React, { useState } from 'react';

interface AddBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBook: (book: { title: string; publication_date: Date; author: string; book_image: string }) => void;
}

const AddBookModal: React.FC<AddBookModalProps> = ({ isOpen, onClose, onAddBook }) => {
  const [title, setTitle] = useState('');
  const [publication_date, setPublicationDate] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState<File | null>(null); // Nouvelle state pour l'image

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Convertir publication_date en objet Date
    const publicationDate = new Date(publication_date);

    // Convertir l'image en URL (si une image est choisie)
    const imageURL = image ? URL.createObjectURL(image) : "/images/default.png"; // Si aucune image n'est choisie, une image par défaut

    // Appel de la fonction onAddBook avec les données du livre
    onAddBook({ title, publication_date: publicationDate, author, book_image: imageURL });
    onClose(); // Fermer la modale après l'ajout
  };

  if (!isOpen) return null; // Si la modale n'est pas ouverte, ne rien afficher

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
              className="border p-2 w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="publication_date" className="block mb-2">Date de publication</label>
            <input
              type="date"
              id="publication_date"
              value={publication_date}
              onChange={(e) => setPublicationDate(e.target.value)}
              className="border p-2 w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="block mb-2">Auteur</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border p-2 w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block mb-2">Image du livre</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
              className="border p-2 w-full rounded"
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

export default AddBookModal;
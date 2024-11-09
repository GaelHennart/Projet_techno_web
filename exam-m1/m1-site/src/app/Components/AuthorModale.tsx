// app/Components/AddAuthorModal.tsx
import React, { useState } from 'react';

interface AddAuthorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddAuthor: (author: { name: string; photo: string; bookCount: number }) => void;
}

const AddAuthorModal: React.FC<AddAuthorModalProps> = ({ isOpen, onClose, onAddAuthor }) => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [bookCount, setBookCount] = useState(0);

  // États pour afficher les erreurs
  const [nameError, setNameError] = useState('');
  const [bookCountError, setBookCountError] = useState('');

  // Fonction pour gérer le changement de fichier
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  // Validation des champs
  const validateForm = () => {
    let valid = true;

    // Réinitialiser les erreurs
    setNameError('');
    setBookCountError('');

    // Validation du nom
    if (name.trim() === '') {
      setNameError('Le nom de l\'auteur est requis');
      valid = false;
    }

    // Validation du nombre de livres
    if (bookCount <= 0) {
      setBookCountError('Le nombre de livres doit être supérieur à 0');
      valid = false;
    }

    return valid;
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Si tout est valide, appeler la fonction pour ajouter l'auteur
      onAddAuthor({ name, photo: photo ? URL.createObjectURL(photo) : '', bookCount });

      // Réinitialiser les champs
      setName('');
      setPhoto(null);
      setBookCount(0);
    }
  };

  // Si la modale n'est pas ouverte, ne rien afficher
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-80">
        <h2 className="text-xl mb-4">Ajouter un Auteur</h2>
        <form onSubmit={handleSubmit}>
          {/* Champ nom */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Nom</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full rounded"
            />
            {nameError && <p className="text-red-500 text-sm">{nameError}</p>} {/* Message d'erreur */}
          </div>

          {/* Champ photo */}
          <div className="mb-4">
            <label htmlFor="photo" className="block mb-2">Photo</label>
            <input
              type="file"
              id="photo"
              onChange={(e) => handleFileChange(e)}
              className="border p-2 w-full rounded"
            />
            {photo && (
              <div className="mt-2">
                <img src={URL.createObjectURL(photo)} alt="Preview" className="w-full h-32 object-cover" />
              </div>
            )}
          </div>

          {/* Champ nombre de livres */}
          <div className="mb-4">
            <label htmlFor="bookCount" className="block mb-2">Nombre de livres</label>
            <input
              type="number"
              id="bookCount"
              value={bookCount}
              onChange={(e) => setBookCount(Number(e.target.value))}
              className="border p-2 w-full rounded"
            />
            {bookCountError && <p className="text-red-500 text-sm">{bookCountError}</p>} {/* Message d'erreur */}
          </div>

          {/* Boutons d'action */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose} // Assurez-vous d'appeler `onClose` ici pour fermer la modale si l'utilisateur annule
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

// app/Components/AddAuthorModal.tsx
import React, { useState } from 'react';

interface AddAuthorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddAuthor: (author: { firstName: string; lastName: string; photo: string }) => void;
}

const AddAuthorModal: React.FC<AddAuthorModalProps> = ({ isOpen, onClose, onAddAuthor }) => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);

  // États pour afficher les erreurs
  const [nameError, setNameError] = useState('');

  // Fonction pour gérer le changement de fichier
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  // États pour les champs firstName et lastName
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // États pour afficher les erreurs
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  // Validation des champs
  const validateForm = () => {
    let valid = true;

    // Réinitialiser les erreurs
    setFirstNameError('');
    setLastNameError('');

    // Validation du prénom
    if (firstName.trim() === '') {
      setFirstNameError('Le prénom de l\'auteur est requis');
      valid = false;
    }

    // Validation du nom
    if (lastName.trim() === '') {
      setLastNameError('Le nom de l\'auteur est requis');
      valid = false;
    }

    return valid;
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Si tout est valide, appeler la fonction pour ajouter l'auteur
      onAddAuthor({ firstName, lastName, photo: photo ? URL.createObjectURL(photo) : '' });

      // Réinitialiser les champs
      setFirstName('');
      setLastName('');
      setPhoto(null);
    }
  };

  // Si la modale n'est pas ouverte, ne rien afficher
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-80">
        <h2 className="text-xl mb-4">Ajouter un Auteur</h2>
    <form onSubmit={handleSubmit}>
        {/* Champ prénom */}
          <label htmlFor="firstName" className="block mb-2">Prénom</label>
            <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border p-2 w-full rounded"
          />
          {firstNameError && <p className="text-red-500 text-sm">{firstNameError}</p>} {/* Message d'erreur */}

        {/* Champ nom */}
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2">Nom</label>
            <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border p-2 w-full rounded"
          />
          {lastNameError && <p className="text-red-500 text-sm">{lastNameError}</p>} {/* Message d'erreur */}
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

"use client";
import React, { useState } from 'react';
import NvabarItem from './navbarItem';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-inherit border-2 border-[#3a86ff] p-3 mt-0 rounded-[25px] flex items-center justify-between max-w-screen-xl mx-auto px-4 md:px-8 relative">
      <div className="flex items-center justify-end">
        <ul className="hidden md:flex gap-6 lg:gap-10 text-lg">
          <NvabarItem title="Accueil" link="/" />
          <NvabarItem title="Liste des livres" link="/pages/books" />
          <NvabarItem title="Liste des auteurs" link="/pages/authors" />
        </ul>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? (
            <Image 
              src="/images/licorne.jpg" // Chemin de votre image de fermeture
              alt="Close Menu"
              width={30} // Largeur de l'image
              height={30} // Hauteur de l'image
              className="w-8 h-8" // Classe pour contrôler la taille de l'image
            />
          ) : (
            <Image 
              src="/images/licorne.jpg" // Chemin de votre image de menu
              alt="Open Menu"
              width={30} // Largeur de l'image
              height={30} // Hauteur de l'image
              className="w-8 h-8" // Classe pour contrôler la taille de l'image
            />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <ul className="md:hidden absolute top-[110%] left-0 right-0 w-[125%] bg-white border-2 border-black rounded-t-[25px] rounded-b-[25px] p-4 z-50 shadow-lg">
          <li className="py-1">
          <NvabarItem title="Accueil" link="/" />
          </li>
          <li className="py-1">
            <NvabarItem title="Liste des livres" link="#aboutmyself" />
          </li>
          <li className="py-1">
            <NvabarItem title="Liste des auteurs" link="#contact" />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

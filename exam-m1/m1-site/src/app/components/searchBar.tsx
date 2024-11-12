"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [placeholder, setPlaceholder] = useState('Rechercher un livre');
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes('authors')) {
      setPlaceholder('Rechercher un auteur');
    } else {
      setPlaceholder('Rechercher un livre');
    }
  }, [pathname]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Recherche:", searchTerm);
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="bg-inherit border-2 border-[#3a86ff] p-3 rounded-[25px] flex items-center justify-between mx-auto px-4 md:px-8 relative"
    >
      <Image
        src="/images/search.png"
        alt="Icône de recherche"
        width={20}
        height={20}
        className="mr-2"
      />
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
        className="flex-grow outline-none border-none bg-inherit"
      />
    </form>
  );
};

export default SearchBar;
import React, { useState } from 'react';
import Image from 'next/image';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Recherche:", searchTerm);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="bg-inherit border-2 border-[#3a86ff] p-3 rounded-[25px] flex items-center justify-between mx-auto px-4 md:px-8 relative">
      <Image
        src="/images/salameche.png"
        alt="Icône de recherche"
        width={20}
        height={20}
        className="mr-2"
      />
      <input
        type="text"
        placeholder="Rechercher un livre"
        value={searchTerm}
        onChange={handleSearchChange}
        className="flex-grow outline-none border-none"
      />
    </form>
  );
};

export default SearchBar;

"use client";
import React, { useEffect } from 'react';
import Typed from 'typed.js';

const HomePage = () => {
  useEffect(() => {
    const options = {
      strings: ['sur notre bibliothèque', 'les lecteurs', 'les écrivains', 'les passionnés de lecture'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      fadeout: true,
      fadeoutClass: 'typed-fade-out',
      fadeoutDelay: 500,
    };
    const typed = new Typed('.auto-typing', options);

    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <section className="h-screen flex flex-col justify-between bg-cover bg-center">
      <div className="flex-grow flex flex-col items-start mt-16 text-left px-10">
        <h1 className="text-[#3a86ff] text-2xl sm:text-3xl lg:text-5xl font-bold font-worksans mt-4">
          Bienvenue <span className="auto-typing text-[#ff006e]"></span>
        </h1>
      </div>
    </section>
  );
}

export default HomePage;
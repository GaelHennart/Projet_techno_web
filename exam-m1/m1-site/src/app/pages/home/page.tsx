"use client";
import React, { useEffect } from 'react';
import Typed from 'typed.js';

const HomePage = () => {
  useEffect(() => {
    const options = {
      strings: ['sur notre librairie', 'les lecteurs'],
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
    <section>
      <div className="flex-grow flex flex-col items-start text-left px-10">
        <h1 className="text-[#3a86ff] text-2xl sm:text-3xl lg:text-5xl font-bold font-worksans">
          Bienvenue <span className="auto-typing text-[#ff006e]"></span>
        </h1>
      </div>
    </section>
  );
}

export default HomePage;

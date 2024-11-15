"use client";
import React, { useEffect } from "react";
import Typed from "typed.js";

const HomePage = () => {
  useEffect(() => {
    const options = {
      strings: [
        "sur notre bibliothèque",
        "les lecteurs",
        "les écrivains",
        "les passionnés de lecture",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(".auto-typing", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="h-screen flex flex-col justify-between bg-gradient-to-br from-[#3a86ff] to-[#ff006e] text-white">
      {/* Texte principal */}
      <div className="flex-grow flex flex-col items-center justify-center px-10 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold animate-pulse tracking-wide">
          Bienvenue <span className="auto-typing text-yellow-300"></span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mt-6 max-w-4xl leading-relaxed">
          Sur cette bibliothèque, vous retrouverez des{" "}
          <span className="text-yellow-300 font-semibold">livres</span> de tous
          genres, des{" "}
          <span className="text-green-300 font-semibold">auteurs</span> de tous
          horizons et vous pouvez même{" "}
          <span className="text-red-300 font-semibold">ajouter</span> vos
          propres livres et auteurs !
        </p>
      </div>
    </section>
  );
};

export default HomePage;
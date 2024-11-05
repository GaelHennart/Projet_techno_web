"use client";
import BookCard from "../../components/books/bookCard";
import SearchBar from "../../components/searchBar";

const BooksPage = () => {
    const salameche = {
        image_livre: "/images/salameche.png",
        title: "Salameche",
        author_name: "Gaël",
        publishDate: "Existe depuis toujours",
        rating: 4.5
    };

    const pikachu = {
        image_livre: "/images/pikachu.webp",
        title: "Pikachu",
        author_name: "Sacha",
        publishDate: "Existe depuis toujours",
        rating: 4.5
    };

    return (
        <>
            <section className="p-4 mt-5 flex justify-center gap-5">
                <SearchBar />
                <BookCard book={salameche} />
                <BookCard book={pikachu} />
            </section>
        </>
    );
};

export default BooksPage;

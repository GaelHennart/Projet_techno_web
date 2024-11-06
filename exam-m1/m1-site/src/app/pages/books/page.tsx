"use client";
import BookCard from "../../components/books/bookCard";
import SearchBar from "../../components/searchBar";

const BooksPage = () => {
    const books = [
        {
            image_livre: "/images/salameche.png",
            title: "Salameche",
            author_name: "Gaël",
            publishDate: "Existe depuis toujours",
            rating: 4.5
        },
        {
            image_livre: "/images/pikachu.webp",
            title: "Pikachu",
            author_name: "Sacha",
            publishDate: "Existe depuis toujours",
            rating: 4.5
        },
    ];

    return (
        <>
            <section className="p-4 mt-5 flex justify-center">
                <SearchBar />
            </section>
            <section className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-items-center">
                {books.map((book, index) => (
                    <BookCard key={index} book={book} />
                ))}
            </section>
        </>
    );
};

export default BooksPage;

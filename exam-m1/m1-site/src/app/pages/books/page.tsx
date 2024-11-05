import BookCard from "../../components/bookCard";

const BooksPage = () => {
    const exampleBook = {
        coverUrl: "URL_DE_L_IMAGE_DU_LIVRE",
        title: "Titre du Livre",
        author_name: "Nom de l'Auteur",
        publishDate: "Date de Parution",
        rating: 4.5
    };

    return (
        <>
            <section className="p-4 mt-5 flex justify-center">
                <BookCard book={exampleBook} />
            </section>
        </>
    );
};

export default BooksPage;

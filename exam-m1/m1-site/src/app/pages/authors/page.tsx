import AuthorCard from "../../components/authorCard";


const AuthorsPage = () => {
    const exampleBook = {
        author_name: "Nom de l'Auteur",
    };
    return (
        <>
            <section>
                <AuthorCard author={exampleBook} />
            </section>
        </>
    );
};

export default AuthorsPage;

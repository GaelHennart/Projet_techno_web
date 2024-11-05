"use client";
import AuthorCard from "../../components/authorCard";


const AuthorsPage = () => {
    const exampleAuthor = {
        author_name: "Nom de l'Auteur",
    };
    
    return (
        <>
            <section className="p-4 mt-5 flex justify-center">
                <AuthorCard author={exampleAuthor} />
            </section>
        </>
    );
};

export default AuthorsPage;

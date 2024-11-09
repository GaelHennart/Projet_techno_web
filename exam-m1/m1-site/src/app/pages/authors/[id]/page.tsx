"use client";

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Drawer, List, ListItem, ListItemText, Modal, Typography } from '@mui/material';
//import { getBookById, deleteBook, getReviewsByBookId } from '../../../m1-api/';

const BookDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<any>(null);
    const [reviews, setReviews] = useState<any[]>([]);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    // useEffect(() => {
    //     async function fetchBook() {
    //         const bookData = await getBookById(id);
    //         setBook(bookData);
    //     }

    //     async function fetchReviews() {
    //         const reviewsData = await getReviewsByBookId(id);
    //         setReviews(reviewsData);
    //     }

    //     fetchBook();
    //     fetchReviews();
    // }, [id]);

    // const handleDelete = async () => {
    //     await deleteBook(id);
    //     // Redirect or update state after deletion
    // };

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    const toggleModal = (open: boolean) => () => {
        setModalOpen(open);
    };

    if (!book) return <div>Chargement...</div>;

    return (
        <div>
            <Typography variant="h4">{book.title}</Typography>
            <Typography variant="h6">Prix: ${book.price}</Typography>
            <Typography variant="h6">Date de parution: {book.year}</Typography>
            <Typography variant="h6">
                Auteur: <Link to={`/authors/${book.author.id}`}>{book.author.name}</Link>
            </Typography>
            <Button variant="contained" color="secondary" onClick={toggleModal(true)}>
                Supprimer le livre
            </Button>
            <Button variant="contained" onClick={toggleDrawer(true)}>
                Voir les avis
            </Button>
            <Modal open={modalOpen} onClose={toggleModal(false)}>
                <div>
                    <Typography>Etes-vous sûr de vouloir supprimer ce livre</Typography>
                    {/* <Button onClick={handleDelete}>Oui</Button> */}
                    <Button onClick={toggleModal(false)}>Non</Button>
                </div>
            </Modal>

            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <List>
                    {reviews.map((review) => (
                        <ListItem key={review.id}>
                            <ListItemText
                                primary={`${review.stars} étoiles`}
                                secondary={review.comment || 'Pas encore de commentaires sur ce livre'}
                            />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
};

export default BookDetailPage;
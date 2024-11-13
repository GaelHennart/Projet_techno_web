"use client";

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Drawer, List, ListItem, ListItemText, Modal, Typography } from '@mui/material';
import axios from 'axios';
import BookDetailsCard from '../../../components/books/bookDetailsCard';

const BookDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<any>({});
    const [reviews, setReviews] = useState<any[]>([]);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    
    const fetchBook = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/books/${id}`);
            setBook(response.data);
        } catch (error) {
            console.error("Erreur lors de la récupération du livre :", error);
        }
    };

    //     async function fetchReviews() {
    //         const reviewsData = await getBookReviews(id);
    //         setReviews(reviewsData);
    //     }
  

    useEffect(() => {
        fetchBook();
      }, [id]);
    

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3001/books/${book.id}`);
            // Redirection ou mise à jour de l'état après la suppression
        } catch (error) {
            console.error("Erreur lors de la suppression du livre :", error);
        }
    };

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    const toggleModal = (open: boolean) => () => {
        setModalOpen(open);
    };

    return (
        <div>
            <BookDetailsCard
                title={book.title}
                price={book.price}
                year={book.yearPublished}
                author={book.authorId}
                onDelete={toggleModal(true)}
                onShowReviews={toggleDrawer(true)}
            />
            <Modal open={modalOpen} onClose={toggleModal(false)}>
                <div>
                    <Typography>Etes-vous sûr de vouloir supprimer ce livre</Typography>
                    <Button onClick={handleDelete}>Oui</Button>
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

import React from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';
import Link from 'next/link'; // Utilisation de next/link pour la navigation

interface BookDetailsCardProps {
    title: string;
    price: number;
    year: string;
    author: { id: string; name: string } | null;  // Ajout de nullabilité pour author
    onDelete: () => void;
    onShowReviews: () => void;
}

const BookDetailsCard: React.FC<BookDetailsCardProps> = ({ title, price, year, author, onDelete, onShowReviews }) => {
    // Vérifie si l'auteur est défini avant d'afficher les informations
    if (!author) {
        return <Typography variant="h6">Auteur non disponible</Typography>;
    }

    return (
        <Card sx={{ backgroundColor: '#f5f5f5', borderRadius: 2, boxShadow: 3, padding: 2, maxWidth: 400 }}>
            <CardContent>
                <Typography variant="h4" component="h2">
                    {title}
                </Typography>
                <Typography variant="h6">Prix: ${price}</Typography>
                <Typography variant="h6">Date de parution: {year}</Typography>
                <Typography variant="h6">
                    Auteur: <Link href={`/pages/authors/${author.id}`}>{author.name}</Link>
                </Typography>
                <Button variant="contained" color="secondary" onClick={onDelete} sx={{ marginTop: 2 }}>
                    Supprimer le livre
                </Button>
                <Button variant="contained" onClick={onShowReviews} sx={{ marginTop: 2, marginLeft: 2 }}>
                    Voir les avis
                </Button>
            </CardContent>
        </Card>
    );
};

export default BookDetailsCard;

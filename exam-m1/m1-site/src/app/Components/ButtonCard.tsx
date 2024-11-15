import React from 'react';
import { Button } from '@mui/material';

interface ButtonItemProps {
  text: string; // Texte du bouton
  onClick: () => void; // Fonction déclenchée au clic
  borderColor: string; // Couleur du contour
}

const ButtonItem: React.FC<ButtonItemProps> = ({ text, onClick, borderColor }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '600',
        marginLeft: '10px',
        borderRadius: '9999px',
        border: `2px solid ${borderColor}`,
        color: borderColor,
        backgroundColor: '#F5F5F5',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
            backgroundColor: borderColor,
            color: '#F5F5F5',
            transform: 'scale(1.1)',
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonItem;

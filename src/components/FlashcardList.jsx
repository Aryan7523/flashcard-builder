import React from 'react';
import Flashcard from './Flashcard';

const FlashcardList = ({ flashcards, onDelete, onEdit }) => {
  return (
    <div className="flashcard-list">
      {flashcards.map((card) => (
        <Flashcard
          key={card.id}
          flashcard={card}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default FlashcardList;

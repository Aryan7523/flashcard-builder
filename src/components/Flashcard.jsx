import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ flashcard, onDelete }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped((prev) => !prev);

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(flashcard.id);
  };

  return (
    <div className="flip-card" onClick={handleFlip}>
      <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
        <div className="flip-card-front card-face">
          <span className="delete-icon" onClick={handleDelete}>🗑️</span>
          <p>{flashcard.question}</p>
        </div>
        <div className="flip-card-back card-face">
          <span className="delete-icon" onClick={handleDelete}>🗑️</span>
          <p>{flashcard.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;

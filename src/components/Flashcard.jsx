import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ flashcard, onDelete, onEdit }) => {
  const [flipped, setFlipped] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState(flashcard.question);
  const [editedAnswer, setEditedAnswer] = useState(flashcard.answer);

  const handleFlip = () => {
    if (!isEditing) setFlipped((prev) => !prev);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(flashcard.id);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.stopPropagation();
    onEdit(flashcard.id, editedQuestion, editedAnswer);
    setIsEditing(false);
  };

  const handleCancel = (e) => {
    e.stopPropagation();
    setIsEditing(false);
    setEditedQuestion(flashcard.question);
    setEditedAnswer(flashcard.answer);
  };

  return (
    <div className="flip-card" onClick={handleFlip}>
      <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
        <div className="flip-card-front card-face">
          {/* Top-right icon container */}
          <div className="icon-container">
            <span className="edit-icon" onClick={handleEdit}>✏️</span>
            <span className="delete-icon" onClick={handleDelete}>🗑️</span>
          </div>

          {isEditing ? (
            <>
              <input
                type="text"
                value={editedQuestion}
                onChange={(e) => setEditedQuestion(e.target.value)}
              />
              <input
                type="text"
                value={editedAnswer}
                onChange={(e) => setEditedAnswer(e.target.value)}
              />
              <div style={{ marginTop: '10px' }}>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            </>
          ) : (
            <p>{flashcard.question}</p>
          )}
        </div>

        <div className="flip-card-back card-face">
          <div className="icon-container">
            <span className="delete-icon" onClick={handleDelete}>🗑️</span>
          </div>
          <p>{flashcard.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;

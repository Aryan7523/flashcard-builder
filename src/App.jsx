import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FlashcardForm from './components/FlashcardForm';
import FlashcardList from './components/FlashcardList';
import GradientText from './components/GradientText';
import { BsSun, BsMoon } from 'react-icons/bs';
import './index.css';

const App = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // ✅ Load flashcards from localStorage on first render
  useEffect(() => {
    const stored = localStorage.getItem('flashcards');
    if (stored) {
      setFlashcards(JSON.parse(stored));
    }
  }, []);

  // ✅ Save flashcards to localStorage when updated
  useEffect(() => {
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
  }, [flashcards]);

  // Dark mode toggle
  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  const addFlashcard = ({ question, answer }) => {
    const newCard = { id: uuidv4(), question, answer };
    setFlashcards([...flashcards, newCard]);
  };

  const deleteFlashcard = (id) => {
    setFlashcards(flashcards.filter(card => card.id !== id));
  };

  return (
    <div className="App">
      {/* Top-right dark mode toggle */}
      <button
        className="dark-mode-toggle"
        onClick={() => setDarkMode(!darkMode)}
        title="Toggle Dark Mode"
      >
        {darkMode ? <BsSun /> : <BsMoon />}
      </button>

      {/* Heading */}
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={4}
        showBorder={false}
      >
        Flashcard Builder
      </GradientText>

      <FlashcardForm onAdd={addFlashcard} />
      <FlashcardList flashcards={flashcards} onDelete={deleteFlashcard} />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';

function Typewriter({ text, delay = 30 }) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const char = text.charAt(currentIndex);
      setCurrentText(currentText + char);
      setCurrentIndex(currentIndex + 1);

      if (currentIndex === text.length) {
        clearInterval(typingInterval);
      }
    }, delay);

    return () => clearInterval(typingInterval); // Cleanup function to avoid memory leaks
  }, [text, currentIndex, delay]); // Specify dependencies to avoid infinite loops

  return (
    <span>{currentText}</span>
  );
}

export default Typewriter;

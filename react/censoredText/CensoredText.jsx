import React, { useState } from "react";

function CensoredText({ children, badWords }) {
  // Split the text into words
  const words = children.split(" ");

  // Lowercase the bad words
  const lowerCaseBadWords = badWords.map((word) => word.toLowerCase());

  // State to keep track of the clicked words
  const [clickedWords, setClickedWords] = useState(() => {
    // Initialize the clickedWords array with true for words to be replaced
    return words.map((word) => lowerCaseBadWords.includes(word.toLowerCase()));
  });

  // Function to handle word clicks
  const handleWordClick = (index) => {
    setClickedWords((prevClickedWords) => {
      // Toggle the state of the clicked word
      const updatedClickedWords = [...prevClickedWords];
      updatedClickedWords[index] = !prevClickedWords[index];
      return updatedClickedWords;
    });
  };

  // Function to toggle the word with asterisks
  const toggleWord = (word, index) => {
    return clickedWords[index] ? "*".repeat(word.length) : word;
  };

  return (
    <h1>
      {words.map((word, index) => (
        <span
          key={index}
          onClick={() => handleWordClick(index)}
          style={{ cursor: "pointer" }}
        >
          {lowerCaseBadWords.includes(word.toLowerCase())
            ? toggleWord(word, index)
            : word}{" "}
        </span>
      ))}
    </h1>
  );
}

export default CensoredText;

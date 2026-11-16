
"use client";

import { useState } from "react";

export default function Editor() {
  const [text, setText] = useState("");

  // Uppercase function
  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  // Lowercase function
  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  // Clear button
  const handleClear = () => {
    setText("");
  };

  // word count
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  // characters count
  const characterCount = text.length;


  return (
    <main>
      <h1>Text Editor</h1>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Words: {wordCount}</p>

      <p>Characters: {characterCount}</p>

      <button onClick={handleUppercase}>
        UPPERCASE
      </button>

      <button onClick={handleLowerCase}>
        LOWERCASE
      </button>

      <button onClick={handleClear}>
        CLEAR
      </button>
    </main>
  );
};

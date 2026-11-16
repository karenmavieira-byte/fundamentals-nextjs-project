
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

  return (
    <main>
      <h1>Text Editor</h1>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

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


"use client";

import { useState } from "react";

export default function Editor() {
  const [text, setText] = useState("");

  const wordCount =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const characterCount = text.length;

  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <main className="editor-container">
      <h1>Text Editor</h1>

      <p className="editor-description">
        Write, edit and transform your text.
      </p>

      <textarea
        className="editor-textarea"
        placeholder="Start typing here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="editor-stats">
        <p>Words: {wordCount}</p>
        <p>Characters: {characterCount}</p>
      </div>

      <div className="editor-buttons">
        <button onClick={handleUppercase}>
          UPPERCASE
        </button>

        <button onClick={handleLowerCase}>
          LOWERCASE
        </button>

        <button onClick={handleClear}>
          CLEAR
        </button>
      </div>
    </main>
  );
}

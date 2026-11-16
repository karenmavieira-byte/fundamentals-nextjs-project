"use client";

import { useState } from "react";

export default function Editor() {
  const [text, setText] = useState("");

  return (
    <main>
      <h1>Text Editor</h1>
      <textarea />
    </main>
  );
}


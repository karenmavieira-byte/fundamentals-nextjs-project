
"use client";

import { useState } from "react";

const questions = [
  {
    id: 1,
    question:
      "Which keyword declares a variable that can be reassigned in JavaScript?",
    options: ["const", "let", "static", "class"],
    correctAnswer: "let",
  },
  {
    id: 2,
    question: "Which React Hook is used to manage component state?",
    options: ["useEffect", "useContext", "useState", "useRef"],
    correctAnswer: "useState",
  },
  {
    id: 3,
    question:
      "In Next.js App Router, which file defines the UI for a route?",
    options: ["index.tsx", "layout.css", "page.tsx", "config.ts"],
    correctAnswer: "page.tsx",
  },
];

export default function Quiz() {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [score, setScore] = useState<number | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (Object.keys(answers).length !== questions.length) {
      setError("Please answer all questions before submitting.");
      return;
    }

    let correctAnswers = 0;

    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    setScore(correctAnswers);
    setError("");
  };

  const handleRestart = () => {
    setAnswers({});
    setScore(null);
    setError("");
  };

  return (
    <main className="quiz-container">
      <h1>Software Engineering Quiz</h1>
      <h2>Test your software engineering knowledge</h2>

      {questions.map((question) => (
        <section key={question.id} className="quiz-question">
          <h3>{question.id}. {question.question}</h3>

          {question.options.map((option) => (
            <label key={option} className="quiz-option">
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option}
                checked={answers[question.id] === option}
                disabled={score !== null}
                onChange={() =>
                  setAnswers({
                    ...answers,
                    [question.id]: option,
                  })
                }
              />
              {option}
            </label>
          ))}

          {score !== null && (
            <p className={
              answers[question.id] === question.correctAnswer
                ? "correct-answer"
                : "incorrect-answer"
            }>
              {answers[question.id] === question.correctAnswer
                ? "Correct!"
                : `Incorrect. Correct answer: ${question.correctAnswer}`}
            </p>
          )}
        </section>
      ))}

      {error && <p className="quiz-error">{error}</p>}

      {score === null ? (
        <button onClick={handleSubmit} className="quiz-button">
          Submit Quiz
        </button>
      ) : (
        <section className="quiz-result">
          <h2>Your score: {score} / {questions.length}</h2>
          <p>
            {score === questions.length
              ? "Excellent! You answered all questions correctly."
              : "Good effort! Keep practising."}
          </p>

          <button onClick={handleRestart} className="quiz-button">
            Try Again
          </button>
        </section>
      )}
    </main>
  );
}

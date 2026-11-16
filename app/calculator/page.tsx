"use client";

import { useState } from "react";

export default function Calculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleCalculation = (operation: "+" | "-" | "*" | "/") => {
    if (firstNumber.trim() === "" || secondNumber.trim() === "") {
      setResult("Please enter both numbers");
      return;
    }

    const first = Number(firstNumber);
    const second = Number(secondNumber);

    if (operation === "+") {
      setResult(String(first + second));
    } else if (operation === "-") {
      setResult(String(first - second));
    } else if (operation === "*") {
      setResult(String(first * second));
    } else if (operation === "/") {
      if (second === 0) {
        setResult("Cannot divide by zero");
        return;
      }

      setResult(String(first / second));
    }
  };

  const handleClear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setResult(null);
  };

  return (
    <main className="calculator">
      <h1 className="calculator-title">Calculator</h1>

      <div className="calculator-inputs">
        <div className="input-group">
          <label htmlFor="firstNumber">Number 1</label>
          <input
            id="firstNumber"
            type="number"
            placeholder="Enter a number"
            value={firstNumber}
            onChange={(e) => setFirstNumber(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="secondNumber">Number 2</label>
          <input
            id="secondNumber"
            type="number"
            placeholder="Enter a number"
            value={secondNumber}
            onChange={(e) => setSecondNumber(e.target.value)}
          />
        </div>
      </div>

      <div className="calculator-operations">
        <button onClick={() => handleCalculation("+")}>+</button>
        <button onClick={() => handleCalculation("-")}>-</button>
        <button onClick={() => handleCalculation("*")}>*</button>
        <button onClick={() => handleCalculation("/")}>/</button>
      </div>

      <div className="calculator-result">
        <label htmlFor="result">Result</label>
        <input
          id="result"
          type="text"
          placeholder="Result"
          value={result ?? ""}
          readOnly
        />
      </div>

      <button className="clear-button" onClick={handleClear}>
        Clear
      </button>
    </main>
  );
}
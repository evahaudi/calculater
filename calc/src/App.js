import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const calculateResult = () => {
    if (!input) {
      alert('Please enter an operation.');
      return;
    }

    const operator = input.charAt(0);
    const numbers = input.slice(2).split(' ').map(num => parseFloat(num));

    if (!['+', '-', '*', '/'].includes(operator)) {
      alert('Invalid operator.');
      return;
    }

    if (numbers.some(isNaN)) {
      alert('Invalid number format.');
      return;
    }

    let calculatedResult = numbers.reduce((acc, num) => {
      switch (operator) {
        case '+':
          return acc + num;
        case '-':
          return acc - num;
        case '*':
          return acc * num;
        case '/':
          return acc / num;
        default:
          return acc;
      }
    });

    setResult(calculatedResult);
  };

  return (
    <div className="calculator">
      <input
        type="text"
        placeholder="Operator followed by numbers..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={calculateResult}>Calculate</button>
      <div className="result">{result}</div>
    </div>
  );
}

export default App;

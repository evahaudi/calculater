import React, { useState } from 'react';
import './App.css';
import { TextField, Button, Container, Typography } from '@mui/material';

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
    <Container maxWidth="sm" className="calculator">
      <Typography variant="h4" gutterBottom>
        Calculator
      </Typography>
      <TextField
        fullWidth
        label="Operator followed by numbers..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={calculateResult}>
        Calculate
      </Button>
      {result && (
        <Typography variant="h6" className="result">
          Result: {result}
        </Typography>
      )}
    </Container>
  );
}

export default App;

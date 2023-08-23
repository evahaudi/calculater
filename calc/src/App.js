import React, { useState } from 'react';
import './App.css';
import { TextField, Button, Container, Typography } from '@mui/material';

function parseExpression(tokens) {
  const token = tokens.shift();

  if (!isNaN(parseFloat(token))) {
    return parseFloat(token);
  } else if (token === '+' || token === '-' || token === '*' || token === '/') {
    const leftOperand = parseExpression(tokens);
    const rightOperand = parseExpression(tokens);
    switch (token) {
      case '+':
        return leftOperand + rightOperand;
      case '-':
        return leftOperand - rightOperand;
      case '*':
        return leftOperand * rightOperand;
      case '/':
        return leftOperand / rightOperand;
      default:
        return NaN;
    }
  }
}

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const calculateResult = () => {
    if (!input) {
      alert('Please enter an expression.');
      return;
    }

    const tokens = input.split(/\s+/);
    const calculatedResult = parseExpression(tokens);

    if (isNaN(calculatedResult)) {
      alert('Invalid expression.');
      return;
    }

    setResult(calculatedResult);
  };

  return (
    <Container maxWidth="sm" className="calculator">
      <Typography variant="h4" gutterBottom>
        Calculator
      </Typography>
      <TextField
        fullWidth
        label="Expression..."
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

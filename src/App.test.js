import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// primer argumento es el nombre del test
// segundo argumento es una función que contiene el test
test('renders without crashing', () => {
  render(<App />);
  const linkElement = screen.getByText(/Última búsqueda/i);
  expect(linkElement).toBeInTheDocument();
});

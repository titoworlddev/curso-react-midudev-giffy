import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// primer argumento es el nombre del test
// segundo argumento es una función que contiene el test
test('home works as expected', () => {
  render(<App />);
  const linkElement = screen.getByText(/Última búsqueda/i);
  expect(linkElement).toBeInTheDocument();
});

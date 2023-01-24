import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// primer argumento es el nombre del test
// segundo argumento es una función que contiene el test
test('renders without crashing', async () => {
  render(<App />);
  const title = await screen.findByText(/Última búsqueda/i);
  expect(title).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// primer argumento es el nombre del test
// segundo argumento es una función que contiene el test
test('home works as expected', async () => {
  render(<App />);
  const gifLink = await screen.findByRole('.Gif-link');
  expect(gifLink).toBeVisible();
});

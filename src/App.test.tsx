import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /where in the world/gi })
  ).toBeInTheDocument();
});

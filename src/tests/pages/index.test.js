import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../pages/index';

test('loads and displays index not logged in', async () => {
  render(<Home />);
  expect(screen.getByTestId('login')).toBeInTheDocument();
});

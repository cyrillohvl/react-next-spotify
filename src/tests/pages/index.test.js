import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Index from '../../pages/index';

it('should render Index', () => {
  const { getByText } = render(<Index />);

  expect(getByText('React Spotify by Patrick Coutinho')).toBeInTheDocument();
});

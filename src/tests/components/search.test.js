import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Search from '../../components/Search';

it('should render Search', () => {
  const { getByText } = render(<Search />);
  expect(getByText('Busque por álbuns')).toBeInTheDocument();
});

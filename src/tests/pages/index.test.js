import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../pages/index';

const server = setupServer(
  rest.get('/', (req, res, ctx) => {
    return res(ctx.json({ greeting: 'hello there' }));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads and displays index', async () => {
  render(<Home />);
  expect(screen.getByTestId('login')).toBeInTheDocument();
});

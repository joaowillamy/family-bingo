import React from "react";
import { render, screen } from '@testing-library/react';
import BingoPage from './BingoPage';

describe('<BingoPage />', () => {
  test('in router "/" should return a error message', async () => {
    render(<BingoPage />);
    await screen.findByText(/não encontramos seu codigo, sinto muito/i);
  });
  
  test('in router "/:code" should return a tiket', async () => {
    window.history.pushState({}, 'with code', '/family-bingo/maria')
    render(<BingoPage />);
    await screen.findByText(/maria/i);
  });
});

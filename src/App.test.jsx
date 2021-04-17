import React from "react";
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('in router "/" should return a error message', async () => {
    render(<App />);
    await screen.findByText(/não encontramos seu codigo, sinto muito/i);
  });
  
  test('in router "/:code" should return a tiket', async () => {
    window.history.pushState({}, 'with code', 'maria')
    render(<App />);
    await screen.findByText(/maria/i);
  });
});


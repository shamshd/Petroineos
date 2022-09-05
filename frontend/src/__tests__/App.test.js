import React from 'react'
import { render, screen } from '@testing-library/react';
import App from '../App';

test('Shows the tablist for positions', () => {
    render(<App />);
    const tablist = screen.getByRole('tablist');
    expect(tablist).toBeInTheDocument()
})

test('Shows Correct Header', () => {
    render(<App />);
    const header = screen.getByTestId('header');
    expect(header).toHaveTextContent('PowerPosition');
})

// Can write more tests in Production environment

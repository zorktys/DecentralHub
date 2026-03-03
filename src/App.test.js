// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DecentralHub title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DecentralHub/i);
    expect(titleElement).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../components/App';

describe('App', () => {
    it('render', () => {
        render(<App />);
        const app = screen.getAllByTestId('app');
        expect(app.length).toBe(1);
    });
});

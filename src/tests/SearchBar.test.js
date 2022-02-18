import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '../components/SearchBar';

describe('Search bar', () => {
    it('render search container', () => {
        render(<SearchBar />);
        let SearchContainer = screen.getByTestId('search-container');
        // screen.debug();
        expect(SearchContainer).toBeInTheDocument();
    });
    it('render location', () => {
        render(<SearchBar />);
        let SearchContainer = screen.getByTestId('location');
        expect(SearchContainer).toBeInTheDocument();
    });
    it('render guests', () => {
        render(<SearchBar />);
        let SearchContainer = screen.getByTestId('guests');
        expect(SearchContainer).toBeInTheDocument();
    });
    it('render search icon', () => {
        render(<SearchBar />);
        let SearchContainer = screen.getByTestId('search-icon');
        expect(SearchContainer).toBeInTheDocument();
    });
    // it('open modal on search bar click', () => {});
    // it('render location search bar on modal open', () => {});
    // it('render guests search bar on modal open', () => {});
    // it('render search button on modal open', () => {});
    // it('close modal on cross icon click', () => {});
});

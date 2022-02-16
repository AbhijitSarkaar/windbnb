import React from 'react';
import styled from 'styled-components';

const SearchBar = () => {
    return (
        <SearchBarContainer>
            <Search>
                <Location></Location>
                <Guests></Guests>
                <SearchIcon></SearchIcon>
            </Search>
        </SearchBarContainer>
    );
};

const SearchBarContainer = styled.div`
    padding: 40px 28px;
    border: 1px solid black;
`;

const Search = styled.div`
    height: 55px;
    background: #ffffff;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    display: grid;
    grid-template-columns: 3.5fr 3fr 1.5fr;
`;

const Location = styled.div`
    border-right: 1px solid #f2f2f2;
`;
const Guests = styled.div`
    border-right: 1px solid #f2f2f2;
`;
const SearchIcon = styled.div``;

export default SearchBar;

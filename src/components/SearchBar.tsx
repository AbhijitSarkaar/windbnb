import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = (props) => {
    const { handleModal, location, guests } = props;

    return (
        <SearchBarContainer data-testid="search-container">
            <Search onClick={handleModal}>
                <Location data-testid="location" border={location.length}>
                    {location ? location : 'Add location'}
                </Location>
                <Guests data-testid="guests" border={guests}>
                    {guests
                        ? `${guests} guest${guests !== 1 ? 's' : ''}`
                        : 'Add guests'}
                </Guests>
                <SearchIcon data-testid="search-icon">
                    <FontAwesomeIcon icon={faSearch} />
                </SearchIcon>
            </Search>
        </SearchBarContainer>
    );
};

const SearchBarContainer = styled.div`
    padding: 40px 10px;
    @media only screen and (min-width: 481px) {
        width: 50%;
        padding: 0;
    }
    @media only screen and (min-width: 769px) {
        width: 35%;
        padding: 0;
    }
    @media only screen and (min-width: 1025px) {
        width: 30%;
        padding: 0;
    }
`;

const Search = styled.div`
    height: 55px;
    background: #ffffff;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    display: grid;
    grid-template-columns: 3.5fr 3fr 1.5fr;
    color: #bdbdbd;
    font-size: 14px;

    > * {
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid #f2f2f2;
    }

    :last-child {
        border-right: none;
    }

    @media only screen and (min-width: 500px) {
        > * {
            cursor: pointer;
        }
        :hover {
            border: 1px solid lightgray;
            box-sizing: border-box;
        }
    }
`;

const Location = styled.div((props: { border: boolean }) => {
    return {
        color: props.border ? 'black' : '#bdbdbd',
    };
});
const Guests = styled.div((props: { border: boolean }) => {
    return {
        color: props.border ? 'black' : '#bdbdbd',
    };
});
const SearchIcon = styled.div`
    color: #eb5757;
`;

export default SearchBar;

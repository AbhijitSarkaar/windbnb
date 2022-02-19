import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = (props) => {
    const { handleModal } = props;

    return (
        <SearchBarContainer data-testid="search-container">
            <Search onClick={handleModal}>
                <Location data-testid="location">Add location </Location>
                <Guests data-testid="guests">Add guests</Guests>
                <SearchIcon data-testid="search-icon">
                    <FontAwesomeIcon icon={faSearch} />
                </SearchIcon>
            </Search>
        </SearchBarContainer>
    );
};

const SearchBarContainer = styled.div`
    padding: 40px 28px;
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
    }
`;

const Location = styled.div``;
const Guests = styled.div``;
const SearchIcon = styled.div`
    color: #eb5757;
`;

export default SearchBar;

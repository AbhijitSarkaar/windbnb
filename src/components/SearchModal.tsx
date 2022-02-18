import React from 'react';
import styled from 'styled-components';

const SearchModal = () => {
    return <SearchModalContainer></SearchModalContainer>;
};

const SearchModalContainer = styled.div`
    position: absolute;
    height: 80px;
    width: 100%;
    background: white;
    top: 0;
    box-sizing: border-box;
    border: 1px solid black;
`;

export default SearchModal;

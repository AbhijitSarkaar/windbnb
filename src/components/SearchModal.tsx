import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const SearchModal = () => {
    return (
        <SearchModalContainer>
            <Header>
                <Text>Edit your search</Text>
                <Icon>
                    <FontAwesomeIcon icon={faClose} />
                </Icon>
            </Header>
        </SearchModalContainer>
    );
};

const SearchModalContainer = styled.div`
    position: absolute;
    height: 80px;
    width: 100%;
    background: white;
    top: 0;
    box-sizing: border-box;
    border: 1px solid black;
    padding: 12px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Text = styled.div`
    color: #333333;
    font-weight: bold;
    font-size: 12px;
    line-height: 1;
`;
const Icon = styled.div``;

export default SearchModal;

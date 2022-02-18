import React from 'react';
import Brand from './Brand';
import SearchBar from './SearchBar';
import styled from 'styled-components';

const Home = (props) => {
    const { handleModal } = props;
    return (
        <HomeContainer>
            <Brand></Brand>
            <SearchBar handleModal={handleModal}></SearchBar>
            <SearchResultTitle>
                <Text>Stays in Finland</Text>
                <Count>12+ stays</Count>
            </SearchResultTitle>
        </HomeContainer>
    );
};

const HomeContainer = styled.div`
    padding: 22px 12px 0px 12px;
`;

const SearchResultTitle = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Text = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: #333333;
`;
const Count = styled.div`
    font-size: 14px;
    color: #4f4f4f;
`;

export default Home;

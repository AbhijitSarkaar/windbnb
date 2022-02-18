import React from 'react';
import Brand from './Brand';
import SearchBar from './SearchBar';
import styled from 'styled-components';

const Home = () => {
    return (
        <HomeContainer>
            <Brand></Brand>
            <SearchBar></SearchBar>
        </HomeContainer>
    );
};

const HomeContainer = styled.div`
    padding: 22px 12px 0px 12px;
`;

export default Home;

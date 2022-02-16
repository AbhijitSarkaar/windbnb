import React from 'react';
import Brand from './Brand';
import SearchBar from './SearchBar';
import styled from 'styled-components';

const App = () => {
    return (
        <Container data-testId="app">
            <Brand></Brand>
            <SearchBar></SearchBar>
        </Container>
    );
};

const Container = styled.div`
    padding: 0px 12px;
    @media only screen and (min-width: 415px) {
    }
`;

export default App;

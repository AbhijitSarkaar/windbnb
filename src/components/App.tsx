import React from 'react';
import Home from './Home';
import styled from 'styled-components';
import SearchModal from './SearchModal';

const App = () => {
    return (
        <Container data-testid="app">
            <Home></Home>
            <SearchModal></SearchModal>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    @media only screen and (min-width: 415px) {
    }
`;

export default App;

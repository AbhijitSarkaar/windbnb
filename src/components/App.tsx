import React, { useState } from 'react';
import Home from './Home';
import styled from 'styled-components';
import SearchModal from './SearchModal';

const App = () => {
    const [modal, setModal] = useState(false);
    const handleModal = (status: boolean) => {
        setModal(status);
    };
    return (
        <Container data-testid="app">
            {modal && (
                <SearchModal
                    handleModal={() => handleModal(false)}
                ></SearchModal>
            )}
            <Home handleModal={() => handleModal(true)}></Home>
        </Container>
    );
};

const Container = styled.div`
    height: 100%;
    position: relative;
    @media only screen and (min-width: 415px) {
    }
`;

export default App;

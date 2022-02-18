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
        <Container data-testid="app" overflow={modal ? 'hidden' : 'visible'}>
            {modal && (
                <SearchModal
                    handleModal={() => handleModal(false)}
                ></SearchModal>
            )}
            <Home handleModal={() => handleModal(true)}></Home>
        </Container>
    );
};

const Container = styled.div(function (props: { overflow: string }) {
    return {
        position: 'relative',
        height: '100%',
        overflow: props.overflow,
    };
});
export default App;

import React, { useState } from 'react';
import Home from './Home';
import styled from 'styled-components';
const App = () => {
    const [modal, setModal] = useState(false);
    const [location, setLocation] = useState('');
    const [guests, setGuests] = useState(0);
    const [ModalComp, setModalComp] = useState(null);
    const handleModal = async (status: boolean) => {
        let loadResult = null;
        loadResult = await import('./SearchModal');
        setModalComp(status ? () => loadResult.default : null);
    };
    return (
        <Container data-testid="app" overflow={modal ? 'hidden' : 'visible'}>
            {ModalComp ? (
                <ModalComp
                    handleLocationChange={(value) => setLocation(value)}
                    handleGuestsChange={(value) => setGuests(value)}
                    handleModal={() => {
                        setModal(true);
                        handleModal(false);
                    }}
                ></ModalComp>
            ) : null}
            <Home
                handleModal={() => handleModal(true)}
                location={location}
                guests={guests}
            ></Home>
        </Container>
    );
};

const Container = styled.div(function (props: { overflow: string }) {
    return {
        position: 'relative',
        height: '100%',
        overflow: props.overflow,
        fontFamily: 'Inconsolata',
    };
});
export default App;

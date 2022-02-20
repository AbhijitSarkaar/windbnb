import React, { useState } from 'react';
import Home from './Home';
import styled from 'styled-components';
import SearchModal from './SearchModal';

const App = () => {
    const [modal, setModal] = useState(false);
    const [location, setLocation] = useState('');
    const [guests, setGuests] = useState(0);
    const handleModal = (status: boolean) => {
        setModal(status);
    };
    return (
        <Container data-testid="app" overflow={modal ? 'hidden' : 'visible'}>
            {modal && (
                <SearchModal
                    handleLocationChange={(value) => setLocation(value)}
                    handleGuestsChange={(value) => setGuests(value)}
                    handleModal={() => handleModal(false)}
                ></SearchModal>
            )}
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

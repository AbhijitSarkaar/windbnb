import React from 'react';
import { foo } from './index';
import styled from 'styled-components';

const App = () => {
    console.log('foo', foo);
    return <Container data-testId="app">App container </Container>;
};

const Container = styled.div`
    background: blue;
    font-size: 20px;
`;

export default App;

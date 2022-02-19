import React from 'react';
import styled from 'styled-components';

const GuestCount = (props) => {
    const { title, description, ageGroup, count, handleAdd, handleSubtract } =
        props;
    return (
        <GuestsContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <CountContainer>
                <Box onClick={() => handleSubtract(ageGroup)}>-</Box>
                <Count>{count}</Count>
                <Box onClick={() => handleAdd(ageGroup)}>+</Box>
            </CountContainer>
        </GuestsContainer>
    );
};

const GuestsContainer = styled.div`
    margin-top: 45px;
    padding-left: 26px;
`;
const Title = styled.div``;
const Description = styled.div`
    color: #bdbdbd;
`;
const CountContainer = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 12px;
`;
const Count = styled.div``;
const Box = styled.div`
    border: 1px solid #828282;
    box-sizing: border-box;
    border-radius: 4px;
    height: 23px;
    width: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export default GuestCount;

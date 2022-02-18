import React from 'react';
import Brand from './Brand';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import data from '../data/data';
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
            <SearchResultsContainer>
                {data.map((item) => {
                    return (
                        <ResultItem key={item.title}>
                            <RoomImage src={item.photo}></RoomImage>
                            <RoomProperties>
                                {item.superHost && (
                                    <SuperHost>SUPER HOST</SuperHost>
                                )}
                                <RoomDesc>
                                    {item.type}
                                    {item.beds && `. ${item.beds} bed`}
                                </RoomDesc>
                                <Rating>
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        color={'#EB5757'}
                                        size={'sm'}
                                    />
                                    <RatingText>{item.rating}</RatingText>
                                </Rating>
                            </RoomProperties>
                            <RoomTitle>{item.title}</RoomTitle>
                        </ResultItem>
                    );
                })}
            </SearchResultsContainer>
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

const SearchResultsContainer = styled.div`
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;
const ResultItem = styled.div``;
const RoomImage = styled.img`
    height: 240px;
    width: 100%;
    border-radius: 24px;
`;
const RoomProperties = styled.div`
    display: flex;
    align-items: center;
    margin-top: 14px;
`;
const SuperHost = styled.span`
    font-size: 10px;
    border: 1px solid #4f4f4f;
    box-sizing: border-box;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    line-height: 1;
    padding: 6.2px 8px 5px 8px;
    margin-right: 10px;
`;
const RoomDesc = styled.div`
    display: flex;
    font-size: 12px;
    color: #828282;
`;
const Rating = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
`;
const RatingText = styled.div`
    font-size: 12px;
    color: #4f4f4f;
    font-weight: 500;
    margin-left: 6px;
`;

const RoomTitle = styled.div`
    margin-top: 12px;
    color: #333333;
    font-size: 14px;
    font-weight: 600;
`;

export default Home;

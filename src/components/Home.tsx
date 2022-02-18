import React from 'react';
import Brand from './Brand';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
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
                <ResultItem>
                    <RoomImage src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"></RoomImage>
                    <RoomProperties>
                        <SuperHost>SUPER HOST</SuperHost>
                        <RoomDesc>Entire apartment . 2 beds</RoomDesc>
                        <Rating>
                            <FontAwesomeIcon
                                icon={faStar}
                                color={'#EB5757'}
                                size={'sm'}
                            />
                            <RatingText>4.40</RatingText>
                        </Rating>
                    </RoomProperties>
                </ResultItem>
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
    display: grid;
    grid-template-columns: 2fr 4fr 1fr;
    margin-top: 14px;
    align-items: center;
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
    padding-top: 6.2px;
    padding-bottom: 5px;
`;
const RoomDesc = styled.div`
    font-size: 12px;
    color: #828282;
    padding-left: 10px;
`;
const Rating = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const RatingText = styled.div`
    font-size: 12px;
    color: #4f4f4f;
    font-weight: 500;
    margin-left: 6px;
`;
export default Home;

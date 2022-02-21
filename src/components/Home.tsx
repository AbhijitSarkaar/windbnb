import React from 'react';
import Brand from './Brand';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import data from '../data/data';
import styled from 'styled-components';

const Home = (props) => {
    const { handleModal, location, guests } = props;
    return (
        <HomeContainer>
            <Header>
                <Brand></Brand>
                <SearchBar
                    handleModal={handleModal}
                    location={location}
                    guests={guests}
                ></SearchBar>
            </Header>
            <SearchResultTitle>
                <Text>Stays in Finland</Text>
                <Count>12+ stays</Count>
            </SearchResultTitle>
            <SearchResultsContainer>
                {data.map((item) => {
                    return (
                        <ResultItem key={item.title}>
                            {/* <RoomImage src={item.photo}></RoomImage> */}
                            <ShimmerContainer>
                                <Shimmer />
                            </ShimmerContainer>
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
    font-family: 'Inconsolata', monospace;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 500px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

const SearchResultTitle = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (min-width: 500px) {
        margin-top: 40px;
    }
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
    @media only screen and (min-width: 500px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (min-width: 800px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
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
    font-family: 'Inconsolata', monospace;
`;

const ShimmerContainer = styled.div`
    background: lightgray;
    border-radius: 24px;
`;

const Shimmer = styled.div`
    height: 240px;
    background: #f6f7f8;
    background-image: linear-gradient(
        to right,
        #f6f7f8 0%,
        #edeef1 20%,
        #f6f7f8 40%,
        #f6f7f8 100%
    );
    background-repeat: no-repeat;
    background-size: 800px 240px;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeholderShimmer;
    animation-timing-function: linear;

    @keyframes placeholderShimmer {
        0% {
            background-position: -468px 0;
        }

        100% {
            background-position: 468px 0;
        }
    }
`;

export default Home;

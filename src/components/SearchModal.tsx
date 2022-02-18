import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faClose,
    faLocationDot,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import GuestCount from './GuestCount';
import { locations } from '../constants/SearchModal.constants';
import styled from 'styled-components';

const SearchModal = (props) => {
    const { handleModal } = props;
    const [currentTab, setCurrentTab] = useState('location');
    const [adultsCount, setAdultsCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);
    const handleSubtract = (ageGroup: string) => {
        if (ageGroup === 'adult') {
            setAdultsCount(Math.max(0, adultsCount - 1));
        } else if (ageGroup === 'children') {
            setChildrenCount(Math.max(0, childrenCount - 1));
        }
    };
    const handleAdd = (ageGroup: string) => {
        if (ageGroup === 'adult') {
            setAdultsCount(adultsCount + 1);
        } else if (ageGroup === 'children') {
            setChildrenCount(childrenCount + 1);
        }
    };

    const guestsCount = adultsCount + childrenCount;

    return (
        <SearchModalContainer>
            <SearchModalContainerRel>
                <Header>
                    <Text>Edit your search</Text>
                    <Icon>
                        <FontAwesomeIcon icon={faClose} onClick={handleModal} />
                    </Icon>
                </Header>
                <SearchAttributes>
                    <Location onClick={() => setCurrentTab('location')}>
                        <Title>LOCATION</Title>
                        <Value>Add location</Value>
                    </Location>
                    <Guests onClick={() => setCurrentTab('guests')}>
                        <Title>GUESTS</Title>
                        <Value>
                            {guestsCount || 'Add'} guest
                            {guestsCount !== 1 && 's'}
                        </Value>
                    </Guests>
                </SearchAttributes>
                <SearchAttrValues>
                    {currentTab === 'location' && (
                        <LocationContainer>
                            {locations.map((location) => (
                                <LocationRow key={location}>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    {location}
                                </LocationRow>
                            ))}
                        </LocationContainer>
                    )}
                    {currentTab === 'guests' && (
                        <GuestsContainer>
                            <GuestCount
                                title={'Adults'}
                                description={'Ages 13 or above'}
                                ageGroup={'adult'}
                                count={adultsCount}
                                handleAdd={handleAdd}
                                handleSubtract={handleSubtract}
                            ></GuestCount>

                            <GuestCount
                                title={'Children'}
                                description={'Ages 2 - 12'}
                                ageGroup={'children'}
                                count={childrenCount}
                                handleAdd={handleAdd}
                                handleSubtract={handleSubtract}
                            ></GuestCount>
                        </GuestsContainer>
                    )}
                </SearchAttrValues>
                <Footer>
                    <SearchButton>
                        <FontAwesomeIcon icon={faSearch} />
                        <SearchText>Search</SearchText>
                    </SearchButton>
                </Footer>
            </SearchModalContainerRel>
        </SearchModalContainer>
    );
};

const SearchModalContainer = styled.div`
    position: absolute;
    width: 99%;
    background: white;
    top: 0;
    box-sizing: border-box;
    padding: 12px;
    height: 80%;
`;

const SearchModalContainerRel = styled.div`
    height: 100%;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Text = styled.div`
    color: #333333;
    font-weight: bold;
    font-size: 12px;
    line-height: 1;
`;
const Icon = styled.div``;
const SearchAttributes = styled.div`
    border-radius: 16px;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    height: 115px;
    margin-top: 16px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
`;
const Location = styled.div`
    border-bottom: 1px solid #f2f2f2;
    padding: 12px 26px;
`;
const Guests = styled.div`
    padding: 12px 26px;
`;

const Title = styled.div`
    font-size: 9px;
    color: #333333;
    ilne-height: 12px;
    font-weight: 800;
`;
const Value = styled.div`
    font-size: 14px;
    line-height: 18px;
    color: #bdbdbd;
    margin-top: 6px;
`;

const SearchAttrValues = styled.div``;
const LocationContainer = styled.div`
    margin-top: 36px;
    padding-left: 26px;
    display: flex;
    flex-direction: column;
    gap: 36px;
`;
const GuestsContainer = styled.div``;
const Footer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
`;
const SearchButton = styled.div`
    height: 48px;
    width: 126px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 11px;
    font-size: 14px;
    background: rgba(235, 87, 87, 0.9);
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    color: white;
`;
const SearchText = styled.div``;

const LocationRow = styled.div`
    display: flex;
    gap: 10px;
`;

export default SearchModal;

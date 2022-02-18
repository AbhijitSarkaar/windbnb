import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { locations } from '../constants/SearchModal.constants';
import styled from 'styled-components';

const SearchModal = () => {
    return (
        <SearchModalContainer>
            <Header>
                <Text>Edit your search</Text>
                <Icon>
                    <FontAwesomeIcon icon={faClose} />
                </Icon>
            </Header>
            <SearchAttributes>
                <Location>
                    <Title>LOCATION</Title>
                    <Value>Add location</Value>
                </Location>
                <Guests>
                    <Title>GUESTS</Title>
                    <Value>Add guests</Value>
                </Guests>
            </SearchAttributes>
            <SearchAttrValues>
                <LocationContainer>
                    {locations.map((location) => (
                        <LocationRow>
                            <FontAwesomeIcon icon={faLocationDot} />
                            {location}
                        </LocationRow>
                    ))}
                </LocationContainer>
                <GuestsContainer></GuestsContainer>
            </SearchAttrValues>
        </SearchModalContainer>
    );
};

const SearchModalContainer = styled.div`
    position: absolute;
    width: 100%;
    background: white;
    top: 0;
    box-sizing: border-box;
    padding: 12px;
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

const LocationRow = styled.div`
    display: flex;
    gap: 10px;
`;

export default SearchModal;

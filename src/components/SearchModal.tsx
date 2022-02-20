import React, { useReducer } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faClose,
    faLocationDot,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import GuestCount from './GuestCount';
import {
    locations,
    SET_ADULTS_COUNT,
    SET_CHILDREN_COUNT,
    SET_LOCATION,
    SET_CURRENT_TAB,
} from '../constants/SearchModal.constants';
import styled from 'styled-components';

const initialState = {
    currentTab: 'location',
    location: '',
    adultsCount: 0,
    childrenCount: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_CURRENT_TAB:
            return {
                ...state,
                currentTab: action.value,
            };
        case SET_LOCATION:
            return {
                ...state,
                location: action.value,
                currentTab: '',
            };
        case SET_ADULTS_COUNT:
            return { ...state, adultsCount: action.value };
        case SET_CHILDREN_COUNT:
            return { ...state, childrenCount: action.value };
        default:
            return initialState;
    }
};

const SearchModal = (props) => {
    const { handleModal, handleLocationChange, handleGuestsChange } = props;
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubtract = (ageGroup: string) => {
        let a_Count = state.adultsCount,
            c_Count = state.childrenCount;
        if (ageGroup === 'adult') {
            dispatch({
                type: SET_ADULTS_COUNT,
                value: Math.max(0, state.adultsCount - 1),
            });
            a_Count = Math.max(0, state.adultsCount - 1);
        } else if (ageGroup === 'children') {
            dispatch({
                type: SET_CHILDREN_COUNT,
                value: Math.max(0, state.childrenCount - 1),
            });
            c_Count = Math.max(0, state.childrenCount - 1);
        }
        handleGuestsChange(a_Count + c_Count);
    };
    const handleAdd = (ageGroup: string) => {
        if (ageGroup === 'adult') {
            dispatch({
                type: SET_ADULTS_COUNT,
                value: state.adultsCount + 1,
            });
        } else if (ageGroup === 'children') {
            dispatch({
                type: SET_CHILDREN_COUNT,
                value: state.childrenCount + 1,
            });
        }
        handleGuestsChange(state.adultsCount + state.childrenCount + 1);
    };

    const guestsCount = state.adultsCount + state.childrenCount;

    return (
        <SearchModalContainer>
            <SearchModalContainerRel>
                <Header>
                    <Text>Edit your search</Text>
                    <Icon
                        onClick={() => {
                            handleLocationChange('');
                            handleGuestsChange(0);
                        }}
                    >
                        <FontAwesomeIcon icon={faClose} onClick={handleModal} />
                    </Icon>
                </Header>
                <SearchAttributes>
                    <Location
                        border={state.currentTab === 'location'}
                        onClick={() =>
                            dispatch({
                                type: SET_CURRENT_TAB,
                                value: 'location',
                            })
                        }
                    >
                        <Title>LOCATION</Title>
                        <Value color={state.location && 'black'}>
                            {state.location ? state.location : 'Add location'}
                        </Value>
                    </Location>
                    <Guests
                        border={state.currentTab === 'guests'}
                        onClick={() =>
                            dispatch({
                                type: SET_CURRENT_TAB,
                                value: 'guests',
                            })
                        }
                    >
                        <Title>GUESTS</Title>
                        <Value color={guestsCount && 'black'}>
                            {guestsCount || 'Add'} guest
                            {guestsCount !== 1 && 's'}
                        </Value>
                    </Guests>
                    <SearchButtonContainerMobile>
                        <SearchButton
                            onClick={() => {
                                handleModal();
                                handleLocationChange(state.location);
                                handleGuestsChange(guestsCount);
                            }}
                        >
                            <FontAwesomeIcon icon={faSearch} />
                            <SearchText>Search</SearchText>
                        </SearchButton>
                    </SearchButtonContainerMobile>
                </SearchAttributes>
                <SearchAttrValues>
                    {state.currentTab === 'location' && (
                        <LocationContainer>
                            {locations.map((location) => (
                                <LocationRow
                                    key={location}
                                    onClick={() => {
                                        dispatch({
                                            type: SET_LOCATION,
                                            value: location,
                                        });
                                        handleLocationChange(location);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    {location}
                                </LocationRow>
                            ))}
                        </LocationContainer>
                    )}
                    {state.currentTab === 'guests' && (
                        <GuestsContainer>
                            <GuestCount
                                title={'Adults'}
                                description={'Ages 13 or above'}
                                ageGroup={'adult'}
                                count={state.adultsCount}
                                handleAdd={handleAdd}
                                handleSubtract={handleSubtract}
                            ></GuestCount>

                            <GuestCount
                                title={'Children'}
                                description={'Ages 2 - 12'}
                                ageGroup={'children'}
                                count={state.childrenCount}
                                handleAdd={handleAdd}
                                handleSubtract={handleSubtract}
                            ></GuestCount>
                        </GuestsContainer>
                    )}
                </SearchAttrValues>
                <Footer>
                    <SearchButton
                        onClick={() => {
                            handleModal();
                            handleLocationChange(state.location);
                            handleGuestsChange(guestsCount);
                        }}
                    >
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
    @media only screen and (min-width: 700px) {
        height: 60%;
    }
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
const Icon = styled.div`
    cursor: pointer;
`;
const SearchAttributes = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    height: 115px;
    margin-top: 16px;
    > * {
        border-radius: 16px;
        box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
    @media only screen and (min-width: 700px) {
        height: 57px;
        grid-template-columns: 2fr 2fr 1fr;
        align-items: center;
        gap: 10px;
    }
`;
const Location = styled.div(function (props: { border: boolean }) {
    const { border } = props;
    return {
        border: border ? '1px solid black' : 'none',
        padding: '12px 26px',
    };
});
const Guests = styled.div(function (props: { border: boolean }) {
    const { border } = props;
    return {
        border: border ? '1px solid black' : 'none',
        padding: '12px 26px',
    };
});

const Title = styled.div`
    font-size: 9px;
    color: #333333;
    ilne-height: 12px;
    font-weight: 800;
`;
const Value = styled.div(function (props) {
    return {
        fontSize: '14px',
        lineHeight: '18px',
        color: props.color ? props.color : '#bdbdbd',
        marginTop: '6px',
    };
});
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
    bottom: 24px;
    width: 100%;
    display: flex;
    justify-content: center;
    @media only screen and (min-width: 700px) {
        display: none;
    }
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
    cursor: pointer;
`;
const SearchText = styled.div``;

const LocationRow = styled.div`
    display: flex;
    gap: 10px;
    cursor: pointer;
`;

const SearchButtonContainerMobile = styled.div`
    box-shadow: none;
    @media only screen and (max-width: 700px) {
        display: none;
    }
`;

export default SearchModal;

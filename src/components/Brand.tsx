import React from 'react';
import logo from '../../assets/logo.png';
import styled from 'styled-components';

const Brand = () => {
    return (
        <BrandContainer>
            <Image src={logo} />
        </BrandContainer>
    );
};

const BrandContainer = styled.div``;

const Image = styled.img``;

export default Brand;

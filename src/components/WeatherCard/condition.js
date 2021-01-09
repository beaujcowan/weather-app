import React from 'react';
import styled from '@emotion/styled';
import Reel from 'react-reel';

const Condition = ({ temp, condition }) => {
    return (
        <>
            <Reel theme={reelStyle} text={`${temp}\u00b0C`} />
            <Quality>{condition}</Quality>
        </>
    );
};

export default Condition;

const Quality = styled.h3`
    font-family: 'Merriweather', sans-serif;
    font-size: 1.2rem;
`;

const reelStyle = {
    reel: {
        height: '1.07em',
        display: 'flex',
        alignItems: 'flex-end',
        overflowY: 'hidden',
        fontSize: '2rem',
        fontWeight: '400',
        color: '#ffffff',
        lineHeight: '0.95em',
    },
    group: {
        transitionDelay: '0ms',
        transitionTimingFunction: 'ease-in-out',
        transform: 'translate(0, 0)',
        height: '1.5em',
    },
    number: {
        height: '1em',
        fontFamily: 'Fira Sans',
    },
};

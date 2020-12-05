import React from 'react';
import styled from '@emotion/styled';

const Condition = (props) => {
    const Temp = styled.h2`
        font-family: 'Fira Sana', sans-serif;
        font-size: 2rem;
        font-weight: 200;
    `;

    const Quality = styled.h3`
        font-family: 'Merriweather', sans-serif;
        font-size: 1.2rem;
    `;

    return (
        <>
            <Temp>20 &deg;C</Temp>
            <Quality>Clouds</Quality>
        </>
    );
};

export default Condition;

import React from 'react';
import styled from '@emotion/styled';

const Condition = ({ temp, condition }) => {
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
            <Temp>{temp} &deg;C</Temp>
            <Quality>{condition}</Quality>
        </>
    );
};

export default Condition;

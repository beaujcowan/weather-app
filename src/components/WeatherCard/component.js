import React from 'react';
import styled from '@emotion/styled';

// Custom components
import Location from './location';
import Condition from './condition';
import Icon from './icon';

const WeatherCard = (props) => {
    let highColor = (1 - (props.temp - 12) / 28) * 255;
    let lowColor = highColor - 150;

    const Card = styled.div`
        margin: 10px auto;
        background: linear-gradient(
            to top,
            rgb(255, ${highColor}, 0),
            rgb(255, ${lowColor}, 0)
        );
        width: 200px;
        height: 240px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border-radius: 15px;
        overflow: hidden;
    `;

    return (
        <Card>
            <Location />
            <Icon />
            <Condition />
        </Card>
    );
};

export default WeatherCard;

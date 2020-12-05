import React from 'react';
import styled from '@emotion/styled';

// Custom components
import Location from './location';
import Condition from './condition';
import Icon from './icon';

const setHotTempColor = (temp) => {
    const highColor = ((temp - 12) / 28) * 255;
    const lowColor = highColor - 150;

    return `linear-gradient(
            to top,
            rgb(255, ${highColor}, 0),
            rgb(255, ${lowColor}, 0)
        )`;
};

const setColdTempColor = (temp) => {
    const highColor = (1 - (temp + 20) / 32) * 255;
    const lowColor = highColor - 150;
    console.log(highColor);
    return `linear-gradient(
            to top,
            rgb(0, ${highColor}, 255),
            rgb(0, ${lowColor}, 255)
        )`;
};

const WeatherCard = (props) => {
    const currentTemp = parseInt(props.temp);
    const tempGradient =
        currentTemp > 12
            ? setHotTempColor(currentTemp)
            : setColdTempColor(currentTemp);

    const Card = styled.div`
        margin: 10px auto;
        background: ${tempGradient};
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

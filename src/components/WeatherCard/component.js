import React from 'react';
import styled from '@emotion/styled';

// Custom components
import Location from './location';
import Condition from './condition';
import Icon from './icon';

const setHotTempColor = (temp) => {
    let highColor = ((temp - 12) / 28) * 255;
    let lowColor = highColor - 150;

    if (highColor > 255) highColor = 255;
    if (lowColor > 255) lowColor = 255;
    if (lowColor < 0) lowColor = 0;

    return `linear-gradient(
            to top,
            rgb(255, ${lowColor}, 0),
            rgb(255, ${highColor}, 0)
        )`;
};

const setColdTempColor = (temp) => {
    let highColor = (1 - (temp + 20) / 32) * 255;
    let lowColor = highColor - 150;

    if (highColor > 255) highColor = 255;
    if (lowColor > 255) lowColor = 255;
    if (lowColor < 0) lowColor = 0;

    return `linear-gradient(
            to top,
            rgb(0, ${highColor}, 255),
            rgb(0, ${lowColor}, 255)
        )`;
};

const WeatherCard = ({ temp, condition, city, country }) => {
    const currentTemp = parseInt(temp);
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
            <Location city={city} country={country} />
            <Icon condition={condition} />
            <Condition temp={temp} condition={condition} />
        </Card>
    );
};

export default WeatherCard;

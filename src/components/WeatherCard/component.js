import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

// Custom components
import Location from './location';
import Condition from './condition';
import Icon from './icon';

const gradientAdjustment = 200;

const setHotTempColor = (temp) => {
    let highColor = ((temp - 12) / 28) * 255;
    let lowColor = highColor - gradientAdjustment;

    if (highColor > 255) highColor = 255;
    if (lowColor > 255) lowColor = 255;
    if (lowColor < 0) lowColor = Math.abs(lowColor);
    console.log(lowColor);

    return `linear-gradient(
            to top,
            rgb(255, ${Math.abs(lowColor)}, 0),
            rgb(255, ${highColor}, 0)
        )`;
};

const setColdTempColor = (temp) => {
    let highColor = (1 - (temp + 20) / 32) * 255;
    let lowColor = highColor - gradientAdjustment;

    if (highColor > 255) highColor = 255;
    if (lowColor > 255) lowColor = 255;
    if (lowColor < 0) lowColor = Math.abs(lowColor);
    console.log(lowColor);

    return `linear-gradient(
            to top,
            rgb(0, ${highColor}, 255),
            rgb(0, ${Math.abs(lowColor)}, 255)
        )`;
};

const WeatherCard = ({ temp, condition, city, country, getWeather }) => {
    const currentTemp = parseInt(temp);
    const tempGradient = currentTemp > 12 ? setHotTempColor(currentTemp) : setColdTempColor(currentTemp);

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
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <Card>
                <Location getWeather={getWeather} city={city} country={country} />
                <Icon condition={condition} />
                <Condition temp={temp} condition={condition} />
            </Card>
        </motion.div>
    );
};

export default WeatherCard;

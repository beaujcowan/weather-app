import React from 'react';
import styled from '@emotion/styled';

const Icon = (props) => {
    const weatherIcons = {
        clouds: './assets/images/cloudy.png',
        thunderstorm: './assets/images/thunderstorms.png',
        snow: './assets/images/snowing.png',
        rain: './assets/images/raining.png',
        clear: './assets/images/sunny.png',
        tornado: './assets/images/tornado.png',
        drizzle: './assets/images/drizzle.png',
        squall: './assets/images/drizzle.png',
        mist: './assets/images/mist.png',
        smoke: './assets/images/smoke.png',
        ash: './assets/images/smoke.png',
        haze: './assets/images/haze.png',
        dust: './assets/images/dust.png',
        sand: './assets/images/dust.png',
        fog: './assets/images/fog.png',
    };

    const Image = styled.img`
        width: 33%;
    `;

    const condition = props.condition;
    const icon = weatherIcons[condition.toLowerCase()] ? weatherIcons[condition.toLowerCase()] : weatherIcons.clear;

    return <Image src={icon} alt='Weather condition' />;
};

export default Icon;

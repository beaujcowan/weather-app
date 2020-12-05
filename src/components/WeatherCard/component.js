import React from "react";
import styled from "@emotion/styled";

// Custom components
import Location from "./location";
import Condition from "./condition";
import Icon from "./icon";

const WeatherCard = (props) => {
    const red = 100;

    const Card = styled.div`
        margin: 10px auto;
        background: linear-gradient(
            to bottom,
            rgba(${red}, 200, 200),
            lightblue
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

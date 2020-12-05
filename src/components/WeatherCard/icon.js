import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
    const weatherIcons = {
        clouds: "./assets/images/cloudy.png",
    };

    const Image = styled.img`
        width: 30%;
    `;

    return (
        <Image
            className='icon'
            src={weatherIcons.clouds}
            alt='Weather condition'
        />
    );
};

export default Icon;

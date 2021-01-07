import React, { useState } from 'react';
import styled from '@emotion/styled';

const Location = ({ city, country, getWeather }) => {
    const [query, setQuery] = useState('');
    const [inputMode, setInputMode] = useState(false);

    return (
        <Container>
            {!inputMode && <City onClick={() => setInputMode(true)}>{city}</City>}
            {inputMode && (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        getWeather(query);
                    }}
                >
                    <input required type='text' value={query} onChange={(e) => setQuery(e.target.value)} />
                    <button type='submit'>Search</button>
                    <button onClick={() => setInputMode(false)}>Cancel</button>
                </form>
            )}
            <Country>{country}</Country>
        </Container>
    );
};

export default Location;

const Container = styled.div`
    text-align: center;
    padding: 0.5rem;
`;

const City = styled.h2`
    font-family: 'MerriWeather', sans-serif;
    font-size: 1.6rem;
    position: relative;
    transition: all 0.25s ease-out;
    cursor: pointer;
    top: 0px;
    &:hover {
        top: -5px;
    }
`;

const Country = styled.h3`
    font-family: 'Fira Sans', sans-serif;
    font-size: 1.1rem;
`;

import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Location = ({ city, country, getWeather }) => {
    const [query, setQuery] = useState('');
    const [inputMode, setInputMode] = useState(false);
    const inputRef = useRef('');

    useEffect(() => {
        if (inputMode) {
            inputRef.current.focus();
        }
    }, [inputMode]);

    if (inputMode) {
        return (
            <Container>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <FormElement
                        onSubmit={(e) => {
                            e.preventDefault();
                            getWeather(query);
                        }}
                    >
                        <InputField ref={inputRef} required type='text' value={query} onChange={(e) => setQuery(e.target.value)} />
                        <SearchButton type='submit'>Search</SearchButton>
                        <CancelButton onClick={() => setInputMode(false)}>X</CancelButton>
                    </FormElement>
                </motion.div>
            </Container>
        );
    }

    return (
        <Container>
            <City onClick={() => setInputMode(true)}>{city}</City>
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

const FormElement = styled.form`
    display: flex;
    position: relative;
`;

const InputField = styled.input`
    width: 100px;
    padding: 5px;
    border: 0 none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    color: darkslategray;
    &:focus {
        outline: 0;
    }
`;

const SearchButton = styled.button`
    padding: 4px;
    background: darkslategrey;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-weight: 700;
    color: white;
    cursor: pointer;
`;

const CancelButton = styled.span`
    position: absolute;
    background: darkred;
    top: -5px;
    right: -12px;
    cursor: pointer;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    font-size: 0.8rem;
    border-radius: 50%;
    box-shadow: -1px 1px 4px rgba(0, 0, 0, 0.5);
`;

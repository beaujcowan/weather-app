import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard/component';

const WeatherEngine = ({ location }) => {
    // const location = 'sydney,au';
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [weather, setWeather] = useState({
        city: null,
        country: null,
        temp: null,
        condition: null,
    });

    const getWeather = async (q) => {
        setQuery('');

        setLoading(true);

        try {
            const weatherAPIKey = 'b17099557576064917ccd4945102b260';
            const apiRes = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=${weatherAPIKey}`);

            const resJSON = await apiRes.json();
            // return resJSON;
            setWeather({
                city: resJSON.name,
                country: resJSON.sys.country,
                temp: resJSON.main.temp,
                condition: resJSON.weather[0].main,
            });
        } catch (e) {
            setError(true);
        }
        setLoading(false);
    };

    const handleSearch = (e) => {
        e.preventDefault();

        getWeather(query);
    };

    useEffect(() => {
        getWeather(location);
    }, [location]);

    return (
        <div>
            {!loading && !error ? (
                <div>
                    <WeatherCard temp={weather.temp} condition={weather.condition} city={weather.city} country={weather.country} />
                    <form>
                        <input value={query} onChange={(e) => setQuery(e.target.value)} />
                        <button onClick={(e) => handleSearch(e)}>Search</button>
                    </form>
                </div>
            ) : loading ? (
                <div style={{ color: 'black' }}>Loading...</div>
            ) : !loading && error ? (
                <div style={{ color: 'black' }}>
                    There has been an error <br />
                    <button onClick={() => setError(false)}>Reset!</button>
                </div>
            ) : null}
        </div>
    );
};

export default WeatherEngine;

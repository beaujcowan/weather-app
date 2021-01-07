import React, { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard/component';
import './App.css';

function App() {
    const [query, setQuery] = useState('Sydney,au');
    const [weather, setWeather] = useState({
        city: null,
        country: null,
        temp: null,
        condition: null,
    });

    const data = async (q) => {
        console.log('data function');
        const weatherAPIKey = 'b17099557576064917ccd4945102b260';
        const apiRes = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=${weatherAPIKey}`);

        const resJSON = await apiRes.json();
        return resJSON;
    };

    const getWeather = () => {
        data(query).then((res) => {
            console.log('in data await');
            setWeather({
                city: res.name,
                country: res.sys.country,
                temp: res.main.temp,
                condition: res.weather[0].main,
            });
        });
    };

    const handleSearch = (e) => {
        e.preventDefault();

        getWeather();
    };

    useEffect(() => {
        getWeather();
    }, []);

    return (
        <div className='App'>
            <WeatherCard temp={weather.temp} condition={weather.condition} city={weather.city} country={weather.country} />
            {/* <WeatherCard temp={23} condition='Clear' city='New York' country='US' /> */}
            {/* <WeatherCard temp={-16} condition='Snow' city='Paris' country='FR' /> */}
            <form>
                <input value={query} onChange={(e) => setQuery(e.target.value)} />
                <button onClick={(e) => handleSearch(e)}>Search</button>
            </form>
        </div>
    );
}

export default App;

// Weather API: https://openweathermap.org/current
// weather api key: b17099557576064917ccd4945102b260
// API url: http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=b17099557576064917ccd4945102b260

import React from 'react';
import WeatherCard from './components/WeatherCard/component';
import './App.css';

function App() {
    return (
        <div className='App'>
            <WeatherCard
                temp={34}
                condition='Tornado'
                city='Sydney'
                country='AU'
            />
            <WeatherCard
                temp={-16}
                condition='Snow'
                city='Paris'
                country='FR'
            />
            <WeatherCard
                temp={23}
                condition='Clear'
                city='New York'
                country='US'
            />
        </div>
    );
}

export default App;

// Weather API: https://openweathermap.org/current
// weather api key: b17099557576064917ccd4945102b260
// API url: http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=b17099557576064917ccd4945102b260

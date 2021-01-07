import React from 'react';
import WeatherEngine from './components/WeatherEngine';
import './App.css';

function App() {
    return (
        <div className='App'>
            <WeatherEngine location='Sydney,au' />
        </div>
    );
}

export default App;

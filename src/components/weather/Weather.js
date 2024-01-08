import './Weather.css';
import sunny from './sunny-9-128.png';
import { useState } from 'react';

const Weather = ({ weatherData }) => {
    const { day, condition, temprature } = weatherData ;
    const { weather, setWeather } = useState({day, condition, temprature});

    return (
        <div className="Weather">
            <h3>Weather</h3> <img src={sunny} className='Weather-condition' alt='sunny' />
            <p>{weather.day} {weather.condition} {weather.temprature}</p>
            <input type="text" />
        </div>
    );
}

export default Weather;

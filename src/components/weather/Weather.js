import './Weather.css';
import sunny from './sunny-9-128.png';
import { useState } from 'react';

const Weather = ({ weatherData }) => {
    const { day, condition, temprature } = weatherData ;

    return (
        <div className="Weather">
            <h3>Weather</h3> <img src={sunny} className='Weather-condition' alt='sunny' />
            <p>{day} {condition} {temprature}</p>
        </div>
    );
}

export default Weather;

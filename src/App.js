import React, {useState} from 'react';
import axios from 'axios';

export default function App() {

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=newyork&appid=a2de3f31b6c331bd2ecedc02045e0240`

  return (
    <div className='App'>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Atlanta</p>
          </div>
          <div className='temp'>
            <h1>96°F</h1>
          </div>
          <div className='description'>
            <p>Thunderstorm</p>
          </div>
        </div>
        <div className='bottom'>
          
        </div>
      </div>
    </div>
  );
}
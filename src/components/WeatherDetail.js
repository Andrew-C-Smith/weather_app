import React from 'react';
import CitySelector from './CitySelect';

const WeatherDetail = ({weather, location}) => {

    return(
     <>   
    <div className="main-container">
        {/* <div className='search'> <CitySelector/></div> */}
            <div className="top">
                <h2>{location}</h2>
                {weather ?<h1>{weather.temperature} </h1> : 'nope'}
                {weather ?<p>wind: {weather.wind}</p> : 'nope'}
                <div className="temp">{weather ?<p>today's outlook: {weather.description}</p>: 'nope'}
                    <div className="description">
                    </div>
                </div>
            </div>
    </div>

    </>
    )  
}

export default WeatherDetail;

import React, { useState, useEffect} from 'react';
import CitySelector from '../components/CitySelect';
import WeatherDetail from '../components/WeatherDetail';


const WeatherContainer = () =>{

    const [weather, setWeather] = useState({})
    const [location, setLocation] = useState("")



    
    const searchLocation = function(event) {


        if (event.key == 'Enter'){
        fetch('https://goweather.herokuapp.com/weather/'+location)
            .then(res => res.json())
            .then(data => setWeather(data))
            // .then(setLocation(""))
            .catch(error => console.error)
        }
            console.log({weather})
            
        }
    // }

return (
    <>
     <CitySelector searchLocation={searchLocation} setLocation = {setLocation} weather={weather} location = {location}/>
    <WeatherDetail weather={weather} location = {location}></WeatherDetail>
   
    </>

)
}

export default WeatherContainer
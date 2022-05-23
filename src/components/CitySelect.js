import React from "react";
import WeatherDetail from "./WeatherDetail";

const CitySelector = ({searchLocation,location, setLocation}) => {


    return(

            <input 

            className="search"
            value= {location} 
            type="text" 
            onChange={event => setLocation(event.target.value)}
            placeholder="Enter Location" 
            onKeyPress= {searchLocation}/>

    )

}

export default CitySelector

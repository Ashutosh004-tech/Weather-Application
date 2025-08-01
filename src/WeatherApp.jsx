
import { useState } from "react"
import SearchBox from "./SearchBox"
import WeatherInfo from "./weatherInfo"

export default function WeatherApp(){
    let [ weather, setWeather] = useState({
        country: "IN",
        name: "Bhadrak",
        temp: 31.44,
        temp_max: 31.44,
        temp_min: 31.44,
        weather: "scattered clouds",
    });
let getWeather = (info) =>{
    setWeather(info);
}
    return (
        <>
            <h1 style={{textAlign : "center", color:"#0bc790"}}>Weather App By Ashutosh</h1>
            <SearchBox getWeather={getWeather}/>
            <WeatherInfo info={weather}/>
        </>
    )
}
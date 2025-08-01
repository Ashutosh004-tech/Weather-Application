
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./weather.css";


export default function SearchBox({getWeather}) {
  let [city, setCity] = useState("");
  let [err, setErr] = useState(false);


const APIUrl = import.meta.env.VITE_APIURL;
const APIKey = import.meta.env.VITE_APIKEY;


  let getWeatherInfo = async () => {
    try{
      let respone = await fetch(
        `${APIUrl}?q=${city}&appid=${APIKey}&units=metric`
      );
      let result = await respone.json();
      let weatherInfo = {
        name: result.name,
        country: result.sys.country,
        temp: result.main.temp,
        temp_max: result.main.temp_max,
        temp_min: result.main.temp_min,
        weather: result.weather[0].description,
      };
  
      return weatherInfo;
    }catch(err){
      throw err;
    }

  };

  let handledCity = (evt) => {
    setCity(evt.target.value);
  };
  let handleSubmit = async (evt) => {
    try{
      evt.preventDefault();
      console.log(city);
      setCity("");
      let info = await getWeatherInfo();
      getWeather(info);
    }catch(err){
      setErr(true)
    }
  };
  return (
    <>
      <div className="searchBox">
        <form onSubmit={handleSubmit}>
          <TextField
            id="filled-basic"
            label="City Name"
            variant="filled"
            onChange={handledCity}
            value={city}
            required
          />
          <br />
          <hr />
          <Button variant="contained" color="success" type="submit">
            Search
          </Button>
        </form>
      </div>

      {err && <p style={{color:"red" , textAlign:"center"}}>No such place exist</p>}
    </>
  );
}

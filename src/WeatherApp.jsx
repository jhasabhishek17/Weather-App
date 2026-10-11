import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
           city: "Delhi",
           feelslike: 24.84,
           temp: 25.05,
           tempMin: 25.05,
           tempMax: 25.05,
           humidity: 47,
           weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div className="weatherPage">
            <div className="weatherPanel">
                <h2>Weather App</h2>
                <p className="weatherSubtitle">Discover the weather in your city</p>
                <SearchBox updateInfo={updateInfo}/>
                <InfoBox info={weatherInfo}/>
            </div>
        </div>
    )
}
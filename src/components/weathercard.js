import React, { useEffect, useState } from 'react'

const Weathercard = ({weatherinfo, search}) => {
    const [weatherstate, setweatherstate] = useState("");
    const {
        temp, 
        pressure,
        humidity,
        weather_mood,
        name,
        speed,
        country,
        sunset,
    } = weatherinfo;
    let sec = sunset*1000;
    let date= new Date(sec);
    let timeof_sunset = `${date.getHours()}:${date.getMinutes()}`;
    useEffect(()=>{
        if(weather_mood){
            switch (weather_mood) {
                case "Rain":
                    setweatherstate("wi-rain");
                    break;
                case "Clear":
                    setweatherstate("wi-day-sunny");
                    break;
                case "Mist":
                    setweatherstate("wi-dust");
                    break;
                case "Clouds":
                    setweatherstate("wi-cloudy");
                    break;
                case "Haze":
                    setweatherstate("wi-dust");
                    break;
            
            
                default:
                    setweatherstate("wi-day-sunny");
                    break;
            }
        }
    },[weather_mood])
  return (
   <>
   <article className="widget">
    <div className="weatherIcon" style={{background: 'radial-gradient(circle, rgba(253,253,253,1) 5%, rgba(255,232,155,1) 24%, rgba(86,182,228,1) 83%, rgba(110,196,255,1) 100%)'}}>
    <i className={`wi ${weatherstate}`}></i></div>
    <div className="weatherInfo">
        <div className="temperature"><span>{temp}&deg;</span></div>
        <div className="description">
            <div className="weatherCondition">{weather_mood}</div>
            <div className="place">{name}, {country}</div>
        </div>
    </div>
    <div className="date">{new Date().toLocaleString()}</div>
    <div className="extra-temp">
        <div className="temp-info-minmax">
            <div className="two-sided-section">
                <p><i className="wi wi-sunset"></i></p>
                <p className="extra-info-leftside">{timeof_sunset} PM <br /> Sunset</p>
            </div>
            <div className="two-sided-section">
                <p><i className="wi wi-humidity"></i></p>
                <p className="extra-info-leftside">{humidity}%<br /> Humidity</p>
            </div>
        </div>
        <div className="weather-extra-info">
        <div className="two-sided-section">
                <p><i className="wi wi-rain"></i></p>
                <p className="extra-info-leftside">{pressure} hpa<br /> Pressure</p>
            </div>
            <div className="two-sided-section">
                <p><i className="wi wi-strong-wind"></i></p>
                <p className="extra-info-leftside">{speed} km/h <br /> Speed</p>
            </div>

        </div>
        
    </div>
   </article>
   </>
  )
}

export default Weathercard
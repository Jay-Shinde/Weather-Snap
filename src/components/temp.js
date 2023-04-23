//here we  first calling api for geting the lat and long of the serched city and 
// then we call api for geting the weather at that lat and long

// api call for valuse of lat and long  by city name:
//`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=a2bc6dd48d855608da08c432e344f190`

//api call for weather by vlause of lat and long
//`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a2bc6dd48d855608da08c432e344f190&units=metric`
import React, { useEffect, useState } from 'react'
import "./style.css"
import Weathercard from './weathercard'

const Temp = () => {
    const [search, setSearch] = useState("Mumbai")
    const [weatherinfo, setweatherinfo] = useState({});
   
    const getinfo = async ()=>{
       
        try {
            let url1 = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=a2bc6dd48d855608da08c432e344f190`;

            const response1 = await fetch(url1);
            const data1 = await response1.json();
            
            var lat = data1[0].lat;
            var lon = data1[0].lon;
            

            let url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a2bc6dd48d855608da08c432e344f190&units=metric`;
            const res2 = await fetch(url2);
            const data2 = await res2.json();

            const {temp, pressure,humidity} = data2.main;
            const {main: weather_mood} = data2.weather[0];
            const {name} = data2;
            const {speed} = data2.wind;
            const {country, sunset} = data2.sys;
            const fetchedweather  = {
                temp, 
                pressure,
                humidity,
                weather_mood,
                name,
                speed,
                country,
                sunset,
            }
            setweatherinfo(fetchedweather);
            

            
            
            

            
        } catch (error) {
            console.log(error);
            
        }

    }
    useEffect(()=>{
        getinfo();
// eslint-disable-next-line
    },[])

  
  
  
    return (

   <>
   <div className="wrap">
    <div className="search">
        <input type="search" placeholder='Search...' autoFocus id='search' className='searchTerm' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
            <button className="searchButton" type='button' onClick={getinfo}> Search</button>

    </div>
   </div>
   <Weathercard weatherinfo={weatherinfo}/>
   </>
  )
}

export default Temp
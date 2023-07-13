const Weathercard = ({ weatherinfo, search }) => {
  const {
    temp,
    pressure,
    humidity, 
    weather_mood,
    name,
    speed,
    country,
    sunset,
    icon,
  } = weatherinfo;
  let sec = sunset * 1000;
  let date = new Date(sec);
  let timeof_sunset = `${date.getHours()}:${date.getMinutes()}`;
  let urlforicon = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  

  return (
    <>
      <article className="widget">
        <div
          className="weatherIcon"
          style={{
            background:
              "radial-gradient(circle, rgba(23,184,206,1) 0%, rgba(13,95,107,1) 76%)",
          }}
        >
          <img src={urlforicon} alt="imagehere" style={{height:'150px'}}/>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weather_mood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-sunset"></i>
              </p>
              <p className="extra-info-leftside">
                {timeof_sunset} PM <br /> Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className="wi wi-humidity"></i>
              </p>
              <p className="extra-info-leftside">
                {humidity}%<br /> Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-rain"></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} hpa
                <br /> Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className="wi wi-strong-wind"></i>
              </p>
              <p className="extra-info-leftside">
                {speed} km/h <br /> Speed
              </p>
            </div>
          </div>
        </div>
      </article>
      

    </>
  );
};

export default Weathercard;

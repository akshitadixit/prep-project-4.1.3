import React from 'react';
import {Droplet, Wind, Thermometer} from 'react-feather';
import HourlyForecast from '../helpers/HourlyForecast';
import DailyForecast from '../helpers/DailyForecast';
import weatherIcon from '../helpers/weatherIcon';

const WeatherCard = ({results,city}) => {

  console.log(city);

  let temp=new Date(city.dt);
  let temp1=temp.getMinutes();

  console.log(temp1);

    return (
      <>
            <div className="weather-card">
              <div className="weatherCard-current ">
                <h2>Weather in {city.name}, {city.sys.country} 
                <span className="weathercurrent-time">{temp.getHours()}:{temp.getMinutes()}</span>
                </h2>
                <div className="weather-currentInner">
                  <div className="weathercurrent-left">
                  {weatherIcon(city.weather[0].icon)}
                  <h1 className="weathercurrent-temp">{city.main.feels_like} °C</h1>
                  <h3 className="weathercurrent-desc">{city.weather[0].main}</h3>
                  </div>
                  <div className="othercurrent-info">
                    <div className="otherinfo-child">
                      <Droplet className="otherinfo-icons" size={30}/>
                      <div>
                        <strong>Humidity</strong>
                        <br/>
                        <span className="otherinfo-childspan">{city.main.humidity} %</span>
                      </div>
                    </div>
                    <div className="otherinfo-child">
                      <Thermometer className="otherinfo-icons" size={30}/>
                      <div>
                        <strong>Temp</strong>
                        <br/>
                        <span className="otherinfo-childspan">{city.main.temp_max}/{city.main.temp_min} °C</span>
                      </div>
                    </div>
                    <div className="otherinfo-child">
                      <Wind className="otherinfo-icons" size={30}/>
                      <div>
                        <strong>Wind Speed</strong>
                        <br/>
                        <span className="otherinfo-childspan">{city.main.humidity} mt/s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hourly-chart">
                <h2>Hourly Forecast</h2>
                <div>
                  <HourlyForecast results={results}/>
                </div>
              </div>
            </div>
            <DailyForecast results={results}/>
      </>
    )
}

export default WeatherCard

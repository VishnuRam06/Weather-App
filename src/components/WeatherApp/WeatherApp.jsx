import React from 'react'
import './WeatherApp.css'

import search_icon from '../Assets/search.jpeg'
import clear_icon from '../Assets/clear.jpeg'
import cloudey_icon from '../Assets/cloudey.jpeg'
import drizzle_icon from '../Assets/drizzle.jpeg'
import humidity_icon from '../Assets/humidity.jpeg'
import rain_icon from '../Assets/rain.jpeg'
import snow_icon from '../Assets/snow.jpeg'
import feel_like from '../Assets/feel_like.jpeg'


const WeatherApp = () => {
  const search = () =>{
    const element = document.getElementsByClassName('cityinput')
    if (element.value === "")
    {
      return 0;
    }
    let url = `http://127.0.0.1:8000/getweather/${element.value}`

    let response = fetch(url).then(res => console.log(res,"aaaaa"));
    console.log(response)
    let data = response.json();

    const humidity = document.getElementsByClassName('humidity-percent')
    const feels_like = document.getElementsByClassName('feels_like')
    const temprature = document.getElementsByClassName('weather-temp')
    const location = document.getElementsByClassName('weather-location')
    const possible = document.getElementsByClassName('weather-possible')

    humidity.innerHTML = data.humidity + "%"
    feels_like.innerHTML = data.feels_like_celsius + "°C"
    temprature.innerHTML = data.temperature_celsius + "°C"
    location.innerHTML = data.location_name
    possible.innerHTML = data.condition_text

  }

  return (
    <div className='container'>
        <div className='top-bar'>
            <input type='text' className='cityinput' placeholder='Enter the city name'></input>
            <div className='search_icon' onClick={()=>{search()}}>
                <img src={search_icon} alt="logo" width='67px'/>
            </div>
        </div>
        <div className='weather-image'>
          <img src={cloudey_icon} alt=''></img>
        </div>
        <div className='weather-temp'>24.c</div>
        <div className='weather-location'>coimbatore</div>
        <div className='weather-possible'>patchy rain</div>
        <div className='data-container'>
          <div className='element'>
            <img src={humidity_icon} alt='' className='icon' width='100px'></img>
            <div className='data'>
              <div className='humidity-percent'>64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className='element'>
            <img src={feel_like} alt='' className='icon' width='100px'></img>
            <div className='data'>
              <div className='feels_like'>31.9</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WeatherApp
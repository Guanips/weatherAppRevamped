import { useEffect, useState} from 'react'
import './App.css'
import MainTempDisplay from './components/mainTempDisplay/MainTempDisplay.jsx'
import SecondaryTempDisplay from './components/secondaryTempDisplay/SecondaryTempDisplay.jsx'
import ExtraInfoDisplay from './components/extraInfoDisplay/ExtraInfoDisplay'
import WeatherPhrase from './components/weatherPhrase/WeatherPhrase'

function App() {
  const [weatherData, setWeatherData] = useState({})
  const [loadingState, setLoadingState] = useState(true)

  var lat = 0
  var lon = 0

  useEffect(() => {
    console.log(lon)
    console.log(lat)
  
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(geoSuccess, geoFail)
    }
  
    function geoSuccess(position){
      lat = position.coords.latitude;
      lon = position.coords.longitude;

      fetch(`https://api.api-ninjas.com/v1/weather?lat=${lat}&lon=${lon}`, {
        method:'GET',
        headers: { 'X-Api-Key': 'VnghSB/uK7G7fN9L/sUrbQ==WJ1W7hXRzREo4GfJ'},
      })
      .then(res=>res.json())
      .then((res)=>{
          setWeatherData(res)
          setLoadingState(false)
      })
    }

    function geoFail(){
      fetch(`https://api.api-ninjas.com/v1/weather?lat=${lat}&lon=${lon}`, {
        method:'GET',
        headers: { 'X-Api-Key': 'VnghSB/uK7G7fN9L/sUrbQ==WJ1W7hXRzREo4GfJ'},
      })
      .then(res=>res.json())
      .then((res)=>{
          setWeatherData(res)
          setLoadingState(false)
      })
    }
  }, [])

  return (
    <>
    <div className='absoluteContainer'>
      {loadingState ? <p>loading</p>: 
        <div className='mainContainer'>
          <div className='weatherPhraseContainer'>
            <WeatherPhrase {...weatherData}/>
          </div>
          <div className='weatherInfoContainer'>
            <div className='tempInfoContainer'>
              <div className='mainTempContainer'>
                <MainTempDisplay data={`${weatherData.temp}°C`}/>
                <ExtraInfoDisplay title="Feels Like: " data={`${weatherData.feels_like}°C`}/>
              </div>
        
              <div className='secondaryTempContainer'>
                <SecondaryTempDisplay title="Max Temp: " data={`${weatherData.max_temp}°C`}/>
                <SecondaryTempDisplay title="Min Temp: " data={`${weatherData.min_temp}°C`}/>
              </div>
            </div>
              <div className='extraInfoContainer'>
                <ExtraInfoDisplay title="Clouds: " data={`${weatherData.cloud_pct}%`}/>
                <ExtraInfoDisplay title="Humidity: " data={`${weatherData.humidity}%`}/>
                <ExtraInfoDisplay title="Wind: " data={`${parseInt(weatherData.wind_speed)} KM/H`}/>
              </div>
          </div> 
        </div> 
      }
    </div>
    </>
  )
}

export default App

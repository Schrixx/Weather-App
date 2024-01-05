import React, { useEffect, useState } from 'react'
import Cloudy from 'assets/weather/cloudy.svg'
import PartlyCloudy from 'assets/weather/cloud-sun.svg'
import Rainy from 'assets/weather/rainy.svg'
import Showers from 'assets/weather/showers.svg'
import Snowy from 'assets/weather/snowy.svg'
import Stormy from 'assets/weather/stormy.svg'
import Sunny from 'assets/weather/sun.svg'

import IconMap from "components/iconMap"
import TableRow from '../components/TableRow'
import Card from 'components/Card'
import { QueryWeather } from '../data/GetWeather'

const Home = () => {

  const [currentWeather, setCurrentWeather] = useState({})
  const [dailyWeather, setDailyWeather] = useState({})
  const [hourlyWeather, setHourlyWeather] = useState({})

  // let current = {}
  // let daily = {}
  // let hourly = {}


  useEffect(() => {
    QueryWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone)
    .then(data => {
      if (data !== undefined) setWeatherData(data)
    })
    .catch(error => {
      console.error(error)
      alert("Error getting weather.")
    })
  }, [])

  // useEffect(() => {
  //   current = weatherData.current
  //   console.log(current)
  //   daily = weatherData.daily
  //   hourly = weatherData.hourly
  // }, [weatherData])

  function setWeatherData({ current }) {
    currentWeather !== undefined ? setCurrentWeather(current) : null
    dailyWeather !== undefined ? setDailyWeather(current) : null
    hourlyWeather !== undefined ? setHourlyWeather(current) : null
  }

  const tempObj = {
    day: "Thursday",
    dayValue: "3 PM",
    temp: "31",
    fltemp: "25",
    wind: "26",
    precip: "0"
  }

  return (
    <>
      <div className='px-4 max-w-5xl mx-auto my-16 tracking-wide'>
        <header className="relative flex justify-center">
          <div className='absolute top-0 right-0 bottom-0 left-0 -z-10 bg-surface border-2 border-surfaceOutline rounded-xl' />
          <div className="w-full m-8 flex items-center justify-around">
            {/* Header Left */}
            <div className='flex items-center'>
              <img src={Sunny} className='h-60 w-auto object-contain' />
              <div className='flex'>
                <span className='text-6xl ml-8'>{currentWeather.currentTemp}</span>&deg;
              </div>
            </div>
            <div className='w-[2px] h-3/4 bg-white' />
            {/* Current Info Groups */}
            <div className='grid grid-cols-3 grid-flow-row gap-4'>
              <div className='flex flex-col items-center'>
                <div className='text-lg'>HIGH</div>
                <div><span>{currentWeather.highTemp}</span>&deg;</div>
              </div>
              <div className='flex flex-col items-center'>
                <div className='text-lg'>FL HIGH</div>
                <div><span>{currentWeather.highFeelsLike}</span>&deg;</div>
              </div>
              <div className='flex flex-col items-center'>
                <div className='text-lg'>WIND</div>
                <div><span>{currentWeather.windSpeed}</span><span className="text-base">mph</span></div>
              </div>
              <div className='flex flex-col items-center'>
                <div className='text-lg'>LOW</div>
                <div><span>{currentWeather.lowTemp}</span>&deg;</div>
              </div>
              <div className='flex flex-col items-center'>
                <div className='text-lg'>FL LOW</div>
                <div><span>{currentWeather.lowFeelsLike}</span>&deg;</div>
              </div>
              <div className='flex flex-col items-center'>
                <div className='text-lg'>PRECIP</div>
                <div><span>{currentWeather.precip}</span><span className="text-base">in</span></div>
              </div>
            </div>
          </div>
        </header>
      </div>
      
      <div className='flex flex-col items-center w-full'>
        <section className='max-w-5xl grid grid-cols-4 grid-flow-row justify-center p-4 gap-4'>
          <Card day="Monday" weather={Cloudy} />
          <Card day="Tuesday" weather={PartlyCloudy} />
          <Card day="Wednesday" weather={Rainy} />
          <Card day="Thurday" weather={Showers} />
          <Card day="Friday" weather={Snowy} />
          <Card day="Saturday" weather={Stormy} />
          <Card day="Sunday" weather={Sunny} />
        </section>

        <table className='my-16 border-separate rounded-xl'>
          <tbody className='w-full text-center border-spacing-0'>
            <TableRow rowInfo={tempObj} weather={Cloudy} />
            <TableRow rowInfo={tempObj} weather={Cloudy} />
            <TableRow rowInfo={tempObj} weather={Cloudy} />
            <TableRow rowInfo={tempObj} weather={Cloudy} />
            <TableRow rowInfo={tempObj} weather={Cloudy} />
            <TableRow rowInfo={tempObj} weather={Cloudy} />
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Home
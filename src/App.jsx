import Header from 'components/Header';
import Weather from 'components/Weather';
import { GetWeather } from './data/GetWeather';

function App() {

  function obtainWeather() {
    GetWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone)
    .then(renderWeather)
    .catch(e => {
      console.error(e)
      alert("Error getting weather.")
    })
  }

  function renderWeather({ current, daily, hourly }) {
    renderCurrentWeather(current)
    // renderDailyWeather(daily)
    // renderHourlyWeather(hourly)
  }
  
  function setValue(selector, value, { parent = document } = {}) {
    parent.querySelector(`[data-${selector}]`).textContent = value
  }

  function getIconUrl(iconCode) {
    return `icons/${iconCode}.svg`
  }

  const currentIcon = document.querySelector("[data-current-icon]")
  function renderCurrentWeather(current) {
    currentIcon.src = getIconUrl(current.IconCode)
    setValue("current-temp", current.currentTemp)
    setValue("current-high", current.highTemp)
    setValue("current-low", current.lowTemp)
    setValue("current-fl-high", current.highFeelsLike)
    setValue("current-fl-low", current.lowFeelsLike)
    setValue("current-wind", current.windSpeed)
    setValue("current-precip", current.precip)
  }

  return (
    <>
      <Header />
      <Weather />
      <div className='max-w-fit mx-auto'>
        <button type='button' onClick={obtainWeather} className='mb-16 bg-white rounded-xl border-2 border-l-rose-100 text-black'>Weather</button>
      </div>
    </>
  )
}

export default App

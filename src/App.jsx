import Header from 'components/Header';
import Weather from 'components/Weather';
import { GetWeather } from './data/GetWeather';

function App() {

  GetWeather(10, Intl.DateTimeFormat().resolvedOptions().timeZone)

  return (
    <>
      <Header />
      <Weather />
    </>
  )
}

export default App

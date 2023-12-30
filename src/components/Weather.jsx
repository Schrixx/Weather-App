import React from 'react'
import Cloudy from 'assets/weather/cloudy.svg'
import PartlyCloudy from 'assets/weather/partlyCloudy.svg'
import Rainy from 'assets/weather/rainy.svg'
import Showers from 'assets/weather/showers.svg'
import Snowy from 'assets/weather/snowy.svg'
import Stormy from 'assets/weather/stormy.svg'
import Sunny from 'assets/weather/sunny.svg'

import TableRow from './factories/TableRow'
import Card from 'components/factories/Card'

const DayCards = () => {
  const tempObj = {
    day: "Thursday",
    dayValue: "3 PM",
    temp: "31",
    fltemp: "25",
    wind: "26",
    precip: "0"
  }

  return (
    <div className='flex flex-col items-center w-full'>
      <section data-day-section className='max-w-5xl grid grid-cols-4 grid-flow-row justify-center p-4 gap-4'>
        <Card day="Monday" weather={Cloudy} />
        <Card day="Tuesday" weather={PartlyCloudy} />
        <Card day="Wednesday" weather={Rainy} />
        <Card day="Thurday" weather={Showers} />
        <Card day="Friday" weather={Snowy} />
        <Card day="Saturday" weather={Stormy} />
        <Card day="Sunday" weather={Sunny} />
      </section>

      <template></template>

      <table className='my-16 border-separate rounded-xl'>
        <tbody data-hour-section className='w-full text-center border-spacing-0'>
          <TableRow rowInfo={tempObj} weather={Cloudy} />
          <TableRow rowInfo={tempObj} weather={Cloudy} />
          <TableRow rowInfo={tempObj} weather={Cloudy} />
          <TableRow rowInfo={tempObj} weather={Cloudy} />
          <TableRow rowInfo={tempObj} weather={Cloudy} />
          <TableRow rowInfo={tempObj} weather={Cloudy} />
        </tbody>
      </table>
    </div>
  )
}

export default DayCards
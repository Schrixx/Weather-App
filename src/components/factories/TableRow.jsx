import React from 'react'

const TableRow = ({ rowInfo, weather }) => {
  const { day, dayValue, temp, fltemp, wind, precip } = rowInfo

  return (
    <>
      <tr className=''>
        <td>
          <div>
            <div>{day}</div>
            <div>{dayValue}</div>
          </div>
        </td>
        <td>
          <img src={weather} alt="weather" className='h-24 w-auto object-contain' />
        </td>
        <td>
          <div>TEMP</div>
          <div>{temp}&deg;</div>
        </td>
        <td>
          <div>FL TEMP</div>
          <div>{fltemp}&deg;</div>
        </td>
        <td>
          <div>WIND</div>
          <div>{wind}<span>mph</span></div>
        </td>
        <td>
          <div>PRECIP</div>
          <div>{precip}<span>in</span></div>
        </td>
      </tr>
    </>
  )
}

export default TableRow
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const TableRow = ({ rowInfo, weather }) => {
  const { day, dayValue, temp, fltemp, wind, precip } = rowInfo

  return (
    <tr key={uuidv4()} className='group bg-surfaceOutline odd:bg-surface'>
      <td className='p-1 group-first:rounded-tl-xl group-last:rounded-bl-xl'>
        <div>
          <div>{day}</div>
          <div>{dayValue}</div>
        </div>
      </td>
      <td className='p-1'>
        <img src={weather} alt="weather" className='h-24 w-auto object-contain' />
      </td>
      <td className='p-1'>
        <div>TEMP</div>
        <div>{temp}&deg;</div>
      </td>
      <td className='p-1'>
        <div>FL TEMP</div>
        <div>{fltemp}&deg;</div>
      </td>
      <td className='p-1'>
        <div>WIND</div>
        <div>{wind}<span>mph</span></div>
      </td>
      <td className='p-1 group-first:rounded-tr-xl group-last:rounded-br-xl'>
        <div>PRECIP</div>
        <div>{precip}<span>in</span></div>
      </td>
    </tr>
  )
}

export default TableRow
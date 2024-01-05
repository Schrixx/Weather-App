import React from 'react'
import { v4 as uuidv4 } from 'uuid'

function Card({ weather, day }) {
  return (
    <div key={uuidv4()} className='border-2 border-surfaceOutline flex flex-col items-center rounded-lg bg-surface'>
        <img src={weather} alt="weather" className='h-32 w-auto object-contain' />
        <div>{day}</div>
        <div>32&deg;</div>
    </div>
  )
}

export default Card
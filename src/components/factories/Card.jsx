import React from 'react'

function Card({ weather, day }) {
  return (
    <div className='border-2 border-surfaceOutline flex flex-col items-center rounded-lg bg-surface'>
        <img src={weather} alt="weather" className='h-32 w-auto object-contain' />
        <div>{day}</div>
        <div>32&deg;</div>
    </div>
  )
}

export default Card
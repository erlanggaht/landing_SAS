import React from 'react'
import { Timer } from '../atoms/timer'

export default function Timeday() {

  
  return (
    <>
          <div className="flex gap-2 sm:items-center items-center flex-wrap">
            <h2 className="font-bold">Deal Of the day</h2>
            <p className="pl-3">offers end</p>
            <div className='hidden sm:block'>{<Timer/>}</div>
          </div>
          <div className='sm:hidden'>{<Timer/>}</div>
          <div><p className='text-right'>View All</p></div>
          </>
  )
}

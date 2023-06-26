import React from 'react'
import { Timer } from '../atoms/timer'

export default function Timeday() {

  
  return (
    <>
          <div className="flex gap-2 sm:items-center items-center flex-wrap">
            <h2 className="font-bold">Promo Hari Ini</h2>
            <p className="pl-3">penawaran dimulai</p>
            <div className='hidden sm:block'>{<Timer/>}</div>
          </div>
          <div className='sm:hidden'>{<Timer/>}</div>
          <div><p className='text-right'>Lihat Semua</p></div>
          </>
  )
}

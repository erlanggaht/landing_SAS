import CallUsIcon from '@/app/assets/icons/callus'
import SendIcon from '@/app/assets/icons/send'
import React from 'react'

export default function Send_Me() {
  return (
    <>
         <h1 className="text-2xl  sm:text-4xl font-bold text-dark">Send email</h1>
        <div className="relative">
        <div className='flex sm:block'>
        <input placeholder="Email address" className="py-3 px-4 bg-yellowBase text-sm  text-white placeholder:text-white sm:w-[320px] w-[150px] "/>
        <button className="right-2 top-[13px] absolute sm:hidden"><SendIcon props={{w:20,h:20,fill:'white'}}/></button>
        </div>
        <button className="hidden sm:block right-2 top-[13px] absolute"><SendIcon props={{w:20,h:20,fill:'white'}}/></button>
        </div>
        <div className="font-bold text-sm flex items-center text-dark">
          <CallUsIcon props={{w:62,h:62,fill:'#181818'}}/>
          <div>
          <p>Call Us 08:30 - 21:00</p>
          <p> (+62) 81324063363 </p>
          </div>
        </div>
    </>
  )
}

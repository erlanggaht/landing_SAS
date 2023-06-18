import React from 'react'
import Button from '../atoms/button'
import Image from 'next/image'
import gadget from '@/app/assets/gadget.png'

export default function Hero() {
    return (
        <section className='hero bg-gradient-to-r from-yellowBase to-otherColor py-20 px-16 sm:p-20 relative '>

            <figure  className='absolute drop-shadow right-0 sm:right-12 -bottom-12 scale-90 sm:scale-100 opacity-90  '>
                <Image src={gadget} width={520} height={520} alt='gadgetImage'/>
            </figure>

            <div>
                <h1 className='sm:text-6xl text-5xl font-bold drop-shadow leading-tight text-white'>Your Trusted Gadgets<br />device partner</h1>
                <p className='sm:w-[460px] py-3 text-[#F1F1F1] font-light'>There are many variations of passages of Lorem ipsum available, but the majoity have suffered alteration</p>
            </div>

            <div className='mt-9 sm:mt-20 flex relative'>
            <Button props={{text:"We Asked",style:"bg-base  font-normal px-6 sm:px-10 py-3  text-dark  shadow-xl drop-shadow rounded hover:opacity-80"}}/>
            <Button props={{text:"Explore More",style:"bg-base  font-normal px-6 sm:px-10 py-3  text-dark  shadow-xl drop-shadow ml-2 rounded hover:opacity-80"}}/>
            </div>
        </section>
    )
}

'use client'

import ig from '@/app/assets/icons/ig.svg'
import Image from 'next/image'


interface PropsSwipperRef {
  props: {
    swiperRef: any,
    img_consult : string,
    name_consult : string,
    position : string,
    deskripsi : string,
    instagram : string
  }
}

export default function Consultans({ props }: PropsSwipperRef) {
  const { swiperRef,img_consult,name_consult,position,deskripsi,instagram} = props
  return (
    <>
      <section className='relative flex sm:items-center sm:justify-center sm:gap-5 lg:flex-row flex-col-reverse  p-6 my-16 mx-4 shadow active:bg-base active:shadow-none group'>
        <div className='w-full lg:w-[650px]'>
          <div className=' px-0 sm:px-8 pt-8'>
            <div className='socialmedia py-3 flex gap-1'>
          <div className='flex items-center gap-2'><Image src={ig} alt={'ig'} width={32} height={32}/> <span>{instagram}</span></div>
          </div>{deskripsi}</div>
          <div className='by_consultant mt-12 px-3 text-right sm:text-left sm:px-12 pb-8'>
            <p className='text-lg font-semibold '>{ name_consult}</p>
            <p className='text-md'>{position}</p>
          </div>
        </div>

        <div className={`imgConsult w-full sm:w-[280px] sm:h-[280px] h-[300px] rounded-xl  relative mx-auto 
                 before:w-full before:h-full before:absolute before:bg-cover  before:object-contain before:sm:rounded-3xl  shadow
               bg-cover bg-center`} style={{backgroundImage:`url('${img_consult}')`}}>
                  
        </div>
         <button onClick={() => (swiperRef as any).current.slideNext()} className='absolute sm:right-5 sm:-top-60 sm:bottom-0'>
            <span className='rounded-full bg-dark text-white py-1 px-2'>&gt;</span>
          </button>
      </section>
    </>
  )
}

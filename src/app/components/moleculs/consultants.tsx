'use client'

import { StaticImageData } from "next/image"


interface PropsSwipperRef {
  props: {
    swiperRef: any,
    img_consult : string,
    name_consult : string,
    position : string
  }
}

export default function Consultans({ props }: PropsSwipperRef) {
  const { swiperRef,img_consult,name_consult,position } = props

  return (
    <>
      <section className='flex sm:items-center sm:justify-center sm:gap-5 lg:flex-row flex-col-reverse  p-6 my-16 mx-4 shadow'>
        <div className='w-full lg:w-[650px]'>
          <div className=' px-0 sm:px-8 pt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quasi! Ab suscipit deserunt cupiditate inventore ratione omnis consequatur dolores aliquid praesentium provident nulla temporibus error alias, sit et dignissimos voluptate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis veniam repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate id, laboriosam odio eaque provident libero?</div>
          <div className='by_consultant mt-12 px-3 text-right sm:text-left sm:px-12 pb-8'>
            <p className='text-lg font-semibold '>{ name_consult}</p>
            <p className='text-md'>{position}</p>
          </div>
        </div>

        <div className={`imgConsult w-full sm:w-[280px] sm:h-[280px] h-[400px] rounded-xl  relative mx-auto
                 before:w-full before:h-full before:absolute before:bg-cover  before:object-contain before:sm:rounded-3xl  shadow 
               ${img_consult}`} >
                  
         <button onClick={() => (swiperRef as any).current.slideNext()} className='absolute sm:-right-11 sm:top-0 sm:bottom-0'>
            <span className='rounded-full bg-dark text-white py-1 px-2'>&gt;</span>
          </button>
        </div>
      </section>
    </>
  )
}

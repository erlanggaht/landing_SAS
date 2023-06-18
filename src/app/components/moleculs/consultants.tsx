import React from 'react'

export default function Consultans() {
  return (
    <>
        <section className='flex sm:items-center sm:justify-center sm:gap-5 lg:flex-row flex-col-reverse  p-6 my-16'>
                <div className='w-full lg:w-[650px]'>
                  <div className='text-justify px-12 pt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quasi! Ab suscipit deserunt cupiditate inventore ratione omnis consequatur dolores aliquid praesentium provident nulla temporibus error alias, sit et dignissimos voluptate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis veniam repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate id, laboriosam odio eaque provident libero?</div>
                  <div className='by_consultant mt-12 px-12 pb-8'>
                    <p className='text-lg font-semibold'>Erlangga Hidayatullah</p>
                    <p className='text-md'>product consultant</p>
                  </div>
                </div>

                <div className='w-[280px] h-[280px] rounded-xl  relative
                before:bg-erlangga before:w-full before:h-full before:absolute before:bg-cover before:object-contain before:rounded-3xl shadow 
                '>
                  
                </div>
        </section>
    </>
  )
}

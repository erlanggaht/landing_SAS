'use client'
import React, { useEffect, useState } from 'react'
import GetKaryawan from './API/getKaryawan'
import { destroyCookie } from 'nookies'
import { useRouter } from 'next/navigation'
import { URL_HOST_FRONT } from '@/app/config/url_host'

export default function Admin() {
  const router = useRouter()
  const [data,setdata] = useState([] as any[])
  
  useEffect(()=>{
   GetKaryawan()
   .then((res) => setdata(res.data))
   .catch((err) => {
        destroyCookie(null,'token',{
          path:'/',
          secure : true
          })
        router.push(`${URL_HOST_FRONT}/pages/admin/login`)
   })
  },[])

  return (
    <>

      {data && data.map((m,i) => {
              return (
                <>
              <h1 className='text-4xl p-4'>Hello, <span className='font-bold text-dark'>{m.nama}</span></h1>
              <section key={i} className='bg-white font-light capitalize shadow rounde-md p-4 mx-6'>
                <div className='flex'>
                  <p className='rw-lf p-2 w-[120px] border-b border-b-gray-300 '>id</p> 
                  <p className='rw-rg p-2 w-[320px] border-b border-b-gray-300 '>{m.id}</p>
                </div>
                <div className='flex '>
                  <p className='rw-lf p-2 w-[120px] border-b border-b-gray-300'>nama</p> 
                  <p className='rw-rg p-2 w-[320px] border-b  border-b-gray-300'>{m.nama}</p>
                </div>
                <div className='flex '>
                  <p className='rw-lf p-2 w-[120px] border-b border-b-gray-300'>deskripsi</p> 
                  <p className='rw-rg p-2 w-[320px] border-b border-b-gray-300'>{m.deskripsi}</p>
                </div>
                <div className='flex '>
                  <p className='rw-lf p-2 w-[120px]'>posisi</p> 
                  <p className='rw-rg p-2 w-[320px]'>{m.posisi || '-'}</p>
                </div>
                </section>
                </>
              )
              
      })}
    
    </>
  )
}

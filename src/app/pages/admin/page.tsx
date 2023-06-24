'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {parseCookies,destroyCookie} from 'nookies'
import { useRouter } from 'next/navigation'
import { URL_HOST_API, URL_HOST_FRONT } from '@/app/config/url_host'

export default function Admin() {
  const router = useRouter()
  const token = parseCookies()
  const [data,setdata] = useState([] as any[])
  
  useEffect(()=>{
    async function asy (){
    await axios(`${URL_HOST_API}/getKaryawanToken`,{
      method : "GET",
      headers : {
        Authorization : `Bearer ${token.token}`
      }
    }).then((res) =>{
      setdata(res.data)
    }).catch((er) => {
      if(er) destroyCookie(null,'token',{
        path:'/',
        secure : true
      })
      router.replace (`${URL_HOST_FRONT}/pages/admin/login`)
    })
  }
  asy()
  },[])
  return (
    <>
      <h1>Admin</h1>

      {data && data.map((m,i) => {
              return <ul key={i}>
                id: {m.id}<br/>
                nama : {m.nama}<br/>
                deskripsi : {m.deskripsi}<br/>
                posisi : {m.posisi}<br/>
                </ul>
      })}
    
    </>
  )
}

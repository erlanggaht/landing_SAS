'use client'
import {  setCookie } from "nookies"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context"
import axios from "axios"
import { FormEvent } from "react"
import { URL_HOST_API,URL_HOST_FRONT } from "@/app/config/url_host"
interface PropsLoginSubmit {

    username : string,
    password : string,
    router : AppRouterInstance,
 }
  
  export default async function LoginSubmit(e : FormEvent,props :PropsLoginSubmit ) {
    const {username,password,router} = props
   
    e.preventDefault();
    const add_account = await axios(`${URL_HOST_API}/loginAkun`,{
      method : "POST",
      data : {
        username : username,
        password : password.toString(),        
      },
    }).then(async (res) =>{
       alert(res.data.message)
       setCookie(null,'token',res.data.token,{
        secure : true,
        path: "/",
       })
         router.replace(`${URL_HOST_FRONT}/pages/admin/`)
    }).catch((err) => alert(err.response &&  err.response.data.message ))
  }
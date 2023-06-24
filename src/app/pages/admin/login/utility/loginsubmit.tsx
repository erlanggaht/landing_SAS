import { setCookie } from "nookies"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context"
import axios from "axios"
import { FormEvent } from "react"

interface PropsLoginSubmit {

    username : string,
    password : string,
    router : AppRouterInstance
 }
  
  export default async function LoginSubmit(e : FormEvent,props :PropsLoginSubmit ) {
    const {username,password,router} = props
    e.preventDefault();
    const add_account = await axios('http://localhost:3002/loginAkun',{
      method : "POST",
      data : {
        username : username,
        password : password.toString(),        
      },
    }).then((res) =>{
       alert(res.data.message)
       setCookie(null,'token',res.data.token,{
        secure : true,
        path: "/"
       })
      router.push('http://localhost:3000/pages/admin/')
    }).catch((err) => alert(err.response && err.response.data.message))
  }
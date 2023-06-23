'use client'
import axios from "axios"
import { ChangeEvent, FormEvent, useState } from "react"
import {useRouter} from 'next/navigation'

export default function RegisterAdmin() {
const router = useRouter()
const [input,setInput] = useState({
      username : "",
      password : "",
})

  function handleInput(e : ChangeEvent) {
    const target = e.target
    const name = (e.target as HTMLInputElement).name

    setInput({
      ...input,
      [name] : (target as HTMLInputElement).value
    })
  }

   async function LoginSubmit(e : FormEvent) {
      e.preventDefault();
      const add_account = await axios('https://sinarasih-backend.vercel.app/loginAkun',{
        method : "POST",
        data : {
          username : input.username,
          password : input.password.toString(),        
        },
        withCredentials:true,
      }).then( (res) =>{
        console.log(res)
        //  alert(res.data.message)
        // router.push('http://localhost:3000/pages/admin/')
      }).catch((err) => alert(err.response && err.response.data.message))
  }

  return (
    <>
       <div className="row" >
    <div className="col-md-12">
      <form className="form2" onSubmit={(e) => LoginSubmit(e)}>
        <h1> Login </h1>
        
        <fieldset>
          
         
        
          <label htmlFor="Username">Username:</label>
          <input type="text" id="username" name="username" onChange={(e) => handleInput(e)} />
       
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" onChange={(e) => handleInput(e)}/>
        
          
        </fieldset>
        <button type="submit" className="btnSubmit text-yellowBase">Login</button>
        
       </form>
        </div>
      </div>
    </>
  )
}

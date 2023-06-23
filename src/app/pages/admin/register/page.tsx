'use client'
import SpaceDisable from "@/app/utility/spaceDisable"
import axios from "axios"
import { ChangeEvent, FormEvent, useState } from "react"



export default function RegisterAdmin() {
const [input,setInput] = useState({
      username : "",
      password : "",
      ig : "",
      deskripsi : "",
      posisi : "oppo",
      fullname : ""
})

  function handleInput(e : ChangeEvent) {
    const target = e.target
    const name = (e.target as HTMLInputElement).name
    setInput({
      ...input,
      [name] : (target as HTMLInputElement).value
    })
  }

   async function RegisterSubmit(e : FormEvent) {
      e.preventDefault();
      const add_account = await axios('http://localhost:3002/addAkun',{
        method : "POST",
        data : {
          username : input.username,
          password : input.password.toString(),        
        }
      }).then((res) => alert(res.data.message)).catch((err) => alert("ada kesalahan saat daftar akun"))

      const add_karyawan = axios('http://localhost:3002/addKaryawan',{
        method : "POST",
        data : {
          nama : input.fullname,
          deskripsi : input.deskripsi,
          posisi : input.posisi,
          ig : input.ig       
        }
      }).then((res) => console.log(res)).catch((err)=>console.log(err))
    }
    console.log(input)
  return (
    <>
       <div className="row" >
    <div className="col-md-12">
      <form className="form2" onSubmit={(e) => RegisterSubmit(e)}>
        <h1> Sign Up </h1>
        
        <fieldset>
          
          <legend><span className="number">1</span>Your Basic Info</legend>
        
          <label htmlFor="fullname">Full Name:</label>
          <input type="text" id="fullname" name="fullname" onChange={(e) => handleInput(e)}/>
        

          <label htmlFor="username">username: (no space)</label>
          <input type="text" id="username" name="username" onChange={(e) => handleInput(e)} onKeyDown={(eve) => SpaceDisable(eve)}/>
        
          <label htmlFor="ig">Username Instagram: (opsional)</label>
          <input type="text" id="ig" name="ig" onChange={(e) => handleInput(e)}/>
       
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password"  onChange={(e) => handleInput(e)} onKeyDown={(eve) => SpaceDisable(eve)}/>
        
          
        </fieldset>
        <fieldset>  
        
          <legend><span className="number">2</span>Your Profile</legend>
          
         <label htmlFor="Deskripsi">Deskripsi:</label>
          <textarea id="deskripsi" name="deskripsi" onChange={(e) => handleInput(e)}></textarea>
        
       
        
         <label htmlFor="posisi">Job Role:</label>
          <select id="posisi" name="posisi" onChange={(e) => handleInput(e)}>
            <optgroup label="Position">
              <option value="OPPO">OPPO</option>
              <option value="Realme">Realme</option>
              <option value="Xiaomi">Xiaomi</option>
              <option value="Vivo">Vivo</option>
              <option value="Samsung">Samsung</option>
              <option value="Infix">Infinix</option>
              <option value="FrontLiner">FrontLiner</option>
            </optgroup>
          </select>
          
         </fieldset>
       
        <button type="submit" className="btnSubmit text-yellowBase">Sign Up</button>
        
       </form>
        </div>
      </div>
    </>
  )
}

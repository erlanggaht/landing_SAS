'use client'
import SpaceDisable from "@/app/utility/spaceDisable"
import { ChangeEvent, useEffect, useState } from "react"
import RegisterSubmit from "./utility/registersubmit"
import { NavigasiAdmin } from "@/app/components/moleculs/navigasi_admin"
import { useRouter } from "next/navigation"
import CloudinaryUploadWidget from "@/app/components/template/cloudinary"
import GlobalState from "@/app/utility/global_state/admin"
import { useDispatch } from "react-redux"

export default function RegisterAdmin() {
  const router = useRouter()
  const dispatch = useDispatch()
  const { responseState, rejectState } = GlobalState()
  const [input, setInput] = useState({
    username: "",
    password: "",
    ig: "",
    deskripsi: "",
    posisi: '',
    fullname: "",
    token: '',
  })


  function handleInput(e: ChangeEvent) {
    const target = e.target
    const name = (e.target as HTMLInputElement).name
    setInput({
      ...input,
      [name]: (target as HTMLInputElement).value
    })
  }




  useEffect(()=>{
    
    if(responseState && responseState.length > 0) {
      router.push('/pages/admin')
    }
  
    if(rejectState) {
      router.push('/pages/admin/register')
    }
   
    },[responseState])


  return (
    <>

      <NavigasiAdmin />
      <div className="row my-12" >
        <div className="col-md-12">
          <form className="form2" onSubmit={(e) => RegisterSubmit(e,
            {
              username: input.username,
              password: input.password,
              ig: input.ig,
              deskripsi: input.deskripsi,
              posisi: input.posisi,
              fullname: input.fullname,
              token: input.token,
              router: router,
            }
          )}>
            <h1 className="text-2xl"> Sign Up </h1>

            <fieldset>

              <legend><span className="number">1</span>Your Basic Info</legend>


              <label htmlFor="username">Username: (no space)</label>
              <input required type="text" id="username" name="username" onChange={(e) => handleInput(e)} onKeyDown={(eve) => SpaceDisable(eve)} />


              <label htmlFor="password">Password:</label>
              <input required type="password" id="password" name="password" onChange={(e) => handleInput(e)} onKeyDown={(eve) => SpaceDisable(eve)} />

              <label htmlFor="token">Token Employe <span className="font-bold">(ask the owner or erlangga)</span></label>
              <input required type="text" id="token" name="token" onChange={(e) => handleInput(e)} />



            </fieldset>
            <fieldset>

              <legend><span className="number">2</span>Your Profile</legend>

              <label htmlFor="Deskripsi">Deskripsi:</label>
              <textarea id="deskripsi" name="deskripsi" onChange={(e) => handleInput(e)}></textarea>

              <label htmlFor="fullname">Full Name:</label>
              <input type="text" required id="fullname" name="fullname" onChange={(e) => handleInput(e)} />

              <label htmlFor="ig">Username Instagram: (opsional)</label>
              <input type="text" id="ig" name="ig" onChange={(e) => handleInput(e)} />


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



              {/* Upload Image Profile  */}

             
            </fieldset>

            <button type="submit" className="btnSubmit text-yellowBase">Sign Up</button>

          </form>
        </div>
      </div>
    </>
  )
}

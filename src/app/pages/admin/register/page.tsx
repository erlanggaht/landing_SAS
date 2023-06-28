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
  const getImageProfileId = typeof window !== 'undefined' && sessionStorage.getItem('asset_id')


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
              asset_id: getImageProfileId
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

              <div className="flex items-center justify-center w-full relative">
                <h1> Profile Image </h1>
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Klik untuk upload</span></p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">files upload powerd by Cloudinary</p>
                  </div>

                  <CloudinaryUploadWidget />
                </label>
              </div>
              <div className="uploadDiv">
                <img id="uploadedimage" alt="uploadImageResult" className="my-3 w-full  object-contain  cursor-default  bg-transparent" />
              </div>

            </fieldset>

            <button type="submit" className="btnSubmit text-yellowBase">Sign Up</button>

          </form>
        </div>
      </div>
    </>
  )
}

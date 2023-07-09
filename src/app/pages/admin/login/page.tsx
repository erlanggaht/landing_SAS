'use client'
import { ChangeEvent, useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import LoginSubmit from "./utility/loginsubmit"
import { NavigasiAdmin } from "@/app/components/moleculs/navigasi_admin"
import { useDispatch } from "react-redux"
import { getAdmin } from "@/app/utility/redux/feature/adminSlice"
import GlobalState from "@/app/utility/global_state/admin"



export default function LoginAdmin() {
  const router = useRouter()
  const dispatch = useDispatch()
  const {responseState,rejectState } = GlobalState()
  const [input, setInput] = useState({
    username: "",
    password: "",
  })

  function handleInput(e: ChangeEvent) {
    const target = e.target
    const name = (e.target as HTMLInputElement).name
    setInput({
      ...input,
      [name]: (target as HTMLInputElement).value
    })
  }

    



  return (
    <>
    <div className="absolute top-0 right-0 left-0">
      <NavigasiAdmin />
      </div>
      <main className="h-screen flex items-center justify-center">
        <div className="row w-full " >
          <div className="col-md-12">
            <div className="form2" >
              <h1 className="text-2xl"> Login </h1>

              <fieldset>



                <label htmlFor="Username">Username:</label>
                <input type="text" id="username" name="username" onChange={(e) => handleInput(e)} />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={(e) => handleInput(e)} />


              </fieldset>
              <button type="submit" className="btnSubmit text-yellowBase" onClick={(e) => LoginSubmit(e,
              {
                username: input.username,
                password: input.password,
                router: router,
              })
            }>Login</button>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}

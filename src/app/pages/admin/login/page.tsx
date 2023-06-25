'use client'
import { ChangeEvent, FormEvent, useState } from "react"
import { useRouter } from 'next/navigation'
import LoginSubmit from "./utility/loginsubmit"
import Navigasi from "@/app/components/moleculs/navigasi"
import { NavigasiAdmin } from "@/app/components/moleculs/navigasi_admin"


export default function RegisterAdmin() {
  const router = useRouter()
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
            <form className="form2" onSubmit={(e) => LoginSubmit(e,
              {
                username: input.username,
                password: input.password,
                router: router
              })
            }>
              <h1 className="text-2xl"> Login </h1>

              <fieldset>



                <label htmlFor="Username">Username:</label>
                <input type="text" id="username" name="username" onChange={(e) => handleInput(e)} />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={(e) => handleInput(e)} />


              </fieldset>
              <button type="submit" className="btnSubmit text-yellowBase">Login</button>

            </form>
          </div>
        </div>
      </main>
    </>
  )
}

import axios from "axios"
import { FormEvent } from "react";

interface PropsRegisterSubmit {
        username : string,
        password : string,
        ig : string,
        deskripsi : string,
        posisi : string,
        fullname : string,
        token : string
}

export default  function RegisterSubmit(e : FormEvent,props : PropsRegisterSubmit) {
    const {username,password,ig,deskripsi,posisi,fullname,token} = props
    e.preventDefault();

    const add_karyawan_account = axios('http://localhost:3002/addAkun',{
      method : "POST",
      data : {
        username : username,
        password : password,
        token : token,

            nama : fullname,
            deskripsi : deskripsi,
            posisi : posisi,
            ig : ig       
      }
    }).then((res) => alert(res && res.data.message)).catch((err) => alert(err.response && err.response.data.message))
  }
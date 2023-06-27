import { URL_HOST_API, URL_HOST_FRONT } from "@/app/config/url_host";
import axios from "axios"
import { FormEvent } from "react";

interface PropsRegisterSubmit {
        username : string,
        password : string,
        ig : string,
        deskripsi : string,
        posisi : string,
        fullname : string,
        token : string,
        router : any,
        asset_id : string | any
}

export default  function RegisterSubmit(e : FormEvent,props : PropsRegisterSubmit) {
    const {username,password,ig,deskripsi,posisi,fullname,token,router,asset_id} = props
 console.log(asset_id)
    e.preventDefault();

    const add_karyawan_account = axios(`${URL_HOST_API}/addAkun`,{
      method : "POST",
      data : {
        username : username,
        password : password,
        token : token,

            nama : fullname,
            deskripsi : deskripsi,
            posisi : posisi,
            ig : ig,
            
            CloudinaryID : asset_id 
      }
    }).then((res) => {
      console.log(res)
      alert(res && res.data.message)
      router.replace(`${URL_HOST_FRONT}/pages/admin/login`)
    })
      .catch((err) => alert(err.response && err.response.data.message))
  }
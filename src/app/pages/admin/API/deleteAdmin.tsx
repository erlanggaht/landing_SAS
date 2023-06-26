'use client'
import { URL_HOST_API, URL_HOST_FRONT } from "@/app/config/url_host"
import axios from "axios"
import { destroyCookie } from "nookies"

export default function DeleteAdmin(e : any,id : number,router : any,nama : string) {
  e.preventDefault()
  
  
  if(confirm('Yakin untuk menghapus akun admin sinar asih..?')){
    const ask_token= prompt('masukan token ijin owner')
        const response =  axios(`${URL_HOST_API}/deleteKaryawan`,{
              method : "DELETE",
              data : {
                 id : id,
                 token : ask_token,
                 nama : nama
              }
          }).then((res)=>{
            destroyCookie(null,'token',{
              secure : true,
              path:'/'
            })
            alert(res.data.message)
            location.href = `${URL_HOST_FRONT}/pages/admin/login`
          }).catch((err) =>{ 
            alert(err.response && err.response.data.message)
          })

}
    
    
}


import axios from 'axios'
import { URL_HOST_API } from '@/app/config/url_host'
import {parseCookies} from 'nookies'

export default async function GetKaryawan() {
    const token = parseCookies().token
    const response = await axios(`${URL_HOST_API}/getKaryawanToken`,{
        method : "GET",
        headers : {
          Authorization : `Bearer ${token}`
        },
        withCredentials:true
      })
    
      return response
}

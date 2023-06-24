import axios from 'axios'
import { URL_HOST_API, URL_HOST_FRONT } from '@/app/config/url_host'
import {parseCookies,destroyCookie} from 'nookies'

export default async function GetKaryawan() {
    const token = parseCookies()

    const response = await axios(`${URL_HOST_API}/getKaryawanToken`,{
        method : "GET",
        headers : {
          Authorization : `Bearer ${token.token}`
        }
      })
    
      return response
}

import axios from "axios";
import { URL_HOST_API } from "./url_host";

export default async function API_getKaryawan() {

    const response = axios(`${URL_HOST_API}/getKaryawan`,{
        method : "GET",
    })

    return response

  
}

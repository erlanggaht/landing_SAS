import axios from "axios";

export default async function API_getKaryawan() {

    const response = axios('http://localhost:3002/getKaryawan',{
        method : "GET",
    })

    return response

  
}

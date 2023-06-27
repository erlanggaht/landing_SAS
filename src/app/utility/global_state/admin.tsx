import { useSelector } from "react-redux";



export default function GlobalState() {
 const {loading,response,reject} = useSelector((state) => (state as Storage).admin)
 const tokenCookie = useSelector((state) => (state as any).token)
 const {loading_karyawan,response_karyawan,reject_karyawan} = useSelector((state) =>(state as Storage).karyawan)

 return {
    loadingState : loading,
    responseState : response,
    rejectState : reject,

    tokenState : tokenCookie,


    loading_karyawan,
    response_karyawan,
    reject_karyawan
}
}



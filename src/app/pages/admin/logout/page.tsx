'use client'
import { useRouter } from "next/navigation";
import { destroyCookie, parseCookies } from "nookies";
import { useEffect } from "react";

export default function Logout() {
  const router = useRouter()
  useEffect(() => {
    destroyCookie(null,'token',{
      secure : true,
      path : '/'
    })
 
    if(!parseCookies().token) router.replace('/pages/admin/login')
    
  },[])

 
}

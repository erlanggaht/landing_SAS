'use client'
import BackIcon from "@/app/assets/icons/back"
import LogoutIcon from "@/app/assets/icons/logout"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const NavigasiAdmin = () => {
    const path = usePathname()
    return <nav className='bg-dark shadow p-2 relative'>
    <Link href={'/'} replace ><div className='cursor-pointer inline-block'><BackIcon props={{w:46,h:46,fill:'#fff'}}/></div></Link>
    
    {path === '/pages/admin' && <Link href={'/pages/admin/logout'} replace ><div className='cursor-pointer inline-flex items-center absolute right-5 top-4 '> <p className="text-white px-2">Logout</p><LogoutIcon props={{w:36,h:36,fill:'#ccc'}}/> </div></Link> }

    {path === '/pages/admin/login' && <Link href={'/pages/admin/register'} replace ><div className='cursor-pointer inline-block absolute right-7  top-5 text-white '>Signup</div></Link> }

    {path === '/pages/admin/register' && <Link href={'/pages/admin/login'} replace ><div className='cursor-pointer inline-block absolute right-7  top-5 text-white '>login</div></Link>}
  </nav>
  }
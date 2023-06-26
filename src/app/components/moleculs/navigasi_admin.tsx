'use client'
import BackIcon from "@/app/assets/icons/back"
import LogoutIcon from "@/app/assets/icons/logout"
import Link from "next/link"
import { usePathname,useRouter} from "next/navigation"

export const NavigasiAdmin = () => {
    const path = usePathname()
    const router = useRouter()

    return <nav className={`bg-dark shadow p-2  flex items-center`}>
      <section className="flex items-center">
    <div className='cursor-pointer inline-block active:opacity-50' onClick={()=> router.back()}><BackIcon props={{w:46,h:46,fill:'#fff'}}/></div>
    <div className="nav-title  p-2 text-5xl drop-shadow font-bold text-[#777] group hover:text-white transition-colors">
     <a href={'/'}> S<span className="text-[#fff] group-hover:text-[#777] group-hover:transition-colors">A</span>S</a>
    </div>
    </section>
    
    {path === '/pages/admin' && <Link href={'/pages/admin/logout'} replace ><div className='cursor-pointer inline-flex items-center absolute right-5 top-5 active:opacity-50 '> <p className="text-white px-2">Logout</p><LogoutIcon props={{w:36,h:36,fill:'#ccc'}}/> </div></Link> }

    {path === '/pages/admin/login' && <Link href={'/pages/admin/register'} replace ><div className='cursor-pointer inline-block absolute right-7  top-6 text-white active:opacity-50'>Signup</div></Link> }

    {path === '/pages/admin/register' && <Link href={'/pages/admin/login'} replace ><div className='cursor-pointer inline-block absolute right-7  top-6 text-white active:opacity-50'>login</div></Link>}
  </nav>
  }
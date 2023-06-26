'use client'
import Link from "next/link"
import Button from "../atoms/button"

export default function Navigasi() {
  return (
    
<div className="nav bg-dark sm:px-6 shadow top-0">
  <input type="checkbox" id="nav-check" />
  <div className="nav-header">
    <div className="nav-title p-4 py-4 text-5xl drop-shadow font-bold text-[#777] group hover:text-white transition-colors">
     <a href={'/'}> S<span className="text-[#fff] group-hover:text-[#777] group-hover:transition-colors">A</span>S</a>
    </div>
  </div>
  <div className="nav-btn py-3">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links sm:py-3">
    <a href="#address">Alamat</a>
    <a href="#products">Produk</a>
    <a href="https://instagram.com/sinarasihcomputer158" target="popup" 
    onClick={()=> window.open('https://instagram.com/sinarasihcomputer158','popup','width=600,height=600') }>Instagram</a>
    <Link href="pages/admin" >Admin</Link>
    <div className="w-full text-right p-5 sm:inline">
    <Link href="/pages/gallery"><Button props={{text:"Galeri Perusahaan",style:"bg-yellowBase sm:ml-2 rounded-sm px-5 py-3 hover:opacity-90 text-white  "}}></Button></Link>
    </div>
  </div>
</div>

  )
}

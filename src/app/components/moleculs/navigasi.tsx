'use client'
import Link from "next/link"
import Button from "../atoms/button"

export default function Navigasi() {
  return (
    
<div className="nav bg-dark sm:px-6">
  <input type="checkbox" id="nav-check" />
  <div className="nav-header">
    <div className="nav-title p-4 py-5 text-4xl drop-shadow font-bold text-white">
      S<span className="text-yellowBase">A</span>S
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
    <a href="#products">Products</a>
    <a href="#address">Address</a>
    <a href="https://instagram.com/sinarasihcomputer158" target="popup" 
    onClick={()=> window.open('https://instagram.com/sinarasihcomputer158','popup','width=600,height=600') }>Instagram</a>
    <div className="w-full text-right p-5 sm:inline">
    <a href="https://wa.me/081324063363" target="popup" 
    onClick={()=> window.open('https://wa.me/081324063363','popup','width=600,height=600') }><Button props={{text:"Hubungi Kami",style:"bg-yellowBase sm:ml-2 rounded-sm px-5 py-3 hover:opacity-90 text-white  "}}></Button></a>
    </div>
  </div>
</div>

  )
}

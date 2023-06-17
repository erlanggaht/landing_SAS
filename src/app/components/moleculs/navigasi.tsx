import Link from "next/link"
import Button from "../atoms/button"

export default function Navigasi() {
  return (
    
<div className="nav bg-dark sm:px-6">
  <input type="checkbox" id="nav-check" />
  <div className="nav-header">
    <div className="nav-title p-2 py-5 text-4xl drop-shadow font-bold text-white">
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
    <a href="//github.io/jo_geek" target="_blank">Products</a>
    <a href="http://stackoverflow.com/users/4084003/" target="_blank">Address</a>
    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">About Us</a>
    <a href="https://codepen.io/jo_Geek/" target="_blank">Contact Us</a>
    <Button props={{text:"Login",style:"bg-yellowBase sm:ml-2 rounded-sm px-5 py-3 hover:opacity-90 text-white  "}}></Button>
  </div>
</div>

  )
}

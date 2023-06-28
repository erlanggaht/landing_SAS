import React from 'react'

interface PropsLineScroll {
  props :{
    width: string
  }
}




export default function LineScroll({props} : PropsLineScroll) {
  const {width} = props

  // Scroll Follow
  if(typeof window !== 'undefined' ) {
    window.addEventListener("scroll", (event) => {
      let a = document.body.getBoundingClientRect()
      const b = Math.abs(a.y - 8) * a.height / a.height / 2
   
      document.querySelector('#lineScroll')?.setAttribute("style",`width:${b}px;transition:.1s all`)
   })
  }
 

  return (
    <>
      <div id={'lineScroll'}className={` h-3 shadow bg-otherColor absolute left-0`}></div>
    </>
  )
}

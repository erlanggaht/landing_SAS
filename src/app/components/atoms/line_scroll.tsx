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
      const b = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100
   
      document.querySelector('#lineScroll')?.setAttribute("style",`width:${b}%;transition:.1s all`)
   })
  }
 

  return (
    <>
      <div id={'lineScroll'} className={` h-3 shadow bg-otherColor absolute left-0`}></div>
    </>
  )
}

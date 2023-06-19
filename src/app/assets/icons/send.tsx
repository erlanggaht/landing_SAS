import React from 'react'

interface PropsIcon {
   props : {
       w : number | string
       h : number | string,
       fill : string
   }
}

export default function SendIcon({props} : PropsIcon) {
    const {w,h,fill} = props
  return (
    <>
<svg fill={fill} width={w} height={h} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>send</title>
<path d="M0 16l12 4 4 12 16-32zM14.016 18.016l12-12-10.016 17.984z"></path>
</svg>

    </>
  )
}

import React from 'react'

interface PropsIcon {
   props : {
       w : number | string
       h : number | string,
       fill : string
   }
}

export default function MobileIcon({props} : PropsIcon) {
    const {w,h,fill} = props
  return (
    <>
<svg fill={fill} width={w} height={h} viewBox="-3 0 16 16" id="mobile-16px" xmlns="http://www.w3.org/2000/svg">
  <path id="Path_67" data-name="Path 67" d="M30.5,0h-5A2.5,2.5,0,0,0,23,2.5v11A2.5,2.5,0,0,0,25.5,16h5A2.5,2.5,0,0,0,33,13.5V2.5A2.5,2.5,0,0,0,30.5,0ZM32,13.5A1.5,1.5,0,0,1,30.5,15h-5A1.5,1.5,0,0,1,24,13.5V2.5A1.5,1.5,0,0,1,25.454,1V2.5a.5.5,0,0,0,.5.5h4.092a.5.5,0,0,0,.5-.5V1A1.5,1.5,0,0,1,32,2.5Zm-3,0a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1,0-1h1A.5.5,0,0,1,29,13.5Z" transform="translate(-23)"/>
</svg>
    </>
  )
}

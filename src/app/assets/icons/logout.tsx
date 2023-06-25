import React from 'react'

interface PropsIcon {
   props : {
       w : number | string
       h : number | string,
       fill : string
   }
}

export default function LogoutIcon({props} : PropsIcon) {
    const {w,h,fill} = props
  return (
    <>
<svg width={w} height={h} viewBox="0 0 24 24" fill={'transparent'} xmlns="http://www.w3.org/2000/svg">
<path d="M21 12L13 12" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    </>
  )
}



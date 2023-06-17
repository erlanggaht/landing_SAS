

import React from 'react'

interface PropsIcon {
   props : {
       w : number | string
       h : number | string,
       fill : string
   }
}

export default function SmartTvIcon({props} : PropsIcon) {
    const {w,h,fill} = props
  return (
    <>
<svg fill={fill} width={w} height={h} viewBox="0 -3 32 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <path d="M30.000,21.000 L17.000,21.000 L17.000,24.000 L22.047,24.000 C22.600,24.000 23.047,24.448 23.047,25.000 C23.047,25.552 22.600,26.000 22.047,26.000 L10.047,26.000 C9.494,26.000 9.047,25.552 9.047,25.000 C9.047,24.448 9.494,24.000 10.047,24.000 L15.000,24.000 L15.000,21.000 L2.000,21.000 C0.898,21.000 0.000,20.103 0.000,19.000 L0.000,2.000 C0.000,0.897 0.898,0.000 2.000,0.000 L30.000,0.000 C31.103,0.000 32.000,0.897 32.000,2.000 L32.000,19.000 C32.000,20.103 31.103,21.000 30.000,21.000 ZM2.000,2.000 L2.000,19.000 L29.997,19.000 L30.000,2.000 L2.000,2.000 Z"/>
</svg>    </>
  )
}

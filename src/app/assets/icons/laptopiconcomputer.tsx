import React from 'react'


interface PropsIcon {
    props : {
        w : number | string
        h : number | string,
        fill : string
    }
 }

export default function LaptopComputerIcon({props}  : PropsIcon) {
    const {w,h,fill} = props
    return (
      <>
<svg fill={fill} version="1.1" width={w} height={h} viewBox="0 0 260 204" enableBackground="new 0 0 260 204">
<path d="M242,146V14c0-6.627-5.373-12-12-12H30c-6.627,0-12,5.373-12,12v132L2,178v12c0,6.627,5.373,12,12,12h232
	c6.627,0,12-5.373,12-12v-12L242,146z M105.746,178l1.14-12h46.478l1.14,12H105.746z M222,146H38V22h184V146z"/>
</svg>
      </>
    )

    }
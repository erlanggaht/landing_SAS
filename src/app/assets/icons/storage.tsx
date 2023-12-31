



import React from 'react'

interface PropsIcon {
  props: {
    w: number | string
    h: number | string,
    fill: string
  }
}

export default function StorageIcon({ props }: PropsIcon) {
  const { w, h, fill } = props
  return (
    <>
      <svg fill={fill} width={w} height={h} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>usb</title>
        <path d="M7.929 15.586l6.364-6.364 3.203 3.203c-0.266 0.557-0.174 1.241 0.288 1.702 0.461 0.462 1.146 0.554 1.702 0.289l3.291 3.291-6.363 6.364-8.485-8.485zM19.905 12.006c-0.461-0.461-1.146-0.554-1.702-0.288l-3.203-3.203 4.949-4.949c0.781-0.781 2.048-0.781 2.828 0l5.658 5.656c0.78 0.781 0.78 2.048 0 2.828l-4.95 4.95-3.292-3.291c0.266-0.558 0.174-1.242-0.288-1.703zM8.636 29.021l-5.657-5.656 5.657-5.657 5.657 5.657-5.657 5.656zM7.266 23.319l-1.414-1.414-1.459 1.459 1.415 1.414 1.458-1.459zM10.094 26.148l-1.414-1.414-1.458 1.458 1.414 1.414 1.458-1.458z"></path>
      </svg>
    </>
  )
}

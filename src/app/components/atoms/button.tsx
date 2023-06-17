import React from 'react'

interface ButtonProps {
    props : {
        text : string,
        style : string
    }
}

export default function Button({props} : ButtonProps) {
    const {text,style} = props
  return (
    <button className={`${style} font-bold`}>{text}</button>
  )
}

'use client'
import EditIcon from '@/app/assets/icons/edit'
import React, { Dispatch, SetStateAction } from 'react'
import Button from '../atoms/button'

export default function Button_Edit({props} : any) {
    const {setEditProfile} = props
  return (
    <div className="w-full text-right" onClick={() => setEditProfile(true)}><div className="text-right inline-flex items-center  bg-white text-dark font-semibold p-2 px-3 hover:bg-base capitalize gap-2"><EditIcon props={{w:22,h:22,fill:"#333"}}/><Button props={{text:"edit profile",style:""}}></Button></div></div>
      )
}

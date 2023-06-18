import React from 'react'
import { prodcutImage } from '../utility/products_image'
import StarIcon from '@/app/assets/icons/star'
import NotesIcon from '@/app/assets/icons/notes'
import Image from 'next/image'

export default function ProductsGrid() {
  return (
    <>
    <div className="bg-white">
      <figure className='p-3 pt-7 flex justify-center items-center'>
        <Image alt={'productImage'} src={prodcutImage.miband} height={140} width={140}  className='drop-shadow-xl'/>
      </figure>
      <div className="titleText flex justify-between items-center px-3 pt-7">
        <p className="font-semibold text-md ">Miband 5 (Black)</p>
        <NotesIcon props={{ w: 20, h: 20, fill: "#373737" }} />
      </div>
      <div className="rating flex sm:items-center gap-1 text-[12px] font-light px-3 pb-3 pt-1 ">
        <StarIcon props={{ w: 16, h: 16, fill: "#F29727" }} />
        <p>4.8 <span className="text-[#aaa]">(720 review)</span></p>
      </div>

      <div className="productsfooter flex items-center  mt-5 ">
        <p className='font-semibold px-3 text-center flex-grow'>Ready!</p>
        <button className="bg-yellowBase text-white capitalize py-2  text-sm font-semibold px-6">ask and order</button>
      </div>

    </div>

  </>
  )
}

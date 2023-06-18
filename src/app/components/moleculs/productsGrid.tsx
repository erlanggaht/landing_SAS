'use client'
import StarIcon from '@/app/assets/icons/star'
import NotesIcon from '@/app/assets/icons/notes'
import Image, { StaticImageData } from 'next/image'
import Tilt from 'react-parallax-tilt';

interface PropsProductImage {
    props : {
      image : StaticImageData,
      title : string,
      
    }
}

export default function ProductsGrid({props} : PropsProductImage ) {
  const {image,title} = props
  return (
    <>
      <div className="bg-white relative 
      before:absolute before:content-['SmartWatch'] before:-left-5 before:scale-75 before:top-1 before:bg-dark before:text-white before:p-2 before:-rotate-[40deg] before:z-50 before:text-sm before:font-light before:opacity-90 before:shadow">
        <figure className='p-3 pt-7 flex justify-center items-center ' >
          <Tilt>
            <Image alt={'productImage'} src={image} height={140} width={140}  className={`object-contain drop-shadow-xl w-auto h-[176px]`}/></Tilt>
        </figure>

        <div className='areaDescript bg-white  mt-7'>
          <div className="titleText flex justify-between items-center px-3 pt-2">
            <p className=" text-md ">{title}</p>
            <NotesIcon props={{ w: 20, h: 20, fill: "#373737" }} />
          </div>
          <div className="rating flex sm:items-center gap-1 text-[12px] font-light px-3 pb-3 pt-1 ">
            <StarIcon props={{ w: 16, h: 16, fill: "#F29727" }} />
            <p>4.8 <span className="text-[#aaa]">(720 review)</span></p>
          </div>

          <div className="productsfooter flex items-center  mt-5 ">
            <p className='font-semibold px-3 text-center flex-grow'>Ready Stock!</p>
            <button className="bg-yellowBase text-white capitalize py-3  text-sm  px-6 hover:bg-dark transition hover:transition hover:delay-75">Tanya Kami</button>
          </div>
        </div>
      </div>

    </>
  )
}

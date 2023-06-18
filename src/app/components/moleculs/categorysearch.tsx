import CategoryIcon from '@/app/assets/icons/category'
import React from 'react'
import Input_Subcribe from './input_subcribe'

export default function CategorySearch() {
    return (
        <>
            <section className='Category_Search flex items-center sm:justify-center gap-1 pt-2  '>

                <div className='CategoryIcon flex items-center bg-base p-4 sm:px-7 sm:py-4 gap-1 '>
                    <CategoryIcon props={{ w: 32, h: 32, fill: "#068DA9" }} /><p>Category</p>
                </div>

                <div className='pt-2 px-3 bg-base flex-grow flex justify-center'>
                   <Input_Subcribe/>
                </div>

            </section>
        </>
    )
}

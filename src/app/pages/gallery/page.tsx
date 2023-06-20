'use client'
import Navigasi from '@/app/components/moleculs/navigasi'
import React from 'react'
import SwipperGallery from './components/moleculs/swiper._gallery'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Gallery() {
    return (
        <>
            <Navigasi />
            <main className='my-20'>
                <h1 className='text-5xl font-bold drop-shadow text-dark text-center p-4'>Gallery Company</h1>

                <div className='swiper'>
                    <SwipperGallery/>
                </div>


            </main>
        </>
    )
}

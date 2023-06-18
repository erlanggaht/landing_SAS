'use client'
import React, { ReactElement } from 'react'
import Tilt from 'react-parallax-tilt';

interface PropsCardGrid {
    props: {
        text: string,
        icon: ReactElement,
        style: string
    }
}

export default function Card_Grid({ props }: PropsCardGrid) {
    const { text, icon, style } = props
    return (
        <>
        <Tilt>
            <section className={`${style}`} data-tilt>
                <div>{icon}</div>
                <p className='text-center  mt-7'>{text}</p>
            </section>
            </Tilt>
        </>
    )
}

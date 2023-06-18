import React, { ReactElement } from 'react'

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
     
            <section className={`${style} h-[130px]  sm:h-full`} >
                <div>{icon}</div>
                <p className='text-center  mt-7'>{text}</p>
            </section>
        </>
    )
}

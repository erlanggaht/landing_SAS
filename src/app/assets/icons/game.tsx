
import React from 'react'

interface PropsIcon {
    props: {
        w: number | string
        h: number | string,
        fill: string
    }
}

export default function GameIcon({ props }: PropsIcon) {
    const { w, h, fill } = props
    return (
        <>

            <svg width={w} height={h} viewBox="0 0 20 20" version="1.1">

                <title>game_controller [#796]</title>
                <desc>Created with Sketch.</desc>
                <defs>

                </defs>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -4719.000000)" fill={fill}>
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path d="M86,4577 L102,4577 L102,4569 L86,4569 L86,4577 Z M104,4567 L104,4569 L104,4577 L104,4579 L102,4579 L86,4579 L84,4579 L84,4577 L84,4569 L84,4567 L86,4567 L93,4567 L93,4563 L93,4561 L98,4561 L98,4559 L100,4559 L100,4561 L100,4563 L95,4563 L95,4567 L102,4567 L104,4567 Z M98,4574 L100,4574 L100,4572 L98,4572 L98,4574 Z M95,4574 C95.552,4574 96,4573.552 96,4573 C96,4572.448 95.552,4572 95,4572 C94.448,4572 94,4572.448 94,4573 C94,4573.552 94.448,4574 95,4574 L95,4574 Z M88,4572 L89,4572 L89,4571 L91,4571 L91,4572 L92,4572 L92,4574 L91,4574 L91,4575 L89,4575 L89,4574 L88,4574 L88,4572 Z" id="game_controller-[#796]">

                            </path>
                        </g>
                    </g>
                </g>
            </svg>


        </>
    )
}

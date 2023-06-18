import MobileIcon from '@/app/assets/icons/mobile'
import Card_Grid from '../atoms/cardG'
import LaptopComputerIcon from '@/app/assets/icons/laptopiconcomputer'
import AudioIcon from '@/app/assets/icons/audio'
import SmartTvIcon from '@/app/assets/icons/smarttv'
import StorageIcon from '@/app/assets/icons/storage'
import GameIcon from '@/app/assets/icons/game'

export const CardStyle = {
    style :  'order-base shadow text-dark  flex flex-col items-center py-3 px-4 sm:px-0 sm:py-8 text-sm cursor-pointer hover:bg-dark hover:text-white transition hover:transition hover:delay-2 '
}

export default function CardGrid() {
    return (
        <section className='headerMainGrid  '>
            {/* 1 */}
            <Card_Grid props={{
                text: "Android & Iphone", icon: <MobileIcon props={{
                    w: 42,
                    h: 42,
                    fill: '#888'
                }} />, style: CardStyle.style
            }} />

            {/* 2 */}
            <Card_Grid props={{
                text: "Laptop & Printer", icon: <LaptopComputerIcon props={{
                    w: 42,
                    h: 42,
                    fill: '#888'
                }} />, style: CardStyle.style
            }} />

            {/* 3 */}
            <Card_Grid props={{
                text: "Audio Accessories", icon: <AudioIcon props={{
                    w: 42,
                    h: 42,
                    fill: '#888'
                }} />, style: CardStyle.style
            }} />

            {/* 4 */}
            <Card_Grid props={{
                text: "Computer & SmartTV", icon: <SmartTvIcon props={{
                    w: 42,
                    h: 42,
                    fill: '#888'
                }} />, style: CardStyle.style
            }} />

            {/* 5 */}
            <Card_Grid props={{
                text: "Ext-Int Storage", icon: <StorageIcon props={{
                    w: 42,
                    h: 42,
                    fill: '#888'
                }} />, style: CardStyle.style
            }} />
            
            {/* 6 */}
            <Card_Grid props={{
                text: "Game Devices", icon: <GameIcon props={{
                    w: 42,
                    h: 42,
                    fill: '#888'
                }} />, style: CardStyle.style
            }} />

        </section>
    )
}

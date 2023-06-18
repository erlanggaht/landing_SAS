// Import Swiper React components
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import Maps from "./components/atoms/maps";
import CardGrid from "./components/moleculs/cardGrid";
import CategorySearch from "./components/moleculs/categorysearch";
import Navigasi from "./components/moleculs/navigasi";
import Timeday from "./components/moleculs/timeday";
import Hero from "./components/organism/hero";
import Main2Card from "./components/organism/main2card";
import ProductGrid from "./components/organism/productGrid";
import Consultans from './components/moleculs/consultants';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Home() {
  return (
    <>
      <header>

        <Navigasi />

        <section className="headerMain px-6 sm:px-24 bg-white">

          {/* Category Search */}
          <CategorySearch />

          {/* hero */}
          <div className=" mt-3">
            <Hero />
          </div>

          {/* Card Griod */}
          <div className="CardGrid py-20 " >
            <CardGrid />
          </div>

        </section>
      </header>

      {/* -------------------------- */}

      <main className="main1">
        {/* TimeDay */}
        <section className="TImeday flex justify-between flex-col gap-2 sm:flex-row lg:px-24 px-10 flex-wrap items-center   pt-16 pb-6">
          <Timeday />
        </section>

        {/* Products Card */}
        <section className="Products_Grid sm:px-24 my-12 place-content-center">
          <ProductGrid />
        </section>

      </main>

      {/* -------------------------- */}


      <main className="main2 sm:px-20 my-6 bg-white pt-16 pb-10">

        <Main2Card />

        {/*   Maps */}
        <div className="mt-12 px-4">
          <Maps />
        </div>

        <div className="mt-32">
          <h1 className="text-center text-4xl uppercase font-bold">Promotor</h1>
          <p className="text-center font-light py-1">kritik dan saran konsumen dari konsumen kami.</p>

          <Swiper
           modules={[Navigation, Pagination, Scrollbar, A11y]}
           spaceBetween={2000}
           slidesPerView={1}
           navigation
           scrollbar={{ draggable: true}}
           onSwiper={(swiper) => console.log(swiper)}
           onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
                <Consultans/>
            </SwiperSlide>
            <SwiperSlide>
                <Consultans/>
            </SwiperSlide>
          </Swiper>

        </div>

      </main>
    </>

  )
}

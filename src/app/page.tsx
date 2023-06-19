import Maps from "./components/atoms/maps";
import CardGrid from "./components/moleculs/cardGrid";
import CategorySearch from "./components/moleculs/categorysearch";
import Consultans from "./components/moleculs/consultants";
import Navigasi from "./components/moleculs/navigasi";
import Timeday from "./components/moleculs/timeday";
import Hero from "./components/organism/hero";
import Main2Card from "./components/organism/main2card";
import ProductGrid from "./components/organism/productGrid";
import SwiperConsultans from "./components/organism/swiper._consultant";


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
        <section className="TImeday flex sm:justify-between flex-col gap-2 sm:flex-row lg:px-24 px-0 flex-wrap items-center  pt-16 pb-6">
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

        {/* Swipper And Consultans*/}
        <div className="mt-32">
        <SwiperConsultans />

        </div>
      </main>
    </>

  )
}

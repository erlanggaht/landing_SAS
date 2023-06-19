import FooterGridList from "./components/atoms/footer_grid_list";
import Maps from "./components/atoms/maps";
import CardGrid from "./components/moleculs/cardGrid";
import CategorySearch from "./components/moleculs/categorysearch";
import Navigasi from "./components/moleculs/navigasi";
import Timeday from "./components/moleculs/timeday";
import Hero from "./components/organism/hero";
import Main2Card from "./components/organism/main2card";
import ProductGrid from "./components/organism/productGrid";
import Send_Me from "./components/organism/send_me";
import SwiperConsultans from "./components/organism/swiper._consultant";
import { textList1, textList2, textList3, textList4 } from "./components/utility/listFooter";

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
        <section id="products" className="Products_Grid sm:px-24 my-12 place-content-center">
          <ProductGrid />
        </section>

      </main>

      {/* -------------------------- */}


      <main className="main2 sm:px-20 my-6 bg-white pt-16 pb-10">

        <Main2Card />

        {/*   Maps */}
        <div id="address" className="mt-12 px-4">
          <Maps />
        </div>

        {/* Swipper And Consultans*/}
        <div className="mt-32">
        <SwiperConsultans />
        </div>
      </main>

      {/* Sendme */}
      <main className="sendMe flex  items-center flex-wrap-reverse justify-center gap-5 sm:flex-row sm:justify-between px-4 sm:px-24 py-16">
        <Send_Me/>
      </main>

      {/* Footer */}
      <footer className="grid grid-cols-2 px-3 sm:px-6 py-8 gap-y-16 gap-x-6 bg-dark text-white items-center
      md:grid-cols-3 xl:grid-cols-5 sm:items-baseline
      ">
      
      <div className="grd0">
      <h3 className="text-3xl drop-shadow italic font-bold uppercase text-white ">Sinar Asih Sumedang</h3>
      <p className="py-0 px-1  text-sm font-light sm:mt-6">Eggi Reviana Ridwan. owner</p>
      <p className="py-0 px-1  text-sm font-light">Gilang Ridwan. owner</p>
      <p className="py-0 px-1  text-sm font-light">Gerin. owner</p>
      </div>
      
      <div className="grd1">
        <FooterGridList props={{text:textList1}}/>
      </div>

      <div className="grd2">
        <FooterGridList props={{text:textList2}}/>
      </div>

      <div className="grd3">
        <FooterGridList props={{text:textList3}}/>
      </div>

      <div className="grd4">
        <FooterGridList props={{text:textList4}}/>
      </div>

      </footer>
    </>

  )
}

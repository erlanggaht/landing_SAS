import CardGrid from "./components/moleculs/cardGrid";
import CategorySearch from "./components/moleculs/categorysearch";
import Navigasi from "./components/moleculs/navigasi";
import ProductsGrid from "./components/moleculs/productsGrid";
import Timeday from "./components/moleculs/timeday";
import Hero from "./components/organism/hero";


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
          <div className="CardGrid py-20 ">
            <CardGrid />
          </div>

        </section>
      </header>

      <main>

        {/* TimeDay */}
        <section className="TImeday flex justify-between flex-col gap-2 sm:flex-row lg:px-24 px-10 flex-wrap items-center   pt-16 pb-6">
        <Timeday />
        </section>

        {/* Products Card */}
        <section className="Products_Grid sm:px-24 my-12 place-content-center">
         <ProductsGrid/>
         <ProductsGrid/>
         <ProductsGrid/>
         <ProductsGrid/>

         <ProductsGrid/>
         <ProductsGrid/>
         <ProductsGrid/>
         <ProductsGrid/>
        </section>

      </main>

    </>

  )
}

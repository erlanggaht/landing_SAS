import CardGrid from "./components/moleculs/cardGrid";
import CategorySearch from "./components/moleculs/categorysearch";
import Navigasi from "./components/moleculs/navigasi";
import Hero from "./components/organism/hero";

export default function Home() {
  return (
    <header>
      <Navigasi/>
      <section className="headerMain px-6 sm:px-24 bg-white">
      <CategorySearch/>

      <div className=" mt-3">
      <Hero/>
      </div>

      <div className="CardGrid py-20">
        <CardGrid/>
      </div>
      
      </section>
    </header>
  )
}

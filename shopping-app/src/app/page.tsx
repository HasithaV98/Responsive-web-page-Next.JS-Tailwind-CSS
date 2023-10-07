import Hero from "./component/hero";
import NewProduct from "./component/newProducts";
import Testimonal from "./component/testimonals";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero/>
      <NewProduct/>
      <Testimonal/>
    </main>
  )
}

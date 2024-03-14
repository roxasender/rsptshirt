import { Nav } from "./components"
import { Hero, PopularProducts } from "./sections"

export default function App() {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
    </main>
  )
}
import { Nav } from "./components"
import { Hero } from "./sections"

export default function App() {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero/>
      </section>
    </main>
  )
}
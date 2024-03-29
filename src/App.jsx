import "./app.scss"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"

const App = () => {
  return (
    <div>
      <section>
        <Navbar/>
        <Hero/>
      </section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Parallax</section>
      <section>Portfolio</section>
      <section>Contact</section>
    </div>
  )
}

export default App
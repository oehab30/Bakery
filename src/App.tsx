import Navbar from "./layout/Navbar"
import Hero from "./components/Home/Hero"
import About from "./components/Home/About"
import Menu from "./components/Home/Menu"
import Gallery from "./components/Home/Gallery"
import Footer from "./layout/Footer"

function App() {
  return (
    <div className="bg-amber-50 min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
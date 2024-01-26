import About from "./components/About/About"
import Banner from "./components/Banner/Banner"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Manu from "./components/Manu/Manu"
import Moddal from "./components/Moddal/Moddal"
import Projects from "./components/Projects/Projects"
import Testimonial from "./components/Testimonial/Testimonial"
import TopInfo from "./components/TopInfo/TopInfo"

const App = () => {
  return (
    
    <>
      <Moddal/> 
      <TopInfo />
      <Manu />
      <Banner/>
      <About />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer/>
    </>
    
  )
}

export default App
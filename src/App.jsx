import About from "./components/About/About"
import Banner from "./components/Banner/Banner"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Manu from "./components/Manu/Manu"
import Moddal from "./components/Moddal/Moddal"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Testimonial from "./components/Testimonial/Testimonial"
import TopInfo from "./components/TopInfo/TopInfo"
// Import Swiper styles
import 'swiper/swiper-bundle.css';

const App = () => {
  return (
    
    <>
      <Moddal/> 
      <TopInfo />
      <Manu />
      <Banner/>
      <About />
      <Skills/>
      <Projects />
      <Testimonial />
      <Contact />
      <Footer/>
    </>
    
  )
}

export default App
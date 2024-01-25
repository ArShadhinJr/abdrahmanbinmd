import About from "./components/About/About"
import Banner from "./components/Banner/Banner"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Manu from "./components/Manu/Manu"
import Project from "./components/Project/Project"
import Testimonial from "./components/Testimonial/Testimonial"
import TopInfo from "./components/TopInfo/TopInfo"

const App = () => {
  return (
    
    <>
      <TopInfo />
      <Manu />
      <Banner/>
      <About />
      <Project />
      <Testimonial />
      <Contact />
      <Footer/>
    </>
    
  )
}

export default App
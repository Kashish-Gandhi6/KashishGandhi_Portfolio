import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';
import Achievements from "./components/Achievements";
const App = () => {

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <div className="relative z-0" id="about">
      <About />
      </div>
      <Tech />
     <Achievements />
      <div className="relative z-0" id="work">
      <Experience />
      </div>
      <div className="relative z-0" id="projects">
      <Works />
      </div>
      
      <div className="relative z-0" id="contact" >
      <Contact />
      </div> 
        <StarsCanvas />
    </div>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter } from "react-router-dom";
import { lazy } from "react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components";

const EarthCanvas = lazy(() => import("./components/canvas/Earth").then(m => ({ default: m.EarthCanvas })));

const App = () => {
  return (
<BrowserRouter>
  <div className='relative z-0 bg-primary'>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar />
      <Hero />
    </div>

    <About />
    <Experience />
    <Tech />
    <Works />
    <Feedbacks />

    <div className='relative z-0'>
      <Contact />
      <StarsCanvas />
    </div>
    
    <Footer />
  </div>
</BrowserRouter>
    
  );
}

export default App;

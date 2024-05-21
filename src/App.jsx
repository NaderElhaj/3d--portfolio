
import { BrowserRouter } from "react-router-dom"
import 
{
  About,Contact,Experience,Feedbacks,Hero,Navbar,BallCanvas,ComputersCanvas,EarthCanvas,StarsCanvas,Tech,Works
} 
from "./components/components"
const App= ()=> {

  return (
<BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>
      <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
      </div>
    </div>
</BrowserRouter>
  )
}

export default App

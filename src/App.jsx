import { BrowserRouter as Router, Routes, Route  } from "react-router-dom"
import Navbar from "./components/Navbar"
import LandingPage from "./pages/LandingPage"
import Footer from "./components/Footer"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Reels from "./pages/Reels"
import Gorilla from "./pages/Gorilla"

function App() {
 

  return (
    <div className="font-font overflow-x-hidden">
       <Router>
          <Navbar/>
          <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/gorilla" element={<Gorilla/>}/>
          <Route path="/reels" element={<Reels/>}/>
          </Routes>
          <Footer/> 
       </Router>
    </div>
  )
}

export default App

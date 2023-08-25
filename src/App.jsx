import { BrowserRouter as Router, Routes, Route  } from "react-router-dom"
import Navbar from "./components/Navbar"
import LandingPage from "./pages/LandingPage"
import Footer from "./components/Footer"

function App() {
 

  return (
    <div className="font-font overflow-x-hidden">
       <Router>
          <Navbar/>
          <Routes>
          <Route path="/" element={<LandingPage/>}/>
          </Routes>
          <Footer/> 
       </Router>
    </div>
  )
}

export default App

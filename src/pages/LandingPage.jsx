import About from "../components/About";
import Contact from "../components/Contact";
import Faqs from "../components/Faqs";
import Hero from "../components/Hero";

const LandingPage = () => {
  return (
    <section>
        <Hero/>
        <About/>
        <Faqs/>
        <Contact/>
      
    </section>
  )
}

export default LandingPage;
import { Route, Routes } from "react-router";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import BackToTop from "./components/utils/back-to-top/BackToTop";
import ServicePage from "./components/service/ServicePage";
import ContactPage from "./components/contact/ContactPage";


function App() {

  return (
    <>
      <Navbar />
     
      <Routes>
        <Route path="/" element={ <HomePage/>} />
        <Route path="/about" element={ <AboutPage/>} />
        <Route path="/service" element={ <ServicePage/>} />
        <Route path="/contact" element={ <ContactPage/>} />
      </Routes>

      <BackToTop/>
      <Footer/>
    </>
  )
}

export default App

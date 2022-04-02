import React, {useState} from 'react';
import Footer from '../components/footer';
import HeroSection from '../components/heroSection';
import InfoSection from '../components/infoSection';
import { homeObjOne, homeObjTwo ,homeObjThree } from '../components/infoSection/data';
import Navbar from '../components/navbar';
import ServicesPage from '../components/servicesPage';
import Sidebar from '../components/sidebar';
const Home = () => {

  const[isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>

  
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <HeroSection />



      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo }/>
      <InfoSection {...homeObjThree}/>


 
    <ServicesPage />
    <Footer />


    
      
    </>
  )
}

export default Home

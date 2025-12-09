import React from 'react'
import HeroBanner from '../component/HeroBanner'
import Navigation from '../component/Navigation'
import ResortSection from '../component/ResortSection'
import AboutUs from '../component/AboutUs'
import VillaBookingSection from '../component/VillaBookingSection'
import VisionMissionSection from '../component/VisionMissionSection'
import TestimonialCard from '../component/TestimonialCard'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <>
    <Navigation/>
    <HeroBanner/>
    <AboutUs/>
    <ResortSection/>
    <VillaBookingSection/>
    <VisionMissionSection/>
    <TestimonialCard/>
    <div className='px-2'>
    <Footer/>
    </div>
    </>
  )
}

export default Home

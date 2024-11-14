import React from 'react'
// import Hero from '../Hero/Hero'
import About from '../About/About'
import ContactUs from '../ContactUs/ContactUs'
import OurProducts from '../OurProducts/OurProducts'
import UserStories from '../UserStories/UserStories'
import NewsLetter from '../NewsLetter/NewsLetter'
import CTA from '../CTA/CTA'
import FAQ from '../FAQ/FAQ'
import Testimonals from '../Testimonals/Testimonals'
import HeroImg from '../HeroImg/HeroImg'

const Sections = () => {
  return (
    <div>
        {/* <Hero/> */}
        <HeroImg/>
        <About/>
        <OurProducts/>
        <Testimonals/>
        <UserStories/>
        <NewsLetter/>
        <CTA/>
        <FAQ/>
        <ContactUs/>
    </div>
  )
}

export default Sections

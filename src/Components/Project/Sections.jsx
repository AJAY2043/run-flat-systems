import React from 'react'
// import Hero from '../Hero/Hero'
import About from '../About/About'
import ContactUs from '../ContactUs/ContactUs'
import OurProducts from '../OurProducts/OurProducts'
// import UserStories from '../UserStories/UserStories'
// import NewsLetter from '../NewsLetter/NewsLetter'
// import CTA from '../CTA/CTA'
// import FAQ from '../FAQ/FAQ'
// import Testimonals from '../Testimonals/Testimonals'
import HeroImg from '../HeroImg/HeroImg'
import Hero1 from '../Hero1/Hero1'
// import Hero2 from '../Hero2/Hero2'
// import Hero3 from '../Hero3/Hero3'
import Hero5 from '../Hero5/Hero5'

const Sections = () => {
  return (
    <div>
        {/* <Hero/> */}
        <HeroImg/>
        <About/>
        <Hero5/>
        <Hero1/>
        <OurProducts/>
        {/* <Hero2/> */}
        {/* <Testimonals/> */}
        {/* <UserStories/> */}
        {/* <NewsLetter/> */}
        {/* <Hero3/> */}
        {/* <CTA/> */}
        {/* <FAQ/> */}
        <ContactUs/>
    </div>
  )
}

export default Sections

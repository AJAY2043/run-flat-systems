import React from 'react'
import About from '../About/About'
import ContactUs from '../ContactUs/ContactUs'

import MainHero from '../MainHero/MainHero'
import Product from '../Product/Product'
import Products from '../ProductsList/Products'
import Footer from '../Footer/Footer'

const Sections = () => {
  return (
    <div>
      
         <MainHero/>

        <About/>
        
        <Product/>

        <Products/>


        <ContactUs/>

        <Footer/>
        
    </div>
  )
}

export default Sections

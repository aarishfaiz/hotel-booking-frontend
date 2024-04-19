import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import MailList from '../../Components/mailList/MailList'
import Footer from '../../Components/footer/Footer'
import Featured from "../../Components/featured/Featured"
import FeaturedProperties from '../../Components/featuredProperties/FeaturedProperties'
import PropertyList  from '../../Components/propertyList/PropertyList'

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Header />

        <div className="homeContainer">
          <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
          <FeaturedProperties/>
          <MailList/>
          <Footer/>
      </div>
    </div>
  )
}

export default Home
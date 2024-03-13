import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import About from '../../Components/About/About'
import Services from '../../Components/Services/Services'
import ContactUs from '../../Components/ContactUs/ContactUs'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="home">
      <section className="Banner-box" id="home">
        <Banner />
      </section>
      <section className="section" id="about">
        <About />
      </section>
      <section className="section" id="services">
        <Services />
      </section>
      <section className="section" id="contactUs">
        <ContactUs />
      </section>
    </div>
    <Footer />
  </>
  )
}

export default Home

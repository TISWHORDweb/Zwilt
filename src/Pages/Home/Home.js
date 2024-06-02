import React from 'react'
import Navbar from '../../Components/Navbar'
import Banner from './Banner'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import GetStarted from '../../Components/GetStarted'
import Footer from '../../Components/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default Home
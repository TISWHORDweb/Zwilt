import React from 'react'
import Navbar from '../../Components/Navbar'
import Banner from './Banner'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  )
}

export default Home
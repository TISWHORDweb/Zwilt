import React from 'react'
import Navbar from '../../Components/Navbar'
import Banner from './Banner'
import Section1 from './Section1'
import Section2 from './Section2'

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Section1 />
      <Section2 />
    </div>
  )
}

export default Home
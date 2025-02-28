import React from 'react'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import ResourcesSection from '../components/ResourcesSection'
import AboutUsSection from '../components/AboutUsSection'

const Home = () => {
  return (
    <div className='w-screen h-full flex justify-center items-center flex-col'>
      <div className='w-full py-14 flex flex-col justify-center
      items-center justify-self-center rounded-md '>
        <HeroSection />
        <ServicesSection />
        <ResourcesSection />
        <AboutUsSection />
      </div>
    </div>

  )
}

export default Home

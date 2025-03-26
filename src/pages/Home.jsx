import React from 'react'
import HeroSection from '../components/home/HeroSection'
import MissionOverviewWithStyles from '../components/home/MissionOverview'






import ServicesSection from '../components/ServicesSection'
import ResourcesSection from '../components/ResourcesSection'
import AboutUsSection from '../components/AboutUsSection'
import ContactSection from '../components/ContactSection'
import BookShop from '../components/BookShop'

const Home = () => {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col '>
      <div className='w-full py-14 flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-blue-100 max-w-[110rem]'>
        <section id='home' className='w-full flex justify-center'>
          < HeroSection />
        </section>

        <MissionOverviewWithStyles />






        <ServicesSection id='services' />
        <ResourcesSection id='resources' />
        <BookShop id='resources'/>
        <AboutUsSection id='resources'/>
        <ContactSection id='resources'/>
      </div>
    </div>

  )
}

export default Home

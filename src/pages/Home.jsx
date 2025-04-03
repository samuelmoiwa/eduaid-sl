import React from 'react'
import HeroSection from '../components/home/HeroSection'
import MissionOverview from '../components/home/MissionOverview'
import FeautureSection from '../components/home/FeaturedSections'
import QuickLinksBanner from '../components/QuickLinksBanner'
import ContactSection from '../components/ContactSection'
import BookShop from '../components/BookShop'


const Home = () => {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col '>
      <div className='w-full pt-14 flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-blue-100 max-w-[110rem]'>
        <section id='home' className='w-full flex justify-center'>
          < HeroSection />
        </section>

        <div className="py-24 bg-gradient-to-br from-teal-500 via-cyan-400 to-blue-600 text-white overflow-hidden flex flex-col justify-center items-center w-full relative ">
          <MissionOverview />
        </div>

        <div className="py-24 bg-gradient-to-br from-teal-50 via-white to-blue-50 overflow-hidden w-full relative">
          <FeautureSection />
        </div>

        <div className="py-16 bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-600 text-white overflow-hidden w-full">
          <QuickLinksBanner />
        </div>

        <div className="py-20 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 text-white overflow-hidden relative w-full">
          <BookShop />
        </div>



        <div className="py-24 bg-gradient-to-br from-teal-600 via-cyan-500 to-blue-700 text-white overflow-hidden relative w-full">
          <ContactSection />
        </div>

      </div>

    </div>
  )
}

export default Home

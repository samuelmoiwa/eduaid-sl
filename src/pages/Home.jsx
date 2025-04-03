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


















const dummyBooks = [
  {
    id: 1,
    title: 'SAT Prep 2025',
    author: 'The Princeton Review',
    category: 'Education',
    price: 29.99,
    affiliateLinks: [
      { site: 'Amazon', url: 'https://amzn.to/dummy-sat-prep-2025', color: 'from-orange-500 to-yellow-500' },
      { site: 'Bookshop.org', url: 'https://bookshop.org/dummy-sat-prep-2025', color: 'from-teal-600 to-blue-600' },
    ],
    image: 'https://via.placeholder.com/200x300?text=SAT+Prep+2025',
    description: 'A comprehensive guide to ace your SATs with practice tests and strategies.',
  },
  {
    id: 2,
    title: 'Python Crash Course',
    author: 'Eric Matthes',
    category: 'Programming',
    price: 39.95,
    affiliateLinks: [
      { site: 'Amazon', url: 'https://amzn.to/dummy-python-crash', color: 'from-orange-500 to-yellow-500' },
      { site: 'Barnes & Noble', url: 'https://barnesandnoble.com/dummy-python-crash', color: 'from-blue-600 to-indigo-600' },
    ],
    image: 'https://via.placeholder.com/200x300?text=Python+Crash+Course',
    description: 'Learn Python programming from scratch with this hands-on guide.',
  },
  {
    id: 3,
    title: 'The Elements of Style',
    author: 'William Strunk Jr.',
    category: 'Writing',
    price: 9.99,
    affiliateLinks: [
      { site: 'Bookshop.org', url: 'https://bookshop.org/dummy-elements-style', color: 'from-teal-600 to-blue-600' },
      { site: 'Amazon', url: 'https://amzn.to/dummy-elements-style', color: 'from-orange-500 to-yellow-500' },
    ],
    image: 'https://via.placeholder.com/200x300?text=Elements+of+Style',
    description: 'A timeless classic for improving your writing skills.',
  },
  {
    id: 4,
    title: 'Calculus Made Easy',
    author: 'Silvanus P. Thompson',
    category: 'Math',
    price: 14.95,
    affiliateLinks: [
      { site: 'Barnes & Noble', url: 'https://barnesandnoble.com/dummy-calculus-easy', color: 'from-blue-600 to-indigo-600' },
      { site: 'Bookshop.org', url: 'https://bookshop.org/dummy-calculus-easy', color: 'from-teal-600 to-blue-600' },
    ],
    image: 'https://via.placeholder.com/200x300?text=Calculus+Made+Easy',
    description: 'Simplify calculus with this accessible and engaging book.',
  },
  {
    id: 5,
    title: 'SAT Prep 2025',
    author: 'The Princeton Review',
    category: 'Education',
    price: 29.99,
    affiliateLinks: [
      { site: 'Amazon', url: 'https://amzn.to/dummy-sat-prep-2025', color: 'from-orange-500 to-yellow-500' },
      { site: 'Bookshop.org', url: 'https://bookshop.org/dummy-sat-prep-2025', color: 'from-teal-600 to-blue-600' },
    ],
    image: 'https://via.placeholder.com/200x300?text=SAT+Prep+2025',
    description: 'A comprehensive guide to ace your SATs with practice tests and strategies.',
  },
  {
    id: 6,
    title: 'Python Crash Course',
    author: 'Eric Matthes',
    category: 'Programming',
    price: 39.95,
    affiliateLinks: [
      { site: 'Amazon', url: 'https://amzn.to/dummy-python-crash', color: 'from-orange-500 to-yellow-500' },
      { site: 'Barnes & Noble', url: 'https://barnesandnoble.com/dummy-python-crash', color: 'from-blue-600 to-indigo-600' },
    ],
    image: 'https://via.placeholder.com/200x300?text=Python+Crash+Course',
    description: 'Learn Python programming from scratch with this hands-on guide.',
  },
  {
    id: 7,
    title: 'The Elements of Style',
    author: 'William Strunk Jr.',
    category: 'Writing',
    price: 9.99,
    affiliateLinks: [
      { site: 'Bookshop.org', url: 'https://bookshop.org/dummy-elements-style', color: 'from-teal-600 to-blue-600' },
      { site: 'Amazon', url: 'https://amzn.to/dummy-elements-style', color: 'from-orange-500 to-yellow-500' },
    ],
    image: 'https://via.placeholder.com/200x300?text=Elements+of+Style',
    description: 'A timeless classic for improving your writing skills.',
  },
  {
    id: 8,
    title: 'Calculus Made Easy',
    author: 'Silvanus P. Thompson',
    category: 'Math',
    price: 14.95,
    affiliateLinks: [
      { site: 'Barnes & Noble', url: 'https://barnesandnoble.com/dummy-calculus-easy', color: 'from-blue-600 to-indigo-600' },
      { site: 'Bookshop.org', url: 'https://bookshop.org/dummy-calculus-easy', color: 'from-teal-600 to-blue-600' },
    ],
    image: 'https://via.placeholder.com/200x300?text=Calculus+Made+Easy',
    description: 'Simplify calculus with this accessible and engaging book.',
  },
];


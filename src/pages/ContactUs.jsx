import React from 'react'
import ContactHero from '../components/contact_us/ContactHero'
import ContactForm from '../components/ContactSection'

const ContactUs = () => {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col '>
      <div className='w-full pt-14 flex flex-col justify-center items-center max-w-[110rem]'>

        <div className="py-32 bg-gradient-to-br from-teal-600 via-cyan-500 to-blue-700 text-white overflow-hidden relative w-full">
          <ContactHero/>
        </div>

        <div className="py-24 bg-gradient-to-br from-teal-600 via-cyan-500 to-blue-700 text-white overflow-hidden relative w-full">
          <ContactForm />
        </div>


      </div>
    </div>
  )
}

export default ContactUs

import React from 'react'
import HelpDeskHeroWithStyles from '../components/help_desk/HelpDeskHero'
import AIAssistantWithStyles from '../components/help_desk/AIAssistant'
import HelpDeskResourcesWithStyles from '../components/help_desk/HelpDeskResources'
import WhatsAppLinkWithStyles from '../components/help_desk/WhatsAppLink'

const HelpDesk = () => {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col '>
      <div className='w-full pt-14 flex flex-col justify-center items-center max-w-[110rem]'>

        <div className="py-32 bg-gradient-to-br from-teal-600 via-cyan-500 to-blue-700 text-white overflow-hidden relative w-full">
          <HelpDeskHeroWithStyles />
        </div>

        <div id="ai-assistant" className="py-16 bg-gradient-to-b from-teal-100 via-white to-blue-100 w-full">
          <AIAssistantWithStyles />
        </div>

        <HelpDeskResourcesWithStyles />

        <div className="py-16 bg-gradient-to-r from-orange-500 to-yellow-500 text-white w-full">
          <WhatsAppLinkWithStyles />
        </div>


      </div>
    </div>
  )
}

export default HelpDesk

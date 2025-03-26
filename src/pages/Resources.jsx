import React from 'react'
import ResourcesHero from '../components/resources/ResourcesHero'
import ResourceFilters from '../components/resources/ResourceFilters'

const Resources = () => {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col '>
      <div className='w-full pt-14 flex flex-col justify-center items-center max-w-[110rem]'>
        <ResourcesHero />
        <ResourceFilters />
      </div>
    </div>
  )
}

export default Resources

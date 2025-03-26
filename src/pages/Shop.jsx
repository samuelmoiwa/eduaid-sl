import React from 'react'
import ShopPage from '../components/shop/ShopPag'
import ShopHero from '../components/shop/ShopHero'

const Shop = () => {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col '>
      <div className='w-full pt-14 flex flex-col justify-center items-center max-w-[110rem]'>
        <div className="py-32 bg-gradient-to-br from-orange-500 via-amber-400 to-yellow-500 text-white overflow-hidden relative w-full">
          <ShopHero />
        </div>

        <div className="py-16 bg-gradient-to-b from-teal-100 via-white to-blue-100 w-full">
          <ShopPage />
        </div>

      </div>
    </div>
  )
}

export default Shop

import React from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import SliderOne from '@/components/Slider/SliderOne'
import WhatNewOne from '@/components/Home1/WhatNewOne'
import productData from '@/data/Product.json'

export default function Home() {
  return (
    <>
      <TopNavOne />
      <div id="header" className='relative w-full'>
        <MenuOne />
        <SliderOne />
        <WhatNewOne data={productData} limit={4} />
      </div>
    </>
  )
}

import React from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import SliderOne from '@/components/Slider/SliderOne'
import WhatNewOne from '@/components/Home1/WhatNewOne'
import productData from '@/data/Product.json'
import Collection from '@/components/Home1/Collection'
import TabFeatures from '@/components/Home1/TabFeatures'
import Banner from '@/components/Home1/Banner'
import Benefit from '@/components/Home1/Benefit'

export default function Home() {
  return (
    <>
      <TopNavOne />
      <div id="header" className='relative w-full'>
        <MenuOne />
        <SliderOne />
        <WhatNewOne data={productData} limit={4} />
        <Collection />
        <TabFeatures data={productData} limit={10} />
        <Banner />
        <Benefit />
      </div>
    </>
  )
}

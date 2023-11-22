import React from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import SliderOne from '@/components/Slider/SliderOne'

export default function Home() {
  return (
    <>
      <TopNavOne />
      <div id="header" className='relative w-full'>
        <MenuOne />
        <SliderOne />
      </div>
    </>
  )
}

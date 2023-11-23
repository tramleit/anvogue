import React from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuTwo from '@/components/Header/Menu/MenuTwo'
import SliderTwo from '@/components/Slider/SliderTwo'
import WhatNewOne from '@/components/Home1/WhatNewOne'
import productData from '@/data/Product.json'
import Collection from '@/components/Home2/Collection'
import TabFeatures from '@/components/Home2/TabFeatures'
import Banner from '@/components/Home1/Banner'
import Benefit from '@/components/Home1/Benefit'
import testimonialData from '@/data/Testimonial.json'
import Testimonial from '@/components/Home1/Testimonial'
import Instagram from '@/components/Home1/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'

export default function Home() {
    return (
        <>
            <TopNavOne props="style-two bg-purple" slogan='Limited Offer: Free shipping on orders over $50' />
            <div id="header" className='relative w-full'>
                <MenuTwo />
                <SliderTwo />
            </div>
            <Collection />
            <WhatNewOne data={productData} start={8} limit={12} />
            <Banner />
            <TabFeatures data={productData} start={12} limit={20} />
            <Benefit props="mt-20 py-10 px-2.5 bg-surface rounded-3xl" />
            <Instagram />
            <Brand />
            <Footer />
        </>
    )
}

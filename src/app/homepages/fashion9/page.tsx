import React from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuEight from '@/components/Header/Menu/MenuEight'
import SliderNine from '@/components/Slider/SliderNine'
import TrendingNow from '@/components/Home9/TrendingNow'
import Deal from '@/components/Home7/Deal'
import productData from '@/data/Product.json'
import Banner from '@/components/Home9/Banner'
import TabFeatures from '@/components/Home2/TabFeatures'
import Benefit from '@/components/Home1/Benefit'
import Instagram from '@/components/Home1/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'

export default function HomeNine() {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan='New customers save 10% with the code GET10' />
            <div id="header" className='relative w-full style-nine'>
                <MenuEight />
                <SliderNine />
            </div>
            <TrendingNow />
            <Deal data={productData} start={1} limit={5} />
            <Banner />
            <TabFeatures data={productData} start={6} limit={14} />
            <Benefit props="mt-20 py-10 px-2.5 bg-surface rounded-[32px]" />
            <Instagram />
            <Brand />
            <Footer />
        </>
    )
}

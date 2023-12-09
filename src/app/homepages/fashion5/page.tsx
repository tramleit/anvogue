import React from 'react'
import TopNavThree from '@/components/Header/TopNav/TopNavThree'
import MenuFour from '@/components/Header/Menu/MenuFour'
import SliderFive from '@/components/Slider/SliderFive'
import Banner from '@/components/Home5/Banner'
import productData from '@/data/Product.json'
import TabFeatures from '@/components/Home2/TabFeatures'
import FlashSale from '@/components/Home5/FlashSale'
import Benefit from '@/components/Home1/Benefit'
import Newsletter from '@/components/Home4/Newsletter'
import Instagram from '@/components/Home3/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'

export default function HomeFive() {
    return (
        <>
            <TopNavThree props="style-three bg-white" />
            <div id="header" className='relative w-full'>
                <MenuFour props="bg-white" />
                <SliderFive />
            </div>
            <Banner />
            <TabFeatures data={productData} start={0} limit={8} />
            <FlashSale />
            <Benefit props="md:pt-20 pt-10" />
            <Newsletter props="bg-green mt-20" />
            <Instagram />
            <Brand />
            <Footer />
        </>
    )
}

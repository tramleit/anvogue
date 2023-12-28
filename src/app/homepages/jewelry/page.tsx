import React from 'react'
import TopNavThree from '@/components/Header/TopNav/TopNavThree'
import MenuFour from '@/components/Header/Menu/MenuFour'
import BannerTop from '@/components/Home3/BannerTop'
import SliderJewelry from '@/components/Slider/SliderJewelry'
import Quote from '@/components/Jewelry/Quote'
import Collection from '@/components/Jewelry/Collection'
import Lookbook from '@/components/Jewelry/Lookbook'
import productData from '@/data/Product.json'
import TabFeatures from '@/components/Jewelry/TabFeatures'
import FeaturedProduct from '@/components/Jewelry/FeaturedProduct'
import Newsletter from '@/components/Home4/Newsletter'
import Benefit from '@/components/Jewelry/Benefit'
import Instagram from '@/components/Jewelry/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'

export default function HomeJewelry() {
    return (
        <>
            <TopNavThree props="style-three bg-white" />
            <div id="header" className='relative w-full'>
                <MenuFour props="bg-white" />
                <BannerTop props="bg-black py-3" textColor='text-white' bgLine='bg-white' />
                <SliderJewelry />
            </div>
            <Quote />
            <Collection />
            <Lookbook />
            <TabFeatures data={productData} start={0} limit={4} />
            <FeaturedProduct data={productData} />
            <Newsletter props="bg-transparent" />
            <Benefit props="py-[60px] bg-linear" />
            <Instagram />
            <Brand />
            <Footer />
        </>
    )
}

import React from 'react'
import TopNavThree from '@/components/Header/TopNav/TopNavThree'
import MenuFour from '@/components/Header/Menu/MenuFour'
import BannerTop from '@/components/Home4/BannerTop'
import SliderSix from '@/components/Slider/SliderSix'
import Collection from '@/components/Home6/Collection'
import productData from '@/data/Product.json'
import TabFeatures from '@/components/Home2/TabFeatures'
import PopularProduct from '@/components/Home6/PopularProduct'
import FlashSale from '@/components/Home6/FlashSale'
import testimonialData from '@/data/Testimonial.json'
import Testimonial from '@/components/Home6/Testimonial'
import BestSaleProduct from '@/components/Home6/BestSaleProduct'
import Benefit from '@/components/Home1/Benefit'
import Instagram from '@/components/Home6/Instagram'
import Brand from '@/components/Home6/Brand'
import Footer from '@/components/Footer/Footer'

export default function HomeSix() {
    return (
        <>
            <TopNavThree props="style-three bg-white" />
            <div id="header" className='relative w-full'>
                <MenuFour props="bg-white" />
                <BannerTop props="bg-black py-3" textColor='text-white' />
                <SliderSix />
            </div>
            <Collection />
            <TabFeatures data={productData} start={0} limit={8} />
            <PopularProduct />
            <FlashSale />
            <Testimonial data={testimonialData} limit={5} />
            <BestSaleProduct data={productData} />
            <Benefit props="md:pt-20 pt-10" />
            <Instagram />
            <Brand />
            <Footer />
        </>
    )
}

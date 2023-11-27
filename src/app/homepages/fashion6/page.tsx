import React from 'react'
import TopNavThree from '@/components/Header/TopNav/TopNavThree'
import MenuFour from '@/components/Header/Menu/MenuFour'
import SliderSix from '@/components/Slider/SliderSix'
import Collection from '@/components/Home6/Collection'
import productData from '@/data/Product.json'
import TabFeatures from '@/components/Home2/TabFeatures'
import FlashSale from '@/components/Home6/FlashSale'
import testimonialData from '@/data/Testimonial.json'
import Testimonial from '@/components/Home6/Testimonial'
import BestSaleProduct from '@/components/Home6/BestSaleProduct'
import Benefit from '@/components/Home1/Benefit'
import Instagram from '@/components/Home1/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'

export default function HomeSix() {
    return (
        <>
            <TopNavThree props="style-three bg-white" />
            <div id="header" className='relative w-full'>
                <MenuFour props="bg-white" />
                <SliderSix />
            </div>
            <Collection />
            <TabFeatures data={productData} start={2} limit={10} />
            <FlashSale />
            <Testimonial data={testimonialData} limit={5} />
            <BestSaleProduct data={productData} />
            <Benefit props="pt-20" />
            <Instagram />
            <Brand />
            <Footer />
        </>
    )
}

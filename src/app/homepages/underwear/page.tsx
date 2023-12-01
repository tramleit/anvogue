import React from 'react'
import TopNavThree from '@/components/Header/TopNav/TopNavThree'
import MenuFour from '@/components/Header/Menu/MenuFour'
import SliderUnderwear from '@/components/Slider/SliderUnderwear'
import BestSellers from '@/components/Home4/BestSellers'
import productData from '@/data/Product.json'
import Collection from '@/components/Underwear/Collection'
import Banner from '@/components/Home1/Banner'
import Benefit from '@/components/Home1/Benefit'
import testimonialData from '@/data/Testimonial.json'
import Testimonial from '@/components/Home4/Testimonial'
import Newsletter from '@/components/Home4/Newsletter'
import Instagram from '@/components/Home1/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'

export default function HomeUnderwear() {
    return (
        <>
            <TopNavThree props="style-three bg-white" />
            <div id="header" className='relative w-full'>
                <MenuFour props="bg-white" />
                <SliderUnderwear />
            </div>
            <Collection />
            <BestSellers data={productData} start={12} limit={20} />
            <Banner />
            <Benefit props="pt-20" />
            <Testimonial data={testimonialData} limit={6} />
            <Newsletter props="bg-black" />
            <Instagram />
            <Brand />
            <Footer />
        </>
    )
}

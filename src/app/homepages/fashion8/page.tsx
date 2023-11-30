import React from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuEight from '@/components/Header/Menu/MenuEight'
import SliderEight from '@/components/Slider/SliderEight'
import BestSellers from '@/components/Home7/BestSellers'
import productData from '@/data/Product.json'
import TrendingNow from '@/components/Home7/TrendingNow'
import PopularProduct from '@/components/Home6/PopularProduct'
import TrendingProduct from '@/components/Home3/TrendingProduct'
import Banner from '@/components/Home7/Banner'
import testimonialData from '@/data/Testimonial.json'
import Testimonial from '@/components/Home7/Testimonial'
import Benefit from '@/components/Home1/Benefit'
import Instagram from '@/components/Home1/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'

export default function HomeEight() {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan='New customers save 10% with the code GET10' />
            <div id="header" className='relative w-full'>
                <MenuEight />
                <SliderEight />
            </div>
            <TrendingNow />
            <BestSellers data={productData} start={4} limit={8} />
            <PopularProduct />
            <TrendingProduct data={productData} start={12} limit={20} />
            <Banner />
            <Testimonial data={testimonialData} limit={5} />
            <Benefit props="pt-20" />
            <Instagram />
            <Brand />
            <Footer />
        </>
    )
}

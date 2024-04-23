import React from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuTwo from '@/components/Header/Menu/MenuTwo'
import SliderSeven from '@/components/Slider/SliderSeven'
import Deal from '@/components/Home7/Deal'
import productData from '@/data/Product.json'
import TrendingNow from '@/components/Home7/TrendingNow'
import PopularProduct from '@/components/Home6/PopularProduct'
import TrendingProduct from '@/components/Home3/TrendingProduct'
import Banner from '@/components/Home7/Banner'
import testimonialData from '@/data/Testimonial.json'
import Testimonial from '@/components/Home7/Testimonial'
import Benefit from '@/components/Home1/Benefit'
import Instagram from '@/components/Home6/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'
import ModalNewsletter from '@/components/Modal/ModalNewsletter'

export default function HomeSeven() {
    return (
        <>
            <TopNavOne props="style-two bg-purple" slogan='Limited Offer: Free shipping on orders over $50' />
            <div id="header" className='relative w-full'>
                <MenuTwo />
                <SliderSeven />
            </div>
            <TrendingNow />
            <Deal data={productData} start={4} limit={8} />
            <PopularProduct />
            <TrendingProduct data={productData} start={12} limit={20} />
            <Banner />
            <Testimonial data={testimonialData} limit={5} />
            <Benefit props="md:pt-20 pt-10" />
            <Instagram />
            <Brand />
            <Footer />
            <ModalNewsletter />
        </>
    )
}

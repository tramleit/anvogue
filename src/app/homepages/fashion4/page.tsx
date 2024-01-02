import React from 'react'
import TopNavThree from '@/components/Header/TopNav/TopNavThree'
import MenuFour from '@/components/Header/Menu/MenuFour'
import BannerTop from '@/components/Home4/BannerTop'
import SliderFour from '@/components/Slider/SliderFour'
import BestSellers from '@/components/Home4/BestSellers'
import productData from '@/data/Product.json'
import Collection from '@/components/Home2/Collection'
import Banner from '@/components/Home1/Banner'
import Benefit from '@/components/Home1/Benefit'
import testimonialData from '@/data/Testimonial.json'
import Testimonial from '@/components/Home4/Testimonial'
import Newsletter from '@/components/Home4/Newsletter'
import Instagram from '@/components/Home3/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'

export default function HomeFour() {
    return (
        <>
            <TopNavThree props="style-three bg-white" />
            <div id="header" className='relative w-full'>
                <MenuFour props="bg-white" />
                <BannerTop props="bg-black py-3" textColor='text-white' />
                <SliderFour />
            </div>
            <Collection props="pt-5" />
            <BestSellers data={productData} start={0} limit={4} />
            <Banner />
            <Benefit props="md:pt-20 pt-10" />
            <Testimonial data={testimonialData} limit={6} />
            <Newsletter props="bg-black mt-20" />
            <Instagram />
            <Brand />
            <Footer />
        </>
    )
}

import React from 'react'
import TopNavThree from '@/components/Header/TopNav/TopNavThree'
import MenuFour from '@/components/Header/Menu/MenuFour'
import SliderToysKid from '@/components/Slider/SliderToysKid'
import BannerTop from '@/components/Home3/BannerTop'
import Benefit from '@/components/Toys/Benefit'
import Banner from '@/components/Toys/Banner'
import productData from '@/data/Product.json'
import WeekProduct from '@/components/Toys/WeekProduct'
import FeaturedProduct from '@/components/Toys/FeaturedProduct'
import TabFeatures from '@/components/Toys/TabFeatures'
import dataTestimonial from '@/data/Testimonial.json'
import blogData from '@/data/Blog.json'
import NewsInsight from '@/components/Toys/NewsInsight'
import Testimonial from '@/components/Furniture/Testimonial'
import Footer from '@/components/Footer/Footer'

export default function HomeCosmeticTwo() {
    return (
        <>
            <TopNavThree props="style-three bg-white" />
            <div id="header" className='relative w-full'>
                <MenuFour props="bg-white" />
                <BannerTop props="bg-black py-3" textColor='text-white' bgLine='bg-white' />
                <SliderToysKid />
            </div>
            <Benefit props="py-20" />
            <Banner />
            <WeekProduct data={productData} start={0} limit={8} />
            <FeaturedProduct data={productData} start={89} limit={94} />
            <TabFeatures data={productData} start={0} limit={4} />
            <Testimonial data={dataTestimonial} limit={4} />
            <NewsInsight data={blogData} start={9} limit={12} />
            <Footer />
        </>
    )
}

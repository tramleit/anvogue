import React from 'react'
import TopNavThree from '@/components/Header/TopNav/TopNavThree'
import MenuToys from '@/components/Header/Menu/MenuToys'
import SliderToysKid from '@/components/Slider/SliderToysKid'
import BannerTop from '@/components/Home3/BannerTop'
import Benefit from '@/components/Toys/Benefit'
import Banner from '@/components/Toys/Banner'
import productData from '@/data/Product.json'
import WeekProduct from '@/components/Toys/WeekProduct'
import FeaturedProduct from '@/components/Toys/FeaturedProduct'
import TabFeatures from '@/components/Toys/TabFeatures'
import blogData from '@/data/Blog.json'
import NewsInsight from '@/components/Toys/NewsInsight'
import dataTestimonial from '@/data/Testimonial.json'
import Testimonial from '@/components/Furniture/Testimonial'
import Footer from '@/components/Footer/Footer'

export default function HomeToys() {
    return (
        <>
            <TopNavThree props="style-three bg-white" />
            <div id="header" className='relative w-full'>
                <MenuToys props="bg-white" />
                <BannerTop props="bg-black py-3" textColor='text-white' bgLine='bg-white' />
                <SliderToysKid />
            </div>
            <Benefit props="md:py-20 py-10" />
            <Banner />
            <WeekProduct data={productData} start={0} limit={8} />
            <FeaturedProduct data={productData} start={1} limit={6} />
            <TabFeatures data={productData} start={0} limit={4} />
            <Testimonial data={dataTestimonial} limit={4} />
            <NewsInsight data={blogData} start={9} limit={12} />
            <Footer />
        </>
    )
}

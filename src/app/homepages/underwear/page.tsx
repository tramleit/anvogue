import React from 'react'
import TopNavThree from '@/components/Header/TopNav/TopNavThree'
import MenuFour from '@/components/Header/Menu/MenuFour'
import SliderUnderwear from '@/components/Slider/SliderUnderwear'
import Collection from '@/components/Underwear/Collection'
import productData from '@/data/Product.json'
import TabFeatures from '@/components/Underwear/TabFeatures'
import FeaturedProduct from '@/components/Underwear/FeaturedProduct'
import LookBook from '@/components/Underwear/LookBook'
import TrendingProduct from '@/components/Underwear/TrendingProduct'
import testimonialData from '@/data/Testimonial.json'
import Testimonial from '@/components/Underwear/Testimonial'
import blogData from '@/data/Blog.json'
import OurBlog from '@/components/Underwear/OurBlog'
import Instagram from '@/components/Underwear/Instagram'
import Brand from '@/components/Underwear/Brand'
import Benefit from '@/components/Underwear/Benefit'
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
            <TabFeatures data={productData} start={27} limit={31} />
            <FeaturedProduct data={productData} />
            <LookBook data={productData} />
            <TrendingProduct data={productData} start={31} limit={40} />
            <Testimonial data={testimonialData} limit={6} />
            <OurBlog data={blogData} start={3} limit={6} />
            <Brand />
            <Instagram />
            <Benefit props="py-[60px]" />
            <Footer />
        </>
    )
}

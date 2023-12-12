import React from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuFour from '@/components/Header/Menu/MenuFour'
import SliderWatch from '@/components/Slider/SliderWatch'
import Category from '@/components/Watch/Category'
import TabFeature from '@/components/Watch/TabFeature'
import Banner from '@/components/Watch/Banner'
import Benefit from '@/components/Home1/Benefit'
import productData from '@/data/Product.json'
import FeaturedProduct from '@/components/Watch/FeaturedProduct'
import TrendingProduct from '@/components/Watch/TrendingProduct'
import PopularProduct from '@/components/Watch/PopularProduct'
import Instagram from '@/components/Watch/Instagram'
import Brand from '@/components/Home6/Brand'
import Footer from '@/components/Footer/Footer'

export default function HomeWatch() {
    return (
        <>
            <div className="bg-black style-watch">
                <TopNavOne props="style-one bg-black" slogan='New customers save 10% with the code GET10' />
                <div id="header" className='relative w-full'>
                    <MenuFour props="bg-green" />
                    <SliderWatch />
                </div>
                <Category />
                <TabFeature data={productData} start={0} limit={5} />
                <Banner />
                <FeaturedProduct data={productData} />
                <TrendingProduct data={productData} />
                <PopularProduct />
                <Benefit props="md:py-[60px] py-8 style-watch md:mt-20 mt-10" />
                <Instagram />
                <Brand />
                <Footer />
            </div>
        </>
    )
}

import React from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuTwo from '@/components/Header/Menu/MenuTwo'
import SliderYoga from '@/components/Slider/SliderYoga'
import productData from '@/data/Product.json'
import BestSeller from '@/components/Yoga/BestSeller'
import Banner from '@/components/Yoga/Banner'
import WhatNewOne from '@/components/Home1/WhatNewOne'
import TabFeatures from '@/components/Home1/TabFeatures'
import WhyChooseUs from '@/components/Yoga/WhyChooseUs'
import FlashSale from '@/components/Yoga/FlashSale'
import blogData from '@/data/Blog.json'
import NewsInsight from '@/components/Toys/NewsInsight'
import Benefit from '@/components/Jewelry/Benefit'
import VideoTutorial from '@/components/Cosmetic3/VideoTutorial'
import Newsletter from '@/components/Cosmetic3/Newsletter'
import Footer from '@/components/Footer/Footer'

export default function HomeCosmeticThree() {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan='New customers save 10% with the code GET10' />
            <div id="header" className='relative w-full'>
                <MenuTwo />
                <SliderYoga />
            </div>
            <BestSeller data={productData} start={0} limit={6} />
            <Banner />
            <WhatNewOne data={productData} start={0} limit={8} />
            <Benefit props="py-10 bg-surface mt-20" />
            <WhyChooseUs />
            <FlashSale />
            <NewsInsight data={blogData} start={12} limit={15} />
            <VideoTutorial />
            <Newsletter props="bg-transparent" />
            <Footer />
        </>
    )
}

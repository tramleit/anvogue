import React from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuEight from '@/components/Header/Menu/MenuEight'
import SliderTen from '@/components/Slider/SliderTen'
import productData from '@/data/Product.json'
import TabFeatures from '@/components/Home2/TabFeatures'
import Collection from '@/components/Home8/Collection'
import Benefit from '@/components/Home1/Benefit'
import blogData from '@/data/Blog.json'
import NewsInsight from '@/components/Home3/NewsInsight'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'

export default function HomeTen() {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan='New customers save 10% with the code GET10' />
            <div id="header" className='relative w-full'>
                <MenuEight />
                <SliderTen />
            </div>
            <TabFeatures data={productData} start={6} limit={14} />
            <Collection />
            <Benefit props="mt-20 py-10 px-2.5 bg-surface rounded-[32px]" />
            <NewsInsight data={blogData} start={0} limit={3} />
            <Brand />
            <Footer />
        </>
    )
}

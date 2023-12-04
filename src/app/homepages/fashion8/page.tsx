import React from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuEight from '@/components/Header/Menu/MenuEight'
import SliderEight from '@/components/Slider/SliderEight'
import Collection from '@/components/Home8/Collection'
import Deal from '@/components/Home7/Deal'
import Banner from '@/components/Home8/Banner'
import productData from '@/data/Product.json'
import TabFeatures from '@/components/Home1/TabFeatures'
import Benefit from '@/components/Home1/Benefit'
import blogData from '@/data/Blog.json'
import NewsInsight from '@/components/Home3/NewsInsight'
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
            <Benefit props="pt-20" />
            <Collection />
            <Deal data={productData} start={0} limit={4} />
            <Banner />
            <TabFeatures data={productData} start={0} limit={4} />
            <NewsInsight data={blogData} start={0} limit={3} />
            <Brand />
            <Footer />
        </>
    )
}

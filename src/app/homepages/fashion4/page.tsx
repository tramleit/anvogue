import React from 'react'
import TopNavThree from '@/components/Header/TopNav/TopNavThree'
import MenuFour from '@/components/Header/Menu/MenuFour'
import SliderThree from '@/components/Slider/SliderThree'
import BestSellers from '@/components/Home4/BestSellers'
import productData from '@/data/Product.json'
import Collection from '@/components/Home2/Collection'
import Benefit from '@/components/Home1/Benefit'
import FlashSale from '@/components/Home3/FlashSale'
import Banner from '@/components/Home1/Banner'
import blogData from '@/data/Blog.json'
import NewsInsight from '@/components/Home3/NewsInsight'
import Instagram from '@/components/Home1/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'

export default function Home() {
    return (
        <>
            <TopNavThree props="style-three bg-white" />
            <div id="header" className='relative w-full'>
                <MenuFour props="bg-white" />
                <SliderThree />
            </div>
            <Collection props="pt-5" />
            <BestSellers data={productData} start={12} limit={20} />
            <Banner />
            <Benefit props="pt-20" />
            <NewsInsight data={blogData} start={0} limit={3} />
            <Instagram />
            <Brand />
            <Footer />
        </>
    )
}

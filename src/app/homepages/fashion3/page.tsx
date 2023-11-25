import React from 'react'
import TopNavThree from '@/components/Header/TopNav/TopNavThree'
import MenuTwo from '@/components/Header/Menu/MenuTwo'
import SliderThree from '@/components/Slider/SliderThree'
import TrendingProduct from '@/components/Home3/TrendingProduct'
import productData from '@/data/Product.json'
import Collection from '@/components/Home2/Collection'
import Benefit from '@/components/Home1/Benefit'
import FlashSale from '@/components/Home3/FlashSale'
import Instagram from '@/components/Home1/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'

export default function Home() {
    return (
        <>
            <TopNavThree props="style-three bg-white" />
            <div id="header" className='relative w-full'>
                <MenuTwo />
                <SliderThree />
            </div>
            <TrendingProduct data={productData} start={10} limit={18} />
            <Collection props="pt-20" />
            <FlashSale />
            <Benefit props="mt-20 py-10 px-2.5 bg-surface rounded-3xl" />
            <Instagram />
            <Brand />
            <Footer />
        </>
    )
}

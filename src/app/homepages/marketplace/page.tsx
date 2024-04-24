import React from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuMarketplace from '@/components/Header/Menu/MenuMarketplace'
import SliderMarketplace from '@/components/Slider/SliderMarketplace'
import Category from '@/components/Organic/Category'
import Banner from '@/components/Organic/Banner'
import productData from '@/data/Product.json'
import PopularProduct from '@/components/Organic/PopularProduct'
import BuyPack from '@/components/Organic/BuyPack'
import FlashSale from '@/components/Organic/FlashSale'
import Benefit from '@/components/Home1/Benefit'
import blogData from '@/data/Blog.json'
import NewsInsight from '@/components/Toys/NewsInsight'
import Brand from '@/components/Organic/Brand'
import Footer from '@/components/Footer/Footer'
import ModalNewsletter from '@/components/Modal/ModalNewsletter'

export default function HomeMarketplace() {
    return (
        <>
            <TopNavOne props="style-marketplace bg-[#263587] border-b border-surface1" slogan='New customers save 10% with the code GET10' />
            <div id="header" className='relative w-full'>
                <MenuMarketplace />
                <SliderMarketplace />
            </div>
            {/* <Category />
            <Banner />
            <PopularProduct data={productData} start={0} limit={8} />
            <BuyPack />
            <FlashSale />
            <NewsInsight data={blogData} start={15} limit={18} />
            <Benefit props="md:pb-20 pb-10" />
            <Brand /> */}
            <Footer />
            <ModalNewsletter />
        </>
    )
}

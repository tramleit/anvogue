import React from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuCosmeticThree from '@/components/Header/Menu/MenuCosmeticThree'
import SliderCosmeticThree from '@/components/Slider/SliderCosmeticThree'
import BannerTop from '@/components/Cosmetic3/BannerTop'
import Banner from '@/components/Cosmetic3/Banner'
import productData from '@/data/Product.json'
import HotProduct from '@/components/Cosmetic3/HotProduct'
import FeaturedProduct from '@/components/Cosmetic3/FeaturedProduct'
import BuyPack from '@/components/Cosmetic1/BuyPack'
import AdsPhoto from '@/components/Cosmetic1/AdsPhoto'
import BestSellers from '@/components/Cosmetic3/BestSellers'
import Benefit from '@/components/Cosmetic3/Benefit'
import VideoTutorial from '@/components/Cosmetic3/VideoTutorial'
import Newsletter from '@/components/Cosmetic3/Newsletter'
import Footer from '@/components/Footer/Footer'
import ModalNewsletter from '@/components/Modal/ModalNewsletter'

export default function HomeCosmeticThree() {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan='New customers save 10% with the code GET10' />
            <div id="header" className='relative w-full'>
                <MenuCosmeticThree />
                <SliderCosmeticThree />
                <BannerTop props="bg-[#F4C6A5] md:py-8 py-4" textColor='text-black' bgLine='bg-black' />
            </div>
            <Banner />
            <HotProduct data={productData} start={3} limit={9} />
            <BuyPack />
            <AdsPhoto />
            <FeaturedProduct data={productData} />
            <BestSellers data={productData} start={9} limit={20} />
            <Benefit props="md:py-20 py-10" />
            <VideoTutorial />
            <Newsletter props="bg-transparent" />
            <Footer />
            <ModalNewsletter />
        </>
    )
}

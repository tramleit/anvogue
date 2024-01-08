import React from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuPet from '@/components/Header/Menu/MenuPet'
import SliderPet from '@/components/Slider/SliderPet'
import Banner from '@/components/Pet/Banner'
import Collection from '@/components/Pet/Collection'
import productData from '@/data/Product.json'
import TabFeatures from '@/components/Pet/TabFeatures'
import ChooseUs from '@/components/Pet/ChooseUs'
import Banner2 from '@/components/Pet/Banner2'
import FeatureProduct from '@/components/Pet/FeatureProduct'
import Benefit from '@/components/Home1/Benefit'
import Instagram from '@/components/Pet/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'

export default function HomePet() {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan='New customers save 10% with the code GET10' />
            <div id="header" className='relative w-full style-pet'>
                <MenuPet />
                <SliderPet />
            </div>
            <Banner />
            <Collection />
            <TabFeatures data={productData} start={0} limit={4} />
            <ChooseUs />
            <Banner2 />
            <FeatureProduct data={productData} start={0} limit={4} />
            <Benefit props="md:mt-20 mt-10 md:pt-20 pt-10 border-t border-line" />
            <Instagram />
            <Brand />
            <Footer />
        </>
    )
}

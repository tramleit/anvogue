'use client'

import React, { useState } from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import BreadcrumbImg from '@/components/Breadcrumb/BreadcrumbImg'
import ShopBreadCrumbImg from '@/components/Shop/ShopBreadCrumbImg'
import productData from '@/data/Product.json'
import Footer from '@/components/Footer/Footer'

export default function Home() {
    const [selectedType, setSelectedType] = useState('t-shirt');

    const handleTypeChange = (newType: string) => {
        setSelectedType(newType);
    };

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <BreadcrumbImg onTypeChange={handleTypeChange} />
            </div>
            <ShopBreadCrumbImg data={productData} selectedType={selectedType}  />
            <Footer />
        </>
    )
}

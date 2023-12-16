'use client'

import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import ShopFilterDropdown from '@/components/Shop/ShopFilterDropdown'
import productData from '@/data/Product.json'
import Footer from '@/components/Footer/Footer'

export default function FilterDropdown() {
    const searchParams = useSearchParams()
    const type = searchParams.get('type')
    const category = searchParams.get('category')

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
            </div>
            <ShopFilterDropdown data={productData} productPerPage={9} dataType={type} />
            <Footer />
        </>
    )
}

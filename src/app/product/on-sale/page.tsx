'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import BreadcrumbProduct from '@/components/Breadcrumb/BreadcrumbProduct'
import OnSale from '@/components/Product/Detail/OnSale';
import Footer from '@/components/Footer/Footer'
import productData from '@/data/Product.json'

const ProductOnSale = () => {
    const searchParams = useSearchParams()
    let productId = searchParams.get('id')

    if (productId === null) {
        productId = '1'
    }

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-white" />
                <BreadcrumbProduct data={productData} productPage='on-sale' productId={productId} />
            </div>
            <OnSale data={productData} productId={productId} />
            <Footer />
        </>
    )
}

export default ProductOnSale
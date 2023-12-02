'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'

interface Props {
    data: Array<ProductType>;
    start: number;
    limit: number;
}

const TabFeatures: React.FC<Props> = ({ data, start, limit }) => {
    return (
        <>
            <div className="tab-features-block style-underwear py-20 bg-surface mt-20">
                <div className="container">
                    <div className="heading flex flex-col items-center text-center">
                        <div className="menu-tab flex items-center gap-2 p-1 bg-white rounded-2xl">
                            <div className="tab-item text-secondary heading5 py-2 px-5 cursor-pointer duration-500 hover:text-black">Best sellers</div>
                            <div className="tab-item text-secondary heading5 py-2 px-5 cursor-pointer duration-500 hover:text-black active">On sale</div>
                            <div className="tab-item text-secondary heading5 py-2 px-5 cursor-pointer duration-500 hover:text-black">New Arrivals</div>
                        </div>
                    </div>

                    <div className="list-product hide-product-sold hide-color grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] mt-10">
                        {data.slice(start, limit).map((prd, index) => (
                            <Product key={index} data={prd} type='grid' />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TabFeatures
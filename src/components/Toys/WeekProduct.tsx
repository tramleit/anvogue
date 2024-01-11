'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'

interface Props {
    data: Array<ProductType>;
    start: number;
    limit: number;
}

const WeekProduct: React.FC<Props> = ({ data, start, limit }) => {
    const [activeTab, setActiveTab] = useState<string>('blanket');

    const handleTabClick = (type: string) => {
        setActiveTab(type);
    };

    const filteredProducts = data.filter((product) => product.type === activeTab && (product.category === 'toys-kid'));

    return (
        <>
            <div className="tab-features-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading flex items-center justify-between gap-5 flex-wrap">
                        <div className="heading3">This week’s highlights</div>
                        <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl">
                            {['pad', 'clothing', 'toy', 'blanket'].map((type) => (
                                <div
                                    key={type}
                                    className={`tab-item text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black 
                                        ${activeTab === type ? 'active' : ''}`}
                                    onClick={() => handleTabClick(type)}
                                >
                                    {type}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="list-product hide-product-sold grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] md:mt-10 mt-6">
                        {filteredProducts.slice(start, limit).map((prd, index) => (
                            <Product key={index} data={prd} type='grid' />
                        ))}
                    </div>
                    <div className="block-button flex items-center justify-center w-full md:mt-10 mt-6">
                        <Link href={'/shop/breadcrumb-img'} className='button-main text-center'>View All Products</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeekProduct
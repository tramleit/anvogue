'use client'

import React, { useState } from 'react'
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'
import { motion } from 'framer-motion'

interface Props {
    data: Array<ProductType>;
    start: number;
    limit: number;
}

const TrendingProduct: React.FC<Props> = ({ data, start, limit }) => {
    const [activeTab, setActiveTab] = useState<string>('swimwear');

    const handleTabClick = (type: string) => {
        setActiveTab(type);
    };

    const filteredProducts = data.filter((product) => product.type === activeTab);

    return (
        <>
            <div className="tab-features-block style-underwear md:pt-20 pt-10">
                <div className="container">
                    <div className="heading flex flex-col items-center text-center">
                        <div className="heading3 text-center">Trending Products</div>
                        <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl mt-6">
                            {['top', 'swimwear', 'underwear', 'sets', 't-shirt'].map((type) => (
                                <div
                                    key={type}
                                    className={`tab-item relative text-secondary py-2 px-5 cursor-pointer duration-500 hover:text-black ${activeTab === type ? 'active' : ''}`}
                                    onClick={() => handleTabClick(type)}
                                >
                                    {activeTab === type && (
                                        <motion.div layoutId='active-pill' className='absolute inset-0 rounded-2xl bg-black'></motion.div>
                                    )}
                                    <span className='relative text-button-uppercase z-[1]'>
                                        {type}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="list-product hide-product-sold  grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] md:mt-10 mt-6">
                        {filteredProducts.slice(start, limit).map((prd, index) => (
                            <Product key={index} data={prd} type='grid' />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingProduct
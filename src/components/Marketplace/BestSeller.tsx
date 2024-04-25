'use client'

import React, { useState } from 'react'
import { ProductType } from '@/type/ProductType';
import { motion } from 'framer-motion'
import Product from '../Product/Product';

interface Props {
    data: Array<ProductType>;
    start: number;
    limit: number;
}

const BestSeller: React.FC<Props> = ({ data, start, limit }) => {
    const [activeTab, setActiveTab] = useState<string>('ipad');

    const handleTabClick = (type: string) => {
        setActiveTab(type);
    };

    const filteredProducts = data.filter((product) => product.category === activeTab);
    console.log(activeTab);
    

    return (
        <div className="tab-features-block style-marketplace md:pt-[60px] pt-10">
            <div className="container">
                <div className="heading flex items-center justify-between gap-5 flex-wrap w-full">
                    <div className="heading3">Best Sellers</div>
                    <div className="menu-tab flex items-center bg-surface rounded-2xl gap-2 p-1">
                        {['watch', 'ipad', 'phone', 'headphone', 'keyboard&mouse'].map((type) => (
                            <div
                                key={type}
                                className={`tab-item relative text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black ${activeTab === type ? 'active' : ''}`}
                                onClick={() => handleTabClick(type)}
                            >
                                {activeTab === type && (
                                    <motion.div layoutId='active-pill' className='absolute inset-0 rounded-2xl bg-white'></motion.div>
                                )}
                                <span className='relative text-button-uppercase z-[1]'>
                                    {type}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className="list-product grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-[30px] gap-5 relative section-swiper-navigation style-outline style-small-border md:mt-10 mt-6">
                    {filteredProducts.slice(start, limit).map((prd, index) => (
                        <Product data={prd} type='marketplace' key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BestSeller

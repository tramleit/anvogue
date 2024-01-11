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

const TabFeatures: React.FC<Props> = ({ data, start, limit }) => {
    const [activeTab, setActiveTab] = useState<string>('on sale')

    const handleTabClick = (item: string) => {
        setActiveTab(item)
    }

    const getFilterData = () => {
        if (activeTab === 'on sale') {
            return data.filter((product) => product.sale && (product.type === 'swimwear' || product.type === 'underwear') && (product.category === 'fashion'))
        }

        if (activeTab === 'new arrivals') {
            return data.filter((product) => product.new && (product.type === 'swimwear' || product.type === 'underwear') && (product.category === 'fashion'))
        }

        if (activeTab === 'best sellers') {
            return data
                .filter((product) => (product.type === 'swimwear' || product.type === 'underwear') && product.category === 'fashion')
                .slice()
                .sort((a, b) => b.sold - a.sold)
        }

        return data
    }

    const filteredProducts = getFilterData()

    return (
        <>
            <div className="tab-features-block style-underwear md:py-20 py-10 bg-surface md:mt-20 mt-10">
                <div className="container">
                    <div className="heading flex flex-col items-center text-center">
                        <div className="menu-tab flex items-center gap-2 p-1 bg-white rounded-2xl">
                            {['best sellers', 'on sale', 'new arrivals'].map((item, index) => (
                                <div
                                    key={index}
                                    className={`tab-item relative text-secondary heading5 py-2 px-5 cursor-pointer duration-500 hover:text-black ${activeTab === item ? 'active' : ''}`}
                                    onClick={() => handleTabClick(item)}
                                >
                                    {activeTab === item && (
                                        <motion.div layoutId='active-pill' className='absolute inset-0 rounded-2xl bg-black'></motion.div>
                                    )}
                                    <span className='relative heading5 z-[1]'>
                                        {item}
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

export default TabFeatures
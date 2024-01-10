'use client'

import React, { useState } from 'react'
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'

interface Props {
    data: Array<ProductType>;
    start: number;
    limit: number;
}

const TabFeatures: React.FC<Props> = ({ data, start, limit }) => {
    const [activeTab, setActiveTab] = useState<string>('sale')

    const handleTabClick = (item: string) => {
        setActiveTab(item)
    }

    const getFilterData = () => {
        if (activeTab === 'sale') {
            return data.filter((product) => product.sale && (product.type === 'underwear' || product.type === 'swimwear'))
        }

        if (activeTab === 'new') {
            return data.filter((product) => product.new && (product.type === 'underwear' || product.type === 'swimwear'))
        }

        if (activeTab === 'best-seller') {
            return data
                .filter(product => (product.type === 'underwear' || product.type === 'swimwear'))
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
                            <div
                                className={`tab-item text-secondary heading5 py-2 px-5 cursor-pointer duration-500 hover:text-black 
                                    ${activeTab === 'best-seller' ? 'active' : ''}`}
                                onClick={() => handleTabClick('best-seller')}
                            >
                                Best sellers
                            </div>
                            <div
                                className={`tab-item text-secondary heading5 py-2 px-5 cursor-pointer duration-500 hover:text-black 
                                    ${activeTab === 'sale' ? 'active' : ''}`}
                                onClick={() => handleTabClick('sale')}
                            >
                                On sale
                            </div>
                            <div
                                className={`tab-item text-secondary heading5 py-2 px-5 cursor-pointer duration-500 hover:text-black 
                                    ${activeTab === 'new' ? 'active' : ''}`}
                                onClick={() => handleTabClick('new')}
                            >
                                New Arrivals
                            </div>
                        </div>
                    </div>

                    <div className="list-product hide-product-sold  grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] max-sm:gap-y-0 md:mt-10 mt-6">
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
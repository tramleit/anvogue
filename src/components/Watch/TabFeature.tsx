'use client'

import React, { useState } from 'react'
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'

interface Props {
    data: Array<ProductType>;
    start: number;
    limit: number;
}

const TabFeature: React.FC<Props> = ({ data, start, limit }) => {
    const [activeTab, setActiveTab] = useState<string>('men');

    const handleTabClick = (type: string) => {
        setActiveTab(type);
    };

    const filteredProducts = data.filter((product) => product.type === activeTab && (product.category === 'watch'));

    return (
        <>
            <div className="tab-features-block style-watch md:pt-20 pt-10">
                <div className="container flex flex-col items-center">
                    <div className="menu-tab flex items-center gap-2 p-1 bg-surface1 rounded-2xl">
                        {['men', 'women'].map((type) => (
                            <div
                                key={type}
                                className={`tab-item text-secondary2 heading5 py-2 px-5 cursor-pointer duration-500 hover:text-white 
                                        ${activeTab === type ? 'active' : ''}`}
                                onClick={() => handleTabClick(type)}
                            >
                                Watch For {type}
                            </div>
                        ))}
                    </div>

                    <div className="list-product hide-product-sold grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] mt-10">
                        {filteredProducts.slice(start, limit).map((prd, index) => (
                            <Product data={prd} type='grid' key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TabFeature
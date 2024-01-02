'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
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
            return data.filter((product) => product.sale && (product.category === 'fashion'))
        }

        if (activeTab === 'new') {
            return data.filter((product) => product.new && (product.category === 'fashion'))
        }

        if (activeTab === 'best-seller') {
            return data
                .filter((product) => product.category === 'fashion')
                .slice()
                .sort((a, b) => b.sold - a.sold)
        }

        return data
    }

    const filteredProducts = getFilterData()

    return (
        <>
            <div className="tab-features-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading flex flex-col items-center text-center">
                        <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl">
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

                    <div className="list-product hide-product-sold section-swiper-navigation  mt-10">
                        <Swiper
                            spaceBetween={12}
                            slidesPerView={2}
                            navigation
                            loop={true}
                            modules={[Navigation, Autoplay]}
                            breakpoints={{
                                576: {
                                    slidesPerView: 2,
                                    spaceBetween: 12,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {filteredProducts.slice(start, limit).map((prd, index) => (
                                <SwiperSlide key={index}>
                                    <Product data={prd} type='grid' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TabFeatures
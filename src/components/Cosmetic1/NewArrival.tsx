'use client'

import React, { useState } from 'react'
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

interface Props {
    data: Array<ProductType>;
    start: number;
    limit: number;
}

const NewArrival: React.FC<Props> = ({ data, start, limit }) => {
    const [activeTab, setActiveTab] = useState<string>('eye');

    const handleTabClick = (type: string) => {
        setActiveTab(type);
    };

    const filteredProducts = data.filter((product) => product.type === activeTab && (product.category === 'cosmetic'));

    return (
        <>
            <div className="tab-features-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading flex items-center justify-between gap-5 gap-y-3 flex-wrap">
                        <div className="heading3">New Arrival</div>
                        <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl">
                            {['eye', 'hair', 'face', 'lip', 'nail'].map((type) => (
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
                    <div className="list-product hide-product-sold  section-swiper-navigation style-outline style-center style-small-border md:mt-10 mt-6">
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
                                992: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                            }}
                            className='h-full'
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

export default NewArrival
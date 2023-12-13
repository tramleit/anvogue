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

const TabFeature: React.FC<Props> = ({ data, start, limit }) => {
    const [activeTab, setActiveTab] = useState<string>('men');

    const handleTabClick = (gender: string) => {
        setActiveTab(gender);
    };

    const filteredProducts = data.filter((product) => product.gender === activeTab && (product.category === 'watch'));

    return (
        <>
            <div className="tab-features-block style-watch md:pt-20 pt-10">
                <div className="container">
                    <div className="heading flex items-center justify-center">
                        <div className="menu-tab flex items-center justify-center gap-2 p-1 bg-surface1 rounded-2xl">
                            {['men', 'women'].map((gender) => (
                                <div
                                    key={gender}
                                    className={`tab-item text-secondary2 heading5 py-2 px-5 cursor-pointer duration-500 hover:text-white 
                                        ${activeTab === gender ? 'active' : ''}`}
                                    onClick={() => handleTabClick(gender)}
                                >
                                    Watch For {gender}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="list-product hide-product-sold hide-color section-swiper-navigation style-outline style-small-border mt-10">
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
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                            }}
                            className='w-full'
                        >
                            {filteredProducts.slice(start, limit).map((prd) => (
                                <SwiperSlide key={prd.id}>
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

export default TabFeature
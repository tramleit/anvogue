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

const BestSeller: React.FC<Props> = ({ data, start, limit }) => {

    return (
        <>
            <div className="tab-features-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading3 text-center">Best sellers</div>
                    <div className="list-product hide-product-sold  section-swiper-navigation style-outline style-small-border md:mt-10 mt-6">
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
                            {data
                                .filter(product => product.category === 'yoga')
                                .slice(start, limit)
                                .map((prd, index) => (
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

export default BestSeller
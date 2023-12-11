'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import Product from '../Product/Product';
import { ProductType } from '@/type/ProductType'

interface Props {
    data: Array<ProductType>;
    start: number;
    limit: number;
}

const FeaturedProduct: React.FC<Props> = ({ data, start, limit }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex);
    };

    return (
        <>
            <div className="featured-product toys-kid md:pt-20 pt-10">
                <div className="container relative">
                    <div className="content flex items-center justify-between max-sm:flex-col gap-8 bg-surface md:p-[60px] p-10 rounded-[28px]">
                        <div className="left bg-product sm:w-1/2">
                            {data.slice(start, limit).map((prd, index) => (
                                <div
                                    className={`bg-img rounded-[20px] overflow-hidden ${index === activeIndex ? 'active' : ''}`}
                                    key={prd.id}
                                    data-item={prd.id}
                                >
                                    <Image
                                        src={prd.images[2]}
                                        width={2000}
                                        height={2000}
                                        alt={prd.name}
                                        className='avatar w-full h-full aspect-square object-cover'
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="right sm:w-1/2 w-full xl:pl-[150px] xl:pr-[80px] sm:pl-[80px] sm:pr-8 px-6 hide-color hide-product-sold section-swiper-navigation style-outline style-small-border">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={20}
                                navigation
                                modules={[Navigation, Autoplay]}
                                className=''
                                onSlideChange={handleSlideChange}
                            >
                                {data.slice(start, limit).map((prd) => (
                                    <SwiperSlide key={prd.id} data-item={prd.id}>
                                        <Product data={prd} type='grid' />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedProduct
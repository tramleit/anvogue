'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import TestimonialItem from '../Testimonial/TestimonialItem';
import { TestimonialType } from '@/type/TestimonialType'

interface Props {
    data: Array<TestimonialType>;
    limit: number;
}

const Testimonial: React.FC<Props> = ({ data, limit }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex);
    };

    return (
        <>
            <div className="testimonial-block style-four bg-surface md:mt-20 mt-10 md:py-20 py-14">
                <div className="container flex items-center justify-between flex-wrap gap-y-6 max-md:flex-col-reverse">
                    <div className="md:w-1/2 w-full list-testimonial section-swiper-navigation style-small-border">
                        <div className="heading3 md:pb-10 pb-5">What People Say</div>
                        <Swiper
                            slidesPerView={1}
                            navigation
                            modules={[Navigation, Autoplay]}
                            className='h-full'
                            onSlideChange={handleSlideChange}
                        >
                            {data.slice(0, limit).map((prd, index) => (
                                <SwiperSlide key={index} data-item={prd.id}>
                                    <TestimonialItem data={prd} type='style-four' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="list-avatar lg:w-5/12 md:w-1/2 md:pl-9 text-center">
                        {data.slice(0, limit).map((prd, index) => (
                            <div
                                className={`bg-img rounded-t-full overflow-hidden ${index === activeIndex ? 'active' : ''}`}
                                key={index}
                                data-item={prd.id}
                            >
                                <Image
                                    src={prd.avatar}
                                    width={1000}
                                    height={700}
                                    alt={prd.name}
                                    className='avatar w-full'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial
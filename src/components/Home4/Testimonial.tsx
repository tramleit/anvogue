'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import TestimonialItem from '../Testimonial/TestimonialItem';
import { TestimonialType } from '@/type/TestimonialType'

interface Props {
    data: Array<TestimonialType>;
    limit: number;
}

const Testimonial: React.FC<Props> = ({ data, limit }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (item: any) => {
        setActiveIndex(item.activeIndex);
    };

    return (
        <>
            <div className="testimonial-block style-four md:pt-20 pt-10">
                <div className="container flex items-center justify-between flex-wrap gap-y-6 max-md:flex-col-reverse">
                    <div className="md:w-1/2 w-full list-testimonial section-swiper-navigation style-small-border">
                        <Swiper
                            slidesPerView={1}
                            navigation
                            modules={[Navigation]}
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
                    <div className="list-avatar lg:w-5/12 md:w-1/2 md:pl-9 text-center overflow-hidden">
                        {data.slice(0, limit).map((prd, index) => (
                            <div
                                className={`bg-img rounded-[32px] overflow-hidden ${index === activeIndex ? 'active' : ''}`}
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
                        <Link href={'#!'} className="text-button-uppercase font-medium text-center underline pt-5 inline-block">Shop the bikini top</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial
'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import TestimonialItem from '../Testimonial/TestimonialItem';
import { TestimonialType } from '@/type/TestimonialType'

interface Props {
    data: Array<TestimonialType>;
    limit: number;
}

const Testimonial: React.FC<Props> = ({ data, limit }) => {
    return (
        <>
            <div className="testimonial-block mt-5 md:py-20 py-14 bg-surface">
                <div className="container">
                    <div className="heading3 text-center">
                        The Ultimate Guide to Guest Reviews
                    </div>
                    <div className="body1 font-normal text-secondary text-center mt-4">Discover What Our Guests Really Think About Their Stay</div>
                    <div className="list-testimonial pagination-mt40 mt-10">
                        <Swiper
                            spaceBetween={12}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            loop={true}
                            modules={[Pagination, Autoplay]}
                            breakpoints={{
                                680: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {data.slice(0, limit).map((prd, index) => (
                                <SwiperSlide key={index}>
                                    <TestimonialItem data={prd} type='style-seven' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial
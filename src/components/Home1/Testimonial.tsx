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
            <div className="testimonial-block md:py-20 py-10 bg-surface">
                <div className="container">
                    <div className="heading3 text-center">
                        What People Are Saying
                    </div>

                    <div className="list-testimonial pagination-mt40 md:mt-10 mt-6">
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
                                    <TestimonialItem data={prd} type='style-one' />
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
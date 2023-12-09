'use client'

import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import { TestimonialType } from '@/type/TestimonialType'

interface Props {
    data: Array<TestimonialType>;
    limit: number;
}

const Testimonial: React.FC<Props> = ({ data, limit }) => {
    return (
        <>
            <div className="testimonial-block pt-20">
                <div className="container">
                    <div className="content bg-surface overflow-hidden xl:-mx-5 rounded-3xl md:py-[60px] py-8">
                        <div className="heading3 text-center">Happy Clients</div>
                        <div className="list-testi w-full section-swiper-navigation style-center style-small-border mt-5">
                            <Swiper
                                slidesPerView={1}
                                loop={true}
                                navigation
                                modules={[Navigation]}
                                className='h-full'
                            >
                                {data.slice(0, limit).map((prd, index) => (
                                    <>
                                        <SwiperSlide key={index}>
                                            <div className="testi-item flex flex-col items-center justify-center xl:px-[120px] md:px-[60px] px-8">
                                                <div className="desc heading4 font-medium text-center">{prd.description}</div>
                                                <div className="infor flex flex-col items-center justify-center mt-10">
                                                    <div className="avatar w-20 h-20 rounded-full overflow-hidden">
                                                        <Image
                                                            src={prd.avatar}
                                                            width={80}
                                                            height={80}
                                                            alt='avatar'
                                                            className='w-full h-full'
                                                        />
                                                    </div>
                                                    <div className="name body1 font-semibold uppercase mt-5">{prd.name}</div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial
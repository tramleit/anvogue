'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

const Brand = () => {
    return (
        <>
            <div className="brand-block py-10 bg-black">
                <div className="container">
                    <div className="list-brand">
                        <Swiper
                            spaceBetween={12}
                            slidesPerView={2}
                            loop={true}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 4000,
                            }}
                            breakpoints={{
                                500: {
                                    slidesPerView: 3,
                                    spaceBetween: 16,
                                },
                                680: {
                                    slidesPerView: 4,
                                    spaceBetween: 16,
                                },
                                992: {
                                    slidesPerView: 5,
                                    spaceBetween: 16,
                                },
                                1200: {
                                    slidesPerView: 6,
                                    spaceBetween: 16,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="brand-item relative flex items-center justify-center">
                                    <Image
                                        src={'/images/brand/1-1.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-auto duration-500 relative'
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-item relative flex items-center justify-center">
                                    <Image
                                        src={'/images/brand/2-1.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-auto duration-500 relative'
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-item relative flex items-center justify-center">
                                    <Image
                                        src={'/images/brand/3-1.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-auto duration-500 relative'
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-item relative flex items-center justify-center">
                                    <Image
                                        src={'/images/brand/4-1.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-auto duration-500 relative'
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-item relative flex items-center justify-center">
                                    <Image
                                        src={'/images/brand/5-1.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-auto duration-500 relative'
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-item relative flex items-center justify-center">
                                    <Image
                                        src={'/images/brand/6-1.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-auto duration-500 relative'
                                    />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brand
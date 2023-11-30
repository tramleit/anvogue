'use client'

import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';

const SliderSeven = () => {
    return (
        <>
            <div className={`slider-block style-seven bg-white xl:h-[860px] lg:h-[800px] md:h-[580px] sm:h-[500px] h-[350px] max-[420px]:h-[300px] w-full`}>
                <div className="slider-main h-full w-full">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay]}
                        className='h-full relative'
                        autoplay={{
                            delay: 4000,
                        }}
                    >
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="container w-full h-full flex items-center relative">
                                    <div className="text-content basis-1/2 flex flex-col items-center">
                                        <div className="text-sub-display text-center">Sale! Up To 50% Off!</div>
                                        <div className="text-display text-center md:mt-4 mt-2">Summer Sale Collections</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute sm:w-[48%] w-[54%] 2xl:-right-[60px] right-0 bottom-0">
                                        <Image
                                            src={'/images/slider/bg7-1.png'}
                                            width={670}
                                            height={936}
                                            alt='bg7-1'
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="container w-full h-full flex items-center relative">
                                    <div className="text-content basis-1/2 flex flex-col items-center">
                                        <div className="text-sub-display text-center">Sale! Up To 50% Off!</div>
                                        <div className="text-display text-center md:mt-4 mt-2">Discover the Latest Trends in Fashion</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute sm:w-1/2 w-3/5 2xl:-right-[60px] -right-4 bottom-0">
                                        <Image
                                            src={'/images/slider/bg2-2.png'}
                                            width={670}
                                            height={936}
                                            alt='bg2-2'
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="container w-full h-full flex items-center relative">
                                    <div className="text-content basis-1/2 flex flex-col items-center">
                                        <div className="text-sub-display text-center">Sale! Up To 50% Off!</div>
                                        <div className="text-display text-center md:mt-4 mt-2">New season, new wardrobe!</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute sm:w-[43%] w-3/5 2xl:-right-[36px] right-0 sm:bottom-0 -bottom-[30px]">
                                        <Image
                                            src={'/images/slider/bg2-3.png'}
                                            width={670}
                                            height={936}
                                            alt='bg2-3'
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default SliderSeven
'use client'

import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';


const SliderTen = () => {
    return (
        <>
            <div className="slider-block style-one bg-[#F5EEE7] xl:h-[540px] lg:h-[540px] md:h-[380px] h-[360px] max-[420px]:h-[300px] w-full">
                <div className="slider-main h-full w-full">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className='h-full relative'
                        autoplay={{
                            delay: 4000,
                        }}
                    >
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative overflow-hidden">
                                <div className="container lg:pl-[320px] w-full h-full flex items-center relative">
                                    <div className="text-content basis-1/2">
                                        <div className="text-sub-display">Sale! Up To 50% Off!</div>
                                        <div className="heading1 md:mt-5 mt-2">Unveiling the Latest in Style</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute xl:w-[33%] sm:w-[36%] w-[58%] xl:right-[40px] lg:right-0 md:right-6 -right-6 bottom-0 z-[-1]">
                                        <Image
                                            src={'/images/slider/bg10-1.png'}
                                            width={2000}
                                            height={1936}
                                            alt='bg10-1'
                                            className='w-full'
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative overflow-hidden">
                                <div className="container lg:pl-[320px] w-full h-full flex items-center relative">
                                    <div className="text-content basis-1/2">
                                        <div className="text-sub-display">Sale! Up To 50% Off!</div>
                                        <div className="heading1 md:mt-5 mt-2">Embrace Your Inner Style Icon</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute xl:w-[35%] sm:w-[38%] w-[64%] xl:right-0 md:right-5 -right-8 bottom-0 z-[-1]">
                                        <Image
                                            src={'/images/slider/bg10-2.png'}
                                            width={2000}
                                            height={1936}
                                            alt='bg10-2'
                                            className='w-full'
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative overflow-hidden">
                                <div className="container lg:pl-[320px] w-full h-full flex items-center relative">
                                    <div className="text-content basis-1/2">
                                        <div className="text-sub-display">Sale! Up To 50% Off!</div>
                                        <div className="heading1 md:mt-5 mt-2">Discover the Power of Fashion</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute xl:w-[34%] sm:w-[39%] w-[60%] xl:right-[40px] md:right-4 sm:right-[0px] -right-8 bottom-0 z-[-1]">
                                        <Image
                                            src={'/images/slider/bg10-3.png'}
                                            width={2000}
                                            height={2000}
                                            alt='bg10-3'
                                            className='w-full'
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

export default SliderTen
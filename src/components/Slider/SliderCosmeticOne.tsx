'use client'

import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';


const SliderCosmeticOne = () => {
    return (
        <>
            <div className="slider-block style-one bg-linear 2xl:h-[820px] xl:h-[740px] lg:h-[680px] md:h-[580px] sm:h-[500px] h-[420px] w-full">
                <div className="slider-main h-full w-full">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay]}
                        className='h-full relative '
                        autoplay={{
                            delay: 4000,
                        }}
                    >
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="container w-full h-full flex items-center">
                                    <div className="text-content sm:w-1/2 w-2/3">
                                        <div className="text-sub-display">Sale! Up To 50% Off!</div>
                                        <div className="text-display md:mt-5 mt-2">Discover Your Beauty Potential</div>
                                        <div className="body1 mt-4">Check out our latest collection of chic and trendy outfits that will keep you looking stylish all year round.</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                                        <Image
                                            src={'/images/slider/bg-cos1-1.png'}
                                            width={2560}
                                            height={1080}
                                            alt='bg-cos1-1'
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="container w-full h-full flex items-center">
                                    <div className="text-content sm:w-1/2 w-2/3">
                                        <div className="text-sub-display">Sale! Up To 50% Off!</div>
                                        <div className="text-display md:mt-5 mt-2">Elevate Your Beauty with Our Cosmetics</div>
                                        <div className="body1 mt-4">Check out our latest collection of chic and trendy outfits that will keep you looking stylish all year round.</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                                        <Image
                                            src={'/images/slider/bg-cos1-2.png'}
                                            width={2560}
                                            height={1080}
                                            alt='bg-cos1-2'
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="container w-full h-full flex items-center">
                                    <div className="text-content sm:w-1/2 w-2/3">
                                        <div className="text-sub-display">Sale! Up To 50% Off!</div>
                                        <div className="text-display md:mt-5 mt-2">Unleash Your Inner Glamour</div>
                                        <div className="body1 mt-4">Check out our latest collection of chic and trendy outfits that will keep you looking stylish all year round.</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                                        <Image
                                            src={'/images/slider/bg-cos1-3.png'}
                                            width={2560}
                                            height={1080}
                                            alt='bg-cos1-3'
                                            className='w-full h-full object-cover'
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

export default SliderCosmeticOne
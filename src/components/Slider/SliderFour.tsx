'use client'

import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';


const SliderFour = () => {
    return (
        <>
            <div className="slider-block style-one bg-linear xl:h-[860px] lg:h-[800px] md:h-[580px] sm:h-[500px] h-[350px] max-[420px]:h-[320px] w-full">
                <div className="slider-main h-full w-full">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay]}
                        className='h-full relative dots-white'
                        autoplay={{
                            delay: 4000,
                        }}
                    >
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="container w-full h-full">
                                    <div className="text-content w-full h-full flex flex-col items-center justify-center">
                                        <div className="text-sub-display text-white text-center">Sale! Up To 50% Off!</div>
                                        <div className="text-display text-white text-center md:mt-5 mt-2">Trendy Women{String.raw`'s`} <br />Clothing</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main bg-white text-black hover:bg-black hover:text-white md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                                        <Image
                                            src={'/images/slider/bg4-1.png'}
                                            width={2560}
                                            height={1080}
                                            alt='bg4-1'
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="container w-full h-full">
                                    <div className="text-content w-full h-full flex flex-col items-center justify-center">
                                        <div className="text-sub-display text-white text-center">Sale! Up To 50% Off!</div>
                                        <div className="text-display text-white text-center md:mt-5 mt-2">Shop the Latest <br />Fashion Trends</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main bg-white text-black hover:bg-black hover:text-white md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                                        <Image
                                            src={'/images/slider/bg4-2.png'}
                                            width={2560}
                                            height={1080}
                                            alt='bg4-2'
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="container w-full h-full">
                                    <div className="text-content w-full h-full flex flex-col items-center justify-center">
                                        <div className="text-sub-display text-white text-center">Sale! Up To 50% Off!</div>
                                        <div className="text-display text-white text-center md:mt-5 mt-2">Get Ready to <br />Turn Heads</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main bg-white text-black hover:bg-black hover:text-white md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                                        <Image
                                            src={'/images/slider/bg4-3.png'}
                                            width={2560}
                                            height={1080}
                                            alt='bg4-3'
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

export default SliderFour
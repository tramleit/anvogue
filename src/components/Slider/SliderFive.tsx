'use client'

import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';


const SliderFive = () => {
    return (
        <>
            <div className="slider-block style-five bg-linear xl:h-[860px] lg:h-[800px] md:h-[580px] sm:h-[500px] h-[350px] max-[420px]:h-[320px] w-full">
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
                                <div className="container w-full h-full flex items-center justify-end">
                                    <div className="text-content w-1/2">
                                        <div className="text-sub-display text-white">Sale! Up To 50% Off!</div>
                                        <div className="text-display text-white md:mt-5 mt-2">Fashion for <br />Every Occasio</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main bg-white text-black hover:bg-black hover:text-white md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                                        <Image
                                            src={'/images/slider/bg5-1.png'}
                                            width={2560}
                                            height={1080}
                                            alt='bg5-1'
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="container w-full h-full flex items-center justify-end">
                                    <div className="text-content w-1/2">
                                        <div className="text-sub-display text-white">Sale! Up To 50% Off!</div>
                                        <div className="text-display text-white md:mt-5 mt-2">Elevate Your <br />Wardrobe Today</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main bg-white text-black hover:bg-black hover:text-white md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                                        <Image
                                            src={'/images/slider/bg5-2.png'}
                                            width={2560}
                                            height={1080}
                                            alt='bg5-2'
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

export default SliderFive
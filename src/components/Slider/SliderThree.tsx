'use client'

import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';

const SliderThree = () => {
    return (
        <>
            <div className={`slider-block style-three xl:h-[860px] lg:h-[800px] md:h-[580px] sm:h-[500px] h-[350px] max-[420px]:h-[340px] w-full`}>
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
                            <div className="slider-item h-full w-full relative bg-[#B0A092]">
                                <div className="container w-full h-full flex items-center relative">
                                    <div className="text-content basis-1/2">
                                        <div className="text-sub-display text-white">Sale! Up To 50% Off!</div>
                                        <div className="text-display text-white md:mt-4 mt-2">Fashion for Every Occasio</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main bg-white text-black md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute sm:w-1/2 w-3/5 2xl:-right-[60px] right-0 bottom-0">
                                        <Image
                                            src={'/images/slider/bg3-1.png'}
                                            width={1000}
                                            height={2000}
                                            alt='bg3-1'
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative bg-[#ACB99B]">
                                <div className="container w-full h-full flex items-center relative">
                                    <div className="text-content basis-1/2">
                                        <div className="text-sub-display">Sale! Up To 50% Off!</div>
                                        <div className="text-display md:mt-4 mt-2">Find Your Style with Us</div>
                                        <div className="body1 md:mt-4 mt-2">Check out our latest collection of chic and trendy outfits</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main bg-white text-black md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute sm:w-1/2 w-3/5 2xl:-right-[60px] -right-4 bottom-0">
                                        <Image
                                            src={'/images/slider/bg3-2.png'}
                                            width={1000}
                                            height={2000}
                                            alt='bg3-2'
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative bg-[#B19696]">
                                <div className="container w-full h-full flex items-center relative">
                                    <div className="text-content basis-1/2">
                                        <div className="text-sub-display">Sale! Up To 50% Off!</div>
                                        <div className="text-display md:mt-4 mt-2">Get Ready to Turn Heads</div>
                                        <div className="body1 md:mt-4 mt-2">Check out our curated selection of must-have outfits for any occasion</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute sm:w-[52%] w-2/3 2xl:-right-[100px] -right-[40px] bottom-0">
                                        <Image
                                            src={'/images/slider/bg1-3.png'}
                                            width={1000}
                                            height={2000}
                                            alt='bg1-3'
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

export default SliderThree
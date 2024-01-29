'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';


const SliderCosmeticThree = () => {
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
                        className='h-full relative dots-white'
                        autoplay={{
                            delay: 4000,
                        }}
                    >
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="container w-full h-full flex flex-col text-center items-center justify-center">
                                    <div className="text-content sm:w-[55%] w-2/3">
                                        <div className="text-sub-display text-center text-white">Sale! Up To 50% Off!</div>
                                        <div className="text-display text-center text-white md:mt-5 mt-2">Discover the Secrets of Effective Skincare</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main bg-white text-black md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                                        <Image
                                            src={'/images/slider/bg-cos3-1.png'}
                                            width={2560}
                                            height={1080}
                                            alt='bg-cos3-1'
                                            priority={true}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="container w-full h-full flex flex-col text-center items-center justify-center">
                                    <div className="text-content sm:w-[55%] w-2/3">
                                        <div className="text-sub-display text-center text-white">Sale! Up To 50% Off!</div>
                                        <div className="text-display text-center text-white md:mt-5 mt-2">Experience the Beauty of Effective Skincare</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main bg-white text-black md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                                        <Image
                                            src={'/images/slider/bg-cos3-2.png'}
                                            width={2560}
                                            height={1080}
                                            alt='bg-cos3-2'
                                            priority={true}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="container w-full h-full flex flex-col text-center items-center justify-center">
                                    <div className="text-content sm:w-[55%] w-2/3">
                                        <div className="text-sub-display text-center text-white">Sale! Up To 50% Off!</div>
                                        <div className="text-display text-center text-white md:mt-5 mt-2">Elevate Your Skincare Journey</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main bg-white text-black md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                                        <Image
                                            src={'/images/slider/bg-cos3-3.png'}
                                            width={2560}
                                            height={1080}
                                            alt='bg-cos3-3'
                                            priority={true}
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

export default SliderCosmeticThree
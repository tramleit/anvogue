'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

const SliderWatch = () => {
    return (
        <>
            <div className="slider-block style-one 2xl:h-[760px] xl:h-[720px] lg:h-[680px] md:h-[580px] sm:h-[500px] h-[420px] w-full">
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
                                <div className="container w-full h-full flex items-center">
                                    <div className="text-content sm:w-1/2 w-2/3">
                                        <div className="text-sub-display text-green">Sale! Up To 50% Off!</div>
                                        <div className="text-display text-white md:mt-5 mt-2">Discover Smart Watches</div>
                                        <div className="body1 text-secondary2 mt-4">Check out our latest collection of chic and trendy outfits that will keep you looking stylish all year round.</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main bg-green text-black md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                                        <Image
                                            src={'/images/slider/watch1.png'}
                                            width={3000}
                                            height={2000}
                                            alt='watch1'
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
                                        <div className="text-sub-display text-green">Sale! Up To 50% Off!</div>
                                        <div className="text-display text-white md:mt-5 mt-2">Explore the Finest Watches </div>
                                        <div className="body1 text-secondary2 mt-4">Check out our latest collection of chic and trendy outfits that will keep you looking stylish all year round.</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main bg-green text-black md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                                        <Image
                                            src={'/images/slider/watch2.png'}
                                            width={3000}
                                            height={2000}
                                            alt='watch2'
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
                                        <div className="text-sub-display text-green">Sale! Up To 50% Off!</div>
                                        <div className="text-display text-white md:mt-5 mt-2">Explore the Timeless Elegance</div>
                                        <div className="body1 text-secondary2 mt-4">Check out our latest collection of chic and trendy outfits that will keep you looking stylish all year round.</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main bg-green text-black md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                                        <Image
                                            src={'/images/slider/watch3.png'}
                                            width={3000}
                                            height={2000}
                                            alt='watch3'
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

export default SliderWatch
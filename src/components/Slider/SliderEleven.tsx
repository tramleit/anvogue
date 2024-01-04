'use client'

import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';


const SliderEleven = () => {
    return (
        <>
            <div className="slider-block style-two w-full">
                <div className="container lg:pt-[30px] flex max-lg:flex-wrap gap-y-5 h-full w-full">
                    <div className="slider-main lg:w-2/3 w-full lg:pr-[15px] max-lg:h-[300px] max-[420px]:h-[340px]">
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            loop={true}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            className='w-full h-full relative rounded-3xl overflow-hidden'
                            autoplay={{
                                delay: 4000,
                            }}
                        >
                            <SwiperSlide>
                                <div className="slider-item h-full w-full flex items-center bg-linear relative">
                                    <div className="text-content relative z-[1] md:pl-[60px] pl-5 basis-1/2">
                                        <div className="text-button-uppercase">Fresh and Tasty</div>
                                        <div className="heading2 lg:mt-3 mt-2">New Season Women’s style</div>
                                        <div className="body1 lg:mt-4 mt-3">Discover the beauty of organic living</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main lg:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute xl:right-[50px] lg:right-[20px] md:right-[40px] sm:right-[20px] -right-10 top-0 bottom-0">
                                        <Image
                                            src={'/images/slider/bg11-1.png'}
                                            width={2000}
                                            height={1936}
                                            alt='bg11-1'
                                            className='w-full h-full'
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slider-item h-full w-full flex items-center bg-linear relative">
                                    <div className="text-content relative z-[1] md:pl-[60px] pl-5 basis-1/2 max-[400px]:basis-[55%]">
                                        <div className="text-button-uppercase">Fresh and Tasty</div>
                                        <div className="heading2 lg:mt-3 mt-2">Men’s Clothing fashion</div>
                                        <div className="body1 lg:mt-4 mt-3">Discover the beauty of organic living</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main lg:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute xl:w-[45%] lg:w-[53%] md:w-[33%] sm:w-[40%] w-[45%] max-[460px]:w-[80%] xl:right-[30px] lg:right-0 sm:right-[20px] -right-[80px] bottom-0">
                                        <Image
                                            src={'/images/slider/bg11-2.png'}
                                            width={2000}
                                            height={1936}
                                            alt='bg11-2'
                                            className='w-full'
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slider-item h-full w-full flex items-center bg-linear relative">
                                    <div className="text-content relative z-[1] md:pl-[60px] pl-5 basis-1/2">
                                        <div className="text-button-uppercase">Fresh and Tasty</div>
                                        <div className="heading2 lg:mt-3 mt-2">Summer Sale Collections</div>
                                        <div className="body1 lg:mt-4 mt-3">Discover the beauty of organic living</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main lg:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute xl:w-[49%] lg:w-[57%] md:w-[36%] sm:w-[43%] w-[46%] max-[460px]:w-[80%] xl:right-[20px] lg:-right-5 sm:right-[20px] -right-[60px] bottom-0">
                                        <Image
                                            src={'/images/slider/bg11-3.png'}
                                            width={2000}
                                            height={2000}
                                            alt='bg11-3'
                                            className='w-full'
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="banner-ads lg:w-1/3 lg:pl-[15px] w-full max-lg:grid sm:grid-cols-2 gap-5">
                        <div className="banner-ads-item bg-linear rounded-2xl relative overflow-hidden">
                            <div className="text-content relative z-[1] py-12 pl-8">
                                <div className="text-button-uppercase text-white bg-red px-2 py-0.5 inline-block rounded-sm">Save $10</div>
                                <div className="heading6 mt-2">Dive into Savings <br />on Swimwear</div>
                                <div className="body1 mt-3 text-secondary">
                                    Starting at <span className='text-red'>$59.99</span>
                                </div>
                            </div>
                            <Image
                                src={'/images/slider/bg2-2.png'}
                                width={200}
                                height={100}
                                alt='bg-img'
                                className='basis-1/3 absolute right-0 top-0'
                            />
                        </div>
                        <div className="banner-ads-item bg-linear rounded-2xl relative overflow-hidden lg:mt-8">
                            <div className="text-content relative z-[1] py-12 pl-8">
                                <div className="text-button-uppercase text-white bg-red px-2 py-0.5 inline-block rounded-sm">Save $10</div>
                                <div className="heading6 mt-2">20% off <br />accessories</div>
                                <div className="body1 mt-3 text-secondary">
                                    Starting at <span className='text-red'>$59.99</span>
                                </div>
                            </div>
                            <Image
                                src={'/images/header/bg-feature.png'}
                                width={200}
                                height={100}
                                alt='bg-img'
                                className='basis-1/3 absolute right-0 top-0'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderEleven
'use client'

import React from 'react'
import Image from 'next/image'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

const VideoTutorial = () => {
    return (
        <>
            <div className="video-tutorial-block relative max-sm:h-[240px]">
                <div className="bg-img w-full h-full">
                    <Image
                        src={'/images/banner/video-cos3.png'}
                        width={3000}
                        height={2000}
                        alt='bg-img'
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className="container w-full h-full">
                    <div className="text-content absolute top-1/2 -translate-y-1/2">
                        <div className="heading3">Night routines Skincare tutorials</div>
                        <div className="mt-3">Experience the Power of Nighttime Skincare Rituals</div>
                        <div className="button-main inline-flex items-center gap-3 mt-8">View Now
                            <span>
                                <Icon.Play size={18} color='#fff' weight='fill' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial-block cosmetic3 lg:-mt-[100px] md:-mt-8 -mt-6 relative z-[1]">
                <div className="container">
                    <div className="content bg-white lg:py-20 md:py-16 py-8 md:rounded-[20px] rounded-xl box-shadow-small flex items-center justify-center">
                        <div className="main xl:w-5/6 max-xl:px-10 max-lg:px-8 max-sm:px-4 w-full">
                            <div className="list-testi w-full section-swiper-navigation style-center style-small-border">
                                <Swiper
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    navigation
                                    loop={true}
                                    modules={[Navigation, Autoplay]}
                                    className='w-full'
                                >
                                    <SwiperSlide>
                                        <div className="testi-item flex items-center justify-center">
                                            <div className="main w-4/5">
                                                <div className="desc heading6 font-semibold text-center">{String.raw`"`}I{String.raw`'m`} absolutely in love with the skincare products from Onita. They have revolutionized my skincare routine and given me incredible results.{String.raw`"`}</div>
                                                <div className="text-button-uppercase mt-5 text-center">Maverick Nguyen</div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testi-item flex items-center justify-center">
                                            <div className="main w-4/5">
                                                <div className="desc heading6 font-semibold text-center">{String.raw`"`}I{String.raw`'m`} absolutely in love with the skincare products from Onita. They have revolutionized my skincare routine and given me incredible results.{String.raw`"`}</div>
                                                <div className="text-button-uppercase mt-5 text-center">Maverick Nguyen</div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testi-item flex items-center justify-center">
                                            <div className="main w-4/5">
                                                <div className="desc heading6 font-semibold text-center">{String.raw`"`}I{String.raw`'m`} absolutely in love with the skincare products from Onita. They have revolutionized my skincare routine and given me incredible results.{String.raw`"`}</div>
                                                <div className="text-button-uppercase mt-5 text-center">Maverick Nguyen</div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="list-brand flex items-center justify-between mt-[60px]">
                                <Swiper
                                    spaceBetween={24}
                                    slidesPerView={2}
                                    loop={true}
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 4000,
                                    }}
                                    breakpoints={{
                                        576: {
                                            slidesPerView: 3,
                                            spaceBetween: 16,
                                        },
                                        768: {
                                            slidesPerView: 4,
                                            spaceBetween: 16,
                                        },
                                        1024: {
                                            slidesPerView: 5,
                                            spaceBetween: 16,
                                        },
                                        1200: {
                                            slidesPerView: 5,
                                            spaceBetween: 24,
                                        },
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="brand-item md:h-[44px] w-full relative flex items-center justify-center">
                                            <Image
                                                src={'/images/brand/1.png'}
                                                width={300}
                                                height={300}
                                                alt='1'
                                                className='md:h-full w-auto duration-500 relative'
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="brand-item md:h-[44px] w-full relative flex items-center justify-center">
                                            <Image
                                                src={'/images/brand/2.png'}
                                                width={300}
                                                height={300}
                                                alt='2'
                                                className='md:h-full w-auto duration-500 relative'
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="brand-item md:h-[44px] w-full relative flex items-center justify-center">
                                            <Image
                                                src={'/images/brand/3.png'}
                                                width={300}
                                                height={300}
                                                alt='3'
                                                className='md:h-full w-auto duration-500 relative'
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="brand-item md:h-[44px] w-full relative flex items-center justify-center">
                                            <Image
                                                src={'/images/brand/4.png'}
                                                width={300}
                                                height={300}
                                                alt='4'
                                                className='md:h-full w-auto duration-500 relative'
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="brand-item md:h-[44px] w-full relative flex items-center justify-center">
                                            <Image
                                                src={'/images/brand/6.png'}
                                                width={300}
                                                height={300}
                                                alt='6'
                                                className='md:h-full w-auto duration-500 relative'
                                            />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoTutorial
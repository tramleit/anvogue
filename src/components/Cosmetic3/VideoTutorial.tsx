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
            <div className="video-tutorial-block relative">
                <div className="bg-img">
                    <Image
                        src={'/images/banner/video-cos3.png'}
                        width={3000}
                        height={2000}
                        alt='bg-img'
                        className='w-full'
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
            <div className="testimonial-block -mt-[100px] relative z-[1]">
                <div className="container">
                    <div className="content bg-white py-20 rounded-[20px] box-shadow-small flex items-center justify-center">
                        <div className="main w-5/6">
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
                                <div className="brand-item h-[44px] relative flex items-center justify-center">
                                    <Image
                                        src={'/images/brand/1.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-auto duration-500 relative'
                                    />
                                </div>
                                <div className="brand-item h-[44px] relative flex items-center justify-center">
                                    <Image
                                        src={'/images/brand/2.png'}
                                        width={300}
                                        height={300}
                                        alt='2'
                                        className='h-full w-auto duration-500 relative'
                                    />
                                </div>
                                <div className="brand-item h-[44px] relative flex items-center justify-center">
                                    <Image
                                        src={'/images/brand/3.png'}
                                        width={300}
                                        height={300}
                                        alt='3'
                                        className='h-full w-auto duration-500 relative'
                                    />
                                </div>
                                <div className="brand-item h-[44px] relative flex items-center justify-center">
                                    <Image
                                        src={'/images/brand/4.png'}
                                        width={300}
                                        height={300}
                                        alt='4'
                                        className='h-full w-auto duration-500 relative'
                                    />
                                </div>
                                <div className="brand-item h-[44px] relative flex items-center justify-center">
                                    <Image
                                        src={'/images/brand/6.png'}
                                        width={300}
                                        height={300}
                                        alt='6'
                                        className='h-full w-auto duration-500 relative'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoTutorial
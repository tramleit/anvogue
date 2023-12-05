'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

const Instagram = () => {
    return (
        <>
            <div className="instagram-block">
                <div className="list-instagram">
                    <Swiper
                        slidesPerView={2}
                        loop={true}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 4000,
                        }}
                        breakpoints={{
                            500: {
                                slidesPerView: 3,
                            },
                            680: {
                                slidesPerView: 4,
                            },
                            992: {
                                slidesPerView: 5,
                            },
                            1200: {
                                slidesPerView: 6,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden">
                                <Image
                                    src={'/images/instagram/11.png'}
                                    width={300}
                                    height={300}
                                    alt='11'
                                    className='h-full w-full duration-500 relative'
                                />
                                <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                                    <div className="icon-instagram text-2xl text-black"></div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden">
                                <Image
                                    src={'/images/instagram/12.png'}
                                    width={300}
                                    height={300}
                                    alt='12'
                                    className='h-full w-full duration-500 relative'
                                />
                                <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                                    <div className="icon-instagram text-2xl text-black"></div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden">
                                <Image
                                    src={'/images/instagram/13.png'}
                                    width={300}
                                    height={300}
                                    alt='13'
                                    className='h-full w-full duration-500 relative'
                                />
                                <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                                    <div className="icon-instagram text-2xl text-black"></div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden">
                                <Image
                                    src={'/images/instagram/14.png'}
                                    width={300}
                                    height={300}
                                    alt='14'
                                    className='h-full w-full duration-500 relative'
                                />
                                <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                                    <div className="icon-instagram text-2xl text-black"></div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden">
                                <Image
                                    src={'/images/instagram/15.png'}
                                    width={300}
                                    height={300}
                                    alt='15'
                                    className='h-full w-full duration-500 relative'
                                />
                                <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                                    <div className="icon-instagram text-2xl text-black"></div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden">
                                <Image
                                    src={'/images/instagram/16.png'}
                                    width={300}
                                    height={300}
                                    alt='16'
                                    className='h-full w-full duration-500 relative'
                                />
                                <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                                    <div className="icon-instagram text-2xl text-black"></div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Instagram
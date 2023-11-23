'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

const Instagram = () => {
    return (
        <>
            <div className="instagram-block pt-20">
                <div className="container">
                    <div className="heading">
                        <div className="heading3 text-center">Anvogue On Instagram</div>
                        <div className="text-center mt-3">#Anvougetheme</div>
                    </div>
                    <div className="list-instagram mt-10">
                        <Swiper
                            spaceBetween={12}
                            slidesPerView={2}
                            loop={true}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 4000,
                            }}
                            breakpoints={{
                                500: {
                                    slidesPerView: 2,
                                    spaceBetween: 16,
                                },
                                680: {
                                    slidesPerView: 3,
                                    spaceBetween: 16,
                                },
                                992: {
                                    slidesPerView: 4,
                                    spaceBetween: 16,
                                },
                                1200: {
                                    slidesPerView: 5,
                                    spaceBetween: 16,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block rounded-[32px] overflow-hidden">
                                    <Image
                                        src={'/images/instagram/1.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-full duration-500 relative'
                                    />
                                    <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                                        <div className="icon-instagram text-2xl text-black"></div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block rounded-[32px] overflow-hidden">
                                    <Image
                                        src={'/images/instagram/2.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-full duration-500 relative'
                                    />
                                    <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                                        <div className="icon-instagram text-2xl text-black"></div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block rounded-[32px] overflow-hidden">
                                    <Image
                                        src={'/images/instagram/3.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-full duration-500 relative'
                                    />
                                    <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                                        <div className="icon-instagram text-2xl text-black"></div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block rounded-[32px] overflow-hidden">
                                    <Image
                                        src={'/images/instagram/4.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-full duration-500 relative'
                                    />
                                    <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                                        <div className="icon-instagram text-2xl text-black"></div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block rounded-[32px] overflow-hidden">
                                    <Image
                                        src={'/images/instagram/5.png'}
                                        width={300}
                                        height={300}
                                        alt='1'
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
            </div>
        </>
    )
}

export default Instagram
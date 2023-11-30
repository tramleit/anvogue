'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

const TrendingNow = () => {
    return (
        <>
            <div className="trending-block style-six pt-20">
                <div className="container">
                    <div className="heading3 text-center">Trending Right Now
                    </div>
                    <div className="list-trending section-swiper-navigation style-small-border style-outline mt-10">
                        <Swiper
                            spaceBetween={12}
                            slidesPerView={2}
                            navigation
                            loop={true}
                            modules={[Navigation, Autoplay]}
                            breakpoints={{
                                576: {
                                    slidesPerView: 3,
                                    spaceBetween: 12,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                                992: {
                                    slidesPerView: 5,
                                    spaceBetween: 20,
                                },
                                1290: {
                                    slidesPerView: 5,
                                    spaceBetween: 30,
                                },
                            }}
                            className='h-full'
                        >
                            <SwiperSlide>
                                <Link href={'#!'} className="trending-item block relative">
                                    <div className="bg-img rounded-2xl overflow-hidden">
                                        <Image
                                            src={'/images/avatar/1.png'}
                                            width={1000}
                                            height={1000}
                                            alt='outerwear'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name bg-white absolute bottom-5 left-1/2 -translate-x-1/2 w-[140px] h-10 rounded-xl flex items-center justify-center duration-500 hover:bg-black hover:text-white">
                                        <span className='heading6'>Clothing</span> 
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'#!'} className="trending-item block relative">
                                    <div className="bg-img rounded-2xl overflow-hidden">
                                        <Image
                                            src={'/images/avatar/2.png'}
                                            width={1000}
                                            height={1000}
                                            alt='swimwear'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name bg-white absolute bottom-5 left-1/2 -translate-x-1/2 w-[140px] h-10 rounded-xl flex items-center justify-center duration-500 hover:bg-black hover:text-white">
                                        <span className='heading6'>Tops</span> 
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'#!'} className="trending-item block relative">
                                    <div className="bg-img rounded-2xl overflow-hidden">
                                        <Image
                                            src={'/images/avatar/4.png'}
                                            width={1000}
                                            height={1000}
                                            alt='clothes'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name bg-white absolute bottom-5 left-1/2 -translate-x-1/2 w-[140px] h-10 rounded-xl flex items-center justify-center duration-500 hover:bg-black hover:text-white">
                                        <span className='heading6'>Sweaters</span> 
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'#!'} className="trending-item block relative">
                                    <div className="bg-img rounded-2xl overflow-hidden">
                                        <Image
                                            src={'/images/avatar/5.png'}
                                            width={1000}
                                            height={1000}
                                            alt='sets'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name bg-white absolute bottom-5 left-1/2 -translate-x-1/2 w-[140px] h-10 rounded-xl flex items-center justify-center duration-500 hover:bg-black hover:text-white">
                                        <span className='heading6'>Dresses</span> 
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'#!'} className="trending-item block relative">
                                    <div className="bg-img rounded-2xl overflow-hidden">
                                        <Image
                                            src={'/images/avatar/6.png'}
                                            width={1000}
                                            height={1000}
                                            alt='accessories'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name bg-white absolute bottom-5 left-1/2 -translate-x-1/2 w-[140px] h-10 rounded-xl flex items-center justify-center duration-500 hover:bg-black hover:text-white">
                                        <span className='heading6'>Bottoms</span> 
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'#!'} className="trending-item block relative">
                                    <div className="bg-img rounded-2xl overflow-hidden">
                                        <Image
                                            src={'/images/avatar/7.png'}
                                            width={1000}
                                            height={1000}
                                            alt='lingerie'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name bg-white absolute bottom-5 left-1/2 -translate-x-1/2 w-[140px] h-10 rounded-xl flex items-center justify-center duration-500 hover:bg-black hover:text-white">
                                        <span className='heading6'>Shoes</span> 
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'#!'} className="trending-item block relative">
                                    <div className="bg-img rounded-2xl overflow-hidden">
                                        <Image
                                            src={'/images/avatar/8.png'}
                                            width={1000}
                                            height={1000}
                                            alt='lingerie'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name bg-white absolute bottom-5 left-1/2 -translate-x-1/2 w-[140px] h-10 rounded-xl flex items-center justify-center duration-500 hover:bg-black hover:text-white">
                                        <span className='heading6'>Shirt</span> 
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

export default TrendingNow
'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

const Category = () => {
    return (
        <>
            <div className="trending-block style-six md:pt-20 pt-10">
                <div className="container">
                    <div className="list-trending section-swiper-navigation style-small-border style-outline">
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
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                992: {
                                    slidesPerView: 4,
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
                                <Link href={'/shop/breadcrumb1'} className="trending-item block relative">
                                    <div className="bg-img rounded-full bg-surface1 border-surface2 border-2 overflow-hidden">
                                        <Image
                                            src={'/images/collection/category-watch1.png'}
                                            width={1000}
                                            height={1000}
                                            alt='outerwear'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-5 duration-500">
                                        <span className='heading6 text-white'>Smart watch</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'/shop/breadcrumb1'} className="trending-item block relative">
                                    <div className="bg-img rounded-full bg-surface1 border-surface2 border-2 overflow-hidden">
                                        <Image
                                            src={'/images/collection/category-watch2.png'}
                                            width={1000}
                                            height={1000}
                                            alt='swimwear'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-5 duration-500">
                                        <span className='heading6 text-white'>Luxury</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'/shop/breadcrumb1'} className="trending-item block relative">
                                    <div className="bg-img rounded-full bg-surface1 border-surface2 border-2 overflow-hidden">
                                        <Image
                                            src={'/images/collection/category-watch3.png'}
                                            width={1000}
                                            height={1000}
                                            alt='clothes'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-5 duration-500">
                                        <span className='heading6 text-white'>Classic</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'/shop/breadcrumb1'} className="trending-item block relative">
                                    <div className="bg-img rounded-full bg-surface1 border-surface2 border-2 overflow-hidden">
                                        <Image
                                            src={'/images/collection/category-watch4.png'}
                                            width={1000}
                                            height={1000}
                                            alt='sets'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-5 duration-500">
                                        <span className='heading6 text-white'>Fitness</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'/shop/breadcrumb1'} className="trending-item block relative">
                                    <div className="bg-img rounded-full bg-surface1 border-surface2 border-2 overflow-hidden">
                                        <Image
                                            src={'/images/collection/category-watch5.png'}
                                            width={1000}
                                            height={1000}
                                            alt='accessories'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-5 duration-500">
                                        <span className='heading6 text-white'>Apple watch</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'/shop/breadcrumb1'} className="trending-item block relative">
                                    <div className="bg-img rounded-full bg-surface1 border-surface2 border-2 overflow-hidden">
                                        <Image
                                            src={'/images/collection/category-watch3.png'}
                                            width={1000}
                                            height={1000}
                                            alt='lingerie'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-5 duration-500">
                                        <span className='heading6 text-white'>Sport</span>
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

export default Category
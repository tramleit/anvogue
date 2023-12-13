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
                    <div className="heading3 text-center">Top Categories</div>
                    <div className="list-trending section-swiper-navigation style-small-border style-outline md:mt-8 mt-6">
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
                                    slidesPerView: 6,
                                    spaceBetween: 30,
                                },
                            }}
                            className='h-full'
                        >
                            <SwiperSlide>
                                <Link href={'#!'} className="trending-item block relative">
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={'/images/collection/category-organic1.png'}
                                            width={1000}
                                            height={1000}
                                            alt='outerwear'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-5 duration-500">
                                        <span className='heading5'>Vegetables</span>
                                        <span className='text-secondar2'> (12)</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'#!'} className="trending-item block relative">
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={'/images/collection/category-organic2.png'}
                                            width={1000}
                                            height={1000}
                                            alt='swimwear'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-5 duration-500">
                                        <span className='heading5'>Fish</span>
                                        <span className='text-secondar2'> (12)</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'#!'} className="trending-item block relative">
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={'/images/collection/category-organic3.png'}
                                            width={1000}
                                            height={1000}
                                            alt='clothes'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-5 duration-500">
                                        <span className='heading5'>Fruits</span>
                                        <span className='text-secondar2'> (12)</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'#!'} className="trending-item block relative">
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={'/images/collection/category-organic4.png'}
                                            width={1000}
                                            height={1000}
                                            alt='sets'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-5 duration-500">
                                        <span className='heading5'>Meats</span>
                                        <span className='text-secondar2'> (12)</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'#!'} className="trending-item block relative">
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={'/images/collection/category-organic5.png'}
                                            width={1000}
                                            height={1000}
                                            alt='accessories'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-5 duration-500">
                                        <span className='heading5'>Cabbage</span>
                                        <span className='text-secondar2'> (12)</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'#!'} className="trending-item block relative">
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={'/images/collection/category-organic6.png'}
                                            width={1000}
                                            height={1000}
                                            alt='lingerie'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-5 duration-500">
                                        <span className='heading5'>Drinks</span>
                                        <span className='text-secondar2'> (12)</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'#!'} className="trending-item block relative">
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={'/images/collection/category-organic3.png'}
                                            width={1000}
                                            height={1000}
                                            alt='lingerie'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name text-center mt-5 duration-500">
                                        <span className='heading5'>Fruits</span>
                                        <span className='text-secondar2'> (12)</span>
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
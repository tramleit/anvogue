'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import { useRouter } from 'next/navigation';


const TrendingNow = () => {
    const router = useRouter()

    const handleTypeClick = (type: string) => {
        router.push(`/shop/breadcrumb1?type=${type}`);
    };

    return (
        <>
            <div className="trending-block style-nine md:pt-20 pt-10">
                <div className="container">
                    <div className="heading3 text-center">Trending Right Now
                    </div>
                    <div className="list-trending section-swiper-navigation style-small-border style-center style-outline md:mt-10 mt-6">
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
                                <div className="trending-item block relative cursor-pointer"  onClick={() => handleTypeClick('t-shirt')}>
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
                                        <span className='heading6'>t-shirt</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer"  onClick={() => handleTypeClick('sweater')}>
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
                                        <span className='heading6'>sweater</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer"  onClick={() => handleTypeClick('top')}>
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
                                        <span className='heading6'>top</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer"  onClick={() => handleTypeClick('dress')}>
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
                                        <span className='heading6'>dress</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer"  onClick={() => handleTypeClick('swimwear')}>
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
                                        <span className='heading6'>swimwear</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer"  onClick={() => handleTypeClick('outerwear')}>
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
                                        <span className='heading6'>outerwear</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="trending-item block relative cursor-pointer"  onClick={() => handleTypeClick('shirt')}>
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
                                        <span className='heading6'>shirt</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingNow
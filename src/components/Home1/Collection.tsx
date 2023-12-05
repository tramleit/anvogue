'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

const Collection = () => {
    return (
        <>
            <div className="collection-block pt-20">
                <div className="container">
                    <div className="heading3 text-center">Explore Collections</div>
                </div>
                <div className="list-collection section-swiper-navigation mt-10 sm:px-5 px-4">
                    <Swiper
                        spaceBetween={12}
                        slidesPerView={2}
                        navigation
                        loop={true}
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 12,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        className='h-full'
                    >
                        <SwiperSlide>
                            <Link href={'/shop/breadcrumb1'} className="collection-item block relative rounded-2xl overflow-hidden">
                                <div className="bg-img">
                                    <Image
                                        src={'/images/collection/swimwear.png'}
                                        width={1000}
                                        height={600}
                                        alt='swimwear'
                                    />
                                </div>
                                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">Swimwear</div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href={'/shop/breadcrumb1'} className="collection-item block relative rounded-2xl overflow-hidden">
                                <div className="bg-img">
                                    <Image
                                        src={'/images/collection/clothes.png'}
                                        width={1000}
                                        height={600}
                                        alt='clothes'
                                    />
                                </div>
                                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">Clothes</div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href={'/shop/breadcrumb1'} className="collection-item block relative rounded-2xl overflow-hidden">
                                <div className="bg-img">
                                    <Image
                                        src={'/images/collection/sets.png'}
                                        width={1000}
                                        height={600}
                                        alt='sets'
                                    />
                                </div>
                                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">Sets</div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href={'/shop/breadcrumb1'} className="collection-item block relative rounded-2xl overflow-hidden">
                                <div className="bg-img">
                                    <Image
                                        src={'/images/collection/accessories.png'}
                                        width={1000}
                                        height={600}
                                        alt='accessories'
                                    />
                                </div>
                                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">Accessories</div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href={'/shop/breadcrumb1'} className="collection-item block relative rounded-2xl overflow-hidden">
                                <div className="bg-img">
                                    <Image
                                        src={'/images/collection/lingerie.png'}
                                        width={1000}
                                        height={600}
                                        alt='lingerie'
                                    />
                                </div>
                                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">Lingerie</div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href={'/shop/breadcrumb1'} className="collection-item block relative rounded-2xl overflow-hidden">
                                <div className="bg-img">
                                    <Image
                                        src={'/images/collection/outerwear.png'}
                                        width={1000}
                                        height={600}
                                        alt='outerwear'
                                    />
                                </div>
                                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">Outerwear</div>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Collection
'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css/bundle';

const Collection = () => {
    return (
        <>
            <div className="collection-block style-six pt-20">
                <div className="container">
                    <div className="heading flex items-center justify-between gap-4 gap-y-2 flex-wrap">
                        <div className="heading3">Explore Collections</div>
                        <Link href={'/shop/breadcrumb1'} className='text-button pb-1 border-b-2 border-black'>View All Collection</Link>
                    </div>
                    <div className="list-collection mt-10">
                        <Swiper
                            spaceBetween={12}
                            slidesPerView={2}
                            scrollbar={{
                                hide: false,
                            }}
                            modules={[Navigation, Autoplay, Scrollbar]}
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
                            className='h-full pb-6'
                        >
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
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection
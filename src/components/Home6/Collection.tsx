'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css/bundle';
import { useRouter } from 'next/navigation';

const Collection = () => {
    const router = useRouter()

    const handleTypeClick = (type: string) => {
        router.push(`/shop/breadcrumb1?type=${type}`);
    };

    return (
        <>
            <div className="collection-block style-six md:pt-20 pt-10">
                <div className="container">
                    <div className="heading flex items-center justify-between gap-4 gap-y-2 flex-wrap">
                        <div className="heading3">Explore Collections</div>
                        <Link href={'/shop/collection'} className='text-button pb-1 border-b-2 border-black'>View All Collection</Link>
                    </div>
                    <div className="list-collection md:mt-10 mt-6">
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
                                <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick('t-shirt')}>
                                    <div className="bg-img">
                                        <Image
                                            src={'/images/collection/t-shirt.png'}
                                            width={1000}
                                            height={600}
                                            alt='outerwear'
                                        />
                                    </div>
                                    <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">t-shirt</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick('swimwear')}>
                                    <div className="bg-img">
                                        <Image
                                            src={'/images/collection/swimwear.png'}
                                            width={1000}
                                            height={600}
                                            alt='swimwear'
                                        />
                                    </div>
                                    <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">swimwear</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick('top')}>
                                    <div className="bg-img">
                                        <Image
                                            src={'/images/collection/top.png'}
                                            width={1000}
                                            height={600}
                                            alt='clothes'
                                        />
                                    </div>
                                    <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">top</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick('sets')}>
                                    <div className="bg-img">
                                        <Image
                                            src={'/images/collection/sets.png'}
                                            width={1000}
                                            height={600}
                                            alt='sets'
                                        />
                                    </div>
                                    <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">sets</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick('outerwear')}>
                                    <div className="bg-img">
                                        <Image
                                            src={'/images/collection/outerwear.png'}
                                            width={1000}
                                            height={600}
                                            alt='accessories'
                                        />
                                    </div>
                                    <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">outerwear</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick('underwear')}>
                                    <div className="bg-img">
                                        <Image
                                            src={'/images/collection/underwear.png'}
                                            width={1000}
                                            height={600}
                                            alt='lingerie'
                                        />
                                    </div>
                                    <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">underwear</div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection
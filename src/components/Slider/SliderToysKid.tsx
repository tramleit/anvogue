'use client'

import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderToysKid = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 100,
        draggable: true,
        useTransform: false,
    };

    return (
        <>
            <div className="slider-block 2xl:h-[760px] xl:h-[680px] lg:h-[580px] md:h-[460px] sm:h-[400px] h-[400px] w-full mt-[30px]">
                <div className="container h-full">
                    <div className="slider-main h-full w-full">
                        <Slider {...settings} className="slider-toys-kid h-full">
                            <div className="slider-item bg-[#EBFCF5] h-full w-full relative flex max-sm:flex-col-reverse items-center lg:rounded-[40px] rounded-xl overflow-hidden">
                                <Image
                                    src={'/images/slider/bg-toys.png'}
                                    width={2000}
                                    height={2000}
                                    alt='bg'
                                    className='absolute top-0 left-0 w-full h-full'
                                />
                                <div className="text-content sm:w-1/3 max-sm:pt-10 max-sm:pb-20 flex flex-col items-center justify-center">
                                    <div className="text-sub-display">Sale! Up To 50% Off!</div>
                                    <div className="heading1 text-center md:mt-4 mt-2">Kids Toys & Clothing</div>
                                    <Link href='/shop/breadcrumb-img' className="button-main md:mt-8 mt-3">Shop Now</Link>
                                </div>
                                <div className="sub-img sm:w-2/3 w-full h-full sm:pl-10">
                                    <Image
                                        src={'/images/slider/bg-toys1.png'}
                                        width={3000}
                                        height={2000}
                                        alt='bg-toys1'
                                        className='w-full h-full object-cover z-[1] relative'
                                    />
                                </div>
                            </div>
                            <div className="slider-item bg-[#F4F4F4] h-full w-full relative flex max-sm:flex-col-reverse items-center lg:rounded-[40px] rounded-xl overflow-hidden">
                                <Image
                                    src={'/images/slider/bg-toys.png'}
                                    width={2000}
                                    height={2000}
                                    alt='bg'
                                    className='absolute top-0 left-0 w-full h-full'
                                />
                                <div className="text-content sm:w-1/3 max-sm:pt-10 max-sm:pb-20 flex flex-col items-center justify-center">
                                    <div className="text-sub-display">Sale! Up To 50% Off!</div>
                                    <div className="heading1 text-center md:mt-4 mt-2">Kids Toys & Clothing</div>
                                    <Link href='/shop/breadcrumb-img' className="button-main md:mt-8 mt-3">Shop Now</Link>
                                </div>
                                <div className="sub-img sm:w-2/3 w-full h-full sm:pl-10">
                                    <Image
                                        src={'/images/slider/bg-toys2.png'}
                                        width={3000}
                                        height={2000}
                                        alt='bg-toys2'
                                        className='w-full h-full object-cover z-[1] relative'
                                    />
                                </div>
                            </div>
                            <div className="slider-item bg-[#ECF8F1] h-full w-full relative flex max-sm:flex-col-reverse items-center lg:rounded-[40px] rounded-xl overflow-hidden">
                                <Image
                                    src={'/images/slider/bg-toys.png'}
                                    width={2000}
                                    height={2000}
                                    alt='bg'
                                    className='absolute top-0 left-0 w-full h-full'
                                />
                                <div className="text-content sm:w-1/3 max-sm:pt-10 max-sm:pb-20 flex flex-col items-center justify-center">
                                    <div className="text-sub-display">Sale! Up To 50% Off!</div>
                                    <div className="heading1 text-center md:mt-4 mt-2">Kids Toys & Clothing</div>
                                    <Link href='/shop/breadcrumb-img' className="button-main md:mt-8 mt-3">Shop Now</Link>
                                </div>
                                <div className="sub-img sm:w-2/3 w-full h-full sm:pl-10">
                                    <Image
                                        src={'/images/slider/bg-toys3.png'}
                                        width={3000}
                                        height={2000}
                                        alt='bg-toys3'
                                        className='w-full h-full object-cover z-[1] relative'
                                    />
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderToysKid
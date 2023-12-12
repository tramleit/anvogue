'use client'

import React from 'react'
import Slider from "react-slick";
import Image from 'next/image'
import Link from 'next/link'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import 'swiper/css/bundle';
// import 'swiper/css/effect-fade';

import { TestimonialType } from '@/type/TestimonialType'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rate from '../Other/Rate';

interface Props {
    data: Array<TestimonialType>;
    start: number;
    limit: number;
}

const Testimonial: React.FC<Props> = ({ data, start, limit }) => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        centerMode: true,
        centerPadding: '220px',
        speed: 300,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 100,
        swipe: true,
        swipeToSlide: true,
        draggable: true,
        useTransform: false,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerPadding: '120px',
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerPadding: '160px',
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '160px',
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '16px',
                }
            },
        ]
    };

    return (
        <>
            <div className="testimonial-block yoga bg-surface md:pt-20 md:pb-32 pt-12 pb-24">
                <div className="container">
                    <div className="heading">
                        <div className="heading3 text-center">The Ultimate Guide to Guest Reviews</div>
                        <div className="body1 text-center text-secondary mt-3">Discover What Our Guests Really Think About Their Stay</div>
                    </div>
                </div>
                <div className="list-testimonial yoga md:mt-10 dots-mt40 mt-6">
                    <Slider {...settings} className="">
                        {data.filter(product => product.category === 'yoga').slice(start, limit).map(product => (
                            <div className="item yoga h-full" key={product.id}>
                                <div className="main bg-white py-7 px-8 rounded-[20px] h-full flex flex-col justify-between gap-4">
                                    <div className="content flex gap-4">
                                        <div className="bg-img">
                                            <Image
                                                src={product.images[0]}
                                                width={300}
                                                height={300}
                                                alt={product.images[0]}
                                                className='w-[112px] max-w-none rounded-xl'
                                            />
                                        </div>
                                        <div className="desc body1">{product.description}</div>
                                    </div>
                                    <div className="infor flex items-center gap-4">
                                        <div className="avatar">
                                            <Image
                                                src={product.avatar}
                                                width={300}
                                                height={300}
                                                alt={product.avatar}
                                                className='w-10 h-10 rounded-full'
                                            />
                                        </div>
                                        <div className="right">
                                            <Rate currentRate={product.star} />
                                            <div className="name text-title">{product.name}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Testimonial
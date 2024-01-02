'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { countdownTime } from '@/store/countdownTime'

const FlashSale = () => {
    const [timeLeft, setTimeLeft] = useState(countdownTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(countdownTime());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="flash-sale-block bg-surface md:mt-20 mt-14 md:py-20 py-4">
                <div className="container flex items-center max-sm:justify-center relative overflow-hidden rounded-[32px] w-full">
                    <div className="text-content basis-1/2 flex flex-col items-center text-center px-8 py-10">
                        <div className="heading2">Flash Sale!</div>
                        <div className="body1 mt-3">Get 20% off if you spend 120$ or more!</div>
                        <div className="countdown-time flex items-center gap-5 max-sm:gap-[18px] lg:mt-9 md:mt-6 mt-4">
                            <div className="item flex flex-col items-center">
                                <div className="day time heading1">{timeLeft.days}</div>
                                <div className='text-button-uppercase font-medium'>Days</div>
                            </div>
                            <span className='heading4'>:</span>
                            <div className="item flex flex-col items-center">
                                <div className="day time heading1">{timeLeft.hours}</div>
                                <div className='text-button-uppercase font-medium'>Hours</div>
                            </div>
                            <span className='heading4'>:</span>
                            <div className="item flex flex-col items-center">
                                <div className="day time heading1">{timeLeft.minutes}</div>
                                <div className='text-button-uppercase font-medium'>Minutes</div>
                            </div>
                            <span className='heading4'>:</span>
                            <div className="item flex flex-col items-center">
                                <div className="day time heading1">{timeLeft.seconds}</div>
                                <div className='text-button-uppercase font-medium'>Seconds</div>
                            </div>
                        </div>
                        <Link href={'#!'} className='button-main lg:mt-9 md:mt-6 mt-4'>Get it now</Link>
                    </div>
                    <div className="bg-img w-1/2 max-sm:hidden">
                        <div className="popular-product">
                            <div className="item relative">
                                <Image
                                    src={'/images/banner/flash-sale-cos2.png'}
                                    width={2000}
                                    height={1000}
                                    alt='/images/banner/flash-sale-cos2.png'
                                    className='w-full rounded-[20px] object-cover'
                                />
                                <div className="dots absolute top-[20%] left-[56%] cursor-pointer">
                                    <div className="top-dot w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                        <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                                    </div>
                                    <Link href={'#!'} className="product-infor bg-white rounded-2xl p-4">
                                        <div className="text-title name">Hair Treatment</div>
                                        <div className="price text-center">$10.00</div>
                                    </Link>
                                </div>
                                <div className="dots bottom-dot absolute bottom-[25%] left-[26%] cursor-pointer">
                                    <div className="w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                        <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                                    </div>
                                    <Link href={'#!'} className="product-infor bg-white rounded-2xl p-4">
                                        <div className="text-title name">After Sun - tan Booster</div>
                                        <div className="price text-center">$15.00</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlashSale
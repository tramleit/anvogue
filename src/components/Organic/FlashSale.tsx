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
            <div className="flash-sale-block relative">
                <div className="bg-img absolute top-0 left-0 w-full h-full z-[-1]">
                    <Image
                        src={'/images/banner/bg-flash-sale-organic.png'}
                        width={3000}
                        height={3000}
                        alt='bg-img'
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className="container relative z-[1] flex max-md:flex-wrap items-center md:justify-end justify-center">
                    <div className="bg-img sm:w-7/12 max-md:pt-8 w-[90%] relative md:pr-[100px] md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0 z-[0]">
                        <Image
                            src={'/images/banner/image-flash-sale-organic.png'}
                            width={2000}
                            height={1600}
                            alt='bg-img'
                            className='w-full object-cover'
                        />
                    </div>
                    <div className="right flex items-center md:justify-center md:w-5/12 w-full lg:py-[156px] md:py-24 max-md:pt-3 max-md:pb-8">
                        <div className="text-content">
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
                                    <div className="day time heading1">{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</div>
                                    <div className='text-button-uppercase font-medium'>Seconds</div>
                                </div>
                            </div>
                            <Link href={'#!'} className='button-main lg:mt-9 md:mt-6 mt-4'>Get it now</Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FlashSale
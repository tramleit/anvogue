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
            <div className="flash-sale-block bg-surface md:mt-20 mt-10 relative">
                <div className="container relative z-[1]">
                    <div className="text-content basis-1/2 px-8 lg:py-24 md:py-16 py-10">
                        <div className="heading2">Flash Sale!</div>
                        <div className="body1 mt-3">Get 20% off if you spend 120$ or more!</div>
                        <div className="countdown-time flex items-center gap-5 max-sm:gap-[18px] lg:mt-9 md:mt-6 mt-4">
                            <div className="item flex flex-col items-center">
                                <div className="day time heading1">{timeLeft.days}</div>
                                <div className='text-xs font-medium uppercase'>Days</div>
                            </div>
                            <span className='heading4'>:</span>
                            <div className="item flex flex-col items-center">
                                <div className="day time heading1">{timeLeft.hours}</div>
                                <div className='text-xs font-medium uppercase'>Hours</div>
                            </div>
                            <span className='heading4'>:</span>
                            <div className="item flex flex-col items-center">
                                <div className="day time heading1">{timeLeft.minutes}</div>
                                <div className='text-xs font-medium uppercase'>Minutes</div>
                            </div>
                            <span className='heading4'>:</span>
                            <div className="item flex flex-col items-center">
                                <div className="day time heading1">{timeLeft.seconds}</div>
                                <div className='text-xs font-medium uppercase'>Seconds</div>
                            </div>
                        </div>
                        <Link href={'#!'} className='button-main lg:mt-9 md:mt-6 mt-4'>Get it now</Link>
                    </div>
                </div>
                <div className="bg-img w-full h-full absolute top-0 left-0 z-[0] max-sm:hidden">
                    <Image
                        src={'/images/banner/bg-flash-sale-yoga.png'}
                        width={2000}
                        height={1600}
                        alt='bg-img'
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>
        </>
    )
}

export default FlashSale
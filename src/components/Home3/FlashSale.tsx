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
            <div className="container md:pt-20 pt-10">
                <div className="flash-sale-block bg-surface flex items-center justify-end max-sm:justify-center relative overflow-hidden rounded-[32px] w-full">
                    <div className="bg-img w-1/2 absolute left-0 lg:-top-28 sm:-top-14 max-sm:hidden">
                        <Image
                            src={'/images/slider/bg1-2.png'}
                            width={1000}
                            height={600}
                            alt='bg-img'
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className="text-content basis-1/2 flex flex-col items-center text-center px-8 lg:py-24 md:py-16 py-10">
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
                </div>
            </div>
        </>
    )
}

export default FlashSale
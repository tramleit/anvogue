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
            <div className="flash-sale-block style-six w-full bg-surface">
                <div className="container">
                    <div className="text-content flex items-center justify-between max-lg:flex-col max-lg:justify-center max-lg:text-center gap-5 py-10">
                        <div className="heading">
                            <div className="heading2">Flash Sale!</div>
                            <div className="body1 mt-3">Get 20% off if you spend 120$ or more!</div>
                        </div>
                        <div className="countdown-time flex items-center gap-5 max-sm:gap-[18px]">
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
                        <Link href={'#!'} className='button-main'>Get it now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlashSale
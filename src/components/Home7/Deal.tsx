'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'
import { countdownTime } from '@/store/countdownTime'

interface Props {
    data: Array<ProductType>;
    start: number;
    limit: number;
}

const Deal: React.FC<Props> = ({ data, start, limit }) => {
    const [timeLeft, setTimeLeft] = useState(countdownTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(countdownTime());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="tab-features-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading flex items-center justify-between gap-5 flex-wrap">
                        <div className="left flex items-center gap-6 gap-y-3 flex-wrap">
                            <div className="heading3">Deals of the day</div>
                            <div className="deal-time bg-red py-1 px-5 rounded-lg">
                                <div className="heading6 text-white">
                                    <span className='day'>{timeLeft.days}</span>
                                    <span>D : </span>
                                    <span className='hour'>{timeLeft.hours}</span>
                                    <span>H : </span>
                                    <span className='minute'>{timeLeft.minutes}</span>
                                    <span>M : </span>
                                    <span className='second'>{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</span>
                                    <span>S</span>
                                </div>
                            </div>
                        </div>
                        <Link href={'/shop/breadcrumb-img'} className='text-button pb-1 border-b-2 border-black'>View All Deals</Link>
                    </div>

                    <div className="list-product show-product-sold grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] mt-10">
                        {data.slice(start, limit).map((prd, index) => (
                            <Product key={index} data={prd} type='grid' />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deal
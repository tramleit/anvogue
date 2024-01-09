'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const Banner = () => {
    const router = useRouter()

    const handleCategoryClick = (category: string) => {
        router.push(`/shop/breadcrumb1?category=${category}`);
    };

    return (
        <>
            <div className="banner-block md:pt-20 pt-10">
                <div className="container grid lg:grid-cols-3 sm:grid-cols-2 gap-[30px]">
                    <div className="banner-ads-item bg-linear rounded-2xl relative overflow-hidden block cursor-pointer" onClick={() => handleCategoryClick('organic')}>
                        <div className="text-content py-14 pl-8 relative z-[1]">
                            <div className="text-button-uppercase text-white bg-red px-2 py-0.5 inline-block rounded-sm">Save $10</div>
                            <div className="heading5 mt-2">t Pink Salmon <br />Skinless Fillets</div>
                            <div className="body1 mt-3 text-secondary">
                                Starting at <span className='text-red'>$59.99</span>
                            </div>
                        </div>
                        <Image
                            src={'/images/banner/bg-banner-organic1.png'}
                            width={1000}
                            height={1000}
                            alt='bg-img'
                            className='absolute left-0 top-0 w-full h-full object-cover'
                        />
                    </div>
                    <div className="banner-ads-item bg-linear rounded-2xl relative overflow-hidden block cursor-pointer" onClick={() => handleCategoryClick('organic')}>
                        <div className="text-content py-14 pl-8 relative z-[1]">
                            <div className="text-button-uppercase text-white bg-red px-2 py-0.5 inline-block rounded-sm">Save $10</div>
                            <div className="heading5 mt-2">Cabbage, White <br />or green</div>
                            <div className="body1 mt-3 text-secondary">
                                Starting at <span className='text-red'>$59.99</span>
                            </div>
                        </div>
                        <Image
                            src={'/images/banner/bg-banner-organic2.png'}
                            width={1000}
                            height={1000}
                            alt='bg-img'
                            className='absolute left-0 top-0 w-full h-full object-cover'
                        />
                    </div>
                    <div className="banner-ads-item bg-linear rounded-2xl relative overflow-hidden block cursor-pointer" onClick={() => handleCategoryClick('organic')}>
                        <div className="text-content py-14 pl-8 relative z-[1]">
                            <div className="text-button-uppercase text-white bg-red px-2 py-0.5 inline-block rounded-sm">Save $10</div>
                            <div className="heading5 mt-2">t Pink Salmon <br />Skinless Fillets</div>
                            <div className="body1 mt-3 text-secondary">
                                Starting at <span className='text-red'>$59.99</span>
                            </div>
                        </div>
                        <Image
                            src={'/images/banner/bg-banner-organic3.png'}
                            width={1000}
                            height={1000}
                            alt='bg-img'
                            className='absolute left-0 top-0 w-full h-full object-cover'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
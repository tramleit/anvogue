'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const Banner = () => {
    const router = useRouter()

    const handleCategoryClick = (category: string) => {
        router.push(`/shop/breadcrumb1?category=${category}`);
    };

    return (
        <>
            <div className="banner-block md:pt-20 pt-10">
                <div className="container">
                    <div className="list-banner grid lg:grid-cols-3 md:grid-cols-2 gap-[20px]">
                        <div className="banner-item relative block rounded-[40px] overflow-hidden duration-500 cursor-pointer" onClick={() => handleCategoryClick('watch')}>
                            <div className="banner-img w-full h-full">
                                <Image
                                    src={'/images/banner/bg-banner-watch1.png'}
                                    width={2000}
                                    height={1800}
                                    alt='bg-img'
                                    className='w-full h-full object-cover duration-500'
                                />
                            </div>
                            <div className="text-content absolute top-10 left-10 right-10 text-white">
                                <div className="heading4 mt-3">COUPONS ADDED: BREITLING WATCHES</div>
                                <div className="heading6 font-normal mt-1">Limited Quantities Available <br />Up to 50% Off</div>
                                <div className="button-main bg-transparent border border-white mt-5">Shop Now</div>
                            </div>
                        </div>
                        <div className="banner-item relative block rounded-[40px] overflow-hidden duration-500 cursor-pointer" onClick={() => handleCategoryClick('watch')}>
                            <div className="banner-img w-full h-full">
                                <Image
                                    src={'/images/banner/bg-banner-watch2.png'}
                                    width={2000}
                                    height={1800}
                                    alt='bg-img'
                                    className='w-full h-full object-cover duration-500'
                                />
                            </div>
                            <div className="text-content absolute top-10 left-10 right-10 text-white">
                                <div className="heading4 mt-3">SPECIAL OFFER: TUDOR PRICE DROP</div>
                                <div className="heading6 font-normal mt-1">Watches You Will Love <br />One Week Only</div>
                                <div className="button-main bg-transparent border border-white mt-5">Shop Now</div>
                            </div>
                        </div>
                        <div className="banner-item relative block rounded-[40px] overflow-hidden duration-500 cursor-pointer" onClick={() => handleCategoryClick('watch')}>
                            <div className="banner-img w-full h-full">
                                <Image
                                    src={'/images/banner/bg-banner-watch3.png'}
                                    width={2000}
                                    height={1800}
                                    alt='bg-img'
                                    className='w-full h-full object-cover duration-500'
                                />
                            </div>
                            <div className="text-content absolute top-10 left-10 right-10 text-white">
                                <div className="heading4 mt-3">COUPONS ADDED: OMEGA WATCHES</div>
                                <div className="heading6 font-normal mt-1">Limited Quantities Available <br />Up to 50% Off</div>
                                <div className="button-main bg-transparent border border-white mt-5">Shop Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
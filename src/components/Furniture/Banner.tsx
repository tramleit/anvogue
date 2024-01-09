'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const Banner = () => {
    const router = useRouter()

    const handleTypeClick = (type: string) => {
        router.push(`/shop/breadcrumb1?type=${type}`);
    };

    return (
        <>
            <div className="banner-block md:pt-20 pt-10">
                <div className="container">
                    <div className="list-banner grid md:grid-cols-3 lg:gap-[30px] gap-[20px]">
                        <div className="banner-item relative block duration-500 cursor-pointer" onClick={() => handleTypeClick('chair')}>
                            <div className="banner-img w-full rounded-2xl overflow-hidden">
                                <Image
                                    src={'/images/banner/banner-furniture1.png'}
                                    width={600}
                                    height={400}
                                    alt='bg-img'
                                    className='w-full duration-500'
                                />
                            </div>
                            <div className="banner-content absolute left-[30px] bottom-[30px]">
                                <div className="heading4">Chair in <br />summer!</div>
                                <div className="text-button text-black relative inline-block pb-1 border-b-2 border-black duration-500 mt-2">Shop Now</div>
                            </div>
                        </div>
                        <div className="banner-item relative block duration-500 cursor-pointer" onClick={() => handleTypeClick('table')}>
                            <div className="banner-img w-full rounded-2xl overflow-hidden">
                                <Image
                                    src={'/images/banner/banner-furniture2.png'}
                                    width={600}
                                    height={400}
                                    alt='bg-img'
                                    className='w-full duration-500'
                                />
                            </div>
                            <div className="banner-content absolute left-[30px] bottom-[30px]">
                                <div className="heading4">Table new <br />Collection</div>
                                <div className="text-button text-black relative inline-block pb-1 border-b-2 border-black duration-500 mt-2">Shop Now</div>
                            </div>
                        </div>
                        <div className="banner-item relative block duration-500 cursor-pointer" onClick={() => handleTypeClick('lighting')}>
                            <div className="banner-img w-full rounded-2xl overflow-hidden">
                                <Image
                                    src={'/images/banner/banner-furniture3.png'}
                                    width={600}
                                    height={400}
                                    alt='bg-img'
                                    className='w-full duration-500'
                                />
                            </div>
                            <div className="banner-content absolute left-[30px] bottom-[30px]">
                                <div className="heading4">Lighting <br />Collection</div>
                                <div className="text-button text-black relative inline-block pb-1 border-b-2 border-black duration-500 mt-2">Shop Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
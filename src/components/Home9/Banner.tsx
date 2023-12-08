import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
    return (
        <>
            <div className="banner-block md:pt-20 pt-10">
                <div className="container">
                    <div className="list-banner grid md:grid-cols-3 lg:gap-[30px] gap-[20px]">
                        <Link href={'/shop/breadcrumb-img'} className="banner-item relative block duration-500">
                            <div className="banner-img w-full rounded-2xl overflow-hidden">
                                <Image
                                    src={'/images/banner/10.png'}
                                    width={600}
                                    height={400}
                                    alt='bg-img'
                                    className='w-full duration-500'
                                />
                            </div>
                            <div className="banner-content absolute left-[30px] top-1/2 -translate-y-1/2">
                                <div className="heading6">Women{String.raw`'s`} Fashion <br />Must-Haves</div>
                                <div className="caption1 font-semibold text-black relative inline-block pb-1 border-b-2 border-black duration-500 mt-2">Shop Now</div>
                            </div>
                        </Link>
                        <Link href={'/shop/breadcrumb-img'} className="banner-item relative block duration-500">
                            <div className="banner-img w-full rounded-2xl overflow-hidden">
                                <Image
                                    src={'/images/banner/11.png'}
                                    width={600}
                                    height={400}
                                    alt='bg-img'
                                    className='w-full duration-500'
                                />
                            </div>
                            <div className="banner-content absolute left-[30px] top-1/2 -translate-y-1/2">
                                <div className="heading6">Latest Men{String.raw`'s`} <br />Fashion Essentials</div>
                                <div className="caption1 font-semibold text-black relative inline-block pb-1 border-b-2 border-black duration-500 mt-2">Shop Now</div>
                            </div>
                        </Link>
                        <Link href={'/shop/breadcrumb-img'} className="banner-item relative block duration-500">
                            <div className="banner-img w-full rounded-2xl overflow-hidden">
                                <Image
                                    src={'/images/banner/12.png'}
                                    width={600}
                                    height={400}
                                    alt='bg-img'
                                    className='w-full duration-500'
                                />
                            </div>
                            <div className="banner-content absolute left-[30px] top-1/2 -translate-y-1/2">
                                <div className="heading6">Summer Sale <br />collection</div>
                                <div className="caption1 font-semibold text-black relative inline-block pb-1 border-b-2 border-black duration-500 mt-2">Shop Now</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
    return (
        <>
            <div className="banner-block md:pt-20 pt-10">
                <div className="container">
                    <div className="list-banner grid lg:grid-cols-3 md:grid-cols-2 gap-[20px]">
                        <Link href={'/shop/breadcrumb1'} className="banner-item relative block rounded-[20px] overflow-hidden duration-500">
                            <div className="banner-img w-full h-full">
                                <Image
                                    src={'/images/banner/24.png'}
                                    width={1000}
                                    height={800}
                                    alt='bg-img'
                                    className='w-full h-full object-cover duration-500'
                                />
                            </div>
                            <div className="text-content xl:py-0 md:py-4 absolute top-1/2 left-8 -translate-y-1/2 text-white">
                                <div className="button-upper-case">15 Products</div>
                                <div className="heading3 mt-3">Dog Food</div>
                                <div className="heading6 font-normal mt-1">Relax Bamboo Chair</div>
                                <div className="button-main mt-5">Shop Now</div>
                            </div>
                        </Link>
                        <Link href={'/shop/breadcrumb1'} className="banner-item relative block rounded-[20px] overflow-hidden duration-500">
                            <div className="banner-img w-full h-full">
                                <Image
                                    src={'/images/banner/25.png'}
                                    width={1000}
                                    height={800}
                                    alt='bg-img'
                                    className='w-full h-full object-cover duration-500'
                                />
                            </div>
                            <div className="text-content xl:py-0 md:py-4 absolute top-1/2 left-8 -translate-y-1/2 text-white">
                                <div className="button-upper-case">15 Products</div>
                                <div className="heading3 mt-3">Cat Food</div>
                                <div className="heading6 font-normal mt-1">Relax Bamboo Chair</div>
                                <div className="button-main mt-5">Shop Now</div>
                            </div>
                        </Link>
                        <Link href={'/shop/breadcrumb1'} className="banner-item relative block rounded-[20px] overflow-hidden duration-500">
                            <div className="banner-img w-full h-full">
                                <Image
                                    src={'/images/banner/26.png'}
                                    width={1000}
                                    height={800}
                                    alt='bg-img'
                                    className='w-full h-full object-cover duration-500'
                                />
                            </div>
                            <div className="text-content xl:py-0 md:py-4 absolute top-1/2 left-8 -translate-y-1/2 text-white">
                                <div className="button-upper-case">15 Products</div>
                                <div className="heading3 mt-3">Sale Off 20%</div>
                                <div className="heading6 font-normal mt-1">Relax Bamboo Chair</div>
                                <div className="button-main mt-5">Shop Now</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
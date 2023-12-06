import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
    return (
        <>
            <div className="banner-block pt-20">
                <div className="container">
                    <div className="list-banner grid md:grid-cols-3 gap-[20px]">
                        <Link href={'/shop/breadcrumb1'} className="banner-item relative bg-surface block rounded-[20px] overflow-hidden duration-500">
                            <div className="banner-img w-full">
                                <Image
                                    src={'/images/banner/21.png'}
                                    width={1000}
                                    height={800}
                                    alt='bg-img'
                                    className='w-full duration-500'
                                />
                            </div>
                            <div className="heading4 absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">Check & Coutour</div>
                            <div className="button-main absolute bottom-8 left-1/2 -translate-x-1/2">Shop Now</div>
                        </Link>
                        <Link href={'/shop/breadcrumb1'} className="banner-item relative bg-surface block rounded-[20px] overflow-hidden duration-500">
                            <div className="banner-img w-full">
                                <Image
                                    src={'/images/banner/22.png'}
                                    width={1000}
                                    height={800}
                                    alt='bg-img'
                                    className='w-full duration-500'
                                />
                            </div>
                            <div className="heading4 absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">Palettes</div>
                            <div className="button-main absolute bottom-8 left-1/2 -translate-x-1/2">Shop Now</div>
                        </Link>
                        <Link href={'/shop/breadcrumb1'} className="banner-item relative bg-surface block rounded-[20px] overflow-hidden duration-500">
                            <div className="banner-img w-full">
                                <Image
                                    src={'/images/banner/23.png'}
                                    width={1000}
                                    height={800}
                                    alt='bg-img'
                                    className='w-full duration-500'
                                />
                            </div>
                            <div className="heading4 absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">Eyes</div>
                            <div className="button-main absolute bottom-8 left-1/2 -translate-x-1/2">Shop Now</div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
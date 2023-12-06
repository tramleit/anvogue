import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
    return (
        <>
            <div className="banner-block pt-5 px-5">
                <div className="list-banner grid md:grid-cols-3 gap-[20px]">
                    <Link href={'/shop/breadcrumb1'} className="banner-item relative bg-surface block rounded-[20px] overflow-hidden duration-500">
                        <div className="banner-img w-full">
                            <Image
                                src={'/images/banner/18.png'}
                                width={1000}
                                height={800}
                                alt='bg-img'
                                className='w-full duration-500'
                            />
                        </div>
                        <div className="banner-content absolute left-[30px] bottom-[30px]">
                            <div className="heading4">Check & Coutour</div>
                            <div className="text-button text-black relative inline-block pb-1 border-b-2 border-black duration-500 mt-2">Shop Now</div>
                        </div>
                    </Link>
                    <Link href={'/shop/breadcrumb1'} className="banner-item relative bg-surface block rounded-[20px] overflow-hidden duration-500">
                        <div className="banner-img w-full">
                            <Image
                                src={'/images/banner/19.png'}
                                width={1000}
                                height={800}
                                alt='bg-img'
                                className='w-full duration-500'
                            />
                        </div>
                        <div className="banner-content absolute left-[30px] bottom-[30px]">
                            <div className="heading4">Palettes</div>
                            <div className="text-button text-black relative inline-block pb-1 border-b-2 border-black duration-500 mt-2">Shop Now</div>
                        </div>
                    </Link>
                    <Link href={'/shop/breadcrumb1'} className="banner-item relative bg-surface block rounded-[20px] overflow-hidden duration-500">
                        <div className="banner-img w-full">
                            <Image
                                src={'/images/banner/20.png'}
                                width={1000}
                                height={800}
                                alt='bg-img'
                                className='w-full duration-500'
                            />
                        </div>
                        <div className="banner-content absolute left-[30px] bottom-[30px]">
                            <div className="heading4">Eyes</div>
                            <div className="text-button text-black relative inline-block pb-1 border-b-2 border-black duration-500 mt-2">Shop Now</div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Banner
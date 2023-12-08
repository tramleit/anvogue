import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Collection = () => {
    return (
        <>
            <div className="banner-block md:pt-20 pt-10">
                <div className="container">
                    <div className="list-banner grid lg:grid-cols-4 min-[480px]:grid-cols-2 gap-[30px]">
                        <div className="bg-black rounded-[20px] overflow-hidden h-full py-8 md:px-[30px] px-6 flex flex-col justify-center">
                            <div className="caption2 font-semibold text-green uppercase">2024 winter trends</div>
                            <div className="heading3 text-white mt-6">Faux-leather trousers</div>
                            <div className="body1 text-white mt-3">Check out our latest collection of chic and trendy outfits that will keep you looking stylish all year round.</div>
                        </div>
                        <Link href={'/shop/breadcrumb1'} className="banner-item relative bg-surface block rounded-[20px] overflow-hidden duration-500">
                            <div className="banner-img w-full h-full">
                                <Image
                                    src={'/images/collection/category-jewelry1.png'}
                                    width={1000}
                                    height={800}
                                    alt='bg-img'
                                    className='w-full h-full object-cover duration-500'
                                />
                            </div>
                            <div className="banner-content absolute left-[30px] bottom-[30px]">
                                <div className="caption1">15 Products</div>
                                <div className="heading4">Ring</div>
                            </div>
                        </Link>
                        <Link href={'/shop/breadcrumb1'} className="banner-item relative bg-surface block rounded-[20px] overflow-hidden duration-500">
                            <div className="banner-img w-full h-full">
                                <Image
                                    src={'/images/collection/category-jewelry2.png'}
                                    width={1000}
                                    height={800}
                                    alt='bg-img'
                                    className='w-full h-full object-cover duration-500'
                                />
                            </div>
                            <div className="banner-content absolute left-[30px] bottom-[30px]">
                                <div className="caption1">7 Products</div>
                                <div className="heading4">necklaces</div>
                            </div>
                        </Link>
                        <Link href={'/shop/breadcrumb1'} className="banner-item relative bg-surface block rounded-[20px] overflow-hidden duration-500">
                            <div className="banner-img w-full h-full">
                                <Image
                                    src={'/images/collection/category-jewelry3.png'}
                                    width={1000}
                                    height={800}
                                    alt='bg-img'
                                    className='w-full h-full object-cover duration-500'
                                />
                            </div>
                            <div className="banner-content absolute left-[30px] bottom-[30px]">
                                <div className="caption1">12 Products</div>
                                <div className="heading4">Earrings</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection
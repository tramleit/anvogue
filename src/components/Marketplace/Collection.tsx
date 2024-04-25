import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Collection = () => {
    return (
        <div className="collection-block md:pt-[60px] pt-10">
            <div className="container">
                <div className="heading flex items-center justify-between gap-5 flex-wrap">
                    <div className="heading3">Our Collections</div>
                    <Link href='/shop/breadcrumb-img' className='text-button pb-0.5 border-b-2 border-black'>View All
                    </Link>
                </div>
                <div className="list grid xl:grid-cols-4 sm:grid-cols-2 sm:gap-[30px] gap-[20px] md:mt-10 mt-6">
                    <div className="item flex gap-3 px-5 py-6 border border-line rounded-2xl">
                        <Link href='/shop/breadcrumb-img' className='img-product w-[100px] h-[100px] flex-shrink-0'>
                            <Image width={5000} height={5000} src='/images/collection/marketplace1.png' className='w-full h-full object-cover'
                                alt='img' />
                        </Link>
                        <div className="text-content w-full">
                            <div className="heading6 pb-4">Smart Phones</div>
                            <ul>
                                <li>
                                    <Link href="shop-breadcrumb-img"
                                        className="has-line-before caption1 text-secondary hover:text-black">iPhone</Link>
                                </li>
                                <li className="mt-1">
                                    <Link href="shop-breadcrumb-img"
                                        className="has-line-before caption1 text-secondary hover:text-black">iPhone
                                        Accessories</Link>
                                </li>
                                <li className="mt-1">
                                    <Link href="shop-breadcrumb-img"
                                        className="has-line-before caption1 text-secondary hover:text-black">Phone Case</Link>
                                </li>
                                <li className="mt-1">
                                    <Link href="shop-breadcrumb-img"
                                        className="has-line-before caption1 text-secondary hover:text-black">Postpaid Phones</Link>
                                </li>
                            </ul>
                            <Link href='/shop/breadcrumb-img' className='flex items-center gap-1.5 mt-4'>
                                <span className="text-button">All Smartphone</span>
                                <i className="ph-bold ph-caret-double-right text-sm"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="item flex gap-3 px-5 py-6 border border-line rounded-2xl">
                        <Link href='/shop/breadcrumb-img' className='img-product w-[100px] h-[100px] flex-shrink-0'>
                            <Image width={5000} height={5000} src='/images/collection/marketplace2.png' className='w-full h-full object-cover'
                                alt='img' />
                        </Link>
                        <div className="text-content w-full">
                            <div className="heading6 pb-4">Tablet & IPads</div>
                            <ul>
                                <li>
                                    <Link href="shop-breadcrumb-img"
                                        className="has-line-before caption1 text-secondary hover:text-black">Tablets</Link>
                                </li>
                                <li className="mt-1">
                                    <Link href="shop-breadcrumb-img"
                                        className="has-line-before caption1 text-secondary hover:text-black">iPad </Link>
                                </li>
                                <li className="mt-1">
                                    <Link href="shop-breadcrumb-img"
                                        className="has-line-before caption1 text-secondary hover:text-black">Windows Tablets</Link>
                                </li>
                                <li className="mt-1">
                                    <Link href="shop-breadcrumb-img"
                                        className="has-line-before caption1 text-secondary hover:text-black">Tablet
                                        Accessories</Link>
                                </li>
                            </ul>
                            <Link href='/shop/breadcrumb-img' className='flex items-center gap-1.5 mt-4'>
                                <span className="text-button">All Smartphone</span>
                                <i className="ph-bold ph-caret-double-right text-sm"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="item flex gap-3 px-5 py-6 border border-line rounded-2xl">
                        <Link href='/shop/breadcrumb-img' className='img-product w-[100px] h-[100px] flex-shrink-0'>
                            <Image width={5000} height={5000} src='/images/collection/marketplace3.png' className='w-full h-full object-cover'
                                alt='img' />
                        </Link>
                        <div className="text-content w-full">
                            <div className="heading6 pb-4">Smart Watch</div>
                            <ul>
                                <li>
                                    <Link href="shop-breadcrumb-img"
                                        className="has-line-before caption1 text-secondary hover:text-black">Sport Watches</Link>
                                </li>
                                <li className="mt-1">
                                    <Link href="shop-breadcrumb-img"
                                        className="has-line-before caption1 text-secondary hover:text-black">Timex Watches</Link>
                                </li>
                                <li className="mt-1">
                                    <Link href="shop-breadcrumb-img"
                                        className="has-line-before caption1 text-secondary hover:text-black">Watch Brands</Link>
                                </li>
                                <li className="mt-1">
                                    <Link href="shop-breadcrumb-img"
                                        className="has-line-before caption1 text-secondary hover:text-black">Women Watches</Link>
                                </li>
                            </ul>
                            <Link href='/shop/breadcrumb-img' className='flex items-center gap-1.5 mt-4'>
                                <span className="text-button">All Smartphone</span>
                                <i className="ph-bold ph-caret-double-right text-sm"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="item flex gap-3 px-5 py-6 border border-line rounded-2xl">
                        <Link href='/shop/breadcrumb-img' className='img-product w-[100px] h-[100px] flex-shrink-0'>
                            <Image width={5000} height={5000} src='/images/collection/marketplace4.png' className='w-full h-full object-cover'
                                alt='img' />
                        </Link>
                        <div className="text-content w-full">
                            <div className="heading6 pb-4">Accessories</div>
                            <ul>
                                <li>
                                    <Link href="shop-breadcrumb-img"
                                        className="has-line-before caption1 text-secondary hover:text-black">Accessories</Link>
                                </li>
                                <li className="mt-1">
                                    <Link href="shop-breadcrumb-img"
                                        className="has-line-before caption1 text-secondary hover:text-black">Changers</Link>
                                </li>
                                <li className="mt-1">
                                    <Link href="shop-breadcrumb-img"
                                        className="has-line-before caption1 text-secondary hover:text-black">Power Banks</Link>
                                </li>
                                <li className="mt-1">
                                    <Link href="shop-breadcrumb-img"
                                        className="has-line-before caption1 text-secondary hover:text-black">Smartphones</Link>
                                </li>
                            </ul>
                            <Link href='/shop/breadcrumb-img' className='flex items-center gap-1.5 mt-4'>
                                <span className="text-button">All Smartphone</span>
                                <i className="ph-bold ph-caret-double-right text-sm"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection

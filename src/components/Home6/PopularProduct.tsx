import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PopularProduct = () => {
    return (
        <>
            <div className="popular-product md:pt-20 pt-10">
                <div className="list-product grid sm:grid-cols-3">
                    <div className="item relative overflow-hidden">
                        <Image
                            src={'/images/product/fashion/3-1.png'}
                            width={1000}
                            height={1000}
                            alt='product'
                            className='lg:h-[150%] sm:h-[130%] object-cover lg:-mt-[150px] sm:-mt-[40px]'
                        />
                        <div className="dots absolute top-[38%] left-[45%] cursor-pointer">
                            <div className="top-dot w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                            </div>
                            <Link href={'#!'} className="product-infor bg-white rounded-2xl p-4">
                                <div className="text-title name">Jacquard fluid trousers</div>
                                <div className="price text-center">$68.00</div>
                            </Link>
                        </div>
                        <div className="dots bottom-dot absolute bottom-[12%] left-[62%] cursor-pointer">
                            <div className="w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                            </div>
                            <Link href={'#!'} className="product-infor bg-white rounded-2xl p-4">
                                <div className="text-title name">Jacquard fluid trousers</div>
                                <div className="price text-center">$68.00</div>
                            </Link>
                        </div>
                    </div>
                    <div className="item relative overflow-hidden">
                        <Image
                            src={'/images/product/fashion/13-1.png'}
                            width={1000}
                            height={1000}
                            alt='product'
                            className='lg:h-[150%] sm:h-[130%] object-cover lg:-mt-[150px] sm:-mt-[40px]'
                        />
                        <div className="dots absolute top-[30%] left-[70%] cursor-pointer">
                            <div className="top-dot w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                            </div>
                            <Link href={'#!'} className="product-infor bg-white rounded-2xl p-4">
                                <div className="text-title name">Jacquard fluid trousers</div>
                                <div className="price text-center">$68.00</div>
                            </Link>
                        </div>
                        <div className="dots bottom-dot absolute bottom-[15%] left-[25%] cursor-pointer">
                            <div className="w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                            </div>
                            <Link href={'#!'} className="product-infor bg-white rounded-2xl p-4">
                                <div className="text-title name">Jacquard fluid trousers</div>
                                <div className="price text-center">$68.00</div>
                            </Link>
                        </div>
                    </div>
                    <div className="item relative overflow-hidden">
                        <Image
                            src={'/images/product/fashion/21-1.png'}
                            width={1000}
                            height={1000}
                            alt='product'
                            className='w-full'
                        />
                        <div className="dots absolute top-[34%] left-[35%] cursor-pointer">
                            <div className="top-dot w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                            </div>
                            <Link href={'#!'} className="product-infor bg-white rounded-2xl p-4">
                                <div className="text-title name">Jacquard fluid trousers</div>
                                <div className="price text-center">$68.00</div>
                            </Link>
                        </div>
                        <div className="dots bottom-dot absolute bottom-[10%] left-[70%] cursor-pointer">
                            <div className="w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                            </div>
                            <Link href={'#!'} className="product-infor bg-white rounded-2xl p-4">
                                <div className="text-title name">Jacquard fluid trousers</div>
                                <div className="price text-center">$68.00</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularProduct
'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const PopularProduct = () => {
    const router = useRouter()

    const handleDetailProduct = (productId: string) => {
        // redirect to shop with category selected
        router.push(`/product/default?id=${productId}`);
    };

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
                            priority={true}
                            className='lg:h-[150%] sm:h-[130%] object-cover lg:-mt-[150px] sm:-mt-[40px]'
                        />
                        <div className="dots absolute top-[38%] left-[45%] cursor-pointer">
                            <div className="top-dot w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                            </div>
                            <div className="product-infor bg-white rounded-2xl p-4" onClick={() => handleDetailProduct('3')}>
                                <div className="text-title name">Off-The-Shoulder</div>
                                <div className="price text-center">$32.00</div>
                                <div
                                    className="text-center underline mt-1 text-button-uppercase duration-300 text-secondary2 hover:text-black">
                                    View
                                </div>
                            </div>
                        </div>
                        <div className="dots bottom-dot absolute bottom-[12%] left-[62%] cursor-pointer">
                            <div className="w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                            </div>
                            <div className="product-infor bg-white rounded-2xl p-4" onClick={() => handleDetailProduct('3')}>
                                <div className="text-title name">Off-The-Shoulder</div>
                                <div className="price text-center">$32.00</div>
                                <div
                                    className="text-center underline mt-1 text-button-uppercase duration-300 text-secondary2 hover:text-black">
                                    View
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item relative overflow-hidden">
                        <Image
                            src={'/images/product/fashion/13-1.png'}
                            width={1000}
                            height={1000}
                            alt='product'
                            priority={true}
                            className='lg:h-[150%] sm:h-[130%] object-cover lg:-mt-[150px] sm:-mt-[40px]'
                        />
                        <div className="dots absolute top-[30%] left-[70%] cursor-pointer">
                            <div className="top-dot w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                            </div>
                            <div className="product-infor bg-white rounded-2xl p-4" onClick={() => handleDetailProduct('13')}>
                                <div className="text-title name">Mesh Shirt</div>
                                <div className="price text-center">$35.00</div>
                                <div
                                    className="text-center underline mt-1 text-button-uppercase duration-300 text-secondary2 hover:text-black">
                                    View
                                </div>
                            </div>
                        </div>
                        <div className="dots bottom-dot absolute bottom-[15%] left-[25%] cursor-pointer">
                            <div className="w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                            </div>
                            <div className="product-infor bg-white rounded-2xl p-4" onClick={() => handleDetailProduct('13')}>
                                <div className="text-title name">Mesh Shirt</div>
                                <div className="price text-center">$35.00</div>
                                <div
                                    className="text-center underline mt-1 text-button-uppercase duration-300 text-secondary2 hover:text-black">
                                    View
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item relative overflow-hidden">
                        <Image
                            src={'/images/product/fashion/21-1.png'}
                            width={1000}
                            height={1000}
                            alt='product'
                            priority={true}
                            className='w-full'
                        />
                        <div className="dots absolute top-[34%] left-[35%] cursor-pointer">
                            <div className="top-dot w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                            </div>
                            <div className="product-infor bg-white rounded-2xl p-4" onClick={() => handleDetailProduct('21')}>
                                <div className="text-title name">T-Shirt Pockets</div>
                                <div className="price text-center">$19.00</div>
                                <div
                                    className="text-center underline mt-1 text-button-uppercase duration-300 text-secondary2 hover:text-black">
                                    View
                                </div>
                            </div>
                        </div>
                        <div className="dots bottom-dot absolute bottom-[10%] left-[70%] cursor-pointer">
                            <div className="w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                            </div>
                            <div className="product-infor bg-white rounded-2xl p-4" onClick={() => handleDetailProduct('21')}>
                                <div className="text-title name">T-Shirt Pockets</div>
                                <div className="price text-center">$19.00</div>
                                <div
                                    className="text-center underline mt-1 text-button-uppercase duration-300 text-secondary2 hover:text-black">
                                    View
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularProduct
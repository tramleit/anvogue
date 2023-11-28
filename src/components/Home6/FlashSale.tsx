import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FlashSale = () => {
    return (
        <>
            <div className="flash-sale-block style-six w-full bg-surface mt-20">
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
                <div className="container">
                    <div className="text-content flex items-center justify-between max-lg:flex-col max-lg:justify-center max-lg:text-center gap-5 py-10">
                        <div className="heading">
                            <div className="heading2">Flash Sale!</div>
                            <div className="body1 mt-3">Get 20% off if you spend 120$ or more!</div>
                        </div>
                        <div className="countdown-time flex items-center gap-5 max-sm:gap-[18px]">
                            <div className="item flex flex-col items-center">
                                <div className="day heading1">02</div>
                                <div className='text-xs font-medium uppercase'>Days</div>
                            </div>
                            <span className='heading4'>:</span>
                            <div className="item flex flex-col items-center">
                                <div className="day heading1">06</div>
                                <div className='text-xs font-medium uppercase'>Hours</div>
                            </div>
                            <span className='heading4'>:</span>
                            <div className="item flex flex-col items-center">
                                <div className="day heading1">35</div>
                                <div className='text-xs font-medium uppercase'>Minutes</div>
                            </div>
                            <span className='heading4'>:</span>
                            <div className="item flex flex-col items-center">
                                <div className="day heading1">48</div>
                                <div className='text-xs font-medium uppercase'>Seconds</div>
                            </div>
                        </div>
                        <Link href={'#!'} className='button-main'>Get it now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlashSale
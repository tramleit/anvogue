import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Lookbook = () => {
    return (
        <>
            <div className="look-book-block mt-20 py-20 bg-linear">
                <div className="container">
                    <div className="main-content relative flex items-center justify-end">
                        <div className="heading bg-white py-20 px-10 rounded-2xl w-[30%] absolute top-1/2 -translate-y-1/2 left-0 z-[1]">
                            <div className="heading3">Discover the latest collection</div>
                            <Link href={'/shop/breadcrumb-img'} className="button-main bg-green w-full text-center mt-8 text-black">Shop Collection</Link>
                        </div>
                        <div className="list popular-product w-3/4 grid grid-cols-2 gap-4">
                            <div className="item relative rounded-xl overflow-hidden">
                                <Image
                                    src={'/images/banner/lookbook-jewelry1.png'}
                                    width={2000}
                                    height={1000}
                                    alt='/images/banner/lookbook-jewelry1.png'
                                    className='w-full h-full object-cover'
                                />
                                <div className="dots absolute top-[22%] left-[55%] cursor-pointer">
                                    <div className="top-dot w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                        <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                                    </div>
                                    <Link href={'#!'} className="product-infor bg-white rounded-2xl p-4">
                                        <div className="text-title name">gold necklace</div>
                                        <div className="price text-center">$60.00</div>
                                    </Link>
                                </div>
                                <div className="dots absolute top-[42%] left-[32%] cursor-pointer">
                                    <div className="top-dot w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                        <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                                    </div>
                                    <Link href={'#!'} className="product-infor bg-white rounded-2xl p-4">
                                        <div className="text-title name">golden ring</div>
                                        <div className="price text-center">$50.00</div>
                                    </Link>
                                </div>
                                <div className="dots bottom-dot absolute bottom-[20%] left-[58%] cursor-pointer">
                                    <div className="bottom-dot w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                        <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                                    </div>
                                    <Link href={'#!'} className="product-infor bg-white rounded-2xl p-4">
                                        <div className="text-title name">Ruby Ring</div>
                                        <div className="price text-center">$40.00</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="item relative rounded-xl overflow-hidden">
                                <Image
                                    src={'/images/banner/lookbook-jewelry2.png'}
                                    width={2000}
                                    height={1000}
                                    alt='/images/banner/lookbook-jewelry2.png'
                                    className='w-full h-full object-cover'
                                />
                                <div className="dots absolute top-[26%] left-[54%] cursor-pointer">
                                    <div className="top-dot w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                        <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                                    </div>
                                    <Link href={'#!'} className="product-infor bg-white rounded-2xl p-4">
                                        <div className="text-title name">Snake Ring</div>
                                        <div className="price text-center">$45.00</div>
                                    </Link>
                                </div>
                                <div className="dots absolute top-[29%] left-[30%] cursor-pointer">
                                    <div className="top-dot w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                        <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                                    </div>
                                    <Link href={'#!'} className="product-infor bg-white rounded-2xl p-4">
                                        <div className="text-title name">Golden Ring</div>
                                        <div className="price text-center">$48.00</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lookbook
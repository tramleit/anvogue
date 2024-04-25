import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BannerBelow = () => {
    return (
        <div className="banner-block md:pt-[60px] pt-8">
            <div className="container">
                <div className="list-banner grid sm:grid-cols-2 lg:gap-[30px] gap-[20px]">
                    <Link href='/shop/breadcrumb-img'
                        className="banner-item relative py-[53.5px] px-10 bg-[#848EFF] block duration-500 rounded-2xl overflow-hidden">
                        <div className="banner-img w-[173px] absolute top-1/2 -translate-y-1/2 right-14">
                            <Image width={5000} height={5000} src='/images/banner/marketplace4.png' className='w-full duration-500' alt='img' />
                        </div>
                        <div className="banner-content relative">
                            <div className="heading5 text-white">Super Sale <br />Apple Watch</div>
                            <div className="text-title text-white mt-2">Save $599.00</div>
                            <div
                                className="text-button text-white relative inline-block pb-1 border-b-2 border-white duration-500 mt-2">
                                Shop Now</div>
                        </div>
                    </Link>
                    <Link href='/shop/breadcrumb-img'
                        className="banner-item relative py-[53.5px] px-10 bg-[#E7514A] block duration-500 rounded-2xl overflow-hidden">
                        <div className="banner-img w-1/2 absolute top-1/2 -translate-y-1/2 right-10">
                            <Image width={5000} height={5000} src='/images/banner/marketplace5.png' className='w-full duration-500' alt='img' />
                        </div>
                        <div className="banner-content relative">
                            <div className="heading5 text-white">Deals Good <br />Iphone 15 pro</div>
                            <div className="text-title text-white mt-2">Save $599.00</div>
                            <div
                                className="text-button text-white relative inline-block pb-1 border-b-2 border-white duration-500 mt-2">
                                Shop Now</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BannerBelow

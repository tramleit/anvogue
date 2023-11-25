import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
    return (
        <>
            <div className="banner-block pt-20">
                <div className="container">
                    <div className="list-banner grid md:grid-cols-3 lg:gap-[30px] gap-[20px]">
                        <Link href={'#!'} className="banner-item relative block duration-500">
                            <div className="banner-img w-full rounded-2xl overflow-hidden">
                                <Image
                                    src={'/images/banner/3.png'}
                                    width={600}
                                    height={400}
                                    alt='bg-img'
                                    className='w-full duration-500'
                                />
                            </div>
                            <div className="banner-content absolute left-[30px] bottom-[30px]">
                                <div className="heading4">Best Men{String.raw`'s`} <br />Fashion</div>
                                <div className="text-button text-black relative inline-block pb-1 border-b-2 border-black duration-500 mt-2">Shop Now</div>
                            </div>
                        </Link>
                        <Link href={'#!'} className="banner-item relative block duration-500">
                            <div className="banner-img w-full rounded-2xl overflow-hidden">
                                <Image
                                    src={'/images/banner/4.png'}
                                    width={600}
                                    height={400}
                                    alt='bg-img'
                                    className='w-full duration-500'
                                />
                            </div>
                            <div className="banner-content absolute left-[30px] bottom-[30px]">
                                <div className="heading4">Summer Sale <br/>collection</div>
                                <div className="text-button text-black relative inline-block pb-1 border-b-2 border-black duration-500 mt-2">Shop Now</div>
                            </div>
                        </Link>
                        <Link href={'#!'} className="banner-item relative block duration-500">
                            <div className="banner-img w-full rounded-2xl overflow-hidden">
                                <Image
                                    src={'/images/banner/5.png'}
                                    width={600}
                                    height={400}
                                    alt='bg-img'
                                    className='w-full duration-500'
                                />
                            </div>
                            <div className="banner-content absolute left-[30px] bottom-[30px]">
                                <div className="heading4">20% off <br/>accessories</div>
                                <div className="text-button text-black relative inline-block pb-1 border-b-2 border-black duration-500 mt-2">Shop Now</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
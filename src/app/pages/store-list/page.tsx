'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Benefit from '@/components/Home1/Benefit'
import Newsletter from '@/components/Home4/Newsletter'
import Instagram from '@/components/Home6/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'

const StoreList = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Store list' subHeading='Store list' />
            </div>
            <div className='store-list md:py-20 py-10'>
                <div className="container">
                    <div className="item bg-surface overflow-hidden rounded-[20px]">
                        <div className="flex items-center justify-end relative">
                            <Image
                                src={'/images/other/store-list-office1.png'}
                                width={3000}
                                height={2000}
                                alt='bg-img'
                                className='absolute top-0 left-0 bottom-0 w-1/2'
                            />
                            <div className="text-content w-1/2 pr-20 pl-[100px] py-14">
                                <div className="heading3">New York Office</div>
                                <div className="list-featrue mt-10">
                                    <div className="item flex gap-10">
                                        <div>
                                            <div className="heading6">Address:</div>
                                            <div className="text-secondary mt-2">2163 Phillips Gap Rd West Jefferson, North Carolina</div>
                                        </div>
                                        <div>
                                            <div className="heading6">Opentime:</div>
                                            <div className="text-secondary mt-2">Monay - Friday:
                                                <span className='text-black'>08:00 - 20:00</span>
                                                Saturday - Sunday:
                                                <span className='text-black'>10:00 - 18:00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-featrue mt-5">
                                    <div className="item flex gap-10">
                                        <div>
                                            <div className="heading6">Infomation:</div>
                                            <div className="text-secondary mt-2">+1 666 234 8888<br />
                                                hi.avitex@gmail.com</div>
                                        </div>
                                        <div>
                                            <div className="heading6">Our social media:</div>
                                            <div className="flex items-center gap-4 mt-2">
                                                <Link href={'https://www.facebook.com/'} target='_blank' className="item bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white duration-300">
                                                    <div className="icon-facebook"></div>
                                                </Link>
                                                <Link href={'https://www.instagram.com/'} target='_blank' className="item bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white duration-300">
                                                    <div className="icon-instagram"></div>
                                                </Link>
                                                <Link href={'https://www.youtube.com/'} target='_blank' className="item bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white duration-300">
                                                    <div className="icon-youtube"></div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item bg-surface overflow-hidden rounded-[20px] md:mt-20 mt-10">
                        <div className="flex items-center justify-start relative">
                            <div className="text-content w-1/2 pl-20 pr-[100px] py-14">
                                <div className="heading3">Chicago Office</div>
                                <div className="list-featrue mt-10">
                                    <div className="item flex gap-10">
                                        <div>
                                            <div className="heading6">Address:</div>
                                            <div className="text-secondary mt-2">2163 Phillips Gap Rd West Jefferson, North Carolina</div>
                                        </div>
                                        <div>
                                            <div className="heading6">Opentime:</div>
                                            <div className="text-secondary mt-2">Monay - Friday:
                                                <span className='text-black'>08:00 - 20:00</span>
                                                Saturday - Sunday:
                                                <span className='text-black'>10:00 - 18:00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-featrue mt-5">
                                    <div className="item flex gap-10">
                                        <div>
                                            <div className="heading6">Infomation:</div>
                                            <div className="text-secondary mt-2">+1 666 234 8888<br />
                                                hi.avitex@gmail.com</div>
                                        </div>
                                        <div>
                                            <div className="heading6">Our social media:</div>
                                            <div className="flex items-center gap-4 mt-2">
                                                <Link href={'https://www.facebook.com/'} target='_blank' className="item bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white duration-300">
                                                    <div className="icon-facebook"></div>
                                                </Link>
                                                <Link href={'https://www.instagram.com/'} target='_blank' className="item bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white duration-300">
                                                    <div className="icon-instagram"></div>
                                                </Link>
                                                <Link href={'https://www.youtube.com/'} target='_blank' className="item bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white duration-300">
                                                    <div className="icon-youtube"></div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Image
                                src={'/images/other/store-list-office2.png'}
                                width={3000}
                                height={2000}
                                alt='bg-img'
                                className='absolute top-0 right-0 bottom-0 w-1/2'
                            />
                        </div>
                    </div>
                    <div className="item bg-surface overflow-hidden rounded-[20px] md:mt-20 mt-10">
                        <div className="flex items-center justify-end relative">
                            <Image
                                src={'/images/other/store-list-office3.png'}
                                width={3000}
                                height={2000}
                                alt='bg-img'
                                className='absolute top-0 left-0 bottom-0 w-1/2'
                            />
                            <div className="text-content w-1/2 pr-20 pl-[100px] py-14">
                                <div className="heading3">San Francisco Office</div>
                                <div className="list-featrue mt-10">
                                    <div className="item flex gap-10">
                                        <div>
                                            <div className="heading6">Address:</div>
                                            <div className="text-secondary mt-2">2163 Phillips Gap Rd West Jefferson, North Carolina</div>
                                        </div>
                                        <div>
                                            <div className="heading6">Opentime:</div>
                                            <div className="text-secondary mt-2">Monay - Friday:
                                                <span className='text-black'>08:00 - 20:00</span>
                                                Saturday - Sunday:
                                                <span className='text-black'>10:00 - 18:00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-featrue mt-5">
                                    <div className="item flex gap-10">
                                        <div>
                                            <div className="heading6">Infomation:</div>
                                            <div className="text-secondary mt-2">+1 666 234 8888<br />
                                                hi.avitex@gmail.com</div>
                                        </div>
                                        <div>
                                            <div className="heading6">Our social media:</div>
                                            <div className="flex items-center gap-4 mt-2">
                                                <Link href={'https://www.facebook.com/'} target='_blank' className="item bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white duration-300">
                                                    <div className="icon-facebook"></div>
                                                </Link>
                                                <Link href={'https://www.instagram.com/'} target='_blank' className="item bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white duration-300">
                                                    <div className="icon-instagram"></div>
                                                </Link>
                                                <Link href={'https://www.youtube.com/'} target='_blank' className="item bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white duration-300">
                                                    <div className="icon-youtube"></div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default StoreList
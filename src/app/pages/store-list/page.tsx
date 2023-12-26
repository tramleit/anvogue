'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
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
                        <div className="flex items-center lg:justify-end relative max-lg:flex-col">
                            <Image
                                src={'/images/other/store-list-office1.png'}
                                width={3000}
                                height={2000}
                                alt='bg-img'
                                className='lg:absolute relative top-0 left-0 lg:bottom-0 lg:w-1/2 w-full h-full object-cover'
                            />
                            <div className="text-content lg:w-1/2 lg:pr-20 lg:pl-[100px] lg:py-14 sm:py-10 py-6 max-lg:px-6">
                                <div className="heading3">New York Office</div>
                                <div className="list-featrue lg:mt-10 mt-6">
                                    <div className="item flex lg:gap-10 gap-6">
                                        <div className='w-1/2'>
                                            <div className="heading6">Address:</div>
                                            <div className="text-secondary mt-2">2163 Phillips Gap Rd West Jefferson, North Carolina</div>
                                        </div>
                                        <div className='w-1/2'>
                                            <div className="heading6">Opentime:</div>
                                            <div className="text-secondary mt-2 whitespace-nowrap">Monay - Friday:</div>
                                            <div className='text-title text-black whitespace-nowrap'>08:00 - 20:00</div>
                                            <div className="text-secondary whitespace-nowrap">Saturday - Sunday:</div>
                                            <div className='text-title text-black whitespace-nowrap'>10:00 - 18:00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-featrue mt-5">
                                    <div className="item flex lg:gap-10 gap-6">
                                        <div className='w-1/2'>
                                            <div className="heading6">Infomation:</div>
                                            <div className="text-secondary mt-2">+1 666 234 8888<br />
                                                hi.avitex@gmail.com</div>
                                        </div>
                                        <div className='w-1/2'>
                                            <div className="heading6">Our social media:</div>
                                            <div className="flex items-center sm:gap-4 gap-2 mt-2">
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
                        <div className="flex items-center justify-start relative max-lg:flex-col-reverse">
                            <div className="text-content lg:w-1/2 w-full lg:pl-20 lg:pr-[100px] lg:py-14 sm:py-10 py-6 max-lg:px-6">
                                <div className="heading3">Chicago Office</div>
                                <div className="list-featrue lg:mt-10 mt-6">
                                    <div className="item flex lg:gap-10 gap-6">
                                        <div className='w-1/2'>
                                            <div className="heading6">Address:</div>
                                            <div className="text-secondary mt-2">2163 Phillips Gap Rd West Jefferson, North Carolina</div>
                                        </div>
                                        <div className='w-1/2'>
                                            <div className="heading6">Opentime:</div>
                                            <div className="text-secondary mt-2 whitespace-nowrap">Monay - Friday:</div>
                                            <div className='text-title text-black whitespace-nowrap'>08:00 - 20:00</div>
                                            <div className="text-secondary whitespace-nowrap">Saturday - Sunday:</div>
                                            <div className='text-title text-black whitespace-nowrap'>10:00 - 18:00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-featrue mt-5">
                                    <div className="item flex lg:gap-10 gap-6">
                                        <div className='w-1/2'>
                                            <div className="heading6">Infomation:</div>
                                            <div className="text-secondary mt-2">+1 666 234 8888<br />
                                                hi.avitex@gmail.com</div>
                                        </div>
                                        <div className='w-1/2'>
                                            <div className="heading6">Our social media:</div>
                                            <div className="flex items-center sm:gap-4 gap-2 mt-2">
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
                                className='lg:absolute relative top-0 right-0 bottom-0 lg:bottom-0 lg:w-1/2 w-full h-full object-cover'
                            />
                        </div>
                    </div>
                    <div className="item bg-surface overflow-hidden rounded-[20px] md:mt-20 mt-10">
                        <div className="flex items-center lg:justify-end relative max-lg:flex-col">
                            <Image
                                src={'/images/other/store-list-office3.png'}
                                width={3000}
                                height={2000}
                                alt='bg-img'
                                className='lg:absolute relative top-0 left-0 lg:bottom-0 lg:w-1/2 w-full h-full object-cover'
                            />
                            <div className="text-content lg:w-1/2 lg:pr-20 lg:pl-[100px] lg:py-14 sm:py-10 py-6 max-lg:px-6">
                                <div className="heading3">San Francisco Office</div>
                                <div className="list-featrue lg:mt-10 mt-6">
                                    <div className="item flex lg:gap-10 gap-6">
                                        <div className='w-1/2'>
                                            <div className="heading6">Address:</div>
                                            <div className="text-secondary mt-2">2163 Phillips Gap Rd West Jefferson, North Carolina</div>
                                        </div>
                                        <div className='w-1/2'>
                                            <div className="heading6">Opentime:</div>
                                            <div className="text-secondary mt-2 whitespace-nowrap">Monay - Friday:</div>
                                            <div className='text-title text-black whitespace-nowrap'>08:00 - 20:00</div>
                                            <div className="text-secondary whitespace-nowrap">Saturday - Sunday:</div>
                                            <div className='text-title text-black whitespace-nowrap'>10:00 - 18:00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-featrue mt-5">
                                    <div className="item flex lg:gap-10 gap-6">
                                        <div className='w-1/2'>
                                            <div className="heading6">Infomation:</div>
                                            <div className="text-secondary mt-2">+1 666 234 8888<br />
                                                hi.avitex@gmail.com</div>
                                        </div>
                                        <div className='w-1/2'>
                                            <div className="heading6">Our social media:</div>
                                            <div className="flex items-center sm:gap-4 gap-2 mt-2">
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
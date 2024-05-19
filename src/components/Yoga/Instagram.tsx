'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Instagram = () => {
    return (
        <>
            <div className="instagram-block md:pt-20 pt-10">
                <div className="container">
                    <div className="flex items-center justify-center">
                        <div className="heading3">Instagram <span className='font-light underline ml-2'>Anvogue</span></div>
                    </div>
                </div>
                <div className="list-instagram md:mt-10 mt-6 grid md:grid-cols-5 md:grid-rows-2 grid-cols-2">
                    <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden col-span-2 row-span-2 aspect-square">
                        <Image
                            src={'/images/instagram/yoga1.png'}
                            width={3000}
                            height={3000}
                            alt='1'
                            priority={true}
                            className='h-full w-full aspect-square duration-500 relative object-cover'
                        />
                        <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                            <div className="icon-instagram text-2xl text-black"></div>
                        </div>
                    </Link>
                    <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden">
                        <Image
                            src={'/images/instagram/yoga2.png'}
                            width={3000}
                            height={3000}
                            alt='1'
                            priority={true}
                            className='h-full w-full duration-500 relative'
                        />
                        <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                            <div className="icon-instagram text-2xl text-black"></div>
                        </div>
                    </Link>
                    <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden">
                        <Image
                            src={'/images/instagram/yoga3.png'}
                            width={3000}
                            height={3000}
                            alt='1'
                            priority={true}
                            className='h-full w-full duration-500 relative'
                        />
                        <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                            <div className="icon-instagram text-2xl text-black"></div>
                        </div>
                    </Link>
                    <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden">
                        <Image
                            src={'/images/instagram/yoga4.png'}
                            width={3000}
                            height={3000}
                            alt='1'
                            priority={true}
                            className='h-full w-full duration-500 relative'
                        />
                        <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                            <div className="icon-instagram text-2xl text-black"></div>
                        </div>
                    </Link>
                    <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden">
                        <Image
                            src={'/images/instagram/yoga5.png'}
                            width={3000}
                            height={3000}
                            alt='1'
                            priority={true}
                            className='h-full w-full duration-500 relative'
                        />
                        <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                            <div className="icon-instagram text-2xl text-black"></div>
                        </div>
                    </Link>
                    <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden">
                        <Image
                            src={'/images/instagram/yoga6.png'}
                            width={3000}
                            height={3000}
                            alt='1'
                            priority={true}
                            className='h-full w-full duration-500 relative'
                        />
                        <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                            <div className="icon-instagram text-2xl text-black"></div>
                        </div>
                    </Link>
                    <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden">
                        <Image
                            src={'/images/instagram/yoga7.png'}
                            width={3000}
                            height={3000}
                            alt='1'
                            priority={true}
                            className='h-full w-full duration-500 relative'
                        />
                        <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                            <div className="icon-instagram text-2xl text-black"></div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Instagram
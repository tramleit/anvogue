'use client'

import React from 'react'
import Image from 'next/image';
import * as Icon from "@phosphor-icons/react/dist/ssr";

const Testimonial = () => {

    return (
        <>
            <div className="testimonial-block style-four relative">
                <div className="container relative w-full h-full">
                    <div className="content md:w-1/2 lg:py-[110px] py-16">
                        <div className="heading4 font-normal normal-case">I absolutely love this shop! The products are high-quality and the customer service is excellent. I always leave with exactly what I need and a smile on my face.</div>
                        <div className="flex items-center gap-5 mt-8">
                            <div className="avatar">
                                <Image
                                    src={'/images/avatar/1.png'}
                                    width={80}
                                    height={80}
                                    alt='avatar'
                                    className='sm:w-20 w-14 sm:h-20 h-14 rounded-full'
                                />
                            </div>
                            <div className="infor">
                                <div className="body1 font-semibold uppercase">Emma cardi</div>
                                <div className="rate flex items-center gap-0.5">
                                    <Icon.Star size={12} color="#ECB018" weight="fill" />
                                    <Icon.Star size={12} color="#ECB018" weight="fill" />
                                    <Icon.Star size={12} color="#ECB018" weight="fill" />
                                    <Icon.Star size={12} color="#ECB018" weight="fill" />
                                    <Icon.Star size={12} color="#ECB018" weight="fill" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-img absolute top-0 left-0 w-full h-full z-[-1]">
                    <Image
                        src={'/images/banner/bg-testi-cos.png'}
                        width={3000}
                        height={2000}
                        alt='bg-img'
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>
        </>
    )
}

export default Testimonial
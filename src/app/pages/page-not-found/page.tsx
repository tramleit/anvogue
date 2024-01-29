'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Footer from '@/components/Footer/Footer'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const PageNotFound = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-white" />
            </div>
            <div className='page-not-found md:py-20 py-10 bg-linear md:mt-[74px] mt-14'>
                <div className="container">
                    <div className="flex items-center justify-between max-sm:flex-col gap-y-8">
                        <Image
                            src={'/images/other/404-img.png'}
                            width={2000}
                            height={2000}
                            alt='bg-img'
                            priority={true}
                            className='sm:w-1/2 w-3/4'
                        />
                        <div className="text-content sm:w-1/2 w-full flex items-center justify-center sm:pl-10">
                            <div className=''>
                                <div className="lg:text-[140px] md:text-[80px] text-[42px] lg:leading-[152px] md:leading-[92px] leading-[52px] font-semibold">404</div>
                                <div className="heading2 mt-4">Something is Missing.</div>
                                <div className="body1 text-secondary mt-4 pb-4">The page you are looking for cannot be found. <br className='max-xl:hidden' />Take a break before trying again </div>
                                <Link className="flex items-center gap-3" href={'/'}>
                                    <Icon.ArrowLeft />
                                    <div className="text-button">Back To Homepage</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PageNotFound
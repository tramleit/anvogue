import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
    return (
        <>
            <div className="banner-block style-toys-kids">
                <div className="container">
                    <div className="content md:rounded-[28px] rounded-2xl overflow-hidden relative">
                        <Image
                            src={'/images/banner/bg-banner-toys.png'}
                            width={3000}
                            height={2000}
                            alt='bg'
                            priority={true}
                            className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
                        />
                        <div className="text-content xl:w-1/3 w-2/3 xl:pl-[120px] md:pl-20 pl-10 md:py-[85px] py-12">
                            <div className="text-sub-display">Sale Up To 50% Off Today!</div>
                            <div className="heading2 md:mt-4 mt-2">Created to be loved for a lifetime</div>
                            <Link href='/shop/breadcrumb-img' className="button-main md:mt-7 mt-3">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
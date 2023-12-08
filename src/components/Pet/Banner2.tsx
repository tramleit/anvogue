import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner2 = () => {
    return (
        <>
            <div className="banner-block md:mt-20 mt-10 relative">
                <div className="bg-img w-full">
                    <Image
                        src={'/images/banner/bg-banner-pet.png'}
                        width={3000}
                        height={2000}
                        alt='bg-img'
                        className='w-full'
                    />
                </div>
                <div className="text-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4">
                    <div className="heading1 text-center">Make Your Pet Happy</div>
                    <div className="heading6 font-normal text-center mt-2">We Offer Quality Pet Services</div>
                    <div className="button-block text-center mt-8">
                        <Link href={'/shop/breadcrumb-img'} className='button-main'>
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner2
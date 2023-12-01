'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SliderUnderwear = () => {
    return (
        <>
            <div className="slider-block style-one bg-linear py-[100px] w-full">
                <div className="slider-main h-full w-full flex items-center justify-center gap-10">
                    <div className="sub-img rounded-b-full overflow-hidden">
                        <Image
                            src={'/images/slider/bg-underwear1.png'}
                            width={2000}
                            height={1936}
                            alt='bg-underwear1'
                            className='w-full'
                        />
                    </div>
                    <div className="text-content w-fit">
                        <div className="text-sub-display text-center">Sale! Up To 50% Off!</div>
                        <div className="text-display text-center md:mt-4 mt-2">Transform Your <br />Look This <br />summer</div>
                        <div className="text-center">
                            <Link href='/shop/breadcrumb-img' className="button-main md:mt-8 mt-3">Shop Now</Link>
                        </div>
                    </div>
                    <div className="sub-img rounded-t-full overflow-hidden">
                        <Image
                            src={'/images/slider/bg-underwear2.png'}
                            width={2000}
                            height={1936}
                            alt='bg-underwear2'
                            className='w-full'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderUnderwear
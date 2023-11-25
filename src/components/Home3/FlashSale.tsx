import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FlashSale = () => {
    return (
        <>
            <div className="container pt-20">
                <div className="flash-sale-block bg-surface flex items-center justify-end relative overflow-hidden rounded-[32px] w-full">
                    <div className="bg-img basis-1/3 absolute left-0 top-0 bottom-0">
                        <Image
                            src={'/images/other/bg-flash-sale.png'}
                            width={1000}
                            height={200}
                            alt='bg-img'
                            className='w-full'
                        />
                    </div>
                    <div className="text-content basis-1/2 flex flex-col items-center text-center py-24">
                        <div className="heading2">Flash Sale!</div>
                        <div className="body1 mt-3">Get 20% off if you spend 120$ or more!</div>
                        <div className="countdown-time flex items-center gap-5 mt-9">
                            <div className="item flex flex-col items-center">
                                <div className="day heading1">02</div>
                                <div className='text-xs font-medium uppercase'>Days</div>
                            </div>
                            <span className='heading4'>:</span>
                            <div className="item flex flex-col items-center">
                                <div className="day heading1">06</div>
                                <div className='text-xs font-medium uppercase'>Hours</div>
                            </div>
                            <span className='heading4'>:</span>
                            <div className="item flex flex-col items-center">
                                <div className="day heading1">35</div>
                                <div className='text-xs font-medium uppercase'>Minutes</div>
                            </div>
                            <span className='heading4'>:</span>
                            <div className="item flex flex-col items-center">
                                <div className="day heading1">48</div>
                                <div className='text-xs font-medium uppercase'>Seconds</div>
                            </div>
                        </div>
                        <Link href={'#!'} className='button-main mt-9'>Get it now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlashSale
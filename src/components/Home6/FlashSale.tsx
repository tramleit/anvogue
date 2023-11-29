import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FlashSale = () => {
    return (
        <>
            <div className="flash-sale-block style-six w-full bg-surface">
                <div className="container">
                    <div className="text-content flex items-center justify-between max-lg:flex-col max-lg:justify-center max-lg:text-center gap-5 py-10">
                        <div className="heading">
                            <div className="heading2">Flash Sale!</div>
                            <div className="body1 mt-3">Get 20% off if you spend 120$ or more!</div>
                        </div>
                        <div className="countdown-time flex items-center gap-5 max-sm:gap-[18px]">
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
                        <Link href={'#!'} className='button-main'>Get it now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlashSale
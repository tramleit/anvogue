import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FlashSale = () => {
    return (
        <>
            <div className="container pt-20">
                <div className="flash-sale-block bg-surface flex items-center relative overflow-hidden rounded-[32px] w-full">
                    <div className="bg-img basis-1/3 absolute left-0 bottom-0">
                        <Image
                            src={'/images/other/bg-flash-sale.png'}
                            width={800}
                            height={200}
                            alt='bg-img'
                            className='w-full'
                        />
                    </div>
                    <div className="text-content flex flex-col items-center text-center py-24">
                        <div className="heading2">Flash Sale!</div>
                        <div className="body1 mt-3">Get 20% off if you spend 120$ or more!</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlashSale
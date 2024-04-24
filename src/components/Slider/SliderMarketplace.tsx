import Image from 'next/image'
import React from 'react'

const SliderMarketplace = () => {
    return (
        <>
            <div className="slider-block style-marketplace lg:h-[500px] md:h-[400px] sm:h-[320px] h-[280px] w-full">
                <div className="container pt-10 flex justify-end h-full w-full">
                    <div className="slider-main lg:pl-5 h-full w-full">
                        <div className="h-full relative rounded-2xl overflow-hidden">
                            <div className="slider-item h-full w-full flex items-center bg-surface relative">
                                <div className="text-content md:pl-16 pl-5 basis-1/2 relative z-[1]">
                                    <div className="text-sub-display text-white">BEST SELLING</div>
                                    <div className="heading2 text-white md:mt-5 mt-2">Step Into New Worlds</div>
                                    <a href='/shop-breadcrumb-img.html'
                                        className="button-main bg-white text-black hover:bg-green md:mt-8 mt-3">Shop Now
                                    </a>
                                </div>
                                <div className="sub-img absolute top-0 left-0 w-full h-full">
                                    <Image
                                        src='/images/slider/marketplace.png'
                                        width={5000}
                                        height={4000}
                                        alt='marketplace'
                                        className='w-full h-full object-cover' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderMarketplace
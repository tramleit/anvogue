'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

const Collection = () => {
    return (
        <>
            <div className="collection-block pt-20">
                <div className="container">
                    <div className="heading text-center">
                    <div className="heading3 text-center">Explore Collections</div>
                        <div className="heading6 font-normal normal-case text-secondary mt-4">Highly recommended. The quality of the products is exceptional, and the prices are very reasonable!</div>
                    </div>
                    <div className="list-collection grid grid-cols-4 gap-8 mt-10">
                        <Link href={'#!'} className="collection-item block relative rounded-t-full overflow-hidden">
                            <div className="bg-img">
                                <Image
                                    src={'/images/collection/swimwear.png'}
                                    width={1000}
                                    height={600}
                                    alt='swimwear'
                                />
                            </div>
                            <div className="collection-name heading5 text-center sm:bottom-5 bottom-3 lg:w-[200px] md:w-[120px] w-[100px] md:py-1.5 py-1 bg-white rounded-xl duration-500">lingerie</div>
                        </Link>
                        <Link href={'#!'} className="collection-item block relative rounded-t-full overflow-hidden">
                            <div className="bg-img">
                                <Image
                                    src={'/images/collection/clothes.png'}
                                    width={1000}
                                    height={600}
                                    alt='clothes'
                                />
                            </div>
                            <div className="collection-name heading5 text-center sm:bottom-5 bottom-3 lg:w-[200px] md:w-[120px] w-[100px] md:py-1.5 py-1 bg-white rounded-xl duration-500">Beach Wear</div>
                        </Link>
                        <Link href={'#!'} className="collection-item block relative rounded-t-full overflow-hidden">
                            <div className="bg-img">
                                <Image
                                    src={'/images/collection/sets.png'}
                                    width={1000}
                                    height={600}
                                    alt='sets'
                                />
                            </div>
                            <div className="collection-name heading5 text-center sm:bottom-5 bottom-3 lg:w-[200px] md:w-[120px] w-[100px] md:py-1.5 py-1 bg-white rounded-xl duration-500">Sport Active</div>
                        </Link>
                        <Link href={'#!'} className="collection-item block relative rounded-t-full overflow-hidden">
                            <div className="bg-img">
                                <Image
                                    src={'/images/collection/accessories.png'}
                                    width={1000}
                                    height={600}
                                    alt='accessories'
                                />
                            </div>
                            <div className="collection-name heading5 text-center sm:bottom-5 bottom-3 lg:w-[200px] md:w-[120px] w-[100px] md:py-1.5 py-1 bg-white rounded-xl duration-500">Swim wear</div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection
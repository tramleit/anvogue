'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Collection = () => {
    return (
        <>
            <div className="collection-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading text-center">
                    <div className="heading3 text-center">Explore Collections</div>
                        <div className="heading6 font-normal normal-case text-secondary md:mt-4 mt-2">Highly recommended. The quality of the products is exceptional, and the prices are very reasonable!</div>
                    </div>
                    <div className="list-collection grid lg:grid-cols-4 grid-cols-2 gap-8 mt-10">
                        <Link href={'#!'} className="collection-item block relative rounded-t-full overflow-hidden">
                            <div className="bg-img">
                                <Image
                                    src={'/images/collection/underwear1.png'}
                                    width={1000}
                                    height={600}
                                    alt='underwear1'
                                />
                            </div>
                            <div className="collection-name heading5 text-center sm:bottom-5 bottom-3 md:w-[200px] max-md:px-4 max-md:whitespace-nowrap md:py-3 py-2 bg-white rounded-xl duration-500">lingerie</div>
                        </Link>
                        <Link href={'#!'} className="collection-item block relative rounded-t-full overflow-hidden">
                            <div className="bg-img">
                                <Image
                                    src={'/images/collection/underwear2.png'}
                                    width={1000}
                                    height={600}
                                    alt='underwear2'
                                />
                            </div>
                            <div className="collection-name heading5 text-center sm:bottom-5 bottom-3 md:w-[200px] max-md:px-4 max-md:whitespace-nowrap md:py-3 py-2 bg-white rounded-xl duration-500">Beach Wear</div>
                        </Link>
                        <Link href={'#!'} className="collection-item block relative rounded-t-full overflow-hidden">
                            <div className="bg-img">
                                <Image
                                    src={'/images/collection/underwear3.png'}
                                    width={1000}
                                    height={600}
                                    alt='underwear3'
                                />
                            </div>
                            <div className="collection-name heading5 text-center sm:bottom-5 bottom-3 md:w-[200px] max-md:px-4 max-md:whitespace-nowrap md:py-3 py-2 bg-white rounded-xl duration-500">Sport Active</div>
                        </Link>
                        <Link href={'#!'} className="collection-item block relative rounded-t-full overflow-hidden">
                            <div className="bg-img">
                                <Image
                                    src={'/images/collection/underwear4.png'}
                                    width={1000}
                                    height={600}
                                    alt='underwear4'
                                />
                            </div>
                            <div className="collection-name heading5 text-center sm:bottom-5 bottom-3 md:w-[200px] max-md:px-4 max-md:whitespace-nowrap md:py-3 py-2 bg-white rounded-xl duration-500">Swim wear</div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection
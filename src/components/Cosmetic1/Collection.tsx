import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Collection = () => {
    return (
        <>
            <div className="collection-block cosmetic md:pt-20 pt-10">
                <div className="container">
                    <div className='grid sm:grid-cols-2 md:gap-[30px] gap-[16px]'>
                        <div className="left">
                            <Link href={'/shop/breadcrumb1'} className="collection-item block h-full relative md:rounded-[20px] rounded-xl overflow-hidden">
                                <div className="bg-img h-full w-full aspect-square">
                                    <Image
                                        src={'/images/collection/body.png'}
                                        width={1000}
                                        height={1000}
                                        alt='body'
                                        className='h-full object-cover'
                                    />
                                </div>
                                <div className="collection-name heading5 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">Body</div>
                            </Link>
                        </div>
                        <div className="right grid grid-rows-2 md:gap-[30px] gap-[16px]">
                            <div className="top grid grid-cols-2 md:gap-[30px] gap-[16px]">
                                <Link href={'/shop/breadcrumb1'} className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden">
                                    <div className="bg-img h-full">
                                        <Image
                                            src={'/images/collection/skin.png'}
                                            width={1000}
                                            height={1000}
                                            alt='skin'
                                            className='h-full object-cover'
                                        />
                                    </div>
                                    <div className="collection-name heading5 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">Skin</div>
                                </Link>
                                <Link href={'/shop/breadcrumb1'} className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden">
                                    <div className="bg-img h-full">
                                        <Image
                                            src={'/images/collection/hair.png'}
                                            width={1000}
                                            height={1000}
                                            alt='hair'
                                            className='h-full object-cover'
                                        />
                                    </div>
                                    <div className="collection-name heading5 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">Hair</div>
                                </Link>
                            </div>
                            <div className="bottom">
                                <Link href={'/shop/breadcrumb1'} className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden">
                                    <div className="bg-img h-full">
                                        <Image
                                            src={'/images/collection/accessories-cos.png'}
                                            width={1000}
                                            height={1000}
                                            alt='accessories-cos'
                                            className='h-full object-cover'
                                        />
                                    </div>
                                    <div className="collection-name heading5 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">Accessories</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection
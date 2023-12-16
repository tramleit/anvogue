import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProductType } from '@/type/ProductType'
import Product from '../Product/Product';

interface Props {
    data: Array<ProductType>;
}

const ShopCollection: React.FC<Props> = ({ data }) => {
    return (
        <>
            <div className="shop-collection lg:py-20 md:py-14 py-10">
                <div className="container">
                    <div className="banner-heading rounded-2xl overflow-hidden relative max-lg:h-[300px] max-md:h-[260px]">
                        <div className="bg-img h-full">
                            <Image
                                src={'/images/banner/banner-shop-breadcrumb-img.png'}
                                width={3000}
                                height={3000}
                                alt='bg'
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <div className="text-content absolute top-1/2 -translate-y-1/2 right-10">
                            <div className="body1 font-semibold uppercase">New Trend 2022</div>
                            <div className="heading1 font-semibold mt-2">Sale Off <br />Up To 30%</div>
                            <Link href={'/shop/breadcrumb1'} className='button-main lg:mt-10 mt-6'>Explore More</Link>
                        </div>
                    </div>
                    <div className="list-collection md:py-20 py-10">
                        <div className="item">
                            <div className="main flex max-sm:flex-wrap gap-y-8 items-center justify-between">
                                <div className="bg-img sm:w-1/2 lg:pr-[90px] sm:pr-14">
                                    <Image
                                        src={'/images/product/fashion/3-3.png'}
                                        width={3000}
                                        height={3000}
                                        alt='bg'
                                        className='w-full object-cover aspect-[3/4] rounded-xl'
                                    />
                                </div>
                                <div className="right sm:w-1/2">
                                    <div className="heading flex items-center justify-between flex-wrap gap-y-4">
                                        <div className="left">
                                            <div className="body1 font-semibold text-secondary2 uppercase">SUMMER STAPLE</div>
                                            <div className="heading3 sm:mt-3 mt-1">Linen Wrap Dresses</div>
                                        </div>
                                        <div className="right">
                                            <Link href={'/shop/breadcrumb1'} className='button-main bg-white text-black border border-black'>View All Products</Link>
                                        </div>
                                    </div>
                                    <div className="list-product hide-product-sold grid grid-cols-2 md:gap-[30px] gap-5 md:mt-10 mt-6">
                                        {data
                                            .filter(product => product.type === 'accessories' && product.category === 'fashion')
                                            .slice(0, 2)
                                            .map(product => (
                                                <Product data={product} type='grid' key={product.id} />
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item md:mt-20 mt-10">
                            <div className="main flex max-sm:flex-wrap gap-y-8 items-center justify-between">
                                <div className="bg-img sm:w-1/2 lg:pr-[90px] sm:pr-14">
                                    <Image
                                        src={'/images/product/fashion/10-1.png'}
                                        width={3000}
                                        height={3000}
                                        alt='bg'
                                        className='w-full object-cover aspect-[3/4] rounded-xl'
                                    />
                                </div>
                                <div className="right sm:w-1/2">
                                    <div className="heading flex items-center justify-between flex-wrap gap-y-4">
                                        <div className="left">
                                            <div className="body1 font-semibold text-secondary2 uppercase">SUMMER STAPLE</div>
                                            <div className="heading3 sm:mt-3 mt-1">Linen Wrap Dresses</div>
                                        </div>
                                        <div className="right">
                                            <Link href={'/shop/breadcrumb1'} className='button-main bg-white text-black border border-black'>View All Products</Link>
                                        </div>
                                    </div>
                                    <div className="list-product hide-product-sold grid grid-cols-2 md:gap-[30px] gap-5 md:mt-10 mt-6">
                                        {data
                                            .filter(product => product.type === 'accessories' && product.category === 'fashion')
                                            .slice(2, 4)
                                            .map(product => (
                                                <Product data={product} type='grid' key={product.id} />
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item md:mt-20 mt-10">
                            <div className="main flex max-sm:flex-wrap gap-y-8 items-center justify-between">
                                <div className="bg-img sm:w-1/2 lg:pr-[90px] sm:pr-14">
                                    <Image
                                        src={'/images/collection/outerwear.png'}
                                        width={3000}
                                        height={3000}
                                        alt='bg'
                                        className='w-full object-cover aspect-[3/4] rounded-xl'
                                    />
                                </div>
                                <div className="right sm:w-1/2">
                                    <div className="heading flex items-center justify-between flex-wrap gap-y-4">
                                        <div className="left">
                                            <div className="body1 font-semibold text-secondary2 uppercase">SUMMER STAPLE</div>
                                            <div className="heading3 sm:mt-3 mt-1">Linen Wrap Dresses</div>
                                        </div>
                                        <div className="right">
                                            <Link href={'/shop/breadcrumb1'} className='button-main bg-white text-black border border-black'>View All Products</Link>
                                        </div>
                                    </div>
                                    <div className="list-product hide-product-sold grid grid-cols-2 md:gap-[30px] gap-5 md:mt-10 mt-6">
                                        {data
                                            .filter(product => product.type === 'accessories' && product.category === 'fashion')
                                            .slice(4, 6)
                                            .map(product => (
                                                <Product data={product} type='grid' key={product.id} />
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopCollection
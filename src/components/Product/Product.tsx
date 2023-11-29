'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProductType } from '@/type/ProductType'
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface ProductProps {
    data: ProductType
    type: string
}

const Product: React.FC<ProductProps> = ({ data, type }) => {
    const percentSale = Math.floor(100 - ((data.price / data.originPrice) * 100))
    const percentSold = Math.floor((data.sold / data.quantity) * 100)

    return (
        <>
            {type === "grid" ? (
                <div className="product-item grid-type">
                    <Link href={'#!'} className="product-main block">
                        <div className="product-thumb relative overflow-hidden rounded-2xl">
                            {data.new && (
                                <div className="product-tag text-button-uppercase bg-green px-3 py-0.5 inline-block rounded-full absolute top-3 left-3 z-[1]">
                                    New
                                </div>
                            )}
                            {data.sale && (
                                <div className="product-tag text-button-uppercase text-white bg-red px-3 py-0.5 inline-block rounded-full absolute top-3 left-3 z-[1]">
                                    Sale
                                </div>
                            )}
                            <div className="list-action-right absolute top-3 right-3">
                                <div className="add-wishlist-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative">
                                    <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">Add To Wishlist</div>
                                    <Icon.Heart size={18} />
                                </div>
                                <div className="compare-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative mt-2">
                                    <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">Compare Product</div>
                                    <Icon.ArrowsCounterClockwise size={18} />
                                </div>
                            </div>
                            <div className="product-img">
                                {data.thumbImage.map((img, index) => (
                                    <Image
                                        key={index}
                                        src={img}
                                        width={500}
                                        height={500}
                                        alt={data.name}
                                        className='w-full h-full object-cover duration-700'
                                    />
                                ))}
                            </div>

                            <div className="list-action grid grid-cols-2 gap-3 px-5 absolute w-full bottom-5 max-lg:hidden">
                                <div className="quick-view-btn w-full text-button-uppercase py-2 text-center rounded-full duration-300 bg-white hover:bg-black hover:text-white">
                                    Quick View
                                </div>
                                {data.action === 'add to cart' ? (
                                    <div className="add-cart-btn w-full text-button-uppercase py-2 text-center rounded-full duration-500 bg-white hover:bg-black hover:text-white">
                                        Add To Cart
                                    </div>
                                ) : (
                                    <div className="quick-shop-btn text-button-uppercase py-2 text-center rounded-full duration-500 bg-white hover:bg-black hover:text-white">
                                        Quick Shop
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="product-infor mt-4">
                            <div className="product-sold pb-4">
                                <div className="progress bg-line h-1.5 w-full rounded-full overflow-hidden relative">
                                    <div className={`progress-sold bg-red absolute left-0 top-0 h-full w-[${percentSold}%]`}></div>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="text-button-uppercase">
                                        <span className='text-secondary2'>Sold: </span>
                                        <span>{data.sold}</span>
                                    </div>
                                    <div className="text-button-uppercase">
                                        <span className='text-secondary2'>Available: </span>
                                        <span>{data.quantity - data.sold}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-name text-title duration-300">{data.name}</div>
                            {data.variation.length > 0 ? (
                                <div className="list-color max-md:hidden py-2 mb-1 flex items-center gap-3 flex-wrap duration-300">
                                    {data.variation.map((item, index) => (
                                        <div className={`color-item bg-${item.color} w-8 h-8 rounded-full duration-300 relative`} key={index}>
                                            <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">{item.color}</div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <></>
                            )}

                            <div className="product-price-block flex items-center gap-2 flex-wrap mt-1 bg-white duration-300 relative z-[1]">
                                <div className="product-price text-title">${data.price}.00</div>
                                <div className="product-origin-price caption1 text-secondary2"><del>${data.originPrice}.00</del></div>
                                {data.originPrice && (
                                    <div className="product-sale caption1 font-medium bg-green px-3 py-0.5 inline-block rounded-full">
                                        -{percentSale}%
                                    </div>
                                )}
                            </div>
                        </div>
                    </Link>
                </div>
            ) : (
                <>
                </>
            )
            }
        </>
    )
}

export default Product
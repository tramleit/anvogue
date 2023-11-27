'use client'

import React from 'react'
import Image from 'next/image'
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'
import Rate from '../Other/Rate'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css/bundle';
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface Props {
    data: Array<ProductType>;
}

const BestSaleProduct: React.FC<Props> = ({ data }) => {
    // Truy cập thông tin của sản phẩm thứ 13 trong mảng data
    const productMain = data[12];
    const percentSale = Math.floor(100 - ((productMain.price / productMain.originPrice) * 100))

    return (
        <>
            <div className="best-sale-prd bg-surface py-20 mt-20">
                <div className="container flex justify-between">
                    <div className="list-img w-2/3">
                        <Swiper
                            spaceBetween={12}
                            slidesPerView={1}
                            scrollbar={{
                                hide: false,
                            }}
                            modules={[Navigation, Autoplay, Scrollbar]}
                            breakpoints={{
                                576: {
                                    slidesPerView: 1,
                                    spaceBetween: 12,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1200: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                            }}
                            className='h-full'
                        >
                            <SwiperSlide>
                                <Image
                                    src={productMain.images[0]}
                                    width={1000}
                                    height={1000}
                                    alt='prd-img'
                                    className='w-full rounded-[20px]'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={productMain.images[1]}
                                    width={1000}
                                    height={1000}
                                    alt='prd-img'
                                    className='w-full rounded-[20px]'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={productMain.images[2]}
                                    width={1000}
                                    height={1000}
                                    alt='prd-img'
                                    className='w-full rounded-[20px]'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={productMain.images[3]}
                                    width={1000}
                                    height={1000}
                                    alt='prd-img'
                                    className='w-full rounded-[20px]'
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="product-infor w-1/3 pl-20">
                        <div className="caption2 text-secondary font-semibold uppercase">{productMain.type}</div>
                        <div className="heading4 mt-1">{productMain.name}</div>
                        <div className="flex items-center mt-3">
                            <Rate currentRate={productMain.rate}></Rate>
                            <span className='caption1 text-secondary'>(1.234 reviews)</span>
                        </div>
                        <div className="flex items-center gap-3 flex-wrap mt-5 pb-6 border-b border-line">
                            <div className="product-price heading5">${productMain.price}.00</div>
                            <div className='w-px h-4 bg-line'></div>
                            <div className="product-origin-price font-normal text-secondary2"><del>${productMain.originPrice}.00</del></div>
                            {productMain.originPrice && (
                                <div className="product-sale caption2 font-semibold bg-green px-3 py-0.5 inline-block rounded-full">
                                    -{percentSale}%
                                </div>
                            )}
                            <div className='desc text-secondary mt-3'>{productMain.description}</div>
                        </div>
                        <div className="list-action mt-6">
                            <div className="choose-color">
                                <div className="text-title">Colors: <span className='text-title color'>Blue</span></div>
                                <div className="list-color flex items-center gap-2 flex-wrap mt-3">
                                    {productMain.variation.map((item, index) => (
                                        <>
                                            <div className='color-item w-12 h-12 rounded-xl duration-300 relative' key={index}>
                                                <Image
                                                    src={item.colorImage}
                                                    width={100}
                                                    height={100}
                                                    alt='color'
                                                    className='rounded-xl'
                                                />
                                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                                    {item.color}
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>
                            <div className="choose-size mt-5">
                                <div className="heading flex items-center justify-between">
                                    <div className="text-title">Size: <span className='text-title size'>L</span></div>
                                    <div className="caption1 size-guide text-red underline">Size Guide</div>
                                </div>
                                <div className="list-size flex items-center gap-2 flex-wrap mt-3">
                                    {productMain.sizes.map((item, index) => (
                                        <div className="size-item w-12 h-12 flex items-center justify-center text-button rounded-full bg-white border border-line" key={index}>{item}</div>
                                    ))}
                                </div>
                            </div>
                            <div className="choose-quantity flex items-center justify-between mt-5">
                                <div className="quantity-block p-3 flex items-center justify-between rounded-lg border border-line w-[140px]">
                                    <Icon.Minus size={20} />
                                    <div className="body1 font-semibold">1</div>
                                    <Icon.Plus size={20} />
                                </div>
                                <div className="button-main bg-white text-black border border-black">Add To Cart</div>
                            </div>
                            <div className="button-block mt-5">
                                <div className="button-main w-full text-center">Buy It Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestSaleProduct
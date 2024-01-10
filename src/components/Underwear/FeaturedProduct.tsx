'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ProductType } from '@/type/ProductType'
import Rate from '../Other/Rate'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css/bundle';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import SwiperCore from 'swiper/core';
import { useCart } from '@/context/CartContext'
import { useModalCartContext } from '@/context/ModalCartContext'
import ModalSizeguide from '../Modal/ModalSizeguide'

SwiperCore.use([Navigation, Thumbs]);

interface Props {
    data: Array<ProductType>;
}

const FeaturedProduct: React.FC<Props> = ({ data }) => {
    const [openSizeGuide, setOpenSizeGuide] = useState<boolean>(false)
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
    const [activeColor, setActiveColor] = useState<string>('')
    const [activeSize, setActiveSize] = useState<string>('')
    const { addToCart, updateCart, cartState } = useCart()
    const { openModalCart } = useModalCartContext()

    const handleOpenSizeGuide = () => {
        setOpenSizeGuide(true);
    };

    const handleCloseSizeGuide = () => {
        setOpenSizeGuide(false);
    };

    const handleActiveColor = (item: string) => {
        setActiveColor(item)
    }

    const handleActiveSize = (item: string) => {
        setActiveSize(item)
    }

    const handleSwiper = (swiper: SwiperCore) => {
        // Do something with the thumbsSwiper instance
        setThumbsSwiper(swiper);
    };

    const handleIncreaseQuantity = () => {
        productMain.quantityPurchase += 1
        updateCart(productMain.id, productMain.quantityPurchase + 1, activeSize, activeColor);
    };

    const handleDecreaseQuantity = () => {
        if (productMain.quantityPurchase > 1) {
            productMain.quantityPurchase -= 1
            updateCart(productMain.id, productMain.quantityPurchase - 1, activeSize, activeColor);
        }
    };

    const handleAddToCart = () => {
        if (!cartState.cartArray.find(item => item.id === productMain.id)) {
            addToCart({ ...productMain });
            updateCart(productMain.id, productMain.quantityPurchase, activeSize, activeColor)
        } else {
            updateCart(productMain.id, productMain.quantityPurchase, activeSize, activeColor)
        }
        openModalCart()
    };

    // Infor product 39th in data
    const productMain = data[39];
    const percentSale = Math.floor(100 - ((productMain.price / productMain.originPrice) * 100))

    return (
        <>
            <div className="featured-product underwear md:py-20 py-14">
                <div className="container flex lg:items-center justify-between gap-y-6 flex-wrap">
                    <div className="list-img md:w-1/2 md:pr-4 w-full">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[Thumbs]}
                            className="mySwiper2 rounded-2xl overflow-hidden"
                        >
                            <SwiperSlide>
                                <Image
                                    src={productMain.images[0]}
                                    width={1000}
                                    height={1000}
                                    alt='prd-img'
                                    className='w-full aspect-[3/4] object-cover'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={productMain.images[1]}
                                    width={1000}
                                    height={1000}
                                    alt='prd-img'
                                    className='w-full aspect-[3/4] object-cover'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={productMain.images[2]}
                                    width={1000}
                                    height={1000}
                                    alt='prd-img'
                                    className='w-full aspect-[3/4] object-cover'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={productMain.images[3]}
                                    width={1000}
                                    height={1000}
                                    alt='prd-img'
                                    className='w-full aspect-[3/4] object-cover'
                                />
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            onSwiper={handleSwiper}
                            spaceBetween={0}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[Navigation, Thumbs, FreeMode]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <Image
                                    src={productMain.images[0]}
                                    width={1000}
                                    height={1000}
                                    alt='prd-img'
                                    className='w-full aspect-[3/4] object-cover rounded-xl'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={productMain.images[1]}
                                    width={1000}
                                    height={1000}
                                    alt='prd-img'
                                    className='w-full aspect-[3/4] object-cover rounded-xl'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={productMain.images[2]}
                                    width={1000}
                                    height={1000}
                                    alt='prd-img'
                                    className='w-full aspect-[3/4] object-cover rounded-xl'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={productMain.images[3]}
                                    width={1000}
                                    height={1000}
                                    alt='prd-img'
                                    className='w-full aspect-[3/4] object-cover rounded-xl'
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="product-infor md:w-1/2 w-full lg:pl-16 md:pl-6">
                        <div className="caption2 text-secondary font-semibold uppercase">{productMain.type}</div>
                        <div className="heading4 mt-1">{productMain.name}</div>
                        <div className="flex items-center mt-3">
                            <Rate currentRate={productMain.rate} size={14} />
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
                                <div className="text-title">Colors: <span className='text-title color'>{activeColor}</span></div>
                                <div className="list-color flex items-center gap-2 flex-wrap mt-3">
                                    {productMain.variation.map((item, index) => (
                                        <div
                                            className={`color-item w-12 h-12 rounded-xl duration-300 relative ${activeColor === item.color ? 'active' : ''}`}
                                            key={index}
                                            onClick={() => handleActiveColor(item.color)}
                                        >
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
                                    ))}
                                </div>
                            </div>
                            <div className="choose-size mt-5">
                                <div className="heading flex items-center justify-between">
                                    <div className="text-title">Size: <span className='text-title size'>{activeSize}</span></div>
                                    <div
                                        className="caption1 size-guide text-red underline cursor-pointer"
                                        onClick={handleOpenSizeGuide}
                                    >
                                        Size Guide
                                    </div>
                                    <ModalSizeguide data={productMain} isOpen={openSizeGuide} onClose={handleCloseSizeGuide} />
                                </div>
                                <div className="list-size flex items-center gap-2 flex-wrap mt-3">
                                    {productMain.sizes.map((item, index) => (
                                        <div
                                            className={`size-item w-12 h-12 flex items-center justify-center text-button rounded-full bg-white border border-line ${activeSize === item ? 'active' : ''}`}
                                            key={index}
                                            onClick={() => handleActiveSize(item)}
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="choose-quantity flex items-center lg:justify-between gap-5 gap-y-3 mt-5">
                                <div className="quantity-block md:p-3 p-2 flex items-center justify-between rounded-lg border border-line w-[140px] flex-shrink-0">
                                    <Icon.Minus
                                        size={20}
                                        onClick={handleDecreaseQuantity}
                                        className={`${productMain.quantityPurchase === 1 ? 'disabled' : ''} cursor-pointer`}
                                    />
                                    <div className="body1 font-semibold">{productMain.quantityPurchase}</div>
                                    <Icon.Plus
                                        size={20}
                                        onClick={handleIncreaseQuantity}
                                        className='cursor-pointer'
                                    />
                                </div>
                                <div
                                    className="button-main w-full text-center bg-white text-black border border-black"
                                    onClick={handleAddToCart}
                                >
                                    Add To Cart
                                </div>
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

export default FeaturedProduct
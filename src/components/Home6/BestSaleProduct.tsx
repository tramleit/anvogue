'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'
import Rate from '../Other/Rate'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css/bundle';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useCart } from '@/context/CartContext'
import { useModalCartContext } from '@/context/ModalCartContext'
import ModalSizeguide from '../Modal/ModalSizeguide'
import { useSwiper } from 'swiper/react';

interface Props {
    data: Array<ProductType>;
}

const BestSaleProduct: React.FC<Props> = ({ data }) => {
    const [openSizeGuide, setOpenSizeGuide] = useState<boolean>(false)
    const [activeColor, setActiveColor] = useState<string>('')
    const [activeSize, setActiveSize] = useState<string>('')
    const { addToCart, updateCart, cartState } = useCart()
    const { openModalCart } = useModalCartContext()
    const swiperRef: any = useRef();

    const handleOpenSizeGuide = () => {
        setOpenSizeGuide(true);
    };

    const handleCloseSizeGuide = () => {
        setOpenSizeGuide(false);
    };

    const handleActiveColor = (item: string) => {
        setActiveColor(item)

        // Find variation with selected color
        const foundColor = productMain.variation.find((variation) => variation.color === item);
        // If found, slide next to img
        if (foundColor) {
            const index = productMain.images.indexOf(foundColor.image);

            if (index !== -1) {
                swiperRef.current?.slideTo(index);
            }
        }
    }

    const handleActiveSize = (item: string) => {
        setActiveSize(item)
    }

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

    // Infor's product 13th in data
    const productMain = data[12];
    const percentSale = Math.floor(100 - ((productMain.price / productMain.originPrice) * 100))

    return (
        <>
            <div className="best-sale-prd bg-surface md:py-20 py-10 md:mt-20 mt-10">
                <div className="container flex justify-between gap-y-6 flex-wrap">
                    <div className="list-img lg:w-2/3 w-full">
                        <Swiper
                            spaceBetween={12}
                            slidesPerView={2}
                            scrollbar={{
                                hide: false,
                            }}
                            modules={[Navigation, Autoplay, Scrollbar]}
                            breakpoints={{
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 12,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                            }}
                            className='h-full'
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper
                            }}
                        >
                            <SwiperSlide>
                                <Image
                                    src={productMain.images[0]}
                                    width={1000}
                                    height={1000}
                                    alt='prd-img'
                                    className='w-full h-full object-cover rounded-[20px]'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={productMain.images[1]}
                                    width={1000}
                                    height={1000}
                                    alt='prd-img'
                                    className='w-full h-full object-cover rounded-[20px]'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={productMain.images[2]}
                                    width={1000}
                                    height={1000}
                                    alt='prd-img'
                                    className='w-full h-full object-cover rounded-[20px]'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={productMain.images[3]}
                                    width={1000}
                                    height={1000}
                                    alt='prd-img'
                                    className='w-full h-full object-cover rounded-[20px]'
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="product-infor lg:w-1/3 w-full lg:pl-20">
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
                                <div onClick={handleAddToCart} className="button-main w-full text-center bg-white text-black border border-black">Add To Cart</div>
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
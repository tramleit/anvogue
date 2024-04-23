'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useCart } from '@/context/CartContext'
import { useModalCartContext } from '@/context/ModalCartContext'
import productData from '@/data/Product.json'
import { ProductType } from '@/type/ProductType'

const BuyPack = () => {
    const router = useRouter()
    const { addToCart, updateCart, cartState } = useCart();
    const { openModalCart } = useModalCartContext()

    const handleAddToCart = () => {
        if (!cartState.cartArray.find(item => item.id === '43')) {
            addToCart(productData.find(item => item.id === '43') as ProductType)
            updateCart('43', 1, '', '')
        }

        if (!cartState.cartArray.find(item => item.id === '44')) {
            addToCart(productData.find(item => item.id === '44') as ProductType)
            updateCart('44', 1, '', '')
        }

        if (!cartState.cartArray.find(item => item.id === '42')) {
            addToCart(productData.find(item => item.id === '42') as ProductType)
            updateCart('42', 1, '', '')
        }

        openModalCart()
    };

    const handleDetailProduct = (productId: string) => {
        // redirect to shop with category selected
        router.push(`/product/default?id=${productId}`);
    };

    return (
        <>
            <div className="buy-pack-block md:pt-20 pt-10">
                <div className="container grid sm:grid-cols-2 max-sm:flex max-sm:w-full flex-col max-sm:flex-col-reverse items-center">
                    <div className="main-content w-full">
                        <div className="heading3">Cosmetic Cream packs</div>
                        <div className="block mt-3">Sign up for early sale access, new in, promotions and more</div>
                        <div className="list-product mt-8">
                            <div className='product-item pb-5 border-b border-line cursor-pointer' onClick={() => handleDetailProduct('43')}>
                                <div className="product-main flex items-center justify-between">
                                    <div className="left flex items-center gap-7">
                                        <Image
                                            src={'/images/product/cosmetic/1-1.png'}
                                            width={60}
                                            height={80}
                                            alt='1-1'
                                        />
                                        <div className="infor">
                                            <div className="product-name text-title">Hair Treatment</div>
                                            <div className="caption2 product-brand text-secondary2 uppercase mt-1">Glurmarket</div>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="text-title">$<span className='product-price'>15</span>,000</div>
                                    </div>
                                </div>
                            </div>
                            <div className='product-item pb-5 border-b border-line cursor-pointer mt-5' onClick={() => handleDetailProduct('44')}>
                                <div className="product-main flex items-center justify-between">
                                    <div className="left flex items-center gap-7">
                                        <Image
                                            src={'/images/product/cosmetic/1-2.png'}
                                            width={60}
                                            height={80}
                                            alt='1-2'
                                        />
                                        <div className="infor">
                                            <div className="product-name text-title">After Sun- tan Booster</div>
                                            <div className="caption2 product-brand text-secondary2 uppercase mt-1">Glurmarket</div>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="text-title">$<span className='product-price'>10</span>,000</div>
                                    </div>
                                </div>
                            </div>
                            <div className='product-item pb-5 border-b border-line cursor-pointer mt-5' onClick={() => handleDetailProduct('42')}>
                                <div className="product-main flex items-center justify-between">
                                    <div className="left flex items-center gap-7">
                                        <Image
                                            src={'/images/product/cosmetic/1-3.png'}
                                            width={60}
                                            height={80}
                                            alt='1-3'
                                        />
                                        <div className="infor">
                                            <div className="product-name text-title">Tinted Moisturiser</div>
                                            <div className="caption2 product-brand text-secondary2 uppercase mt-1">Glurmarket</div>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="text-title">$<span className='product-price'>20</span>,000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block-button mt-8">
                            <div
                                className="button-main w-full text-center"
                                onClick={handleAddToCart}
                            >
                                add set to cart
                            </div>
                        </div>
                    </div>
                    <div className="popular-product sm:pl-20 max-sm:pb-6 max-sm:px-8">
                        <div className="item relative">
                            <Image
                                src={'/images/product/cosmetic/1-4.png'}
                                width={2000}
                                height={1000}
                                alt='/images/product/cosmetic/1-4.png'
                                className='w-full aspect-square object-cover'
                            />
                            <div className="dots absolute top-[20%] left-[20%] cursor-pointer">
                                <div className="top-dot w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                    <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                                </div>
                                <div className="product-infor bg-white rounded-2xl p-4" onClick={() => handleDetailProduct('43')}>
                                    <div className="text-title name">Hair Treatment</div>
                                    <div className="price text-center">$10.00</div>
                                    <div
                                        className="text-center underline mt-1 text-button-uppercase duration-300 text-secondary2 hover:text-black">
                                        View
                                    </div>
                                </div>
                            </div>
                            <div className="dots bottom-dot absolute bottom-[28%] left-[62%] cursor-pointer">
                                <div className="w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                                    <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
                                </div>
                                <div className="product-infor bg-white rounded-2xl p-4" onClick={() => handleDetailProduct('44')}>
                                    <div className="text-title name">After Sun - tan Booster</div>
                                    <div className="price text-center">$15.00</div>
                                    <div
                                        className="text-center underline mt-1 text-button-uppercase duration-300 text-secondary2 hover:text-black">
                                        View
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

export default BuyPack
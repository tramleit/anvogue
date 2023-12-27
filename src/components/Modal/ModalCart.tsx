'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import productData from '@/data/Product.json'
import { ProductType } from '@/type/ProductType';
import { useModalCartContext } from '@/context/ModalCartContext'
import { useCart } from '@/context/CartContext'

const ModalCart = () => {
    const { isModalOpen, closeModalCart } = useModalCartContext();
    const { cartState, addToCart, removeFromCart, updateCart } = useCart()

    const handleAddToCart = () => {
        productData.map(product => {
            if (!cartState.cartArray.find(item => item.id === product.id)) {
                addToCart({ ...product });
                updateCart(product.id, product.quantityPurchase, '', '')
            } else {
                updateCart(product.id, product.quantityPurchase, '', '')
            }
        })
    };

    return (
        <>
            <div className={`modal-cart-block`} onClick={closeModalCart}>
                <div
                    className={`modal-cart-main flex ${isModalOpen ? 'open' : ''}`}
                    onClick={(e) => { e.stopPropagation() }}
                >
                    <div className="left w-1/2 border-r border-line py-6">
                        <div className="heading5 px-6 pb-3">You May Also Like</div>
                        <div className="list px-6">
                            {productData.slice(0, 4).map((product) => (
                                <div key={product.id} className='item py-5 flex items-center justify-between border-b border-line'>
                                    <div className="infor flex items-center gap-5">
                                        <div className="bg-img">
                                            <Image
                                                src={product.images[0]}
                                                width={300}
                                                height={300}
                                                alt={product.name}
                                                className='w-[100px] aspect-square flex-shrink-0 rounded-lg'
                                            />
                                        </div>
                                        <div className=''>
                                            <div className="name text-button">{product.name}</div>
                                            <div className="flex items-center gap-2 mt-2">
                                                <div className="product-price text-title">${product.price}.00</div>
                                                <div className="product-origin-price text-title text-secondary2"><del>${product.originPrice}.00</del></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="text-xl bg-white w-10 h-10 rounded-xl border border-black flex items-center justify-center duration-300 cursor-pointer hover:bg-black hover:text-white"
                                        onClick={e => {
                                            e.stopPropagation();
                                            handleAddToCart()
                                        }}
                                    >
                                        <Icon.Handbag />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="right cart-block w-1/2 py-6 relative">
                        <div className="heading px-6 pb-3 flex items-center justify-between relative">
                            <div className="heading5">Shopping Cart</div>
                            <div
                                className="close-btn absolute right-6 top-0 w-6 h-6 rounded-full bg-surface flex items-center justify-center duration-300 cursor-pointer hover:bg-black hover:text-white"
                                onClick={closeModalCart}
                            >
                                <Icon.X size={14} />
                            </div>
                        </div>
                        <div className="time px-6">
                            <div className=" flex items-center gap-3 px-5 py-3 bg-green rounded-lg">
                                <p className='text-3xl'>🔥</p>
                                <div className="caption1">Your cart will expire in <span className='text-red caption1 font-semibold'>04:48</span> minutes!<br />
                                    Please checkout now before your items sell out!</div>
                            </div>
                        </div>
                        <div className="heading banner mt-3 px-6">
                            <div className="text">Buy <span className="text-button">$<span className="more-price">250</span><span>.00 </span></span><span>more to get </span><span className="text-button">freeship</span></div>
                            <div className="tow-bar-block mt-3">
                                <div className="progress-line"></div>
                            </div>
                        </div>
                        <div className="list-product px-6">
                            {cartState.cartArray.map((product) => (
                                <div key={product.id} className='item py-5 flex items-center justify-between border-b border-line'>
                                    <div className="infor flex items-center gap-3 w-full">
                                        <div className="bg-img w-[100px] aspect-square flex-shrink-0 rounded-lg overflow-hidden">
                                            <Image
                                                src={product.images[0]}
                                                width={300}
                                                height={300}
                                                alt={product.name}
                                                className='w-full h-full'
                                            />
                                        </div>
                                        <div className='w-full'>
                                            <div className="flex items-center justify-between w-full">
                                                <div className="name text-button">{product.name}</div>
                                                <div
                                                    className="remove-cart-btn caption1 font-semibold text-red underline cursor-pointer"
                                                    onClick={() => removeFromCart(product.id)}
                                                >
                                                    Remove
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between gap-2 mt-3 w-full">
                                                <div className="flex items-center text-secondary2 capitalize">
                                                    {product.selectedSize || product.sizes[0]}/{product.selectedColor || product.variation[0].color}
                                                </div>
                                                <div className="product-price text-title">${product.price}.00</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="footer-modal bg-white absolute bottom-0 left-0 w-full">
                            <div className="flex items-center justify-center gap-14 px-6 py-4 border-b border-line">
                                <div className="item flex items-center gap-3 cursor-pointer">
                                    <Icon.NotePencil className='text-xl' />
                                    <div className="caption1">Note</div>
                                </div>
                                <div className="item flex items-center gap-3 cursor-pointer">
                                    <Icon.Truck className='text-xl' />
                                    <div className="caption1">Shipping</div>
                                </div>
                                <div className="item flex items-center gap-3 cursor-pointer">
                                    <Icon.Tag className='text-xl' />
                                    <div className="caption1">Coupon</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-6 px-6">
                                <div className="heading5">Subtotal</div>
                                <div className="heading5">$135.00</div>
                            </div>
                            <div className="block-button p-6">
                                <Link href={'/cart'} className='button-main w-full text-center uppercase'>View cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalCart
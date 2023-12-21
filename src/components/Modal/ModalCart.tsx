'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useModalCartContext } from '@/context/ModalCartContext'
import { useCart } from '@/context/CartContext'

const ModalCart = () => {
    const { isModalOpen, closeModalCart } = useModalCartContext();
    const { cartState, removeFromCart } = useCart()

    return (
        <>
            <div className={`modal-cart-block`} onClick={closeModalCart}>
                <div
                    className={`modal-cart-main ${isModalOpen ? 'open' : ''}`}
                    onClick={(e) => { e.stopPropagation() }}
                >
                    <div className="heading py-6 px-8 border-b border-line flex items-center justify-between">
                        <div className="text-cate">Shopping Cart</div>
                        <div
                            className="text-caption text-grey cursor-pointer hover:underline"
                            onClick={closeModalCart}
                        >
                            Close
                        </div>
                    </div>
                    <div className="list-product py-6 px-8">
                        {cartState.cartArray.map((product) => (
                            <div key={product.id} className='item py-6 flex items-center justify-between border-b border-line'>
                                <div className="infor flex items-center gap-3">
                                    <div className="bg-img">
                                        <Image
                                            src={product.images[1]}
                                            width={300}
                                            height={300}
                                            alt={product.name}
                                            className='w-[90px] aspect-square block border border-line'
                                        />
                                    </div>
                                    <div className=''>
                                        <div className="name text-button">{product.name}</div>
                                        <div className="flex items-center gap-2 mt-2">
                                            <div className="product-price text-title">${product.price}.0</div>
                                            <div className="product-origin-price text-title text-grey"><del>${product.originPrice}.0</del></div>
                                        </div>
                                        <div className="quantity text-title">Quantity: {product.quantityPurchase}</div>
                                        <div className="size text-title">size: {product.selectedSize}</div>
                                        <div className="color text-title">color: {product.selectedColor}</div>

                                    </div>
                                </div>
                                <div className="remove-cart-btn cursor-pointer" onClick={() => removeFromCart(product.id)}>
                                    <Icon.XCircle weight='fill' className='text-orange text-button-lg duration-300' />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="footer-modal py-6 px-8 border-t border-line absolute bottom-0 left-0 w-full">
                        <div className="flex items-center justify-between">
                            <div className="text-cate">Subtotal</div>
                            <div className="text-button-lg text-green">$135.0</div>
                        </div>
                        <div className="block-button mt-7">
                            <Link href={'/cart'} className='button-main w-full text-center uppercase'>View cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalCart
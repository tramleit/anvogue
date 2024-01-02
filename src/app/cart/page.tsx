'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Footer from '@/components/Footer/Footer'
import { ProductType } from '@/type/ProductType'
import productData from '@/data/Product.json'
import Product from '@/components/Product/Product'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useCart } from '@/context/CartContext'

const Cart = () => {
    const { cartState } = useCart();
    const [productQuantity, setProductQuantity] = useState<Record<string, number>>({});

    const handleQuantityChange = (productId: string, newQuantity: number) => {
        setProductQuantity((prevQuantity) => ({
            ...prevQuantity,
            [productId]: newQuantity,
        }));
    };

    const handleDecreaseQuantity = (productId: string) => {
        const currentQuantity = productQuantity[productId] || 0;
        const newQuantity = currentQuantity > 1 ? currentQuantity - 1 : 1;
        handleQuantityChange(productId, newQuantity);
    };

    const handleIncreaseQuantity = (productId: string) => {
        const currentQuantity = productQuantity[productId] || 0;
        const newQuantity = currentQuantity + 1;
        handleQuantityChange(productId, newQuantity);
    };


    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Shopping cart' subHeading='Shopping cart' />
            </div>
            <div className="cart-block md:py-20 py-10">
                <div className="container">
                    <div className="content-main flex justify-between max-xl:flex-col gap-y-8">
                        <div className="xl:w-2/3 xl:pr-3 w-full">
                            <div className="time bg-green py-3 px-5 flex items-center rounded-lg">
                                <div className="heding5">🔥</div>
                                <div className="caption1 pl-2">Your cart will expire in <span className="min text-critical fw-700">04</span><span className="text-critical fw-700">:</span><span className="sec text-critical fw-700">59</span><span> minutes! Please checkout now before your items sell out!</span></div>
                            </div>
                            <div className="heading banner mt-5">
                                <div className="text">Buy <span className="text-button">$<span className="more-price">250</span><span>.00 </span></span><span>more to get </span><span className="text-button">freeship</span></div>
                                <div className="tow-bar-block mt-4">
                                    <div className="progress-line"></div>
                                </div>
                            </div>
                            <div className="list-product w-full sm:mt-7 mt-5">
                                <div className='w-full'>
                                    <div className="heading bg-surface bora-4 pt-4 pb-4">
                                        <div className="flex">
                                            <div className="w-1/2">
                                                <div className="text-button text-center">Products</div>
                                            </div>
                                            <div className="w-1/12">
                                                <div className="text-button text-center">Price</div>
                                            </div>
                                            <div className="w-1/6">
                                                <div className="text-button text-center">Quantity</div>
                                            </div>
                                            <div className="w-1/6">
                                                <div className="text-button text-center">Total Price</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-product-main w-full mt-3">
                                        {cartState.cartArray.length < 1 ? (
                                            <p className='text-button pt-3'>No product in cart</p>
                                        ) : (
                                            cartState.cartArray.map((product) => (
                                                <div className="item flex md:mt-7 md:pb-7 mt-5 pb-5 border-b border-line w-full" key={product.id}>
                                                    <div className="w-1/2">
                                                        <div className="flex items-center gap-6">
                                                            <div className="bg-img md:w-[100px] w-20 aspect-[3/4]">
                                                                <Image
                                                                    src={product.thumbImage[0]}
                                                                    width={1000}
                                                                    height={1000}
                                                                    alt={product.name}
                                                                    className='w-full h-full object-cover rounded-lg'
                                                                />
                                                            </div>
                                                            <div>
                                                                <div className="text-title">{product.name}</div>
                                                                <div className="list-select mt-3"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="w-1/12 price flex items-center justify-center">
                                                        <div className="text-title text-center">${product.price}.00</div>
                                                    </div>
                                                    <div className="w-1/6 flex items-center justify-center">
                                                        <div className="quantity-block bg-surface md:p-3 p-2 flex items-center justify-between rounded-lg border border-line md:w-[100px] w-20">
                                                            <Icon.Minus
                                                                onClick={() => handleDecreaseQuantity(product.id)}
                                                                className={`text-xl max-md:text-base ${productQuantity[product.id] === 1 ? 'disabled' : ''}`}
                                                            />
                                                            <div className="text-button quantity">{productQuantity[product.id] || 1}</div>
                                                            <Icon.Plus
                                                                onClick={() => handleIncreaseQuantity(product.id)}
                                                                className='text-xl max-md:text-base'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="w-1/6 flex total-price items-center justify-center">
                                                        <div className="text-title text-center">
                                                            <span className='quantity'>{productQuantity[product.id] || 1}</span>
                                                            <span className='px-1'>x</span>
                                                            <span>
                                                                ${product.price}.00
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="w-1/12 flex items-center justify-center">
                                                        <Icon.XCircle className='text-xl max-md:text-base text-red cursor-pointer' />
                                                    </div>
                                                </div>
                                            ))
                                        )}

                                    </div>
                                </div>
                            </div>
                            <div className="input-block discount-code w-full h-12 sm:mt-7 mt-5">
                                <form className='w-full h-full relative' action="post">
                                    <input type="text" placeholder='Add voucher discount' className='w-full h-full bg-surface pl-4 pr-14 rounded-lg border border-line' />
                                    <button className='button-main absolute top-1 bottom-1 right-1 px-5 rounded-lg flex items-center justify-center'>Apply Code
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="xl:w-1/3 xl:pl-12 w-full">
                            <div className="checkout-block bg-surface p-6 rounded-2xl">
                                <div className="heading5">Order Summary</div>
                                <div className="total-block py-5 flex justify-between border-b border-line">
                                    <div className="text-title">Subtotal</div>
                                    <div className="text-title">$<span className="total-product">250</span><span>.00</span></div>
                                </div>
                                <div className="discount-block py-5 flex justify-between border-b border-line">
                                    <div className="text-title">Discounts</div>
                                    <div className="text-title"> <span>-$</span><span className="discount">10</span><span>.00</span></div>
                                </div>
                                <div className="ship-block py-5 flex justify-between border-b border-line">
                                    <div className="text-title">Shipping</div>
                                    <div className="choose-type flex gap-12">
                                        <div className="left">
                                            <div className="type">
                                                <input id="shipping" type="radio" name="ship" />
                                                <label className="pl-1" htmlFor="shipping">Free Shipping:</label>
                                            </div>
                                            <div className="type mt-1">
                                                <input id="local" type="radio" name="ship" />
                                                <label className="text-on-surface-variant1 pl-1" htmlFor="local">Local:</label>
                                            </div>
                                            <div className="type mt-1">
                                                <input id="flat" type="radio" name="ship" />
                                                <label className="text-on-surface-variant1 pl-1" htmlFor="flat">Flat Rate:</label>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="ship">$0.00</div>
                                            <div className="local text-on-surface-variant1 mt-1">$35.00</div>
                                            <div className="flat text-on-surface-variant1 mt-1">$35.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="total-cart-block pt-4 pb-4 flex justify-between">
                                    <div className="heading5">Total</div>
                                    <div className="heading5">$
                                        <span className="total-cart heading5">240</span>
                                        <span className='heading5'>.00</span></div>
                                </div>
                                <div className="block-button flex flex-col items-center gap-y-4 mt-5">
                                    <Link className="checkout-btn button-main text-center w-full" href={"/checkout"}>Process To Checkout</Link>
                                    <Link className="text-button hover-underline" href={"/shop/breadcrumb1"}>Continue shopping</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart
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
import { useCompare } from '@/context/CompareContext'
import { useCart } from '@/context/CartContext'
import { useModalCartContext } from '@/context/ModalCartContext'
import Rate from '@/components/Other/Rate'

const Compare = () => {
    const { compareState } = useCompare();
    const { cartState, addToCart, updateCart } = useCart();
    const { openModalCart } = useModalCartContext();

    const handleAddToCart = (productItem: ProductType) => {
        if (!cartState.cartArray.find(item => item.id === productItem.id)) {
            addToCart({ ...productItem });
            updateCart(productItem.id, productItem.quantityPurchase, '', '')
        } else {
            updateCart(productItem.id, productItem.quantityPurchase, '', '')
        }
        openModalCart()
    };

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Compare Products' subHeading='Compare Products' />
            </div>
            <div className="compare-block md:py-20 py-10">
                <div className="container">
                    <div className="list-product flex">
                        <div className="left lg:w-[240px] w-[170px] flex-shrink-0"></div>
                        <div className="right flex w-full border border-line rounded-t-2xl border-b-0">
                            {compareState.compareArray.map(item => (
                                <div className="product-item px-10 pt-6 pb-5 border-r border-line" key={item.id}>
                                    <div className="bg-img w-full aspect-[3/4] rounded-lg overflow-hidden flex-shrink-0">
                                        <Image
                                            src={item.images[0]}
                                            width={1000}
                                            height={1500}
                                            alt={item.images[0]}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                    <div className="text-title text-center mt-4">{item.name}</div>
                                    <div className="caption2 font-semibold text-secondary2 uppercase text-center mt-1">{item.brand}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="compare-table flex">
                        <div className="left lg:w-[240px] w-[170px] flex-shrink-0 border border-line border-r-0 rounded-l-2xl">
                            <div className="item text-button flex items-center h-[60px] px-8 w-full border-b border-line">Rating</div>
                            <div className="item text-button flex items-center h-[60px] px-8 w-full border-b border-line">Price</div>
                            <div className="item text-button flex items-center h-[60px] px-8 w-full border-b border-line">Type</div>
                            <div className="item text-button flex items-center h-[60px] px-8 w-full border-b border-line">Brand</div>
                            <div className="item text-button flex items-center h-[60px] px-8 w-full border-b border-line">Size</div>
                            <div className="item text-button flex items-center h-[60px] px-8 w-full border-b border-line">Colors</div>
                            <div className="item text-button flex items-center h-[60px] px-8 w-full border-b border-line">Metarial</div>
                            <div className="item text-button flex items-center h-[60px] px-8 w-full border-b border-line">Add To Cart</div>
                        </div>
                        <table className="right border-collapse w-full border-t border-r border-line">
                            <tr className='grid grid-cols-3 items-center'>
                                {compareState.compareArray.map((item, index) => (
                                    <td className="border border-line h-[60px] border-t-0 border-r-0" key={index}>
                                        <div className='h-full flex items-center justify-center'>
                                            <Rate currentRate={item.rate} size={12} />
                                            <p className='pl-1'>(1.234)</p>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                            <tr className='grid grid-cols-3 items-center'>
                                {compareState.compareArray.map((item, index) => (
                                    <td className="border border-line h-[60px] border-t-0 border-r-0" key={index}>
                                        <div className='h-full flex items-center justify-center'>
                                            ${item.price}.00
                                        </div>
                                    </td>
                                ))}
                            </tr>
                            <tr className='grid grid-cols-3 items-center'>
                                {compareState.compareArray.map((item, index) => (
                                    <td className="border border-line h-[60px] border-t-0 border-r-0" key={index}>
                                        <div className='h-full flex items-center justify-center capitalize'>
                                            {item.type}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                            <tr className='grid grid-cols-3 items-center'>
                                {compareState.compareArray.map((item, index) => (
                                    <td className="border border-line h-[60px] border-t-0 border-r-0" key={index}>
                                        <div className='h-full flex items-center justify-center capitalize'>
                                            {item.brand}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                            <tr className='grid grid-cols-3 items-center'>
                                {compareState.compareArray.map((item, index) => (
                                    <td className="border border-line h-[60px] border-t-0 border-r-0 size" key={index}>
                                        <div className='h-full flex items-center justify-center capitalize gap-1'>
                                            {item.sizes.map((size, i) => (
                                                <p key={i}>{size}
                                                    <span>,</span>
                                                </p>
                                            ))}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                            <tr className='grid grid-cols-3 items-center'>
                                {compareState.compareArray.map((item, index) => (
                                    <td className="border border-line h-[60px] border-t-0 border-r-0 size" key={index}>
                                        <div className='h-full flex items-center justify-center capitalize gap-2'>
                                            {item.variation.map((colorItem, i) => (
                                                <span key={i} className={`w-6 h-6 rounded-full bg-${colorItem.color}`}></span>
                                            ))}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                            <tr className='grid grid-cols-3 items-center'>
                                {compareState.compareArray.length === 2 ? (
                                    <>
                                        <td className="border border-line h-[60px] border-t-0 border-r-0">
                                            <div className='h-full flex items-center justify-center capitalize'>
                                                <span>Cotton</span>
                                            </div>
                                        </td>
                                        <td className="border border-line h-[60px] border-t-0 border-r-0">
                                            <div className='h-full flex items-center justify-center capitalize'>
                                                <span>Silk</span>
                                            </div>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td className="border border-line h-[60px] border-t-0 border-r-0">
                                            <div className='h-full flex items-center justify-center capitalize'>
                                                <span>Cotton</span>
                                            </div>
                                        </td>
                                        <td className="border border-line h-[60px] border-t-0 border-r-0">
                                            <div className='h-full flex items-center justify-center capitalize'>
                                                    <span>Velvet</span>
                                            </div>
                                        </td>
                                        <td className="border border-line h-[60px] border-t-0 border-r-0">
                                            <div className='h-full flex items-center justify-center capitalize'>
                                                <span>Silk</span>
                                            </div>
                                        </td>
                                    </>
                                )}
                            </tr>
                            <tr className='grid grid-cols-3 items-center'>
                                {compareState.compareArray.map((item, index) => (
                                    <td className="border border-line h-[60px] border-t-0 border-r-0" key={index}>
                                        <div className='h-full flex items-center justify-center'>
                                            <div className='button-main py-1.5 px-5' onClick={() => handleAddToCart(item)}>Add To Cart</div>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Compare
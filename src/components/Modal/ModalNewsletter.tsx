'use client'

import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import productData from '@/data/Product.json'
import { useModalQuickviewContext } from '@/context/ModalQuickviewContext';
import Image from 'next/image';

const ModalNewsletter = () => {
    const [open, setOpen] = useState<boolean>(false)
    const router = useRouter()
    const { openQuickview } = useModalQuickviewContext()

    const handleDetailProduct = (productId: string) => {
        // redirect to shop with category selected
        router.push(`/product/default?id=${productId}`);
    };

    useEffect(() => {
        setTimeout(() => {
            setOpen(true)
        }, 3000)
    }, [])

    return (
        <div className="modal-newsletter" onClick={() => setOpen(false)}>
            <div className="container h-full flex items-center justify-center w-full">
                <div
                    className={`modal-newsletter-main ${open ? 'open' : ''}`}
                    onClick={(e) => { e.stopPropagation() }}
                >
                    <div className="main-content flex rounded-[20px] overflow-hidden w-full">
                        <div
                            className="left lg:w-1/2 sm:w-2/5 max-sm:hidden bg-green flex flex-col items-center justify-center gap-5 py-14">
                            <div className="text-xs font-semibold uppercase text-center">Special Offer</div>
                            <div
                                className="lg:text-[70px] text-4xl lg:leading-[78px] leading-[42px] font-bold uppercase text-center">
                                Black<br />Fridays</div>
                            <div className="text-button-uppercase text-center">New customers save <span
                                className="text-red">30%</span>
                                with the code</div>
                            <div className="text-button-uppercase text-red bg-white py-2 px-4 rounded-lg">GET20off</div>
                            <div className="button-main w-fit bg-black text-white hover:bg-white uppercase">Copy coupon code
                            </div>
                        </div>
                        <div className="right lg:w-1/2 sm:w-3/5 w-full bg-white sm:pt-10 sm:pl-10 max-sm:p-6 relative">
                            <div
                                className="close-newsletter-btn w-10 h-10 flex items-center justify-center border border-line rounded-full absolute right-5 top-5 cursor-pointer" onClick={() => setOpen(false)}>
                                <Icon.X weight='bold' className='text-xl' />
                            </div>
                            <div className="heading5 pb-5">You May Also Like</div>
                            <div className="list flex flex-col gap-5 overflow-x-auto sm:pr-6">
                                {productData.slice(11, 16).map((item, index) => (
                                    <>
                                        <div
                                            className='product-item item pb-5 flex items-center justify-between gap-3 border-b border-line'
                                            key={index}
                                        >
                                            <div
                                                className="infor flex items-center gap-5 cursor-pointer"
                                                onClick={() => handleDetailProduct(item.id)}
                                            >
                                                <div className="bg-img flex-shrink-0">
                                                    <Image width={5000} height={5000} src={item.thumbImage[0]} alt={item.name}
                                                        className='w-[100px] aspect-square flex-shrink-0 rounded-lg' />
                                                </div>
                                                <div className=''>
                                                    <div className="name text-button">{item.name}</div>
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <div className="product-price text-title">${item.price}.00</div>
                                                        <div className="product-origin-price text-title text-secondary2">
                                                            <del>${item.originPrice}.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                className="quick-view-btn button-main sm:py-3 py-2 sm:px-5 px-4 bg-black hover:bg-green text-white rounded-full whitespace-nowrap"
                                                onClick={() => openQuickview(item)}
                                            >
                                                QUICK VIEW
                                            </button>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalNewsletter

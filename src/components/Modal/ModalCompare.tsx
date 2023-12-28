'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useModalCompareContext } from '@/context/ModalCompareContext'
import { useCompare } from '@/context/CompareContext'

const ModalCompare = () => {
    const { isModalOpen, closeModalCompare } = useModalCompareContext();
    const { compareState, removeFromCompare } = useCompare()

    return (
        <>
            <div className={`modal-compare-block`}>
                <div
                    className={`modal-compare-main py-6 ${isModalOpen ? 'open' : ''}`}
                    onClick={(e) => { e.stopPropagation() }}
                >
                    <div
                        className="close-btn absolute right-6 top-6 lg:w-10 w-6 lg:h-10 h-6 rounded-full bg-surface flex items-center justify-center duration-300 cursor-pointer hover:bg-black hover:text-white"
                        onClick={closeModalCompare}
                    >
                        <Icon.X size={14} />
                    </div>
                    <div className="container h-full flex items-center w-full">
                        <div className="content-main flex items-center justify-between gap-10 w-full">
                            <div className="heading5 flex-shrink-0">Compare<br />Products</div>
                            <div className="list-product flex items-center w-full gap-4">
                                {compareState.compareArray.map((product) => (
                                    <div key={product.id} className='item p-3 border border-line rounded-xl relative'>
                                        <div className="infor flex items-center gap-4">
                                            <div className="bg-img w-[100px] h-[100px] flex-shrink-0 rounded-lg overflow-hidden">
                                                <Image
                                                    src={product.images[0]}
                                                    width={500}
                                                    height={500}
                                                    alt={product.name}
                                                    className='w-full h-full'
                                                />
                                            </div>
                                            <div className=''>
                                                <div className="name text-title">{product.name}</div>
                                                <div className="product-price text-title mt-2">${product.price}.00</div>
                                            </div>
                                        </div>
                                        <div className="close-btn absolute -right-4 -top-4 w-8 h-8 rounded-full bg-red text-white flex items-center justify-center duration-300 cursor-pointer hover:bg-black" onClick={() => removeFromCompare(product.id)}>
                                            <Icon.X size={14} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="block-button flex flex-col gap-4 flex-shrink-0">
                                <Link href={'/compare'} onClick={closeModalCompare} className='button-main whitespace-nowrap'>Compare Products</Link>
                                <div onClick={closeModalCompare} className="button-main whitespace-nowrap border border-black bg-white text-black">Clear All Products</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalCompare
'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { ProductType } from '@/type/ProductType'
import Product from '../Product/Product';

interface Props {
    data: Array<ProductType>;
}

const ShopBreadCrumbImg: React.FC<Props> = ({ data }) => {
    const [type, setType] = useState('t-shirt')

    const handleType = (type: string) => {
        setType(type)
    }

    // Cập nhật danh sách sản phẩm dựa trên loại đã chọn
    const filteredProducts = data.filter((product) => product.type === type);

    return (
        <>
            <div className="breadcrumb-block style-img">
                <div className="breadcrumb-main bg-linear overflow-hidden">
                    <div className="container lg:pt-[134px] pt-24 pb-10 relative">
                        <div className="main-content w-full h-full flex flex-col items-center justify-center relative z-[1]">
                            <div className="text-content">
                                <div className="heading2 text-center">{type}</div>
                                <div className="link flex items-center gap-1 caption1 mt-3">
                                    <Link href={'/'}>Homepage</Link>
                                    <Icon.CaretRight size={14} className='text-secondary2' />
                                    <div className='text-secondary2'>{type}</div>
                                </div>
                            </div>
                            <div className="list-tab flex items-center justify-center gap-8 lg:mt-[70px] mt-12 overflow-hidden">
                                <div
                                    className={`tab-item text-button-uppercase cursor-pointer has-line-before line-2px ${type === 't-shirt' ? 'active' : ''}`}
                                    onClick={() => handleType('t-shirt')}
                                >
                                    T-shirt
                                </div>
                                <div
                                    className={`tab-item text-button-uppercase cursor-pointer has-line-before line-2px ${type === 'dress' ? 'active' : ''}`}
                                    onClick={() => handleType('dress')}
                                >
                                    Dress
                                </div>
                                <div
                                    className={`tab-item text-button-uppercase cursor-pointer has-line-before line-2px ${type === 'top' ? 'active' : ''}`}
                                    onClick={() => handleType('top')}
                                >
                                    Top
                                </div>
                                <div
                                    className={`tab-item text-button-uppercase cursor-pointer has-line-before line-2px ${type === 'swimwear' ? 'active' : ''}`}
                                    onClick={() => handleType('swimwear')}
                                >
                                    Swimwear
                                </div>
                                <div
                                    className={`tab-item text-button-uppercase cursor-pointer has-line-before line-2px ${type === 'shirt' ? 'active' : ''}`}
                                    onClick={() => handleType('shirt')}
                                >
                                    Shirt
                                </div>
                            </div>
                        </div>
                        <div className="bg-img absolute top-2 -right-6 max-lg:bottom-0 max-lg:top-auto w-1/3 max-lg:w-[26%] z-[0] max-sm:w-[45%]">
                            <Image
                                src={'/images/slider/bg1-1.png'}
                                width={1000}
                                height={1000}
                                alt=''
                                className=''
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="shop-product breadcrumg-img md:py-20 py-10">
                <div className="container">
                    <div className="filter-heading flex items-center justify-between gap-5 flex-wrap">
                        <div className="left flex items-center flex-wrap gap-5">
                            <div className="filter-sidebar-btn flex items-center gap-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 21V14" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 10V3" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 21V12" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 8V3" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20 21V16" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20 12V3" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1 14H7" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 8H15" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17 16H23" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Filters</span>
                            </div>
                            <div className="layout-col flex items-center gap-2">
                                <div className="item 3-col p-2 border border-line rounded flex items-center justify-center cursor-pointer">
                                    <div className='flex items-center gap-0.5'>
                                        <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
                                        <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
                                        <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
                                    </div>
                                </div>
                                <div className="item 4-col p-2 border border-line rounded flex items-center justify-center cursor-pointer">
                                    <div className='flex items-center gap-0.5'>
                                        <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
                                        <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
                                        <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
                                        <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
                                    </div>
                                </div>
                                <div className="item 5-col p-2 border border-line rounded flex items-center justify-center cursor-pointer">
                                    <div className='flex items-center gap-0.5'>
                                        <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
                                        <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
                                        <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
                                        <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
                                        <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
                                    </div>
                                </div>
                            </div>
                            <div className="check-sale flex items-center gap-2">
                                <input type="checkbox" name="filterSale" id="filter-sale" className='border-line' />
                                <label htmlFor="filter-sale" className='cation1'>Show only products on sale</label>
                            </div>
                        </div>
                        <div className="right flex items-center gap-3">
                            <label htmlFor='select-filter' className="caption1">Sort by</label>
                            <div className="select-block relative">
                                <select className='caption1 py-2 pl-3 md:pr-20 pr-10 rounded-lg border border-line' name="select-filter" id="select-filter">
                                    <option value="Best Selling">Best Selling</option>
                                    <option value="Best Reviews">Best Reviews</option>
                                    <option value="Best Discount">Best Discount</option>
                                </select>
                                <Icon.CaretDown size={12} className='absolute top-1/2 -translate-y-1/2 md:right-4 right-2' />
                            </div>
                        </div>
                    </div>

                    <div className="list-product hide-product-sold grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-[30px] gap-[20px] mt-10">
                        {filteredProducts.slice(0, data.length).map((prd, index) => (
                            <Product data={prd} type='grid' key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopBreadCrumbImg
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { ProductType } from '@/type/ProductType'
import Product from '../Product/Product';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'
import HandlePagination from '../Other/HandlePagination';

interface Props {
    data: Array<ProductType>;
    productPerPage: number
}

const ShopFilterOptions: React.FC<Props> = ({ data, productPerPage }) => {
    // const [openOption, setOpenOption] = useState<string | null>(null)
    const [type, setType] = useState<string | undefined>()
    const [size, setSize] = useState<string | undefined>()
    const [color, setColor] = useState<string | undefined>()
    const [brand, setBrand] = useState<string | undefined>()
    const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 100 });
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = productPerPage;
    const offset = currentPage * productsPerPage;

    // const handleOpenOption = (select: string) => {
    //     setOpenOption(openOption === select ? null : select)
    // }

    const handleType = (type: string) => {
        setType((prevType) => (prevType === type ? undefined : type))
    }

    const handleSize = (size: string) => {
        setSize((prevSize) => (prevSize === size ? undefined : size))
    }

    const handlePriceChange = (values: number | number[]) => {
        if (Array.isArray(values)) {
            setPriceRange({ min: values[0], max: values[1] });
        }
    };

    const handleColor = (color: string) => {
        setColor((prevColor) => (prevColor === color ? undefined : color))
    }

    const handleBrand = (brand: string) => {
        setBrand((prevBrand) => (prevBrand === brand ? undefined : brand));
    }


    // Filter product data by dataType
    let filteredData = data.filter(product => {
        let isTypeMatched = true;
        if (type) {
            isTypeMatched = product.type === type;
        }

        let isSizeMatched = true;
        if (size) {
            isSizeMatched = product.sizes.includes(size)
        }

        let isPriceRangeMatched = true;
        if (priceRange.min !== 0 || priceRange.max !== 100) {
            isPriceRangeMatched = product.price >= priceRange.min && product.price <= priceRange.max;
        }

        let isColorMatched = true;
        if (color) {
            isColorMatched = product.variation.some(item => item.color === color)
        }

        let isBrandMatched = true;
        if (brand) {
            isBrandMatched = product.brand === brand;
        }

        return isTypeMatched && isSizeMatched && isColorMatched && isBrandMatched && isPriceRangeMatched && product.category === 'fashion'
    })

    const totalProducts = filteredData.length
    const selectedType = type
    const selectedSize = size
    const selectedColor = color
    const selectedBrand = brand


    if (filteredData.length === 0) {
        filteredData = [{
            id: 'no-data',
            category: 'no-data',
            type: 'no-data',
            name: 'no-data',
            gender: 'no-data',
            new: false,
            sale: false,
            rate: 0,
            price: 0,
            originPrice: 0,
            brand: 'no-data',
            sold: 0,
            quantity: 0,
            sizes: [],
            variation: [],
            thumbImage: [],
            images: [],
            description: 'no-data',
            action: 'no-data',
            slug: 'no-data'
        }];
    }


    // Find page number base on filteredData
    const pageCount = Math.ceil(filteredData.length / productsPerPage);

    // If page number 0, set current page = 0
    if (pageCount === 0) {
        setCurrentPage(0);
    }

    // Get product data for current page
    let currentProducts: ProductType[];

    if (filteredData.length > 0) {
        currentProducts = filteredData.slice(offset, offset + productsPerPage);
    } else {
        currentProducts = []
    }

    const handlePageChange = (selected: number) => {
        setCurrentPage(selected);
    };

    return (
        <>
            <div className="breadcrumb-block style-img">
                <div className="breadcrumb-main bg-linear overflow-hidden">
                    <div className="container lg:pt-[134px] pt-24 pb-10 relative">
                        <div className="main-content w-full h-full flex flex-col items-center justify-center relative z-[1]">
                            <div className="text-content">
                                <div className="heading2 text-center">{type === undefined ? 'Shop' : type}</div>
                                <div className="link flex items-center justify-center gap-1 caption1 mt-3">
                                    <Link href={'/'}>Homepage</Link>
                                    <Icon.CaretRight size={14} className='text-secondary2' />
                                    <div className='text-secondary2 capitalize'>{type === undefined ? 'Shop' : type}</div>
                                </div>
                            </div>
                            <div className="list-tab flex flex-wrap items-center justify-center gap-y-5 gap-8 lg:mt-[70px] mt-12 overflow-hidden">
                                {['t-shirt', 'dress', 'top', 'swimwear', 'shirt'].map((item, index) => (
                                    <div
                                        key={index}
                                        className={`tab-item text-button-uppercase cursor-pointer has-line-before line-2px ${type === item ? 'active' : ''}`}
                                        onClick={() => handleType(item)}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shop-product breadcrumb1 lg:py-20 md:py-14 py-10">
                <div className="container">
                    <div className="list-product-block relative">
                        <div className="filter-heading flex items-center justify-between gap-5 flex-wrap">
                            <div className="left flex items-center flex-wrap gap-5">
                                <div className="choose-layout flex items-center gap-2">
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
                                <div className="check-sale flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" name="filterSale" id="filter-sale" className='border-line' />
                                    <label htmlFor="filter-sale" className='cation1 cursor-pointer'>Show only products on sale</label>
                                </div>
                            </div>
                            <div className="right flex items-center flex-wrap gap-y-3 gap-5">
                                <div className="select-block filter-type relative">
                                    <select
                                        className='caption1 py-2 pl-3 md:pr-12 pr-8 rounded-lg border border-line capitalize' 
                                        name="select-type" 
                                        id="select-type"
                                        onChange={(e) => handleType(e.target.value)}
                                        value={type === undefined ? 'Type' : type}
                                    >
                                        <option value="Type" disabled>Type</option>
                                        {['t-shirt', 'dress', 'top', 'swimwear', 'shirt', 'underwear', 'accessories'].map((item, index) => (
                                            <option
                                                key={index}
                                                className={`item cursor-pointer ${type === item ? 'active' : ''}`}
                                            >
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                    <Icon.CaretDown size={12} className='absolute top-1/2 -translate-y-1/2 md:right-4 right-2' />
                                </div>
                                <div className="select-block filter-size relative">
                                    <select
                                        className='caption1 py-2 pl-3 md:pr-12 pr-8 rounded-lg border border-line capitalize'
                                        name="select-size"
                                        id="select-size"
                                        onChange={(e) => handleSize(e.target.value)}
                                        value={size === undefined ? 'Size' : size}
                                    >
                                        <option value="Size" disabled>Size</option>
                                        {['XS', 'S', 'M', 'L', 'XL', '2XL', 'freesize'].map((item, index) => (
                                            <option
                                                key={index}
                                                className={`item cursor-pointer ${size === item ? 'active' : ''}`}
                                            >
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                    <Icon.CaretDown size={12} className='absolute top-1/2 -translate-y-1/2 md:right-4 right-2' />
                                </div>
                                <div className="select-block filter-color relative">
                                    <select
                                        className='caption1 py-2 pl-3 md:pr-12 pr-8 rounded-lg border border-line capitalize'
                                        name="select-color"
                                        id="select-color"
                                        onChange={(e) => handleColor(e.target.value)}
                                        value={color === undefined ? 'Color' : color}
                                    >
                                        <option value="Color" disabled>Color</option>
                                        {['red', 'green', 'yellow', 'purple', 'black', 'pink', 'white'].map((item, index) => (
                                            <option
                                                key={index}
                                                className={`item cursor-pointer ${color === item ? 'active' : ''}`}
                                            >
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                    <Icon.CaretDown size={12} className='absolute top-1/2 -translate-y-1/2 md:right-4 right-2' />
                                </div>
                                <div className="select-block filter-brand relative">
                                    <select
                                        className='caption1 py-2 pl-3 md:pr-12 pr-8 rounded-lg border border-line capitalize'
                                        name="select-brand"
                                        id="select-brand"
                                        onChange={(e) => handleBrand(e.target.value)}
                                        value={brand === undefined ? 'Brand' : brand}
                                    >
                                        <option value="Brand" disabled>Brand</option>
                                        {['adidas', 'hermes', 'zara', 'nike', 'gucci'].map((item, index) => (
                                            <option
                                                key={index}
                                                className={`item cursor-pointer ${brand === item ? 'active' : ''}`}
                                            >
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                    <Icon.CaretDown size={12} className='absolute top-1/2 -translate-y-1/2 md:right-4 right-2' />
                                </div>
                                <div className="select-block relative">
                                    <select className='caption1 py-2 pl-3 md:pr-12 pr-8 rounded-lg border border-line' name="select-filter" id="select-filter">
                                        <option value="Sort" disabled>Sort</option>
                                        <option value="Best Selling">Best Selling</option>
                                        <option value="Best Reviews">Best Reviews</option>
                                        <option value="Best Discount">Best Discount</option>
                                    </select>
                                    <Icon.CaretDown size={12} className='absolute top-1/2 -translate-y-1/2 md:right-4 right-2' />
                                </div>
                            </div>
                        </div>

                        <div className="list-filtered flex items-center gap-3 mt-4">
                            <div className="total-product">
                                {totalProducts}
                                <span className='text-secondary pl-1'>Products Found</span>
                            </div>
                            {
                                (selectedType || selectedSize || selectedColor || selectedBrand) && (
                                    <>
                                        <div className="list flex items-center gap-3">
                                            <div className='w-px h-4 bg-line'></div>
                                            {selectedType && (
                                                <div className="item flex items-center px-2 py-1 gap-1 bg-linear rounded-full capitalize" onClick={() => { setType(undefined) }}>
                                                    <Icon.X className='cursor-pointer' />
                                                    <span>{selectedType}</span>
                                                </div>
                                            )}
                                            {selectedSize && (
                                                <div className="item flex items-center px-2 py-1 gap-1 bg-linear rounded-full capitalize" onClick={() => { setSize(undefined) }}>
                                                    <Icon.X className='cursor-pointer' />
                                                    <span>{selectedSize}</span>
                                                </div>
                                            )}
                                            {selectedColor && (
                                                <div className="item flex items-center px-2 py-1 gap-1 bg-linear rounded-full capitalize" onClick={() => { setColor(undefined) }}>
                                                    <Icon.X className='cursor-pointer' />
                                                    <span>{selectedColor}</span>
                                                </div>
                                            )}
                                            {selectedBrand && (
                                                <div className="item flex items-center px-2 py-1 gap-1 bg-linear rounded-full capitalize" onClick={() => { setBrand(undefined) }}>
                                                    <Icon.X className='cursor-pointer' />
                                                    <span>{selectedBrand}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div
                                            className="clear-btn flex items-center px-2 py-1 gap-1 rounded-full border border-red cursor-pointer"
                                            onClick={() => {
                                                setBrand(undefined);
                                                setType(undefined);
                                                setSize(undefined);
                                                setColor(undefined);
                                            }}
                                        >
                                            <Icon.X color='rgb(219, 68, 68)' className='cursor-pointer' />
                                            <span className='text-button-uppercase text-red'>Clear All</span>
                                        </div>
                                    </>
                                )
                            }
                        </div>

                        <div className="list-product hide-product-sold grid lg:grid-cols-3 grid-cols-2 sm:gap-[30px] gap-[20px] mt-7">
                            {currentProducts.map((item) => (
                                item.id === 'no-data' ? (
                                    <div key={item.id} className="no-data-product">No products match the selected criteria.</div>
                                ) : (
                                    <Product key={item.id} data={item} type='grid' />
                                )
                            ))}
                        </div>

                        {pageCount > 1 && (
                            <div className="list-pagination flex items-center justify-center md:mt-10 mt-7">
                                <HandlePagination pageCount={pageCount} onPageChange={handlePageChange} />
                            </div>
                        )}
                    </div>
                </div>
            </div >
        </>
    )
}

export default ShopFilterOptions
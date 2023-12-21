'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image';
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
    dataType: string | null
}

const ShopBreadCrumbImg: React.FC<Props> = ({ data, productPerPage, dataType }) => {
    const [layoutCol, setLayoutCol] = useState<number | null>(4)
    const [sortOption, setSortOption] = useState('');
    const [openSidebar, setOpenSidebar] = useState(false)
    const [type, setType] = useState<string | null>(dataType)
    const [size, setSize] = useState<string | null>()
    const [color, setColor] = useState<string | null>()
    const [brand, setBrand] = useState<string | null>()
    const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 100 });
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = productPerPage;
    const offset = currentPage * productsPerPage;

    const handleLayoutCol = (col: number) => {
        setLayoutCol(col)
    }

    const handleSortChange = (option: string) => {
        setSortOption(option);
    };

    const handleOpenSidebar = () => {
        setOpenSidebar(toggleOpen => !toggleOpen)
    }

    const handleType = (type: string) => {
        setType((prevType) => (prevType === type ? null : type))
    }

    const handleSize = (size: string) => {
        setSize((prevSize) => (prevSize === size ? null : size))
    }

    const handlePriceChange = (values: number | number[]) => {
        if (Array.isArray(values)) {
            setPriceRange({ min: values[0], max: values[1] });
        }
    };

    const handleColor = (color: string) => {
        setColor((prevColor) => (prevColor === color ? null : color))
    }

    const handleBrand = (brand: string) => {
        setBrand((prevBrand) => (prevBrand === brand ? null : brand));
    }


    // Filter product data by dataType
    let filteredData = data.filter(product => {
        let isDataTypeMatched = true;
        if (dataType) {
            isDataTypeMatched = product.type === dataType
        }

        let isTypeMatched = true;
        if (type) {
            dataType = type
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

        return isDataTypeMatched && isTypeMatched && isSizeMatched && isColorMatched && isBrandMatched && isPriceRangeMatched && product.category === 'fashion'
    })

    // Tạo một bản sao của mảng đã lọc để sắp xếp
    let sortedData = [...filteredData];

    if (sortOption === 'soldQuantityHighToLow') {
        filteredData = sortedData.sort((a, b) => b.sold - a.sold)
    }

    if (sortOption === 'discountHighToLow') {
        filteredData = sortedData
            .sort((a, b) => (
                (Math.floor(100 - ((b.price / b.originPrice) * 100))) - (Math.floor(100 - ((a.price / a.originPrice) * 100)))
            ))

    }

    if (sortOption === 'priceHighToLow') {
        filteredData = sortedData.sort((a, b) => b.price - a.price)
    }

    if (sortOption === 'priceLowToHigh') {
        filteredData = sortedData.sort((a, b) => a.price - b.price)
    }

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
                                <div className="heading2 text-center">{dataType === null ? 'Shop' : dataType}</div>
                                <div className="link flex items-center justify-center gap-1 caption1 mt-3">
                                    <Link href={'/'}>Homepage</Link>
                                    <Icon.CaretRight size={14} className='text-secondary2' />
                                    <div className='text-secondary2 capitalize'>{dataType === null ? 'Shop' : dataType}</div>
                                </div>
                            </div>
                            <div className="list-tab flex flex-wrap items-center justify-center gap-y-5 gap-8 lg:mt-[70px] mt-12 overflow-hidden">
                                {['t-shirt', 'dress', 'top', 'swimwear', 'shirt'].map((item, index) => (
                                    <div
                                        key={index}
                                        className={`tab-item text-button-uppercase cursor-pointer has-line-before line-2px ${dataType === item ? 'active' : ''}`}
                                        onClick={() => handleType(item)}
                                    >
                                        {item}
                                    </div>
                                ))}
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

            <div className="shop-product breadcrumb1 lg:py-20 md:py-14 py-10">
                <div className="container">
                    <div className="list-product-block relative">
                        <div className="filter-heading flex items-center justify-between gap-5 flex-wrap">
                            <div className="left flex has-line items-center flex-wrap gap-5">
                                <div
                                    className="filter-sidebar-btn flex items-center gap-2 cursor-pointer"
                                    onClick={handleOpenSidebar}
                                >
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
                                <div className="choose-layout flex items-center gap-2">
                                    <div
                                        className={`item 3-col p-2 border border-line rounded flex items-center justify-center cursor-pointer ${layoutCol === 3 ? 'active' : ''}`}
                                        onClick={() => handleLayoutCol(3)}
                                    >
                                        <div className='flex items-center gap-0.5'>
                                            <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
                                            <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
                                            <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
                                        </div>
                                    </div>
                                    <div
                                        className={`item 4-col p-2 border border-line rounded flex items-center justify-center cursor-pointer ${layoutCol === 4 ? 'active' : ''}`}
                                        onClick={() => handleLayoutCol(4)}
                                    >
                                        <div className='flex items-center gap-0.5'>
                                            <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
                                            <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
                                            <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
                                            <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
                                        </div>
                                    </div>
                                    <div
                                        className={`item 5-col p-2 border border-line rounded flex items-center justify-center cursor-pointer ${layoutCol === 5 ? 'active' : ''}`}
                                        onClick={() => handleLayoutCol(5)}
                                    >
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
                                    <label htmlFor="filter-sale" className='cation1'>Show only products on sale</label>
                                </div>
                            </div>
                            <div className="right flex items-center gap-3">
                                <label htmlFor='select-filter' className="caption1 capitalize">Sort by</label>
                                <div className="select-block relative">
                                    <select
                                        id="select-filter"
                                        name="select-filter"
                                        className='caption1 py-2 pl-3 md:pr-20 pr-10 rounded-lg border border-line'
                                        onChange={(e) => { handleSortChange(e.target.value) }}
                                        defaultValue={'Sorting'}
                                    >
                                        <option value="Sorting" disabled>Sorting</option>
                                        <option value="soldQuantityHighToLow">Best Selling</option>
                                        <option value="discountHighToLow">Best Discount</option>
                                        <option value="priceHighToLow">Price High To Low</option>
                                        <option value="priceLowToHigh">Price Low To High</option>
                                    </select>
                                    <Icon.CaretDown size={12} className='absolute top-1/2 -translate-y-1/2 md:right-4 right-2' />
                                </div>
                            </div>
                        </div>

                        <div
                            className={`sidebar style-dropdown bg-white grid grid-cols-4 gap-[30px] ${openSidebar ? 'open' : ''}`}
                        >
                            <div className="filter-type">
                                <div className="heading6">Products Type</div>
                                <div className="list-type mt-4">
                                    {['t-shirt', 'dress', 'top', 'swimwear', 'shirt', 'underwear', 'sets', 'accessories'].map((item, index) => (
                                        <div
                                            key={index}
                                            className={`item flex items-center justify-between cursor-pointer ${dataType === item ? 'active' : ''}`}
                                            onClick={() => handleType(item)}
                                        >
                                            <div className='text-secondary has-line-before hover:text-black capitalize'>{item}</div>
                                            <div className='text-secondary2'>
                                                ({data.filter(dataItem => dataItem.type === item && dataItem.category === 'fashion').length})
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className="filter-size">
                                    <div className="heading6">Size</div>
                                    <div className="list-size flex items-center flex-wrap gap-3 gap-y-4 mt-4">
                                        {
                                            ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'].map((item, index) => (
                                                <div
                                                    key={index}
                                                    className={`size-item text-button w-[44px] h-[44px] flex items-center justify-center rounded-full border border-line ${size === item ? 'active' : ''}`}
                                                    onClick={() => handleSize(item)}
                                                >
                                                    {item}
                                                </div>
                                            ))
                                        }
                                        <div
                                            className={`size-item text-button px-4 py-2 flex items-center justify-center rounded-full border border-line ${size === 'freesize' ? 'active' : ''}`}
                                            onClick={() => handleSize('freesize')}
                                        >
                                            Freesize
                                        </div>
                                    </div>
                                </div>
                                <div className="filter-price mt-8">
                                    <div className="heading6">Price Range</div>
                                    <Slider
                                        range
                                        defaultValue={[0, 100]}
                                        min={0}
                                        max={100}
                                        onChange={handlePriceChange}
                                        className='mt-5'
                                    />
                                    <div className="price-block flex items-center justify-between flex-wrap mt-4">
                                        <div className="min flex items-center gap-1">
                                            <div>Min price:</div>
                                            <div className='price-min'>$
                                                <span>{priceRange.min}</span>
                                            </div>
                                        </div>
                                        <div className="min flex items-center gap-1">
                                            <div>Max price:</div>
                                            <div className='price-max'>$
                                                <span>{priceRange.max}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-color">
                                <div className="heading6">colors</div>
                                <div className="list-color flex items-center flex-wrap gap-3 gap-y-4 mt-4">
                                    <div
                                        className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ${color === 'pink' ? 'active' : ''}`}
                                        onClick={() => handleColor('pink')}
                                    >
                                        <div className="color bg-[#F4C5BF] w-5 h-5 rounded-full"></div>
                                        <div className="caption1 capitalize">pink</div>
                                    </div>
                                    <div
                                        className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ${color === 'red' ? 'active' : ''}`}
                                        onClick={() => handleColor('red')}
                                    >
                                        <div className="color bg-red w-5 h-5 rounded-full"></div>
                                        <div className="caption1 capitalize">red</div>
                                    </div>
                                    <div
                                        className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ${color === 'green' ? 'active' : ''}`}
                                        onClick={() => handleColor('green')}
                                    >
                                        <div className="color bg-green w-5 h-5 rounded-full"></div>
                                        <div className="caption1 capitalize">green</div>
                                    </div>
                                    <div
                                        className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ${color === 'yellow' ? 'active' : ''}`}
                                        onClick={() => handleColor('yellow')}
                                    >
                                        <div className="color bg-yellow w-5 h-5 rounded-full"></div>
                                        <div className="caption1 capitalize">yellow</div>
                                    </div>
                                    <div
                                        className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ${color === 'purple' ? 'active' : ''}`}
                                        onClick={() => handleColor('purple')}
                                    >
                                        <div className="color bg-purple w-5 h-5 rounded-full"></div>
                                        <div className="caption1 capitalize">purple</div>
                                    </div>
                                    <div
                                        className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ${color === 'black' ? 'active' : ''}`}
                                        onClick={() => handleColor('black')}
                                    >
                                        <div className="color bg-black w-5 h-5 rounded-full"></div>
                                        <div className="caption1 capitalize">black</div>
                                    </div>
                                    <div
                                        className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ${color === 'white' ? 'active' : ''}`}
                                        onClick={() => handleColor('white')}
                                    >
                                        <div className="color bg-[#F6EFDD] w-5 h-5 rounded-full"></div>
                                        <div className="caption1 capitalize">white</div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-brand">
                                <div className="heading6">Brands</div>
                                <div className="list-brand mt-4">
                                    {['adidas', 'hermes', 'zara', 'nike', 'gucci'].map((item, index) => (
                                        <div key={index} className="brand-item flex items-center justify-between">
                                            <div className="left flex items-center cursor-pointer">
                                                <div className="block-input">
                                                    <input
                                                        type="checkbox"
                                                        name={item}
                                                        id={item}
                                                        checked={brand === item}
                                                        onChange={() => handleBrand(item)} />
                                                    <Icon.CheckSquare size={20} weight='fill' className='icon-checkbox' />
                                                </div>
                                                <label htmlFor={item} className="brand-name capitalize pl-2 cursor-pointer">{item}</label>
                                            </div>
                                            <div className='text-secondary2'>
                                                ({data.filter(dataItem => dataItem.brand === item && dataItem.category === 'fashion').length})
                                            </div>
                                        </div>
                                    ))}
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
                                                <div className="item flex items-center px-2 py-1 gap-1 bg-linear rounded-full capitalize" onClick={() => { setType(null) }}>
                                                    <Icon.X className='cursor-pointer' />
                                                    <span>{selectedType}</span>
                                                </div>
                                            )}
                                            {selectedSize && (
                                                <div className="item flex items-center px-2 py-1 gap-1 bg-linear rounded-full capitalize" onClick={() => { setSize(null) }}>
                                                    <Icon.X className='cursor-pointer' />
                                                    <span>{selectedSize}</span>
                                                </div>
                                            )}
                                            {selectedColor && (
                                                <div className="item flex items-center px-2 py-1 gap-1 bg-linear rounded-full capitalize" onClick={() => { setColor(null) }}>
                                                    <Icon.X className='cursor-pointer' />
                                                    <span>{selectedColor}</span>
                                                </div>
                                            )}
                                            {selectedBrand && (
                                                <div className="item flex items-center px-2 py-1 gap-1 bg-linear rounded-full capitalize" onClick={() => { setBrand(null) }}>
                                                    <Icon.X className='cursor-pointer' />
                                                    <span>{selectedBrand}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div
                                            className="clear-btn flex items-center px-2 py-1 gap-1 rounded-full border border-red cursor-pointer"
                                            onClick={() => {
                                                setBrand(null);
                                                setType(null);
                                                setSize(null);
                                                setColor(null);
                                            }}
                                        >
                                            <Icon.X color='rgb(219, 68, 68)' className='cursor-pointer' />
                                            <span className='text-button-uppercase text-red'>Clear All</span>
                                        </div>
                                    </>
                                )
                            }
                        </div>

                        <div className={`list-product hide-product-sold grid lg:grid-cols-${layoutCol} sm:grid-cols-3 grid-cols-2 sm:gap-[30px] gap-[20px] mt-7`}>
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
            </div>
        </>
    )
}

export default ShopBreadCrumbImg
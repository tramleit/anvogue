'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { usePathname } from 'next/navigation';
import Product from '@/components/Product/Product';
import productData from '@/data/Product.json'
import useLoginPopup from '@/store/useLoginPopup';

interface Props {
    props: string
}

const MenuFour: React.FC<Props> = ({ props }) => {
    const pathname = usePathname()
    const { openLoginPopup, handleLoginPopup } = useLoginPopup()

    return (
        <>
            <div className={`header-menu style-one relative w-full md:h-[74px] h-[56px] ${props}`}>
                <div className="container mx-auto h-full">
                    <div className="header-main flex items-center justify-between h-full">
                        <div className="menu-mobile-icon lg:hidden flex items-center">
                            <i className="icon-category text-2xl"></i>
                        </div>
                        <Link href={'/'} className='flex items-center lg:hidden'>
                            <div className="heading4">Anvogue</div>
                        </Link>
                        <div className="form-search relative max-lg:hidden">
                            <Icon.MagnifyingGlass size={16} className='absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer' />
                            <input type="text" placeholder='What are you looking for?' className=' h-10 rounded-lg border border-line caption2 w-full pl-9 pr-4' />
                        </div>
                        <div className="menu-main h-full max-lg:hidden">
                            <ul className='flex items-center gap-8 h-full'>
                                <li className='h-full relative'>
                                    <Link
                                        href="#!"
                                        className={`text-button-uppercase duration-300 h-full flex items-center justify-center gap-1 
                                            ${pathname.includes('/homepages/') ? 'active' : ''}`}
                                    >
                                        Demo
                                    </Link>
                                    <div className="sub-menu absolute py-3 px-5 -left-10 w-max grid grid-cols-4 gap-5 bg-white rounded-b-xl">
                                        <ul>
                                            <li>
                                                <Link href="/" className='text-secondary duration-300'>
                                                    Home Fashion 1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/homepages/fashion2"
                                                    className={`text-secondary duration-300`}
                                                >
                                                    Home Fashion 2
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/homepages/fashion3"
                                                    className={`text-secondary duration-300`}
                                                >
                                                    Home Fashion 3
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/homepages/fashion4" className={`text-secondary duration-300 ${pathname === '/homepages/fashion4' ? 'active' : ''}`}>
                                                    Home Fashion 4
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/homepages/fashion5" className={`text-secondary duration-300 ${pathname === '/homepages/fashion5' ? 'active' : ''}`}>
                                                    Home Fashion 5
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/homepages/fashion6" className={`text-secondary duration-300 ${pathname === '/homepages/fashion6' ? 'active' : ''}`}>
                                                    Home Fashion 6
                                                </Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <Link
                                                    href="/homepages/fashion7"
                                                    className={`text-secondary duration-300`}
                                                >
                                                    Home Fashion 7
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/homepages/fashion8" className='text-secondary duration-300'>
                                                    Home Fashion 8
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/homepages/fashion9" className='text-secondary duration-300'>
                                                    Home Fashion 9
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/homepages/fashion10" className='text-secondary duration-300'>
                                                    Home Fashion 10
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/homepages/fashion11" className='text-secondary duration-300'>
                                                    Home Fashion 11
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/homepages/underwear" className={`text-secondary duration-300 ${pathname === '/homepages/underwear' ? 'active' : ''}`}>
                                                    Home Underwear
                                                </Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <Link href="/homepages/cosmetic1" className={`text-secondary duration-300 ${pathname === '/homepages/cosmetic1' ? 'active' : ''}`}>
                                                    Home Cosmetic 1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/homepages/cosmetic2" className={`text-secondary duration-300 ${pathname === '/homepages/cosmetic2' ? 'active' : ''}`}>
                                                    Home Cosmetic 2
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/homepages/cosmetic3" className={`text-secondary duration-300`}>
                                                    Home Cosmetic 3
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/homepages/pet" className='text-secondary duration-300'>
                                                    Home Pet Store
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/homepages/jewelry" className={`text-secondary duration-300 ${pathname === '/homepages/jewelry' ? 'active' : ''}`}>
                                                    Home Jewelry
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/homepages/furniture" className={`text-secondary duration-300 ${pathname === '/homepages/furniture' ? 'active' : ''}`}>
                                                    Home Furniture
                                                </Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <Link href="/homepages/watch" className={`text-secondary duration-300 ${pathname === '/homepages/watch' ? 'active' : ''}`}>
                                                    Home Watch
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/homepages/toys" className={`text-secondary duration-300 ${pathname === '/homepages/toys' ? 'active' : ''}`}>
                                                    Home Toys Kid
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/homepages/yoga"
                                                    className={`text-secondary duration-300`}>
                                                    Home Yoga
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/homepages/organic" className='text-secondary duration-300'>
                                                    Home Organic
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='h-full'>
                                    <Link href="#!" className='text-button-uppercase duration-300 h-full flex items-center justify-center'>
                                        Features
                                    </Link>
                                    <div className="mega-menu absolute top-[74px] left-0 bg-white w-screen">
                                        <div className="container">
                                            <div className="flex justify-between py-8">
                                                <div className="nav-link basis-2/3 grid grid-cols-4 gap-y-8">
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">For Men</div>
                                                        <ul>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb-img'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                                                                >
                                                                    Starting From 50% Off
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb1'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb1' ? 'active' : ''}`}
                                                                >
                                                                    Jackets | Coats
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb2'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb2' ? 'active' : ''}`}
                                                                >
                                                                    Sweaters | Cardigans
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/collection'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/collection' ? 'active' : ''}`}
                                                                >
                                                                    Hoodies | Sweatshirts
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb-img'}
                                                                    className={`text-secondary duration-300 view-all-btn ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                                                                >
                                                                    View All
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">Massimo Dutti</div>
                                                        <ul>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb-img'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                                                                >
                                                                    Coats | Jackets
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb1'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb1' ? 'active' : ''}`}
                                                                >
                                                                    Jackets | Overshirts
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb2'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb2' ? 'active' : ''}`}
                                                                >
                                                                    T-shirts | Tops
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/collection'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/collection' ? 'active' : ''}`}
                                                                >
                                                                    Pants | Jeans
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb-img'}
                                                                    className={`text-secondary duration-300 view-all-btn ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                                                                >
                                                                    View All
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">Beauty</div>
                                                        <ul>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb-img'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                                                                >
                                                                    Tutorials
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb1'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb1' ? 'active' : ''}`}
                                                                >
                                                                    Best Seller
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb2'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb2' ? 'active' : ''}`}
                                                                >
                                                                    Lips
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/collection'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/collection' ? 'active' : ''}`}
                                                                >
                                                                    Nail Polish
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb-img'}
                                                                    className={`text-secondary duration-300 view-all-btn ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                                                                >
                                                                    View All
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">Skincare</div>
                                                        <ul>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb-img'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                                                                >
                                                                    Tutorials
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb1'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb1' ? 'active' : ''}`}
                                                                >
                                                                    Best Seller
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb2'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb2' ? 'active' : ''}`}
                                                                >
                                                                    Cream
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/collection'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/collection' ? 'active' : ''}`}
                                                                >
                                                                    Serum
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb-img'}
                                                                    className={`text-secondary duration-300 view-all-btn ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                                                                >
                                                                    View All
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">For WoMen</div>
                                                        <ul>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb-img'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                                                                >
                                                                    Starting From 60% Off
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb1'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb1' ? 'active' : ''}`}
                                                                >
                                                                    Dresses | Jumpsuits
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb2'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb2' ? 'active' : ''}`}
                                                                >
                                                                    T-shirts | Sweatshirts
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/collection'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/collection' ? 'active' : ''}`}
                                                                >
                                                                    Accessories | Jewelry
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb-img'}
                                                                    className={`text-secondary duration-300 view-all-btn ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                                                                >
                                                                    View All
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">For Kid</div>
                                                        <ul>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb-img'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                                                                >
                                                                    Girl | 6-14 Years
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb1'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb1' ? 'active' : ''}`}
                                                                >
                                                                    Boy | 6-14 Years
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb2'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb2' ? 'active' : ''}`}
                                                                >
                                                                    Baby | 1-6 Years
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/collection'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/collection' ? 'active' : ''}`}
                                                                >
                                                                    Newborn | {String.raw`<`}1 Years
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb-img'}
                                                                    className={`text-secondary duration-300 view-all-btn ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                                                                >
                                                                    View All
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">For Home</div>
                                                        <ul>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb-img'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                                                                >
                                                                    Furniture | Decor
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb1'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb1' ? 'active' : ''}`}
                                                                >
                                                                    Bed | Bath Room
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb2'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb2' ? 'active' : ''}`}
                                                                >
                                                                    Dining | Kitchen Room
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/collection'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/collection' ? 'active' : ''}`}
                                                                >
                                                                    Laundry | Cleaning
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb-img'}
                                                                    className={`text-secondary duration-300 view-all-btn ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                                                                >
                                                                    View All
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="banner-ads pl-2.5 basis-1/3">
                                                    <div className="banner-ads-item bg-linear rounded-2xl relative overflow-hidden">
                                                        <div className="text-content py-14 pl-8 relative z-[1]">
                                                            <div className="text-button-uppercase text-white bg-red px-2 py-0.5 inline-block rounded-sm">Save $10</div>
                                                            <div className="heading6 mt-2">Dive into Savings <br />on Swimwear</div>
                                                            <div className="body1 mt-3 text-secondary">
                                                                Starting at <span className='text-red'>$59.99</span>
                                                            </div>
                                                        </div>
                                                        <Image
                                                            src={'/images/slider/bg2-2.png'}
                                                            width={200}
                                                            height={100}
                                                            alt='bg-img'
                                                            className='basis-1/3 absolute right-0 top-0'
                                                        />
                                                    </div>
                                                    <div className="banner-ads-item bg-linear rounded-2xl relative overflow-hidden mt-8">
                                                        <div className="text-content py-14 pl-8 relative z-[1]">
                                                            <div className="text-button-uppercase text-white bg-red px-2 py-0.5 inline-block rounded-sm">Save $10</div>
                                                            <div className="heading6 mt-2">20% off <br />accessories</div>
                                                            <div className="body1 mt-3 text-secondary">
                                                                Starting at <span className='text-red'>$59.99</span>
                                                            </div>
                                                        </div>
                                                        <Image
                                                            src={'/images/header/bg-feature.png'}
                                                            width={200}
                                                            height={100}
                                                            alt='bg-img'
                                                            className='basis-1/3 absolute right-0 top-0'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className='h-full'>
                                    <Link href="#!" className='text-button-uppercase duration-300 h-full flex items-center justify-center'>
                                        Shop
                                    </Link>
                                    <div className="mega-menu absolute top-[74px] left-0 bg-white w-screen">
                                        <div className="container">
                                            <div className="flex justify-between py-8">
                                                <div className="nav-link basis-2/3 flex justify-between pr-12">
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">Shop Features</div>
                                                        <ul>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb-img'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                                                                >
                                                                    Shop Breadcrumb IMG
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb1'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb1' ? 'active' : ''}`}
                                                                >
                                                                    Shop Breadcrumb 1
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb2'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb2' ? 'active' : ''}`}
                                                                >
                                                                    Shop Breadcrumb 2
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/collection'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/collection' ? 'active' : ''}`}
                                                                >
                                                                    Shop Collection
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">Shop Features</div>
                                                        <ul>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/filter-canvas'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/filter-canvas' ? 'active' : ''}`}
                                                                >
                                                                    Shop Filter Canvas
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/filter-options'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/filter-options' ? 'active' : ''}`}
                                                                >
                                                                    Shop Filter Options
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/filter-dropdown'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/filter-dropdown' ? 'active' : ''}`}
                                                                >
                                                                    Shop Filter Dropdown
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/sidebar-list'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/sidebar-list' ? 'active' : ''}`}
                                                                >
                                                                    Shop Sidebar List
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">Shop Layout</div>
                                                        <ul>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb-img'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                                                                >
                                                                    Shop Default
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb-img'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                                                                >
                                                                    Shop Default Grid
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/sidebar-list'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/sidebar-list' ? 'active' : ''}`}
                                                                >
                                                                    Shop Default List
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/breadcrumb-img'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                                                                >
                                                                    Shop Full Width
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/shop/square'}
                                                                    className={`text-secondary duration-300 ${pathname === '/shop/square' ? 'active' : ''}`}
                                                                >
                                                                    Shop Square
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">Products Pages</div>
                                                        <ul>
                                                            <li>
                                                                <Link
                                                                    href={'/wishlist'}
                                                                    className={`text-secondary duration-300 ${pathname === '/wishlist' ? 'active' : ''}`}
                                                                >
                                                                    Wish List
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/search-result'}
                                                                    className={`text-secondary duration-300 ${pathname === '/search-result' ? 'active' : ''}`}
                                                                >
                                                                    Search Result
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/cart'}
                                                                    className={`text-secondary duration-300 ${pathname === '/cart' ? 'active' : ''}`}
                                                                >
                                                                    Shopping Cart
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/login'}
                                                                    className={`text-secondary duration-300 ${pathname === '/login' ? 'active' : ''}`}
                                                                >
                                                                    Login/Register
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/forgot-password'}
                                                                    className={`text-secondary duration-300 ${pathname === '/forgot-password' ? 'active' : ''}`}
                                                                >
                                                                    Forgot Password
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/order-tracking'}
                                                                    className={`text-secondary duration-300 ${pathname === '/order-tracking' ? 'active' : ''}`}
                                                                >
                                                                    Order Tracking
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/my-account'}
                                                                    className={`text-secondary duration-300 ${pathname === '/my-account' ? 'active' : ''}`}
                                                                >
                                                                    My Account
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="recent-product pl-2.5 basis-1/3">
                                                    <div className="text-button-uppercase pb-2">Recent Products</div>
                                                    <div className="list-product hide-product-sold hide-color grid grid-cols-2 gap-5 mt-3">
                                                        {productData.slice(0, 2).map((prd, index) => (
                                                            <Product key={index} data={prd} type='grid' />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className='h-full flex items-center justify-center logo'>
                                    <Link href={'/'} className='heading4'>
                                        Anvogue
                                    </Link>
                                </li>
                                <li className='h-full'>
                                    <Link href="#!" className='text-button-uppercase duration-300 h-full flex items-center justify-center'>
                                        Product
                                    </Link>
                                    <div className="mega-menu absolute top-[74px] left-0 bg-white w-screen">
                                        <div className="container">
                                            <div className="flex justify-between py-8">
                                                <div className="nav-link basis-2/3 flex justify-between xl:pr-14 pr-5">
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">Products Features</div>
                                                        <ul>
                                                            <li>
                                                                <Link
                                                                    href={'/product/default'}
                                                                    className={`text-secondary duration-300 ${pathname === '/product/default' ? 'active' : ''}`}
                                                                >
                                                                    Products Defaults
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/product/sale'}
                                                                    className={`text-secondary duration-300 ${pathname === '/product/sale' ? 'active' : ''}`}
                                                                >
                                                                    Products Sale
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/product/countdown-timer'}
                                                                    className={`text-secondary duration-300 ${pathname === '/product/countdown-timer' ? 'active' : ''}`}
                                                                >
                                                                    Products Countdown Timer
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/product/grouped'}
                                                                    className={`text-secondary duration-300 ${pathname === '/product/grouped' ? 'active' : ''}`}
                                                                >
                                                                    Products Grouped
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/product/bought-together'}
                                                                    className={`text-secondary duration-300 ${pathname === '/product/bought-together' ? 'active' : ''}`}
                                                                >
                                                                    Frequently Bought Together
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/product/out-of-stock'}
                                                                    className={`text-secondary duration-300 ${pathname === '/product/out-of-stock' ? 'active' : ''}`}
                                                                >
                                                                    Products Out Of Stock
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/product/variable'}
                                                                    className={`text-secondary duration-300 ${pathname === '/product/variable' ? 'active' : ''}`}
                                                                >
                                                                    Products Variable
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">Products Features</div>
                                                        <ul>
                                                            <li>
                                                                <Link
                                                                    href={'/product/external'}
                                                                    className={`text-secondary duration-300 ${pathname === '/product/external' ? 'active' : ''}`}
                                                                >
                                                                    Products External
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/product/on-sale'}
                                                                    className={`text-secondary duration-300 ${pathname === '/product/on-sale' ? 'active' : ''}`}
                                                                >
                                                                    Products On Sale
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/product/discount'}
                                                                    className={`text-secondary duration-300 ${pathname === '/product/discount' ? 'active' : ''}`}
                                                                >
                                                                    Products With Discount
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/product/sidebar'}
                                                                    className={`text-secondary duration-300 ${pathname === '/product/sidebar' ? 'active' : ''}`}
                                                                >
                                                                    Products With Sidebar
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/product/fixed-price'}
                                                                    className={`text-secondary duration-300 ${pathname === '/product/fixed-price' ? 'active' : ''}`}
                                                                >
                                                                    Products Fixed Price
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-2">Products Layout</div>
                                                        <ul>
                                                            <li>
                                                                <Link
                                                                    href={'/product/default'}
                                                                    className={`text-secondary duration-300 ${pathname === '/product/default' ? 'active' : ''}`}
                                                                >
                                                                    Products Thumbnails Left
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/product/sale'}
                                                                    className={`text-secondary duration-300 ${pathname === '/product/sale' ? 'active' : ''}`}
                                                                >
                                                                    Products Thumbnails Bottom
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/product/grouped'}
                                                                    className={`text-secondary duration-300 ${pathname === '/product/grouped' ? 'active' : ''}`}
                                                                >
                                                                    Products Grid 1 Scrolling
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/product/countdown-timer'}
                                                                    className={`text-secondary duration-300 ${pathname === '/product/countdown-timer' ? 'active' : ''}`}
                                                                >
                                                                    Products Grid 2 Scrolling
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/product/variable'}
                                                                    className={`text-secondary duration-300 ${pathname === '/product/variable' ? 'active' : ''}`}
                                                                >
                                                                    Products Combined 1
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={'/product/external'}
                                                                    className={`text-secondary duration-300 ${pathname === '/product/external' ? 'active' : ''}`}
                                                                >
                                                                    Products Combined 2
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="recent-product pl-2.5 basis-1/3">
                                                    <div className="text-button-uppercase pb-2">Recent Products</div>
                                                    <div className="list-product hide-product-sold hide-color grid grid-cols-2 gap-5 mt-3">
                                                        {productData.slice(0, 2).map((prd, index) => (
                                                            <Product key={index} data={prd} type='grid' />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className='h-full relative'>
                                    <Link href="#!" className='text-button-uppercase duration-300 h-full flex items-center justify-center'>
                                        Blog
                                    </Link>
                                    <div className="sub-menu py-3 px-5 -left-10 absolute bg-white rounded-b-xl">
                                        <ul className='w-full'>
                                            <li>
                                                <Link href="/blog/default" className={`text-secondary duration-300 ${pathname === '/blog/default' ? 'active' : ''}`}>
                                                    Blog Default
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog/list" className={`text-secondary duration-300 ${pathname === '/blog/list' ? 'active' : ''}`}>
                                                    Blog List
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog/grid" className={`text-secondary duration-300 ${pathname === '/blog/grid' ? 'active' : ''}`}>
                                                    Blog Grid
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog/detail1" className={`text-secondary duration-300 ${pathname === '/blog/detail1' ? 'active' : ''}`}>
                                                    Blog Detail 1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog/detail2" className={`text-secondary duration-300 ${pathname === '/blog/detail2' ? 'active' : ''}`}>
                                                    Blog Detail 2
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='h-full relative'>
                                    <Link href="#!" className='text-button-uppercase duration-300 h-full flex items-center justify-center'>
                                        Pages
                                    </Link>
                                    <div className="sub-menu py-3 px-5 -left-10 absolute bg-white rounded-b-xl">
                                        <ul className='w-full'>
                                            <li>
                                                <Link href="/pages/contact" className={`text-secondary duration-300 ${pathname === '/pages/contact' ? 'active' : ''}`}>
                                                    Contact Us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/pages/store-list" className={`text-secondary duration-300 ${pathname === '/pages/store-list' ? 'active' : ''}`}>
                                                    Store List
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/pages/page-not-found" className={`text-secondary duration-300 ${pathname === '/pages/page-not-found' ? 'active' : ''}`}>
                                                    404
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/pages/faqs" className={`text-secondary duration-300 ${pathname === '/pages/faqs' ? 'active' : ''}`}>
                                                    FAQs
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/pages/coming-soon" className={`text-secondary duration-300 ${pathname === '/pages/coming-soon' ? 'active' : ''}`}>
                                                    Coming Soon
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/pages/customer-feedbacks" className={`text-secondary duration-300 ${pathname === '/pages/customer-feedbacks' ? 'active' : ''}`}>
                                                    Customer Feedbacks
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="right flex gap-12">
                            <div className="list-action flex items-center gap-4">
                                <div className="user-icon flex items-center justify-center cursor-pointer">
                                    <Icon.User size={24} color='black' onClick={handleLoginPopup} />
                                    <div
                                        className={`login-popup absolute top-[74px] -left-40px w-[320px] p-7 rounded-xl bg-white box-shadow-small 
                                            ${openLoginPopup ? 'open' : ''}`}
                                    >
                                        <Link href={'/login'} className="button-main w-full text-center">Login</Link>
                                        <div className="text-secondary text-center mt-3 pb-4">Don’t have an account?
                                            <Link href={'/register'} className='text-black pl-1 hover:underline'>Register</Link>
                                        </div>
                                        <div className="bottom pt-4 border-t border-line"></div>
                                        <Link href={'#!'} className='body1 hover:underline'>Support</Link>
                                    </div>
                                </div>
                                <div className="max-md:hidden wishlist-icon flex items-center cursor-pointer">
                                    <Icon.Heart size={24} color='black' />
                                </div>
                                <div className="max-md:hidden cart-icon flex items-center relative cursor-pointer">
                                    <Icon.Handbag size={24} color='black' />
                                    <span className="quantity cart-quantity absolute -right-1.5 -top-1.5 text-xs text-white bg-black px-1 rounded-full">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuFour
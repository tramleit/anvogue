'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { usePathname } from 'next/navigation';
import Product from '@/components/Product/Product';
import productData from '@/data/Product.json'
import useLoginPopup from '@/store/useLoginPopup';
import useShopDepartmentPopup from '@/store/useShopDepartmentPopup';


const MenuPet = () => {
    const pathname = usePathname()
    const { openLoginPopup, handleLoginPopup } = useLoginPopup()
    const { openShopDepartmentPopup, handleShopDepartmentPopup } = useShopDepartmentPopup()

    return (
        <>
            <div className='header-menu style-eight relative bg-surface w-full md:h-[90px] h-[64px]'>
                <div className="container mx-auto h-full">
                    <div className="header-main flex items-center justify-between h-full">
                        <div className="menu-mobile-icon lg:hidden flex items-center">
                            <i className="icon-category text-2xl"></i>
                        </div>
                        <Link href={'/'} className='flex items-center'>
                            <div className="heading4">Anvogue</div>
                        </Link>
                        <div className="form-search w-[54%] pl-8 flex items-center h-[48px] max-lg:hidden">
                            <form action="/search-result" className='w-full flex items-center h-full'>
                                <input type="text" className="search-input h-full px-4 w-full border border-line rounded-l-2xl" placeholder="What are you looking for today?" />
                                <button type="submit" className="search-button button-main bg-black h-full flex items-center px-3 rounded-l-none rounded-r-2xl">
                                    <Icon.MagnifyingGlass color='#fff' size={24} weight='bold' />
                                </button>
                            </form>
                        </div>
                        <div className="right flex gap-12">
                            <div className="list-action flex items-center gap-6">
                                <div className="user-icon flex items-center flex-col justify-center cursor-pointer">
                                    <Icon.User size={24} color='black' onClick={handleLoginPopup} />
                                    <div className="caption1" onClick={handleLoginPopup}>Account</div>
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
                                <div className="max-md:hidden wishlist-icon flex flex-col items-center cursor-pointer">
                                    <Icon.Heart size={24} color='black' />
                                    <div className="caption1">Wishlist</div>
                                </div>
                                <div className="max-md:hidden cart-icon flex flex-col items-center relative cursor-pointer">
                                    <Icon.Handbag size={24} color='black' />
                                    <div className="caption1">Cart</div>
                                    <span className="quantity cart-quantity absolute -right-1 -top-1.5 text-xs text-white bg-black px-1 rounded-full">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-nav-menu relative bg-white h-[44px] max-lg:hidden z-10">
                <div className="container h-full">
                    <div className="top-nav-menu-main flex items-center justify-between h-full">
                        <div className="left flex items-center h-full">
                            <div className="menu-department-block relative h-full">
                                <div
                                    className="menu-department-btn bg-black relative flex items-center gap-2 pl-4 pr-24 h-full w-fit cursor-pointer"
                                    onClick={handleShopDepartmentPopup}
                                >
                                    <i className="icon-category text-white"></i>
                                    <div className="text-button-uppercase text-white whitespace-nowrap">Shop By</div>
                                </div>
                                <div
                                    className={`sub-menu-department absolute top-[44px] left-0 right-0 h-max bg-white rounded-b-2xl ${openShopDepartmentPopup ? 'open' : ''}`}
                                >
                                    <div className="item block">
                                        <Link href={'/shop/breadcrumb-img'} className='caption1 py-4 px-5 border-b border-line whitespace-nowrap block'>Dog Food</Link>
                                    </div>
                                    <div className="item block">
                                        <Link href={'/shop/breadcrumb-img'} className='caption1 py-4 px-5 border-b border-line whitespace-nowrap block'>Dog Outfits</Link>
                                    </div>
                                    <div className="item block">
                                        <Link href={'/shop/breadcrumb-img'} className='caption1 py-4 px-5 border-b border-line whitespace-nowrap block'>Dog Toys</Link>
                                    </div>
                                    <div className="item block">
                                        <Link href={'/shop/breadcrumb-img'} className='caption1 py-4 px-5 border-b border-line whitespace-nowrap block'>Dog Accessory</Link>
                                    </div>
                                    <div className="item block">
                                        <Link href={'/shop/breadcrumb-img'} className='caption1 py-4 px-5 border-b border-line whitespace-nowrap block'>Cat Food</Link>
                                    </div>
                                    <div className="item block">
                                        <Link href={'/shop/breadcrumb-img'} className='caption1 py-4 px-5 border-b border-line whitespace-nowrap block'>Cat Outfits</Link>
                                    </div>
                                    <div className="item block">
                                        <Link href={'/shop/breadcrumb-img'} className='caption1 py-4 px-5 border-b border-line whitespace-nowrap block'>Cat Toys</Link>
                                    </div>
                                    <div className="item block">
                                        <Link href={'/shop/breadcrumb-img'} className='caption1 py-4 px-5 border-b border-line whitespace-nowrap block'>Cat Accessory</Link>
                                    </div>
                                    <div className="item block">
                                        <Link href={'/shop/breadcrumb-img'} className='caption1 py-4 px-5 whitespace-nowrap block'>Pet Services</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-main style-eight h-full pl-12 max-lg:hidden">
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
                                                        className={`text-secondary duration-300 ${pathname === '/homepages/fashion2' ? 'active' : ''}`}
                                                    >
                                                        Home Fashion 2
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/homepages/fashion3"
                                                        className={`text-secondary duration-300 ${pathname === '/homepages/fashion3' ? 'active' : ''}`}
                                                    >
                                                        Home Fashion 3
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/homepages/fashion4" className='text-secondary duration-300'>
                                                        Home Fashion 4
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/homepages/fashion5" className='text-secondary duration-300'>
                                                        Home Fashion 5
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/homepages/fashion6" className='text-secondary duration-300'>
                                                        Home Fashion 6
                                                    </Link>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <Link
                                                        href="/homepages/fashion7"
                                                        className={`text-secondary duration-300 ${pathname === '/homepages/fashion7' ? 'active' : ''}`}
                                                    >
                                                        Home Fashion 7
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/homepages/fashion8" className={`text-secondary duration-300 ${pathname === '/homepages/fashion8' ? 'active' : ''}`}>
                                                        Home Fashion 8
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/homepages/fashion9" className={`text-secondary duration-300 ${pathname === '/homepages/fashion9' ? 'active' : ''}`}>
                                                        Home Fashion 9
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/homepages/fashion10" className={`text-secondary duration-300 ${pathname === '/homepages/fashion10' ? 'active' : ''}`}>
                                                        Home Fashion 10
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/homepages/fashion11" className={`text-secondary duration-300 ${pathname === '/homepages/fashion11' ? 'active' : ''}`}>
                                                        Home Fashion 11
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/homepages/underwear" className='text-secondary duration-300'>
                                                        Home Underwear
                                                    </Link>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <Link href="/homepages/cosmetic1" className='text-secondary duration-300'>
                                                        Home Cosmetic 1
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/homepages/cosmetic2" className='text-secondary duration-300'>
                                                        Home Cosmetic 2
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/homepages/cosmetic3" className={`text-secondary duration-300 ${pathname === '/homepages/cosmetic3' ? 'active' : ''}`}>
                                                        Home Cosmetic 3
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/homepages/pet" className='text-secondary duration-300 active'>
                                                        Home Pet Store
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/homepages/jewelry" className='text-secondary duration-300'>
                                                        Home Jewelry
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/homepages/furniture" className='text-secondary duration-300'>
                                                        Home Furniture
                                                    </Link>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <Link href="/homepages/watch" className='text-secondary duration-300'>
                                                        Home Watch
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/homepages/toys" className='text-secondary duration-300'>
                                                        Home Toys Kid
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/homepages/yoga"
                                                        className={`text-secondary duration-300 ${pathname === '/homepages/yoga' ? 'active' : ''}`}>
                                                        Home Yoga
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/homepages/organic" className={`text-secondary duration-300 ${pathname === '/homepages/organic' ? 'active' : ''}`}>
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
                                        <div className="mega-menu absolute top-[44px] left-0 bg-white w-screen">
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
                                        <div className="mega-menu absolute top-[44px] left-0 bg-white w-screen">
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
                                    <li className='h-full'>
                                        <Link href="#!" className='text-button-uppercase duration-300 h-full flex items-center justify-center'>
                                            Product
                                        </Link>
                                        <div className="mega-menu absolute top-[44px] left-0 bg-white w-screen">
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
                        </div>
                        <div className="right flex items-center gap-1 max-[1240px]:hidden">
                            <div className="text-button">Limited Time Offer: <span className='text-red'>Free shipping</span> on all orders over $50</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuPet
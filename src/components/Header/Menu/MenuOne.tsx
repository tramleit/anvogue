import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const MenuOne = () => {
    return (
        <>
            <div className='header-menu style-one bg-transparent md:h-[74px] h-[56px]'>
                <div className="container mx-auto h-full">
                    <div className="header-main flex justify-between h-full relative">
                        <div className="menu-mobile-icon lg:hidden flex items-center">
                            <i className="icon-category text-2xl"></i>
                        </div>
                        <div className="left flex items-center gap-16">
                            <Link href={'/'} className='flex items-center'>
                                <div className="heading4">Anvogue</div>
                            </Link>
                            <div className="menu-main h-full max-lg:hidden">
                                <ul className='flex items-center gap-10 h-full'>
                                    <li className='h-full relative active'>
                                        <a href="#!" className='text-button-uppercase duration-300 h-full flex items-center justify-center gap-1'>
                                            Demo
                                        </a>
                                        <ul className='absolute sub-menu bg-white duration-300'>
                                            <li>
                                                <Link href="/" className='text-button-uppercase duration-300 active'>
                                                    Home Fashion 1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/homepages/home2" className='text-button-uppercase duration-300'>
                                                    Home Fashion 2
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/homepages/home3" className='text-button-uppercase duration-300'>
                                                    Home Fashion 3
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/homepages/home4" className='text-button-uppercase duration-300'>
                                                    Home Fashion 4
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/homepages/home5" className='text-button-uppercase duration-300'>
                                                    Home Fashion 5
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='h-full'>
                                        <Link href="/features" className='text-button-uppercase duration-300 h-full flex items-center justify-center'>
                                            Features
                                        </Link>
                                    </li>
                                    <li className='h-full relative'>
                                        <a href="#!" className='text-button-uppercase duration-300 h-full flex items-center justify-center gap-1'>
                                            Shop
                                        </a>
                                        <ul className='absolute sub-menu bg-white duration-300'>
                                            <li>
                                                <Link href="/shop/shop-grid-fullwidth" className='text-button-uppercase duration-300'>
                                                    Shop Grid Fullwidth
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop/shop-grid-sidebar" className='text-button-uppercase duration-300'>
                                                    Shop Grid Sidebar
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop/shop-list-sidebar" className='text-button-uppercase duration-300'>
                                                    Shop List Sidebar
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='h-full'>
                                        <Link href="/product" className='text-button-uppercase duration-300 h-full flex items-center justify-center'>
                                            Product
                                        </Link>
                                    </li>
                                    <li className='h-full'>
                                        <Link href="/blog" className='text-button-uppercase duration-300 h-full flex items-center justify-center'>
                                            Blog
                                        </Link>
                                    </li>
                                    <li className='h-full'>
                                        <Link href="/pages" className='text-button-uppercase duration-300 h-full flex items-center justify-center'>
                                            Pages
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right flex gap-12">
                            <div className="max-md:hidden search-icon flex items-center cursor-pointer relative">
                                <Icon.MagnifyingGlass size={24} color='black' />
                                <div className="line absolute bg-line w-px h-6 -right-6"></div>
                            </div>
                            <div className="list-action flex items-center gap-4">
                                <div className="user-icon flex items-center cursor-pointer">
                                    <Icon.User size={24} color='black' />
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

export default MenuOne
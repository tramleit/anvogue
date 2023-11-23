'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { usePathname } from 'next/navigation';

const MenuTwo = () => {
    const pathname = usePathname()

    return (
        <>
            <div className='header-menu style-one relative bg-white w-full md:h-[74px] h-[56px]'>
                <div className="container mx-auto h-full">
                    <div className="header-main flex justify-between h-full relative">
                        <div className="menu-mobile-icon lg:hidden flex items-center">
                            <i className="icon-category text-2xl"></i>
                        </div>
                        <Link href={'/'} className='flex items-center'>
                            <div className="heading4">Anvogue</div>
                        </Link>
                        <div className="menu-main h-full max-lg:hidden">
                            <ul className='flex items-center gap-10 h-full'>
                                <li className='h-full relative'>
                                    <a href="#!" className='text-button-uppercase duration-300 h-full flex items-center justify-center gap-1 active'>
                                        Demo
                                    </a>
                                    <div className="grid grid-cols-4 gap-5 absolute sub-menu bg-white duration-300">
                                        <ul className=''>
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
                                                <Link href="/homepages/fashion3" className={`text-secondary duration-300 ${pathname === '/homepages/fashion3' ? 'active' : ''}`}>
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
                                        <ul className=''>
                                            <li>
                                                <Link href="/homepages/fashion7" className={`text-secondary duration-300 ${pathname === '/homepages/fashion7' ? 'active' : ''}`}>
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
                                                <Link href="/homepages/underwear" className='text-secondary duration-300'>
                                                    Home Underwear
                                                </Link>
                                            </li>
                                        </ul>
                                        <ul className=''>
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
                                                <Link href="/homepages/pet" className='text-secondary duration-300'>
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
                                        <ul className=''>
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
                                                <Link href="/homepages/yoga" className={`text-secondary duration-300 ${pathname === '/homepages/yoga' ? 'active' : ''}`}>
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
                                    <Link href="/features" className='text-button-uppercase duration-300 h-full flex items-center justify-center'>
                                        Features
                                    </Link>
                                </li>
                                <li className='h-full relative'>
                                    <a href="#!" className='text-button-uppercase duration-300 h-full flex items-center justify-center gap-1'>
                                        Shop
                                    </a>
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

export default MenuTwo
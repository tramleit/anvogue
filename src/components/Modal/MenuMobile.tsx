'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const MenuMobile = () => {
    const [openMenuMobile, setOpenMenuMobile] = useState(false)
    
    return (
        <>
            <div id="menu-mobile" className={`${openMenuMobile ? 'open' : ''}`}>
                <div className="menu-container bg-white">
                    <div className="container">
                        <div className="menu-main">
                            <div className="heading py-2 relative flex items-center justify-center">
                                <div className="close-menu-mobile-btn absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-surface flex items-center justify-center">
                                    <Icon.X size={14} />
                                </div>
                                <Link href={'/'} className='logo text-3xl font-semibold text-center'>Anvogue</Link>
                            </div>
                            <div className="form-search relative mt-2">
                                <Icon.MagnifyingGlass size={20} className='absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer' />
                                <input type="text" placeholder='What are you looking for?' className=' h-12 rounded-lg border border-line text-sm w-full pl-10 pr-4' />
                            </div>
                            <div className="list-nav mt-6">
                                <ul>
                                    <li>
                                        <a href={'#!'} className='text-xl font-semibold flex items-center justify-between'>Demo
                                            <span className='text-right'>
                                                <Icon.CaretRight size={20} />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={'#!'} className='text-xl font-semibold flex items-center justify-between mt-5'>Features
                                            <span className='text-right'>
                                                <Icon.CaretRight size={20} />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={'#!'} className='text-xl font-semibold flex items-center justify-between mt-5'>Shop
                                            <span className='text-right'>
                                                <Icon.CaretRight size={20} />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={'#!'} className='text-xl font-semibold flex items-center justify-between mt-5'>Blog
                                            <span className='text-right'>
                                                <Icon.CaretRight size={20} />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={'#!'} className='text-xl font-semibold flex items-center justify-between mt-5'>Pages
                                            <span className='text-right'>
                                                <Icon.CaretRight size={20} />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuMobile
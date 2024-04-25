'use client'

import Image from 'next/image'
import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useRouter } from 'next/navigation'
import Link from 'next/link';

const TopProduct = () => {
    const router = useRouter()

    const handleDetailProduct = (productId: string) => {
        // redirect to shop with category selected
        router.push(`/product/default?id=${productId}`);
    };

    return (
        <div className="top-product bg-surface md:mt-[60px] mt-10 md:py-[60px] py-10">
            <div className="container">
                <div className="heading flex items-center justify-between gap-5 flex-wrap">
                    <div className="heading3">Top Rated Products</div>
                    <Link href='/shop/breadcrumb-img' className='text-button pb-0.5 border-b-2 border-black'>View All
                    </Link>
                </div>
                <div className="list grid xl:grid-cols-3 sm:grid-cols-2 gap-4 md:mt-10 mt-6">
                    <div className="product-item style-marketplace-list flex items-center gap-2 bg-white py-5 px-[39px] rounded cursor-pointer"
                        onClick={() => handleDetailProduct('149')}>
                        <div className="bg-img lg:w-[150px] w-[120px] flex-shrink-0 aspect-1/1">
                            <Image width={5000} height={5000} className="w-full h-full object-cover" src="/images/product/phone/1.png" alt="" />
                        </div>
                        <div className="product-infor">
                            <span className="caption2 uppercase block">UMINO</span>
                            <span className="caption2 mt-2">Apple iPhone 12 Pro Max 128GB - Unlocked</span>
                            <div className="flex gap-0.5 mt-2">
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <span className="text-title inline-block">$300.00</span>
                                <del className="caption2 text-secondary">$350.00</del>
                            </div>
                        </div>
                    </div>
                    <div className="product-item style-marketplace-list flex items-center gap-2 bg-white py-5 px-[39px] rounded cursor-pointer"
                        onClick={() => handleDetailProduct('116')}>
                        <div className="bg-img lg:w-[150px] w-[120px] flex-shrink-0 aspect-1/1">
                            <Image width={5000} height={5000} className="w-full h-full object-cover" src="/images/product/watch/1.png" alt="" />
                        </div>
                        <div className="product-infor">
                            <span className="caption2 uppercase block">UMINO</span>
                            <span className="caption2 mt-2">Logitech Watch Aluminum Case -Pride Edition</span>
                            <div className="flex gap-0.5 mt-2">
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <span className="text-title inline-block">$300.00</span>
                                <del className="caption2 text-secondary">$350.00</del>
                            </div>
                        </div>
                    </div>
                    <div className="product-item style-marketplace-list flex items-center gap-2 bg-white py-5 px-[39px] rounded cursor-pointer"
                        onClick={() => handleDetailProduct('145')}>
                        <div className="bg-img lg:w-[150px] w-[120px] flex-shrink-0 aspect-1/1">
                            <Image width={5000} height={5000} className="w-full h-full object-cover" src="/images/product/ipad/1.png" alt="" />
                        </div>
                        <div className="product-infor">
                            <span className="caption2 uppercase block">UMINO</span>
                            <span className="caption2 mt-2">Apple iPad Air 4 10.9-inch Wi-Fi 256GB Blue</span>
                            <div className="flex gap-0.5 mt-2">
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <span className="text-title inline-block">$300.00</span>
                                <del className="caption2 text-secondary">$350.00</del>
                            </div>
                        </div>
                    </div>
                    <div className="product-item style-marketplace-list flex items-center gap-2 bg-white py-5 px-[39px] rounded cursor-pointer"
                        onClick={() => handleDetailProduct('119')}>
                        <div className="bg-img lg:w-[150px] w-[120px] flex-shrink-0 aspect-1/1">
                            <Image width={5000} height={5000} className="w-full h-full object-cover" src="/images/product/watch/2.png" alt="" />
                        </div>
                        <div className="product-infor">
                            <span className="caption2 uppercase block">UMINO</span>
                            <span className="caption2 mt-2">Apple Watch Aluminum Case with Sport Loop</span>
                            <div className="flex gap-0.5 mt-2">
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <span className="text-title inline-block">$300.00</span>
                                <del className="caption2 text-secondary">$350.00</del>
                            </div>
                        </div>
                    </div>
                    <div className="product-item style-marketplace-list flex items-center gap-2 bg-white py-5 px-[39px] rounded cursor-pointer"
                        onClick={() => handleDetailProduct('150')}>
                        <div className="bg-img lg:w-[150px] w-[120px] flex-shrink-0 aspect-1/1">
                            <Image width={5000} height={5000} className="w-full h-full object-cover" src="/images/product/phone/4.png" alt="" />
                        </div>
                        <div className="product-infor">
                            <span className="caption2 uppercase block">UMINO</span>
                            <span className="caption2 mt-2">Samsung Galaxy S21 FE 8GB/128GB - White</span>
                            <div className="flex gap-0.5 mt-2">
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <span className="text-title inline-block">$300.00</span>
                                <del className="caption2 text-secondary">$350.00</del>
                            </div>
                        </div>
                    </div>
                    <div className="product-item style-marketplace-list flex items-center gap-2 bg-white py-5 px-[39px] rounded cursor-pointer"
                        onClick={() => handleDetailProduct('153')}>
                        <div className="bg-img lg:w-[150px] w-[120px] flex-shrink-0 aspect-1/1">
                            <Image width={5000} height={5000} className="w-full h-full object-cover" src="/images/product/phone/6.png" alt="" />
                        </div>
                        <div className="product-infor">
                            <span className="caption2 uppercase block">UMINO</span>
                            <span className="caption2 mt-2">Apple iPhone 13 Pro Max 128GB - Unlocked</span>
                            <div className="flex gap-0.5 mt-2">
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                                <Icon.Star weight='fill' className="text-sm text-yellow" />
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <span className="text-title inline-block">$300.00</span>
                                <del className="caption2 text-secondary">$350.00</del>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopProduct

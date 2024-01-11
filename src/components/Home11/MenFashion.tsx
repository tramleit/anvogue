'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'
import { motion } from 'framer-motion'

interface Props {
    data: Array<ProductType>;
    start: number;
    limit: number;
}

const MenFashion: React.FC<Props> = ({ data, start, limit }) => {
    const [activeTab, setActiveTab] = useState<string>('shirt');

    const handleTabClick = (type: string) => {
        setActiveTab(type);
    };

    const filteredProducts = data.filter((product) => product.type === activeTab && product.gender === 'men' && product.category === 'fashion');

    return (
        <>
            <div className="tab-features-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading flex items-center justify-between gap-5 flex-wrap">
                        <div className="heading3">men{String.raw`'s`} Fashion</div>
                        <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl">
                            {['t-shirt', 'shirt', 'sweater', 'outerwear'].map((type) => (
                                <div
                                    key={type}
                                    className={`tab-item relative text-secondary py-2 px-5 cursor-pointer duration-500 hover:text-black ${activeTab === type ? 'active' : ''}`}
                                    onClick={() => handleTabClick(type)}
                                >
                                    {activeTab === type && (
                                        <motion.div layoutId='active-pill' className='absolute inset-0 rounded-2xl bg-white'></motion.div>
                                    )}
                                    <span className='relative text-button-uppercase z-[1]'>
                                        {type}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="list-product hide-product-sold  grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] md:mt-10 mt-6">
                        <Link href={"/shop/breadcrumb1"} className="banner rounded-[20px] overflow-hidden relative flex items-center justify-center">
                            <div className="heading4 text-white text-center">Fashion For <br />Men</div>
                            <Image
                                src={'/images/banner/13.png'}
                                width={1000}
                                height={1000}
                                alt='banner13'
                                className='absolute top-0 left-0 w-full h-full object-cover z-[-1] duration-500'
                            />
                        </Link>
                        {filteredProducts.slice(start, limit).map((prd, index) => (
                            <Product key={index} data={prd} type='grid' />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenFashion
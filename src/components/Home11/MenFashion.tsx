
import React from 'react'
import Image from 'next/image';
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'

interface Props {
    data: Array<ProductType>;
    start: number;
    limit: number;
}

const MenFashion: React.FC<Props> = ({ data, start, limit }) => {
    return (
        <>
            <div className="tab-features-block pt-20">
                <div className="container">
                    <div className="heading flex items-center justify-between gap-5 flex-wrap">
                        <div className="heading3">men{String.raw`'s`} Fashion</div>
                        <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl">
                            <div className="tab-item text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black">All</div>
                            <div className="tab-item text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black active">T-Shirt</div>
                            <div className="tab-item text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black">Trousers</div>
                            <div className="tab-item text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black">Shoes</div>
                            <div className="tab-item text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black">Shirt</div>
                        </div>
                    </div>

                    <div className="list-product hide-product-sold hide-color grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] mt-10">
                        <div className="banner rounded-[20px] overflow-hidden relative flex items-center justify-center">
                            <div className="heading4 text-white text-center">Fashion For <br />Men</div>
                            <Image
                                src={'/images/banner/13.png'}
                                width={1000}
                                height={1000}
                                alt='banner13'
                                className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
                            />
                        </div>
                        {data.slice(start, limit).map((prd, index) => (
                            <Product key={index} data={prd} type='grid' />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenFashion
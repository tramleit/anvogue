
import React from 'react'
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'

interface Props {
    data: Array<ProductType>;
    start: number;
    limit: number;
}

const WhatNewOne: React.FC<Props> = ({ data, start, limit }) => {
    return (
        <>
            <div className="whate-new-block pt-20">
                <div className="container">
                    <div className="heading flex flex-col items-center text-center">
                        <div className="heading3">What&apos;s new</div>
                        <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl mt-6">
                            <div className="tab-item text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black">Tops</div>
                            <div className="tab-item text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black active">Accessories</div>
                            <div className="tab-item text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black">Dress</div>
                            <div className="tab-item text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black">Short</div>
                            <div className="tab-item text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black">Shirt</div>
                        </div>
                    </div>

                    <div className="list-product grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] mt-10">
                        {data.slice(start, limit).map((prd, index) => (
                            <Product data={prd} type='grid' key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatNewOne
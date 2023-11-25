
import React from 'react'
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'

interface Props {
    data: Array<ProductType>;
    start: number;
    limit: number;
}

const BestSellers: React.FC<Props> = ({ data, start, limit }) => {
    return (
        <>
            <div className="tab-features-block pt-20">
                <div className="container">
                    <div className="heading flex items-center justify-between gap-5 flex-wrap">
                        <div className="heading3">Best Sellers</div>
                        <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl">
                            <div className="tab-item text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black">Tops</div>
                            <div className="tab-item text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black active">Accessories</div>
                            <div className="tab-item text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black">Dress</div>
                            <div className="tab-item text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black">Short</div>
                            <div className="tab-item text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black">Shirt</div>
                        </div>
                    </div>

                    <div className="list-product hide-color grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] mt-10">
                        {data.slice(start, limit).map((prd, index) => (
                            <Product key={index} data={prd} type='grid' />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestSellers
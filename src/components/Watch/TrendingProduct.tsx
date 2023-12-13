'use client'

import React from 'react'
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'

interface Props {
    data: Array<ProductType>;
}

const TrendingProduct: React.FC<Props> = ({ data }) => {
    const filteredProducts = data.filter((product) => product.new && (product.category === 'watch'));

    return (
        <>
            <div className="tab-features-block style-watch md:pt-20 pt-10">
                <div className="container flex flex-col items-center">
                    <div className="heading3 text-center text-white">Trending Products</div>
                    <div className="list-product hide-product-sold grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] mt-10">
                        {filteredProducts.slice(0, 4).map((prd, index) => (
                            <Product data={prd} type='grid' key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingProduct
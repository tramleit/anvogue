import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'

interface Props {
    data: Array<ProductType>;
    start: number;
    limit: number;
}

const LookBook: React.FC<Props> = ({ data, start, limit }) => {
    return (
        <>
            <div className="lookbook-block cos1 bg-surface md:py-20 py-10 md:mt-20 mt-10">
                <div className="container lg:flex items-center">
                    <div className="heading lg:w-1/4 lg:pr-[15px] max-lg:pb-8">
                        <div className="heading3 md:pb-5 pb-3">Everything you need to prepare the look</div>
                        <Link href={'/shop/breadcrumb-img'} className='text-button pb-1 border-b-2 border-black duration-300 hover:border-green'>Shop Now</Link>
                    </div>

                    <div className="list-product hide-product-sold lg:w-3/4 lg:pl-[15px] grid lg:grid-cols-3 grid-cols-2 sm:gap-[30px] gap-[20px] ">
                        {data
                            .filter(product => product.category === 'cosmetic')
                            .slice(start, limit)
                            .map((prd, index) => (
                                <Product key={index} data={prd} type='grid' />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default LookBook
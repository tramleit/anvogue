
import React from 'react'
import Link from 'next/link';
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'

interface Props {
    data: Array<ProductType>;
    start: number;
    limit: number;
}

const Deal: React.FC<Props> = ({ data, start, limit }) => {
    return (
        <>
            <div className="tab-features-block pt-20">
                <div className="container">
                    <div className="heading flex items-center justify-between gap-5 flex-wrap">
                        <div className="left flex items-center gap-6 gap-y-3 flex-wrap">
                            <div className="heading3">Deals of the day</div>
                            <div className="deal-time bg-red py-1 px-5 rounded-lg">
                                <div className="heading6 text-white">
                                    <span className='day'>05</span>
                                    <span>D : </span>
                                    <span className='hour'>22</span>
                                    <span>H : </span>
                                    <span className='minute'>34</span>
                                    <span>M : </span>
                                    <span className='second'>43</span>
                                    <span>S</span>
                                </div>
                            </div>
                        </div>
                        <Link href={'#!'} className='text-button pb-1 border-b-2 border-black'>View All Deals</Link>
                    </div>

                    <div className="list-product grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] mt-10">
                        {data.slice(start, limit).map((prd, index) => (
                            <Product key={index} data={prd} type='grid' />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deal
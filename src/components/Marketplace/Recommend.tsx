import React from 'react'
import productData from '@/data/Product.json'
import Product from '../Product/Product'

const Recommend = () => {
    return (
        <div className="recommend md:mt-[60px] mt-10">
            <div className="container">
                <div className="heading flex items-center justify-between gap-5 flex-wrap">
                    <div className="heading3">Recommended For You</div>
                    <a href='/shop-breadcrumb-img.html' className='text-button pb-0.5 border-b-2 border-black'>View All
                    </a>
                </div>
                <div
                    className="list grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-[30px] gap-[20px] md:mt-10 mt-6">
                    {productData.slice(155, 160).map(item => (
                        <Product data={item} type='marketplace' key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Recommend

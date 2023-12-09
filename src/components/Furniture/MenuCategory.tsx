import React from 'react'
import Link from 'next/link'

const MenuCategory = () => {
    return (
        <>
            <div className="menu-category-block bg-black py-3 max-md:hidden">
                <div className="container flex items-center justify-center">
                    <ul className='flex items-center lg:gap-6 gap-4'>
                        <li><Link href={'/shop/breadcrumb1'} className='text-button-uppercase text-white has-line-before before-white'>Chair</Link></li>
                        <li><Link href={'/shop/breadcrumb1'} className='text-button-uppercase text-white has-line-before before-white'>Lighting</Link></li>
                        <li><Link href={'/shop/breadcrumb1'} className='text-button-uppercase text-white has-line-before before-white'>Coffee table</Link></li>
                        <li><Link href={'/shop/breadcrumb1'} className='text-button-uppercase text-white has-line-before before-white'>Bed</Link></li>
                        <li><Link href={'/shop/breadcrumb1'} className='text-button-uppercase text-white has-line-before before-white'>Desk</Link></li>
                        <li><Link href={'/shop/breadcrumb1'} className='text-button-uppercase text-white has-line-before before-white'>Nightstand</Link></li>
                        <li><Link href={'/shop/breadcrumb1'} className='text-button-uppercase text-white has-line-before before-white'>Ottoman</Link></li>
                        <li><Link href={'/shop/breadcrumb1'} className='text-button-uppercase text-white has-line-before before-white'>Mattress</Link></li>
                        <li><Link href={'/shop/breadcrumb1'} className='text-button-uppercase text-white has-line-before before-white'>Futon</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MenuCategory
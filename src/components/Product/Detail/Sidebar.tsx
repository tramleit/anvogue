'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProductType } from '@/type/ProductType'
import Product from '../Product'
import Rate from '@/components/Other/Rate'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Scrollbar } from 'swiper/modules';
import 'swiper/css/bundle';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import SwiperCore from 'swiper/core';
import { useCart } from '@/context/CartContext'
import { useModalCartContext } from '@/context/ModalCartContext'
import { useWishlist } from '@/context/WishlistContext'
import { useModalWishlistContext } from '@/context/ModalWishlistContext'
import { useCompare } from '@/context/CompareContext'
import { useModalCompareContext } from '@/context/ModalCompareContext'
import { useRouter } from 'next/navigation';
import ModalSizeguide from '@/components/Modal/ModalSizeguide'

SwiperCore.use([Navigation, Thumbs]);

interface Props {
    data: Array<ProductType>
    productId: string | number | null
}

const Sidebar: React.FC<Props> = ({ data, productId }) => {
    const [openSizeGuide, setOpenSizeGuide] = useState<boolean>(false)
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
    const [activeColor, setActiveColor] = useState<string>('')
    const [activeSize, setActiveSize] = useState<string>('')
    const [activeTab, setActiveTab] = useState<string | undefined>('description')
    const { addToCart, updateCart, cartState } = useCart()
    const { openModalCart } = useModalCartContext()
    const { addToWishlist, removeFromWishlist, wishlistState } = useWishlist()
    const { openModalWishlist } = useModalWishlistContext()
    const { addToCompare, removeFromCompare, compareState } = useCompare();
    const { openModalCompare } = useModalCompareContext()
    let productMain = data.find(product => product.id === productId) as ProductType
    if (productMain === undefined) {
        productMain = data[0]
    }

    const percentSale = Math.floor(100 - ((productMain.price / productMain.originPrice) * 100))
    const router = useRouter()

    const handleOpenSizeGuide = () => {
        setOpenSizeGuide(true);
    };

    const handleCloseSizeGuide = () => {
        setOpenSizeGuide(false);
    };

    const handleTypeClick = (type: string) => {
        router.push(`/shop/breadcrumb1?type=${type}`);
    };

    const handleProductClick = (productId: string) => {
        router.push(`/product/sidebar?id=${productId}`);
    };

    const handleSwiper = (swiper: SwiperCore) => {
        // Do something with the thumbsSwiper instance
        setThumbsSwiper(swiper);
    };

    const handleActiveColor = (item: string) => {
        setActiveColor(item)
    }

    const handleActiveSize = (item: string) => {
        setActiveSize(item)
    }

    const handleIncreaseQuantity = () => {
        productMain.quantityPurchase += 1
        updateCart(productMain.id, productMain.quantityPurchase + 1, activeSize, activeColor);
    };

    const handleDecreaseQuantity = () => {
        if (productMain.quantityPurchase > 1) {
            productMain.quantityPurchase -= 1
            updateCart(productMain.id, productMain.quantityPurchase - 1, activeSize, activeColor);
        }
    };

    const handleAddToCart = () => {
        if (!cartState.cartArray.find(item => item.id === productMain.id)) {
            addToCart({ ...productMain });
            updateCart(productMain.id, productMain.quantityPurchase, activeSize, activeColor)
        } else {
            updateCart(productMain.id, productMain.quantityPurchase, activeSize, activeColor)
        }
        openModalCart()
    };
    const handleAddToWishlist = () => {
        // if product existed in wishlit, remove from wishlist and set state to false
        if (wishlistState.wishlistArray.some(item => item.id === productMain.id)) {
            removeFromWishlist(productMain.id);
        } else {
            // else, add to wishlist and set state to true
            addToWishlist(productMain);
        }
        openModalWishlist();
    };

    const handleAddToCompare = () => {
        // if product existed in wishlit, remove from wishlist and set state to false
        if (compareState.compareArray.length < 3) {
            if (compareState.compareArray.some(item => item.id === productMain.id)) {
                removeFromCompare(productMain.id);
            } else {
                // else, add to wishlist and set state to true
                addToCompare(productMain);
            }
        } else {
            alert('Compare up to 3 products')
        }

        openModalCompare();
    };

    const handleActiveTab = (tab: string) => {
        setActiveTab(tab)
    }

    return (
        <>
            <div className="product-detail sale sidebar">
                <div className="featured-product underwear md:py-20 py-10">
                    <div className="container flex justify-between gap-y-6 flex-wrap max-sm:flex-col-reverse">
                        <div className="sidebar lg:w-1/4 sm:w-[40%] lg:pr-12 sm:pr-10 w-full">
                            <div className="filter-type pb-8 border-b border-line">
                                <div className="heading6">Products Type</div>
                                <div className="list-type mt-4">
                                    {['t-shirt', 'dress', 'top', 'swimwear', 'shirt', 'underwear', 'sets', 'accessories'].map((item, index) => (
                                        <div
                                            key={index}
                                            className={`item flex items-center justify-between cursor-pointer`}
                                            onClick={() => handleTypeClick(item)}
                                        >
                                            <div className='text-secondary has-line-before hover:text-black capitalize'>{item}</div>
                                            <div className='text-secondary2'>
                                                ({data.filter(dataItem => dataItem.type === item && dataItem.category === 'fashion').length})
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="benefit pb-8 border-b border-line mt-8">
                                <div className="heading6">Benefit</div>
                                <div className="list mt-4">
                                    <div className="item flex gap-4">
                                        <div className="icon-delivery-truck text-4xl"></div>
                                        <div>
                                            <div className="text-title">Free Shipping</div>
                                            <div className="text-secondary mt-1">Free Shipping for orders over $90</div>
                                        </div>
                                    </div>
                                    <div className="item flex gap-4 mt-5">
                                        <div className="icon-guarantee text-4xl"></div>
                                        <div>
                                            <div className="text-title">Money Back guarantee</div>
                                            <div className="text-secondary mt-1">100% money back guarantee</div>
                                        </div>
                                    </div>
                                    <div className="item flex gap-4 mt-5">
                                        <div className="icon-phone-call text-4xl"></div>
                                        <div>
                                            <div className="text-title">24/7 online support</div>
                                            <div className="text-secondary mt-1">24 hours a day, 7 days a week</div>
                                        </div>
                                    </div>
                                    <div className="item flex gap-4 mt-5">
                                        <div className="icon-credit-card text-4xl"></div>
                                        <div>
                                            <div className="text-title">Flexible Payment</div>
                                            <div className="text-secondary mt-1">Pay with Multiple Credit Cards</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <div className="heading6">You{String.raw`'ll`} love this too</div>
                                <div className="list">
                                    {data.slice(Number(productId), Number(productId) + 3).map((item) => (
                                        <div
                                            key={item.id}
                                            className='item flex items-center gap-5 mt-4 cursor-pointer'
                                            onClick={() => handleProductClick(item.id)}
                                        >
                                            <Image
                                                src={item.thumbImage[0]}
                                                width={300}
                                                height={500}
                                                alt={item.thumbImage[0]}
                                                className='w-20 aspect-[3/4] object-cover rounded-lg flex-shrink-0'
                                            />
                                            <div>
                                                <div className="text-title">{item.name}</div>
                                                <div className="text-title mt-1">${item.price}.00</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="right lg:w-3/4 sm:w-[60%] sm:pl-3 w-full">
                            <div className='flex max-lg:flex-col justify-between gap-y-6'>
                                <div className="list-img lg:w-1/2 lg:pr-[40px] w-full">
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={0}
                                        thumbs={{ swiper: thumbsSwiper }}
                                        modules={[Thumbs]}
                                        className="mySwiper2 rounded-2xl overflow-hidden"
                                    >
                                        {productMain.images.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <Image
                                                    src={item}
                                                    width={1000}
                                                    height={1000}
                                                    alt='prd-img'
                                                    className='w-full aspect-[3/4] object-cover'
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <Swiper
                                        onSwiper={handleSwiper}
                                        spaceBetween={0}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[Navigation, Thumbs]}
                                        className="mySwiper style-rectangle"
                                    >
                                        {productMain.images.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <Image
                                                    src={item}
                                                    width={1000}
                                                    height={1300}
                                                    alt='prd-img'
                                                    className='w-full aspect-[3/4] object-cover rounded-xl'
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                                <div className="product-infor lg:w-1/2 w-full">
                                    <div className="flex justify-between">
                                        <div>
                                            <div className="caption2 text-secondary font-semibold uppercase">{productMain.type}</div>
                                            <div className="heading4 mt-1">{productMain.name}</div>
                                        </div>
                                        <div
                                            className={`add-wishlist-btn w-12 h-12 flex items-center justify-center border border-line cursor-pointer rounded-xl duration-300 hover:bg-black hover:text-white ${wishlistState.wishlistArray.some(item => item.id === productMain.id) ? 'active' : ''}`}
                                            onClick={handleAddToWishlist}
                                        >
                                            {wishlistState.wishlistArray.some(item => item.id === productMain.id) ? (
                                                <>
                                                    <Icon.Heart size={24} weight='fill' className='text-white' />
                                                </>
                                            ) : (
                                                <>
                                                    <Icon.Heart size={24} />
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-3">
                                        <Rate currentRate={productMain.rate} size={14} />
                                        <span className='caption1 text-secondary'>(1.234 reviews)</span>
                                    </div>
                                    <div className="flex items-center gap-3 flex-wrap mt-5 pb-6 border-b border-line">
                                        <div className="product-price heading5">${productMain.price}.00</div>
                                        <div className='w-px h-4 bg-line'></div>
                                        <div className="product-origin-price font-normal text-secondary2"><del>${productMain.originPrice}.00</del></div>
                                        {productMain.originPrice && (
                                            <div className="product-sale caption2 font-semibold bg-green px-3 py-0.5 inline-block rounded-full">
                                                -{percentSale}%
                                            </div>
                                        )}
                                        <div className='desc text-secondary mt-3'>{productMain.description}</div>
                                    </div>
                                    <div className="list-action mt-6">
                                        <div className="choose-color mt-5">
                                            <div className="text-title">Colors: <span className='text-title color'>{activeColor}</span></div>
                                            <div className="list-color flex items-center gap-2 flex-wrap mt-3">
                                                {productMain.variation.map((item, index) => (
                                                    <div
                                                        className={`color-item w-12 h-12 rounded-xl duration-300 relative ${activeColor === item.color ? 'active' : ''}`}
                                                        key={index}
                                                        onClick={() => handleActiveColor(item.color)}
                                                    >
                                                        <Image
                                                            src={item.colorImage}
                                                            width={100}
                                                            height={100}
                                                            alt='color'
                                                            className='rounded-xl'
                                                        />
                                                        <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                                            {item.color}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="choose-size mt-5">
                                            <div className="heading flex items-center justify-between">
                                                <div className="text-title">Size: <span className='text-title size'>{activeSize}</span></div>
                                                <div
                                                    className="caption1 size-guide text-red underline cursor-pointer"
                                                    onClick={handleOpenSizeGuide}
                                                >
                                                    Size Guide
                                                </div>
                                                <ModalSizeguide data={productMain} isOpen={openSizeGuide} onClose={handleCloseSizeGuide} />
                                            </div>
                                            <div className="list-size flex items-center gap-2 flex-wrap mt-3">
                                                {productMain.sizes.map((item, index) => (
                                                    <div
                                                        className={`size-item ${item === 'freesize' ? 'px-3 py-2' : 'w-12 h-12'} flex items-center justify-center text-button rounded-full bg-white border border-line ${activeSize === item ? 'active' : ''}`}
                                                        key={index}
                                                        onClick={() => handleActiveSize(item)}
                                                    >
                                                        {item}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="text-title mt-5">Quantity:</div>
                                        <div className="choose-quantity flex items-center lg:justify-between gap-5 gap-y-3 mt-3">
                                            <div className="quantity-block md:p-3 max-md:py-1.5 max-md:px-3 flex items-center justify-between rounded-lg border border-line sm:w-[180px] w-[120px] flex-shrink-0">
                                                <Icon.Minus
                                                    size={20}
                                                    onClick={handleDecreaseQuantity}
                                                    className={`${productMain.quantityPurchase === 1 ? 'disabled' : ''} cursor-pointer`}
                                                />
                                                <div className="body1 font-semibold">{productMain.quantityPurchase}</div>
                                                <Icon.Plus
                                                    size={20}
                                                    onClick={handleIncreaseQuantity}
                                                    className='cursor-pointer'
                                                />
                                            </div>
                                            <div onClick={handleAddToCart} className="button-main w-full text-center bg-white text-black border border-black">Add To Cart</div>
                                        </div>
                                        <div className="button-block mt-5">
                                            <div className="button-main w-full text-center">Buy It Now</div>
                                        </div>
                                        <div className="flex items-center lg:gap-20 gap-8 mt-5">
                                            <div className="compare flex items-center gap-3 cursor-pointer" onClick={(e) => { e.stopPropagation(); handleAddToCompare() }}>
                                                <div className="compare-btn md:w-12 md:h-12 w-10 h-10 flex items-center justify-center border border-line cursor-pointer rounded-xl duration-300 hover:bg-black hover:text-white">
                                                    <Icon.ArrowsCounterClockwise className='heading6' />
                                                </div>
                                                <span>Compare</span>
                                            </div>
                                            <div className="share flex items-center gap-3 cursor-pointer">
                                                <div className="share-btn md:w-12 md:h-12 w-10 h-10 flex items-center justify-center border border-line cursor-pointer rounded-xl duration-300 hover:bg-black hover:text-white">
                                                    <Icon.ShareNetwork weight='fill' className='heading6' />
                                                </div>
                                                <span>Share Products</span>
                                            </div>
                                        </div><div className="more-infor mt-6">
                                            <div className="flex items-center gap-4 flex-wrap">
                                                <div className="flex items-center gap-1">
                                                    <Icon.ArrowClockwise className='body1' />
                                                    <div className="text-title">Delivery & Return</div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Icon.Question className='body1' />
                                                    <div className="text-title">Ask A Question</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 mt-3">
                                                <Icon.Timer className='body1' />
                                                <div className="text-title">Estimated Delivery:</div>
                                                <div className="text-secondary">14 January - 18 January</div>
                                            </div>
                                            <div className="flex items-center gap-1 mt-3">
                                                <Icon.Eye className='body1' />
                                                <div className="text-title">38</div>
                                                <div className="text-secondary">people viewing this product right now!</div>
                                            </div>
                                            <div className="flex items-center gap-1 mt-3">
                                                <div className="text-title">SKU:</div>
                                                <div className="text-secondary">53453412</div>
                                            </div>
                                            <div className="flex items-center gap-1 mt-3">
                                                <div className="text-title">Categories:</div>
                                                <div className="text-secondary">{productMain.category}, {productMain.gender}</div>
                                            </div>
                                            <div className="flex items-center gap-1 mt-3">
                                                <div className="text-title">Tag:</div>
                                                <div className="text-secondary">{productMain.type}</div>
                                            </div>
                                        </div>
                                        <div className="list-payment mt-7">
                                            <div className="main-content lg:pt-8 pt-6 lg:pb-6 pb-4 sm:px-4 px-3 border border-line rounded-xl relative max-md:w-2/3 max-sm:w-full">
                                                <div className="heading6 px-5 bg-white absolute -top-[14px] left-1/2 -translate-x-1/2 whitespace-nowrap">Guranteed safe checkout</div>
                                                <div className="list grid grid-cols-6">
                                                    <div className="item flex items-center justify-center lg:px-3 px-1">
                                                        <Image
                                                            src={'/images/payment/Frame-0.png'}
                                                            width={500}
                                                            height={450}
                                                            alt='payment'
                                                            className='w-full'
                                                        />
                                                    </div>
                                                    <div className="item flex items-center justify-center lg:px-3 px-1">
                                                        <Image
                                                            src={'/images/payment/Frame-1.png'}
                                                            width={500}
                                                            height={450}
                                                            alt='payment'
                                                            className='w-full'
                                                        />
                                                    </div>
                                                    <div className="item flex items-center justify-center lg:px-3 px-1">
                                                        <Image
                                                            src={'/images/payment/Frame-2.png'}
                                                            width={500}
                                                            height={450}
                                                            alt='payment'
                                                            className='w-full'
                                                        />
                                                    </div>
                                                    <div className="item flex items-center justify-center lg:px-3 px-1">
                                                        <Image
                                                            src={'/images/payment/Frame-3.png'}
                                                            width={500}
                                                            height={450}
                                                            alt='payment'
                                                            className='w-full'
                                                        />
                                                    </div>
                                                    <div className="item flex items-center justify-center lg:px-3 px-1">
                                                        <Image
                                                            src={'/images/payment/Frame-4.png'}
                                                            width={500}
                                                            height={450}
                                                            alt='payment'
                                                            className='w-full'
                                                        />
                                                    </div>
                                                    <div className="item flex items-center justify-center lg:px-3 px-1">
                                                        <Image
                                                            src={'/images/payment/Frame-5.png'}
                                                            width={500}
                                                            height={450}
                                                            alt='payment'
                                                            className='w-full'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="desc-tab mt-[60px]">
                                <div className="flex items-center w-full">
                                    <div className="menu-tab flex items-center lg:gap-[60px] gap-8">
                                        <div
                                            className={`tab-item heading5 has-line-before text-secondary2 hover:text-black duration-300 ${activeTab === 'description' ? 'active' : ''}`}
                                            onClick={() => handleActiveTab('description')}
                                        >
                                            Description
                                        </div>
                                        <div
                                            className={`tab-item heading5 has-line-before text-secondary2 hover:text-black duration-300 ${activeTab === 'specifications' ? 'active' : ''}`}
                                            onClick={() => handleActiveTab('specifications')}
                                        >
                                            Specifications
                                        </div>
                                        <div
                                            className={`tab-item heading5 has-line-before text-secondary2 hover:text-black duration-300 ${activeTab === 'review' ? 'active' : ''}`}
                                            onClick={() => handleActiveTab('review')}
                                        >
                                            Review
                                        </div>
                                    </div>
                                </div>
                                <div className="desc-block mt-8">
                                    <div className={`desc-item description ${activeTab === 'description' ? 'open' : ''}`}>
                                        <div className='grid lg:grid-cols-2 gap-8 gap-y-5'>
                                            <div className="left">
                                                <div className="heading6">Description</div>
                                                <div className="text-secondary mt-2">Keep your home organized, yet elegant with storage cabinets by Onita Patio Furniture. These cabinets not only make a great storage units, but also bring a great decorative accent to your decor. Traditionally designed, they are perfect to be used in the hallway, living room, bedroom, office or any place where you need to store or display things. Made of high quality materials, they are sturdy and durable for years. Bring one-of-a-kind look to your interior with furniture from Onita Furniture!</div>
                                            </div>
                                            <div className="right">
                                                <div className="heading6">About This Products</div>
                                                <div className="list-feature">
                                                    <div className="item flex gap-1 text-secondary mt-1">
                                                        <Icon.Dot size={28} />
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    </div>
                                                    <div className="item flex gap-1 text-secondary mt-1">
                                                        <Icon.Dot size={28} />
                                                        <p>Nulla luctus libero quis mauris vestibulum dapibus.</p>
                                                    </div>
                                                    <div className="item flex gap-1 text-secondary mt-1">
                                                        <Icon.Dot size={28} />
                                                        <p>Maecenas ullamcorper erat mi, vel consequat enim suscipit at.</p>
                                                    </div>
                                                    <div className="item flex gap-1 text-secondary mt-1">
                                                        <Icon.Dot size={28} />
                                                        <p>Quisque consectetur nibh ac urna molestie scelerisque.</p>
                                                    </div>
                                                    <div className="item flex gap-1 text-secondary mt-1">
                                                        <Icon.Dot size={28} />
                                                        <p>Mauris in nisl scelerisque massa consectetur pretium sed et mauris.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid lg:grid-cols-4 grid-cols-2 gap-[30px] md:mt-10 mt-6">
                                            <div className="item">
                                                <div className="icon-delivery-truck text-4xl"></div>
                                                <div className="heading6 mt-4">Shipping Faster</div>
                                                <div className="text-secondary mt-2">Use on walls, furniture, doors and many more surfaces. The possibilities are endless.</div>
                                            </div>
                                            <div className="item">
                                                <div className="icon-cotton text-4xl"></div>
                                                <div className="heading6 mt-4">Cotton Material</div>
                                                <div className="text-secondary mt-2">Use on walls, furniture, doors and many more surfaces. The possibilities are endless.</div>
                                            </div>
                                            <div className="item">
                                                <div className="icon-guarantee text-4xl"></div>
                                                <div className="heading6 mt-4">High Quality</div>
                                                <div className="text-secondary mt-2">Use on walls, furniture, doors and many more surfaces. The possibilities are endless.</div>
                                            </div>
                                            <div className="item">
                                                <div className="icon-leaves-compatible text-4xl"></div>
                                                <div className="heading6 mt-4">highly compatible</div>
                                                <div className="text-secondary mt-2">Use on walls, furniture, doors and many more surfaces. The possibilities are endless.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`desc-item specifications flex items-center ${activeTab === 'specifications' ? 'open' : ''}`}>
                                        <div className='lg:w-1/2 w-full'>
                                            <div className="item bg-surface flex items-center gap-8 py-3 px-10">
                                                <div className="text-title sm:w-1/4 w-1/3">Rating</div>
                                                <div className="flex items-center gap-1">
                                                    <Rate currentRate={4} size={12} />
                                                    <p>(1.234)</p>
                                                </div>
                                            </div>
                                            <div className="item flex items-center gap-8 py-3 px-10">
                                                <div className="text-title sm:w-1/4 w-1/3">Outer Shell</div>
                                                <p>100% polyester</p>
                                            </div>
                                            <div className="item bg-surface flex items-center gap-8 py-3 px-10">
                                                <div className="text-title sm:w-1/4 w-1/3">Lining</div>
                                                <p>100% polyurethane</p>
                                            </div>
                                            <div className="item flex items-center gap-8 py-3 px-10">
                                                <div className="text-title sm:w-1/4 w-1/3">Size</div>
                                                <p>S, M, L, XL</p>
                                            </div>
                                            <div className="item bg-surface flex items-center gap-8 py-3 px-10">
                                                <div className="text-title sm:w-1/4 w-1/3">Colors</div>
                                                <p>Grey, Red, Blue, Black</p>
                                            </div>
                                            <div className="item flex items-center gap-8 py-3 px-10">
                                                <div className="text-title sm:w-1/4 w-1/3">Care</div>
                                                <div className="flex items-center gap-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <g clipPath="url(#clip0_5544_36682)">
                                                            <path d="M8 0C3.58167 0 0 3.58167 0 8C0 12.4183 3.58167 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58167 12.416 0.005 8 0ZM8 0.533333C9.88787 0.532223 11.7055 1.24913 13.0843 2.53867L12.7273 2.89567C12.6423 2.74067 12.5637 2.60067 12.4987 2.48567C12.4734 2.44723 12.439 2.41567 12.3985 2.39383C12.358 2.37199 12.3127 2.36056 12.2667 2.36056C12.2207 2.36056 12.1754 2.37199 12.1349 2.39383C12.0944 2.41567 12.0599 2.44723 12.0347 2.48567C11.7523 2.98567 11.2397 3.919 10.8613 4.76033L9.57333 6.04867C8.67742 4.37428 7.69142 2.74967 6.61967 1.182C6.5938 1.14833 6.56054 1.12105 6.52245 1.10228C6.48436 1.08351 6.44246 1.07375 6.4 1.07375C6.35754 1.07375 6.31564 1.08351 6.27755 1.10228C6.23947 1.12105 6.2062 1.14833 6.18033 1.182C6.00467 1.43667 1.86667 7.45467 1.86667 9.86667C1.86568 10.912 2.22762 11.9252 2.89067 12.7333L2.53867 13.0843C1.54675 12.021 0.887151 10.6911 0.64095 9.25796C0.394749 7.82483 0.572679 6.35099 1.15287 5.01763C1.73305 3.68427 2.69021 2.54949 3.90667 1.75282C5.12313 0.956136 6.54588 0.532273 8 0.533333ZM11.309 5.06833L12.5973 3.77967C13.1823 4.89667 13.5523 5.77033 13.6 6.16667C13.6 6.52029 13.4595 6.85943 13.2095 7.10948C12.9594 7.35952 12.6203 7.5 12.2667 7.5C11.913 7.5 11.5739 7.35952 11.3239 7.10948C11.0738 6.85943 10.9333 6.52029 10.9333 6.16667C11.0119 5.78564 11.1382 5.41605 11.3093 5.06667L11.309 5.06833ZM12.0403 3.58267C12.113 3.446 12.188 3.307 12.2667 3.16433C12.29 3.206 12.3117 3.247 12.3333 3.28867L12.0403 3.58267ZM3.27133 12.3517C2.70712 11.6463 2.39982 10.7699 2.4 9.86667C2.4 7.92 5.53333 3.104 6.4 1.809C7.40603 3.30442 8.33394 4.85093 9.18 6.44233L3.27133 12.3517ZM9.43133 6.945C9.993 8.092 10.4 9.16667 10.4 9.86667C10.4011 10.6512 10.1711 11.4187 9.73879 12.0735C9.30647 12.7282 8.69095 13.2411 7.96901 13.5482C7.24706 13.8554 6.45066 13.9432 5.67915 13.8006C4.90765 13.6581 4.19519 13.2915 3.63067 12.7467L9.43133 6.945ZM8 15.4667C6.11213 15.4678 4.29449 14.7509 2.91567 13.4613L3.25333 13.123C3.89235 13.7426 4.6998 14.1601 5.57477 14.3234C6.44975 14.4866 7.35344 14.3884 8.1729 14.041C8.99236 13.6935 9.69124 13.1122 10.1822 12.3698C10.6732 11.6274 10.9344 10.7567 10.9333 9.86667C10.9333 9.052 10.4607 7.82533 9.82833 6.54867L10.4333 5.94467C10.4197 6.00504 10.4094 6.06614 10.4027 6.12767C10.4027 6.13833 10.401 6.14933 10.401 6.161C10.401 6.65607 10.5977 7.13087 10.9477 7.48093C11.2978 7.831 11.7726 8.02767 12.2677 8.02767C12.7627 8.02767 13.2375 7.831 13.5876 7.48093C13.9377 7.13087 14.1343 6.65607 14.1343 6.161C14.1343 6.15067 14.1343 6.14033 14.1327 6.13C14.0713 5.527 13.4867 4.31967 12.9927 3.38767L13.4623 2.918C14.4535 3.98144 15.1125 5.31128 15.3582 6.74411C15.604 8.17694 15.4258 9.65035 14.8456 10.9833C14.2653 12.3162 13.3084 13.4506 12.0922 14.2471C10.8761 15.0436 9.45375 15.4675 8 15.4667Z" fill="#1F1F1F" />
                                                            <path d="M13.3258 10.5101C13.3301 10.478 13.3288 10.4454 13.3218 10.4138C13.1848 9.94263 13.001 9.48635 12.7731 9.0518C12.7513 9.00671 12.7172 8.96869 12.6747 8.94208C12.6323 8.91548 12.5832 8.90137 12.5331 8.90137C12.483 8.90137 12.4339 8.91548 12.3915 8.94208C12.349 8.96869 12.3149 9.00671 12.2931 9.0518C12.0652 9.4863 11.8815 9.94259 11.7448 10.4138C11.7378 10.4454 11.7364 10.478 11.7408 10.5101C11.7672 10.7016 11.862 10.877 12.0076 11.0039C12.1533 11.1309 12.34 11.2008 12.5333 11.2008C12.7265 11.2008 12.9132 11.1309 13.0589 11.0039C13.2046 10.877 13.2994 10.7016 13.3258 10.5101ZM12.5331 10.6668C12.4763 10.6669 12.421 10.6488 12.3752 10.6152C12.3294 10.5816 12.2955 10.5343 12.2784 10.4801C12.3491 10.2506 12.4341 10.0257 12.5331 9.8068C12.6322 10.0254 12.7173 10.2501 12.7878 10.4795C12.7706 10.5336 12.7367 10.5809 12.6909 10.6146C12.6451 10.6482 12.5899 10.6665 12.5331 10.6668Z" fill="#1F1F1F" />
                                                            <path d="M14.1329 11.4668H13.5996V12.0001H14.1329V11.4668Z" fill="#1F1F1F" />
                                                            <path d="M13.3341 11.4668H12.8008V12.0001H13.3341V11.4668Z" fill="#1F1F1F" />
                                                            <path d="M14.1329 10.666H13.5996V11.1993H14.1329V10.666Z" fill="#1F1F1F" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_5544_36682">
                                                                <rect width="16" height="16" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                        <g clipPath="url(#clip0_5544_36689)">
                                                            <path d="M18.4739 3.94612C18.364 3.12175 17.6536 2.5 16.8219 2.5H7.08324C6.85293 2.5 6.66656 2.68636 6.66656 2.91667C6.66656 3.14698 6.85293 3.33335 7.08324 3.33335H16.8219C17.2378 3.33335 17.5934 3.64421 17.6479 4.05639L18.2184 8.33329H15.0445L17.3362 6.58077C17.5193 6.4412 17.5535 6.17957 17.4143 5.99687C17.2736 5.81336 17.0123 5.78 16.83 5.91914L13.6731 8.33325H7.08324C6.84371 8.33325 6.60707 8.34587 6.3736 8.36923L3.16969 5.91914C2.98657 5.77996 2.72618 5.81336 2.5854 5.99687C2.44626 6.17957 2.48044 6.4412 2.66352 6.58077L5.2733 8.57645C2.24326 9.37937 0 12.1372 0 15.4165C0 15.6468 0.186365 15.8332 0.416675 15.8332H3.86558L2.66356 16.7523C2.48048 16.8919 2.4463 17.1535 2.58544 17.3362C2.66763 17.4437 2.79133 17.4998 2.91665 17.4998C3.00536 17.4998 3.09407 17.4717 3.16973 17.414L5.23693 15.8332H14.7629L16.8301 17.414C16.9058 17.4717 16.9945 17.4998 17.0832 17.4998C17.2085 17.4998 17.3322 17.4437 17.4144 17.3362C17.5535 17.1535 17.5194 16.8919 17.3362 16.7523L16.1342 15.8332H19.5831C19.7036 15.8332 19.8175 15.7815 19.8964 15.6912C19.9754 15.6004 20.012 15.4804 19.9966 15.3616L18.4739 3.94612ZM12.5834 9.16656L9.99988 11.1422L7.4164 9.16656H12.5834ZM0.847178 14.9999C1.04128 12.0611 3.27824 9.67804 6.14626 9.24398L9.31427 11.6665L4.95533 14.9998H0.847178V14.9999ZM6.32665 14.9999L9.99988 12.1909L13.6731 14.9999H6.32665ZM15.0445 14.9999L10.6855 11.6666L13.9548 9.1666H18.3299L19.107 14.9999H15.0445Z" fill="#1F1F1F" />
                                                            <path d="M18.4739 3.94612C18.364 3.12175 17.6536 2.5 16.8219 2.5H7.08324C6.85293 2.5 6.66656 2.68636 6.66656 2.91667C6.66656 3.14698 6.85293 3.33335 7.08324 3.33335H16.8219C17.2378 3.33335 17.5934 3.64421 17.6479 4.05639L18.2184 8.33329H15.0445L17.3362 6.58077C17.5193 6.4412 17.5535 6.17957 17.4143 5.99687C17.2736 5.81336 17.0123 5.78 16.83 5.91914L13.6731 8.33325H7.08324C6.84371 8.33325 6.60707 8.34587 6.3736 8.36923L3.16969 5.91914C2.98657 5.77996 2.72618 5.81336 2.5854 5.99687C2.44626 6.17957 2.48044 6.4412 2.66352 6.58077L5.2733 8.57645C2.24326 9.37937 0 12.1372 0 15.4165C0 15.6468 0.186365 15.8332 0.416675 15.8332H3.86558L2.66356 16.7523C2.48048 16.8919 2.4463 17.1535 2.58544 17.3362C2.66763 17.4437 2.79133 17.4998 2.91665 17.4998C3.00536 17.4998 3.09407 17.4717 3.16973 17.414L5.23693 15.8332H14.7629L16.8301 17.414C16.9058 17.4717 16.9945 17.4998 17.0832 17.4998C17.2085 17.4998 17.3322 17.4437 17.4144 17.3362C17.5535 17.1535 17.5194 16.8919 17.3362 16.7523L16.1342 15.8332H19.5831C19.7036 15.8332 19.8175 15.7815 19.8964 15.6912C19.9754 15.6004 20.012 15.4804 19.9966 15.3616L18.4739 3.94612ZM12.5834 9.16656L9.99988 11.1422L7.4164 9.16656H12.5834ZM0.847178 14.9999C1.04128 12.0611 3.27824 9.67804 6.14626 9.24398L9.31427 11.6665L4.95533 14.9998H0.847178V14.9999ZM6.32665 14.9999L9.99988 12.1909L13.6731 14.9999H6.32665ZM15.0445 14.9999L10.6855 11.6666L13.9548 9.1666H18.3299L19.107 14.9999H15.0445Z" fill="#1F1F1F" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_5544_36689">
                                                                <rect width="20" height="20" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                                        <g clipPath="url(#clip0_5544_36692)">
                                                            <path d="M15.1309 14.3723H2.6163C2.55417 14.372 2.49399 14.3505 2.44573 14.3114C2.39747 14.2723 2.36404 14.2178 2.35096 14.1571L0.00581614 1.96527C-0.00150672 1.93088 -0.00191806 1.89536 0.00460146 1.86081C0.011121 1.82625 0.0244481 1.79335 0.0437997 1.76398C0.0631512 1.73462 0.0881419 1.7094 0.117326 1.68978C0.146511 1.67016 0.179306 1.65655 0.213801 1.64972C0.248701 1.64246 0.284706 1.64231 0.319664 1.64928C0.354622 1.65625 0.387814 1.67019 0.417266 1.69027C0.446718 1.71035 0.47182 1.73617 0.491077 1.76616C0.510335 1.79616 0.523358 1.82973 0.529356 1.86487L2.86732 13.8344H14.9372L17.2107 1.85052C17.2158 1.81568 17.228 1.78224 17.2465 1.75229C17.265 1.72233 17.2895 1.69647 17.3184 1.67632C17.3472 1.65617 17.38 1.64214 17.4145 1.6351C17.449 1.62805 17.4846 1.62815 17.519 1.63537C17.5542 1.64137 17.5877 1.65438 17.6177 1.67364C17.6477 1.6929 17.6735 1.71801 17.6936 1.74746C17.7137 1.77691 17.7276 1.8101 17.7346 1.84506C17.7416 1.88002 17.7415 1.91602 17.7342 1.95093L15.3891 14.1428C15.3774 14.2048 15.3446 14.2609 15.2962 14.3015C15.2478 14.342 15.1868 14.3645 15.1237 14.3651L15.1309 14.3723Z" fill="#1F1F1F" />
                                                            <path d="M12.7509 5.15568C12.0105 5.17359 11.2807 4.97682 10.6496 4.58911C10.0944 4.25817 9.46004 4.08346 8.81367 4.08346C8.1673 4.08346 7.53295 4.25817 6.97772 4.58911C6.3409 4.96016 5.61705 5.15566 4.88001 5.15566C4.14297 5.15566 3.41913 4.96016 2.7823 4.58911C2.23372 4.24251 1.5951 4.0654 0.946355 4.07993C0.875303 4.07995 0.807049 4.05222 0.756142 4.00266C0.705235 3.95309 0.675698 3.88559 0.673828 3.81457C0.675644 3.74286 0.704941 3.6746 0.755661 3.62388C0.80638 3.57316 0.87465 3.54387 0.946355 3.54205C1.68751 3.52628 2.41735 3.72556 3.04765 4.11579C3.5948 4.4589 4.23079 4.63348 4.87643 4.6178C5.52666 4.63419 6.16744 4.45966 6.71954 4.11579C7.35353 3.74029 8.07682 3.54216 8.81367 3.54216C9.55052 3.54216 10.2738 3.74029 10.9078 4.11579C11.4639 4.4481 12.0995 4.62358 12.7473 4.62358C13.3951 4.62358 14.0308 4.4481 14.5869 4.11579C15.2139 3.72422 15.9419 3.52477 16.681 3.54205C16.7533 3.54205 16.8226 3.57076 16.8737 3.62187C16.9248 3.67298 16.9535 3.74229 16.9535 3.81457C16.9535 3.85002 16.9464 3.88513 16.9327 3.9178C16.9189 3.95047 16.8987 3.98005 16.8733 4.00479C16.8479 4.02953 16.8178 4.04892 16.7847 4.06183C16.7517 4.07473 16.7165 4.08088 16.681 4.07993C16.0323 4.0654 15.3936 4.24251 14.8451 4.58911C14.2162 4.97586 13.489 5.17261 12.7509 5.15568Z" fill="#1F1F1F" />
                                                            <path d="M14.9251 16C14.8852 16 14.8457 15.991 14.8097 15.9736C14.7736 15.9562 14.742 15.9309 14.7172 15.8996L2.61139 0.430295C2.58973 0.402512 2.57375 0.370733 2.56437 0.336775C2.55499 0.302817 2.55239 0.26734 2.55672 0.232378C2.56105 0.197415 2.57223 0.163648 2.5896 0.133004C2.60698 0.102359 2.63023 0.0754368 2.65801 0.0537754C2.68579 0.0321141 2.71757 0.0161333 2.75153 0.00675291C2.78549 -0.00262746 2.82095 -0.005225 2.85592 -0.000896318C2.89088 0.00343237 2.92465 0.014609 2.95529 0.0319877C2.98593 0.0493664 3.01286 0.07261 3.03452 0.100393L15.1331 15.5697C15.1557 15.5966 15.1726 15.6278 15.1827 15.6615C15.1929 15.6951 15.196 15.7305 15.192 15.7654C15.188 15.8004 15.1769 15.8341 15.1593 15.8645C15.1418 15.895 15.1183 15.9216 15.0901 15.9426C15.0429 15.9793 14.9849 15.9995 14.9251 16Z" fill="#1F1F1F" />
                                                            <path d="M2.82464 16.0001C2.76466 16.0008 2.70635 15.9805 2.6597 15.9428C2.63183 15.9216 2.60841 15.8952 2.5908 15.865C2.57319 15.8348 2.56173 15.8014 2.55706 15.7667C2.5524 15.7321 2.55462 15.6968 2.56362 15.663C2.57262 15.6293 2.58821 15.5976 2.60949 15.5698L14.7153 0.100544C14.7369 0.0732209 14.7637 0.0504354 14.7942 0.0334844C14.8247 0.0165334 14.8582 0.00574553 14.8928 0.00174941C14.9275 -0.00224671 14.9625 0.000618864 14.9961 0.0101865C15.0296 0.0197542 15.0609 0.0358419 15.0882 0.0575155C15.1164 0.0785597 15.1399 0.105126 15.1574 0.135595C15.175 0.166063 15.1861 0.199792 15.1901 0.234706C15.1941 0.269621 15.191 0.304986 15.1808 0.338644C15.1707 0.372301 15.1538 0.403543 15.1312 0.430445L3.03262 15.8997C3.00776 15.9311 2.97614 15.9564 2.94013 15.9737C2.90411 15.9911 2.86463 16.0002 2.82464 16.0001Z" fill="#1F1F1F" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_5544_36692">
                                                                <rect width="17.7499" height="16" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`desc-item review-block ${activeTab === 'review' ? 'open' : ''}`}>
                                        <div className="top-overview flex max-lg:flex-col lg:items-center max-sm:items-center justify-between gap-12 gap-y-4">
                                            <div className="left flex max-sm:flex-col gap-y-4 items-center justify-between lg:w-1/2 w-full lg:pr-5">
                                                <div className='rating black-start flex flex-col items-center'>
                                                    <div className="text-display">4.6</div>
                                                    <Rate currentRate={5} size={18} />
                                                    <div className='text-center whitespace-nowrap mt-1'>(1,968 Ratings)</div>
                                                </div>
                                                <div className="list-rating w-2/3">
                                                    <div className="item flex items-center justify-end gap-1.5">
                                                        <div className="flex items-center gap-1">
                                                            <div className="caption1">5</div>
                                                            <Icon.Star size={14} weight='fill' />
                                                        </div>
                                                        <div className="progress bg-line relative w-3/4 h-2">
                                                            <div className="progress-percent absolute bg-black w-[50%] h-full left-0 top-0"></div>
                                                        </div>
                                                        <div className="caption1">50%</div>
                                                    </div>
                                                    <div className="item flex items-center justify-end gap-1.5 mt-1">
                                                        <div className="flex items-center gap-1">
                                                            <div className="caption1">4</div>
                                                            <Icon.Star size={14} weight='fill' />
                                                        </div>
                                                        <div className="progress bg-line relative w-3/4 h-2">
                                                            <div className="progress-percent absolute bg-black w-[20%] h-full left-0 top-0"></div>
                                                        </div>
                                                        <div className="caption1">20%</div>
                                                    </div>
                                                    <div className="item flex items-center justify-end gap-1.5 mt-1">
                                                        <div className="flex items-center gap-1">
                                                            <div className="caption1">3</div>
                                                            <Icon.Star size={14} weight='fill' />
                                                        </div>
                                                        <div className="progress bg-line relative w-3/4 h-2">
                                                            <div className="progress-percent absolute bg-black w-[10%] h-full left-0 top-0"></div>
                                                        </div>
                                                        <div className="caption1">10%</div>
                                                    </div>
                                                    <div className="item flex items-center justify-end gap-1.5 mt-1">
                                                        <div className="flex items-center gap-1">
                                                            <div className="caption1">2</div>
                                                            <Icon.Star size={14} weight='fill' />
                                                        </div>
                                                        <div className="progress bg-line relative w-3/4 h-2">
                                                            <div className="progress-percent absolute bg-black w-[10%] h-full left-0 top-0"></div>
                                                        </div>
                                                        <div className="caption1">10%</div>
                                                    </div>
                                                    <div className="item flex items-center justify-end gap-1.5 mt-1">
                                                        <div className="flex items-center gap-2">
                                                            <div className="caption1">1</div>
                                                            <Icon.Star size={14} weight='fill' />
                                                        </div>
                                                        <div className="progress bg-line relative w-3/4 h-2">
                                                            <div className="progress-percent absolute bg-black w-[10%] h-full left-0 top-0"></div>
                                                        </div>
                                                        <div className="caption1">10%</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="right">
                                                <Link href={'#form-review'} className='button-main bg-white text-black border border-black whitespace-nowrap'>Write Reviews</Link>
                                            </div>
                                        </div>
                                        <div className="mt-8">
                                            <div className="heading flex items-center justify-between flex-wrap gap-4">
                                                <div className="heading4">03 Comments</div>
                                                <div className="right flex items-center gap-3">
                                                    <label htmlFor='select-filter' className="uppercase">Sort by:</label>
                                                    <div className="select-block relative">
                                                        <select
                                                            id="select-filter"
                                                            name="select-filter"
                                                            className='text-button py-2 pl-3 md:pr-14 pr-10 rounded-lg bg-white border border-line'
                                                            defaultValue={'Sorting'}
                                                        >
                                                            <option value="Sorting" disabled>Sorting</option>
                                                            <option value="newest">Newest</option>
                                                            <option value="5star">5 Star</option>
                                                            <option value="4star">4 Star</option>
                                                            <option value="3star">3 Star</option>
                                                            <option value="2star">2 Star</option>
                                                            <option value="1star">1 Star</option>
                                                        </select>
                                                        <Icon.CaretDown size={12} className='absolute top-1/2 -translate-y-1/2 md:right-4 right-2' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-review mt-6">
                                                <div className="item">
                                                    <div className="heading flex items-center justify-between">
                                                        <div className="user-infor flex gap-4">
                                                            <div className="avatar">
                                                                <Image
                                                                    src={'/images/avatar/1.png'}
                                                                    width={200}
                                                                    height={200}
                                                                    alt='img'
                                                                    className='w-[52px] aspect-square rounded-full'
                                                                />
                                                            </div>
                                                            <div className="user">
                                                                <div className="flex items-center gap-2">
                                                                    <div className="text-title">Tony Nguyen</div>
                                                                    <div className="span text-line">-</div>
                                                                    <Rate currentRate={5} size={12} />
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <div className="text-secondary2">1 days ago</div>
                                                                    <div className="text-secondary2">-</div>
                                                                    <div className="text-secondary2"><span>Yellow</span> / <span>XL</span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="more-action cursor-pointer">
                                                            <Icon.DotsThree size={24} weight='bold' />
                                                        </div>
                                                    </div>
                                                    <div className="mt-3">I can{String.raw`'t`} get enough of the fashion pieces from this brand. They have a great selection for every occasion and the prices are reasonable. The shipping is fast and the items always arrive in perfect condition.</div>
                                                    <div className="action mt-3">
                                                        <div className="flex items-center gap-4">
                                                            <div className="like-btn flex items-center gap-1 cursor-pointer">
                                                                <Icon.HandsClapping size={18} />
                                                                <div className="text-button">20</div>
                                                            </div>
                                                            <Link href={'#form-review'} className="reply-btn text-button text-secondary cursor-pointer hover:text-black">Reply</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item mt-8">
                                                    <div className="heading flex items-center justify-between">
                                                        <div className="user-infor flex gap-4">
                                                            <div className="avatar">
                                                                <Image
                                                                    src={'/images/avatar/2.png'}
                                                                    width={200}
                                                                    height={200}
                                                                    alt='img'
                                                                    className='w-[52px] aspect-square rounded-full'
                                                                />
                                                            </div>
                                                            <div className="user">
                                                                <div className="flex items-center gap-2">
                                                                    <div className="text-title">Guy Hawkins</div>
                                                                    <div className="span text-line">-</div>
                                                                    <Rate currentRate={4} size={12} />
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <div className="text-secondary2">1 days ago</div>
                                                                    <div className="text-secondary2">-</div>
                                                                    <div className="text-secondary2"><span>Yellow</span> / <span>XL</span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="more-action cursor-pointer">
                                                            <Icon.DotsThree size={24} weight='bold' />
                                                        </div>
                                                    </div>
                                                    <div className="mt-3">I can{String.raw`'t`} get enough of the fashion pieces from this brand. They have a great selection for every occasion and the prices are reasonable. The shipping is fast and the items always arrive in perfect condition.</div>
                                                    <div className="action mt-3">
                                                        <div className="flex items-center gap-4">
                                                            <div className="like-btn flex items-center gap-1 cursor-pointer">
                                                                <Icon.HandsClapping size={18} />
                                                                <div className="text-button">20</div>
                                                            </div>
                                                            <Link href={'#form-review'} className="reply-btn text-button text-secondary cursor-pointer hover:text-black">Reply</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item mt-8">
                                                    <div className="heading flex items-center justify-between">
                                                        <div className="user-infor flex gap-4">
                                                            <div className="avatar">
                                                                <Image
                                                                    src={'/images/avatar/3.png'}
                                                                    width={200}
                                                                    height={200}
                                                                    alt='img'
                                                                    className='w-[52px] aspect-square rounded-full'
                                                                />
                                                            </div>
                                                            <div className="user">
                                                                <div className="flex items-center gap-2">
                                                                    <div className="text-title">John Smith</div>
                                                                    <div className="span text-line">-</div>
                                                                    <Rate currentRate={5} size={12} />
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <div className="text-secondary2">1 days ago</div>
                                                                    <div className="text-secondary2">-</div>
                                                                    <div className="text-secondary2"><span>Yellow</span> / <span>XL</span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="more-action cursor-pointer">
                                                            <Icon.DotsThree size={24} weight='bold' />
                                                        </div>
                                                    </div>
                                                    <div className="mt-3">I can{String.raw`'t`} get enough of the fashion pieces from this brand. They have a great selection for every occasion and the prices are reasonable. The shipping is fast and the items always arrive in perfect condition.</div>
                                                    <div className="action mt-3">
                                                        <div className="flex items-center gap-4">
                                                            <div className="like-btn flex items-center gap-1 cursor-pointer">
                                                                <Icon.HandsClapping size={18} />
                                                                <div className="text-button">20</div>
                                                            </div>
                                                            <Link href={'#form-review'} className="reply-btn text-button text-secondary cursor-pointer hover:text-black">Reply</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="form-review" className='form-review pt-6'>
                                                <div className="heading4">Leave A comment</div>
                                                <form className="grid sm:grid-cols-2 gap-4 gap-y-5 md:mt-6 mt-3">
                                                    <div className="name ">
                                                        <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="username" type="text" placeholder="Your Name *" required />
                                                    </div>
                                                    <div className="mail ">
                                                        <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="email" type="email" placeholder="Your Email *" required />
                                                    </div>
                                                    <div className="col-span-full message">
                                                        <textarea className="border border-line px-4 py-3 w-full rounded-lg" id="message" name="message" placeholder="Your message *" required ></textarea>
                                                    </div>
                                                    <div className="col-span-full flex items-start -mt-2 gap-2">
                                                        <input type="checkbox" id="saveAccount" name="saveAccount" className='mt-1.5' />
                                                        <label className="" htmlFor="saveAccount">Save my name, email, and website in this browser for the next time I comment.</label>
                                                    </div>
                                                    <div className="col-span-full sm:pt-3">
                                                        <button className='button-main bg-white text-black border border-black'>Submit Reviews</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="related-product md:pb-20 pb-10">
                    <div className="container">
                        <div className="heading3 text-center">Related Products</div>
                        <div className="list-product hide-product-sold  grid lg:grid-cols-4 grid-cols-2 md:gap-[30px] gap-5 md:mt-10 mt-6">
                            {
                                data.slice(Number(productId), Number(productId) + 4).length < 4 ? (
                                    <>
                                        {
                                            data.slice(0, 4).map((item, index) => (
                                                <Product key={index} data={item} type='grid' />
                                            ))
                                        }
                                    </>
                                ) : (
                                    <>
                                        {
                                            data.slice(Number(productId), Number(productId) + 4).map((item, index) => (
                                                <Product key={index} data={item} type='grid' />
                                            ))
                                        }
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Sidebar
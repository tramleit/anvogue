'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface Props {
    onTypeChange: (type: string) => void;
}

const BreadcrumbImg: React.FC<Props> = ({ onTypeChange }) => {
    const [type, setType] = useState('t-shirt')

    const handleType = (newType: string) => {
        setType(newType)
        onTypeChange(newType)
    }

    return (
        <>
            <div className="breadcrumb-block style-img">
                <div className="breadcrumb-main bg-linear overflow-hidden">
                    <div className="container lg:pt-[134px] pt-24 pb-10 relative">
                        <div className="main-content w-full h-full flex flex-col items-center justify-center relative z-[1]">
                            <div className="text-content">
                                <div className="heading2 text-center">Women</div>
                                <div className="link flex items-center gap-1 caption1 mt-3">
                                    <Link href={'/'}>Homepage</Link>
                                    <Icon.CaretRight size={14} className='text-secondary2' />
                                    <div className='text-secondary2'>Women</div>
                                </div>
                            </div>
                            <div className="list-tab flex items-center justify-center gap-8 lg:mt-[70px] mt-12 overflow-hidden">
                                <div
                                    className={`tab-item text-button-uppercase cursor-pointer has-line-before line-2px ${type === 't-shirt' ? 'active' : ''}`}
                                    onClick={() => handleType('t-shirt')}
                                >
                                    T-shirt
                                </div>
                                <div
                                    className={`tab-item text-button-uppercase cursor-pointer has-line-before line-2px ${type === 'dress' ? 'active' : ''}`}
                                    onClick={() => handleType('dress')}
                                >
                                    Dress
                                </div>
                                <div
                                    className={`tab-item text-button-uppercase cursor-pointer has-line-before line-2px ${type === 'top' ? 'active' : ''}`}
                                    onClick={() => handleType('top')}
                                >
                                    Top
                                </div>
                                <div
                                    className={`tab-item text-button-uppercase cursor-pointer has-line-before line-2px ${type === 'swimwear' ? 'active' : ''}`}
                                    onClick={() => handleType('swimwear')}
                                >
                                    Swimwear
                                </div>
                                <div
                                    className={`tab-item text-button-uppercase cursor-pointer has-line-before line-2px ${type === 'shirt' ? 'active' : ''}`}
                                    onClick={() => handleType('shirt')}
                                >
                                    Shirt
                                </div>
                            </div>
                        </div>
                        <div className="bg-img absolute top-2 -right-6 max-lg:bottom-0 max-lg:top-auto w-1/3 max-lg:w-[26%] z-[0] max-sm:w-[45%]">
                            <Image
                                src={'/images/slider/bg1-1.png'}
                                width={1000}
                                height={1000}
                                alt=''
                                className=''
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BreadcrumbImg
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface Props {
    props: string;
    slogan: string;
}

const TopNavOne: React.FC<Props> = ({ props, slogan }) => {
    return (
        <>
            <div className={`top-nav md:h-[44px] h-[30px] ${props}`}>
                <div className="container mx-auto h-full">
                    <div className="top-nav-main flex justify-between max-md:justify-center h-full">
                        <div className="left-content flex items-center gap-5 max-md:hidden">
                            <div className="choose-language flex items-center gap-1.5">
                                <select name="language" id="chooseLanguage" className='caption2 bg-black text-white'>
                                    <option value="English">English</option>
                                    <option value="Espana">Espana</option>
                                    <option value="France">France</option>
                                </select>
                                <Icon.CaretDown size={12} color='#fff' />
                            </div>
                            <div className="choose-currency flex items-center gap-1.5">
                                <select name="currency" id="chooseCurrency" className='caption2 bg-black text-white'>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="GBP">GBP</option>
                                </select>
                                <Icon.CaretDown size={12} color='#fff' />
                            </div>
                        </div>
                        <div className="text-center text-button-uppercase text-white flex items-center">
                            {slogan}
                        </div>
                        <div className="right-content flex items-center gap-5 max-md:hidden">
                            <Link href={'https://www.facebook.com/'} target='_blank'>
                                <i className="icon-facebook text-white"></i>
                            </Link>
                            <Link href={'https://www.instagram.com/'} target='_blank'>
                                <i className="icon-instagram text-white"></i>
                            </Link>
                            <Link href={'https://www.youtube.com/'} target='_blank'>
                                <i className="icon-youtube text-white"></i>
                            </Link>
                            <Link href={'https://twitter.com/'} target='_blank'>
                                <i className="icon-twitter text-white"></i>
                            </Link>
                            <Link href={'https://pinterest.com/'} target='_blank'>
                                <i className="icon-pinterest text-white"></i>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNavOne
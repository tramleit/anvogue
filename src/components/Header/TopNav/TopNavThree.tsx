import React from 'react'
import Link from 'next/link';
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface Props {
    props: string;
}

const TopNavThree: React.FC<Props> = ({ props }) => {
    return (
        <>
            <div className={`top-nav md:h-[44px] h-[30px] border-b border-line ${props}`}>
                <div className="container mx-auto h-full">
                    <div className="top-nav-main flex justify-between max-md:justify-center h-full">
                        <div className="left-content flex items-center">
                            <ul className='flex items-center gap-5'>
                                <li>
                                    <Link href={'/pages/about'} className='caption2 hover:underline'>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/pages/contact'} className='caption2 hover:underline'>
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/pages/store-list'} className='caption2 hover:underline'>
                                        Store Location
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/pages/faqs'} className='caption2 hover:underline'>
                                        Help
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="right-content flex items-center gap-5 max-md:hidden">
                            <div className="choose-language flex items-center gap-1.5">
                                <select name="language" id="chooseLanguage" className='caption2'>
                                    <option value="English">English</option>
                                    <option value="Espana">Espana</option>
                                    <option value="France">France</option>
                                </select>
                                <Icon.CaretDown size={12} color='#1F1F1F' />
                            </div>
                            <div className="choose-currency flex items-center gap-1.5 pr-5 border-r border-line">
                                <select name="currency" id="chooseCurrency" className='caption2'>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="GBP">GBP</option>
                                </select>
                                <Icon.CaretDown size={12} color='#1F1F1F' />
                            </div>
                            <Link href={'https://www.facebook.com/'} target='_blank'>
                                <i className="icon-facebook text-black"></i>
                            </Link>
                            <Link href={'https://www.instagram.com/'} target='_blank'>
                                <i className="icon-instagram text-black"></i>
                            </Link>
                            <Link href={'https://www.youtube.com/'} target='_blank'>
                                <i className="icon-youtube text-black"></i>
                            </Link>
                            <Link href={'https://twitter.com/'} target='_blank'>
                                <i className="icon-twitter text-black"></i>
                            </Link>
                            <Link href={'https://pinterest.com/'} target='_blank'>
                                <i className="icon-pinterest text-black"></i>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNavThree
import React from 'react'
import Marquee from 'react-fast-marquee'

interface Props {
    props: string
    textColor: string
    bgLine: string
}

const BannerTop: React.FC<Props> = ({ props, textColor, bgLine }) => {
    return (
        <>
            <div className={`banner-top ${props}`}>
                <Marquee>
                    <div className={`heading5 md:px-[110px] px-12 ${textColor}`}>Get Glowing Skin</div>
                    <div className={`icon-leaves md:text-[32px] text-[24px]`}></div>
                    <div className={`heading5 md:px-[110px] px-12 ${textColor}`}>Learn Skincare Tips</div>
                    <div className={`icon-double-leaves md:text-[32px] text-[24px]`}></div>
                    <div className={`heading5 md:px-[110px] px-12 ${textColor}`}>Subscribe for Exclusive Offers</div>
                    <div className={`icon-leaves md:text-[32px] text-[24px]`}></div>
                    <div className={`heading5 md:px-[110px] px-12 ${textColor}`}>Get Glowing Skin</div>
                    <div className={`icon-double-leaves md:text-[32px] text-[24px]`}></div>
                    <div className={`heading5 md:px-[110px] px-12 ${textColor}`}>Learn Skincare Tips</div>
                    <div className={`icon-leaves md:text-[32px] text-[24px]`}></div>
                    <div className={`heading5 md:px-[110px] px-12 ${textColor}`}>Subscribe for Exclusive Offers</div>
                    <div className={`icon-double-leaves md:text-[32px] text-[24px]`}></div>
                </Marquee>
            </div>
        </>
    )
}

export default BannerTop
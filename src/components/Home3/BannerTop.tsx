import React from 'react'
import Marquee from 'react-fast-marquee'

interface Props {
    props: string
}

const BannerTop: React.FC<Props> = ({ props }) => {
    return (
        <>
            <div className={`banner-top ${props}`}>
                <Marquee>
                    <div className="text-button-uppercase text-white px-8">Get 10% off on selected items</div>
                    <div className="line w-8 h-px bg-white"></div>
                    <div className="text-button-uppercase text-white px-8">New customers save 10% with the code GET10</div>
                    <div className="line w-8 h-px bg-white"></div>
                    <div className="text-button-uppercase text-white px-8">10% off swim suits</div>
                    <div className="line w-8 h-px bg-white"></div>
                    <div className="text-button-uppercase text-white px-8">Free shipping on all orders over $50</div>
                    <div className="line w-8 h-px bg-white"></div>
                    <div className="text-button-uppercase text-white px-8">10% off on all summer essentials!</div>
                    <div className="line w-8 h-px bg-white"></div>
                    <div className="text-button-uppercase text-white px-8">Get summer-ready: 10% off swim suits</div>
                    <div className="line w-8 h-px bg-white"></div>
                    <div className="text-button-uppercase text-white px-8">10% off on all product</div>
                    <div className="line w-8 h-px bg-white"></div>
                </Marquee>
            </div>
        </>
    )
}

export default BannerTop
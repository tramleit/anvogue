import React from 'react'
import Image from 'next/image'

const ChooseUs = () => {
    return (
        <>
            <div className="choose-us-block md:pt-20 pt-10">
                <div className="container flex items-center justify-between">
                    <div className="bg-img w-7/12 pr-[45px]">
                        <Image
                            src={'/images/banner/bg-choose-us-pet.png'}
                            width={1200}
                            height={1200}
                            alt='bg-img'
                            className='w-full'
                        />
                    </div>
                    <div className="content w-5/12 pl-[45px]">
                        <div className="heading3">Top Reasons to Choose Us for Your Pet Store Needs</div>
                        <div className="heading6 font-normal text-secondary mt-3">Unleash the Best Care for Your Beloved Pets - Choose Us for Unmatched Expertise and Exceptional Service.</div>
                        <div className="list-feature mt-10">
                            <div className="item flex items-center gap-5">
                                <div className="icon bg-[#D1D0F9] rounded-full">
                                    <i className="icon-foot text-3xl flex items-center justify-center w-[68px] h-[68px]"></i>
                                </div>
                                <div className="text-content">
                                    <div className="heading6">High Quality Products</div>
                                    <div className="caption1 text-secondary mt-2">We are committed to providing the highest quality products for your pets.</div>
                                </div>
                            </div>
                            <div className="item flex items-center gap-5 mt-8">
                                <div className="icon bg-[#D1D0F9] rounded-full">
                                    <i className="icon-food text-3xl flex items-center justify-center w-[68px] h-[68px]"></i>
                                </div>
                                <div className="text-content">
                                    <div className="heading6">Expert Staff</div>
                                    <div className="caption1 text-secondary mt-2">Our passionate team ensures the well-being of your furry friends.</div>
                                </div>
                            </div>
                            <div className="item flex items-center gap-5 mt-8">
                                <div className="icon bg-[#D1D0F9] rounded-full">
                                    <i className="icon-comb text-3xl flex items-center justify-center w-[68px] h-[68px]"></i>
                                </div>
                                <div className="text-content">
                                    <div className="heading6">Personalized Approach</div>
                                    <div className="caption1 text-secondary mt-2">We understand that every pet is unique, and their needs may vary.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChooseUs
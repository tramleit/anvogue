import React from 'react'
import Image from 'next/image'

const ChooseUs = () => {
    return (
        <>
            <div className="choose-us-block md:pt-20 pt-14">
                <div className="container flex max-lg:flex-col max-lg:gap-y-8 items-center justify-between">
                    <div className="bg-img lg:w-7/12 lg:pr-[45px] md:w-1/2 w-5/6">
                        <Image
                            src={'/images/banner/bg-choose-us-pet.png'}
                            width={1200}
                            height={1200}
                            alt='bg-img'
                            priority={true}
                            className='w-full'
                        />
                    </div>
                    <div className="content lg:w-5/12 lg:pl-[45px]">
                        <div className="heading3">Top Reasons to Choose Us for Your Pet Store Needs</div>
                        <div className="heading6 font-normal text-secondary mt-3">Unleash the Best Care for Your Beloved Pets - Choose Us for Unmatched Expertise and Exceptional Service.</div>
                        <div className="list-feature lg:mt-10 mt-6">
                            <div className="item flex items-center gap-5">
                                <div className="icon bg-[#D1D0F9] rounded-full">
                                    <i className="icon-foot md:text-3xl text-2xl flex items-center justify-center md:w-[68px] md:h-[68px] w-14 h-14"></i>
                                </div>
                                <div className="text-content">
                                    <div className="heading6">High Quality Products</div>
                                    <div className="caption1 text-secondary mt-2">We are committed to providing the highest quality products for your pets.</div>
                                </div>
                            </div>
                            <div className="item flex items-center gap-5 lg:mt-8 mt-4">
                                <div className="icon bg-[#D1D0F9] rounded-full">
                                    <i className="icon-food md:text-3xl text-2xl flex items-center justify-center md:w-[68px] md:h-[68px] w-14 h-14"></i>
                                </div>
                                <div className="text-content">
                                    <div className="heading6">Expert Staff</div>
                                    <div className="caption1 text-secondary mt-2">Our passionate team ensures the well-being of your furry friends.</div>
                                </div>
                            </div>
                            <div className="item flex items-center gap-5 lg:mt-8 mt-4">
                                <div className="icon bg-[#D1D0F9] rounded-full">
                                    <i className="icon-comb md:text-3xl text-2xl flex items-center justify-center md:w-[68px] md:h-[68px] w-14 h-14"></i>
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
import React from 'react'
import Image from 'next/image'

const WhyChooseUs = () => {
    return (
        <>
            <div className="why-choose-us md:pt-20 pt-10">
                <div className="container">
                    <div className="content flex max-lg:flex-col items-center justify-between gap-y-8">
                        <div className="left lg:w-1/2 sm:w-2/3 w-full lg:pr-4">
                            <div className="bg-img">
                                <Image
                                    src={'/images/banner/bg-benefit-yoga.png'}
                                    width={2000}
                                    height={2000}
                                    alt='bg'
                                    className='w-full rounded-2xl'
                                />
                            </div>
                        </div>
                        <div className="right lg:w-1/2 lg:pl-16">
                            <div className="heading3">The benefits and reasons you should choose us as your guide</div>
                            <div className='text-secondary mt-5'>The garments labelled as Committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact.</div>
                            <div className="list-feature mt-6 pt-6 border-t border-line">
                                <div className="item flex items-center justify-between pb-3 border-b border-line">
                                    <div className="body1 font-semibold uppercase">That{String.raw`'s`} why:</div>
                                    <div className="body1">We create special products</div>
                                </div>
                                <div className="item flex items-center justify-between pb-3 border-b border-line mt-3">
                                    <div className="body1 font-semibold uppercase">we always:</div>
                                    <div className="body1">Take care about every details</div>
                                </div>
                                <div className="item flex items-center justify-between pb-3 border-b border-line mt-3">
                                    <div className="body1 font-semibold uppercase">For who:</div>
                                    <div className="body1">Who always desire be beautiful</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs
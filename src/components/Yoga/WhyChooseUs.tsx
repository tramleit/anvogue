import React from 'react'
import Image from 'next/image'

const WhyChooseUs = () => {
    return (
        <>
            <div className="why-choose-us md:pt-20 pt-10">
                <div className="container">
                    <div className="content flex items-center justify-between">
                        <div className="left w-1/2 pr-4">
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
                        <div className="right w-1/2 pl-16">
                            <div className="heading3">The benefits and reasons you should choose us as your guide</div>
                            <div className='text-secondary mt-5'>The garments labelled as Committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact.</div>
                            <div className="list-feature mt-6 pt-6 border-t border-line">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs
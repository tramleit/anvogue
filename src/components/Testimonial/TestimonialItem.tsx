import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TestimonialType } from '@/type/TestimonialType'
import Rate from '../Other/Rate'

interface TestimonialProps {
    data: TestimonialType
    type: string
}

const TestimonialItem: React.FC<TestimonialProps> = ({ data, type }) => {
    return (
        <>
            {type === "style-one" ? (
                <div className="testimonial-item style-one h-full">
                    <div className="testimonial-main bg-white p-8 rounded-2xl h-full">
                        <Rate currentRate={data.star} size={14} />
                        <div className="heading6 title mt-4">{data.title}</div>
                        <div className="desc mt-2">{data.description}</div>
                        <div className="text-button name mt-4">{data.name}</div>
                        <div className="caption2 date text-secondary2 mt-1">{data.date}</div>
                    </div>
                </div>
            ) : (
                <>
                    {type === "style-four" ? (
                        <div className="testimonial-item style-four h-full">
                            <div className="testimonial-main h-full">
                                <Rate currentRate={data.star} size={14} />
                                <div className="text-button-uppercase text-secondary mt-4">Customer reviews</div>
                                <div className="heading4 normal-case desc font-normal mt-2">{data.description}</div>
                                <div className="text-button name mt-4">{data.name}</div>
                                <div className="caption2 text-secondary2 date">{data.date}</div>
                            </div>
                        </div>
                    ) : (
                        <>
                            {type === "style-six" ? (
                                <div className="testimonial-item style-six h-full">
                                    <div className="testimonial-main h-full">
                                        <Rate currentRate={data.star} size={14} />
                                        <div className="text-button-uppercase text-secondary mt-4">Customer reviews</div>
                                        <div className="heading4 normal-case desc font-normal mt-2">{data.description}</div>
                                        <div className="flex items-center gap-3 mt-4">
                                            <div className="text-button name">{data.name}</div>
                                            <div className="caption1 date text-secondary2">From {data.address}</div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {type === "style-seven" ? (
                                        <>
                                            <div className="testimonial-item style-seven h-full">
                                                <div className="testimonial-main bg-white py-8 px-7 rounded-[20px] h-full">
                                                    <div className="heading flex items-center gap-4">
                                                        <div className="avatar w-10 h-10 rounded-full overflow-hidden">
                                                            <Image
                                                                src={data.avatar}
                                                                width={500}
                                                                height={500}
                                                                alt='avatar'
                                                                className='w-full h-full'
                                                            />
                                                        </div>
                                                        <div className="infor">
                                                            <Rate currentRate={data.star} size={14} />
                                                            <div className="text-title name">{data.name}</div>
                                                        </div>
                                                    </div>
                                                    <div className="body1 desc mt-4">{data.description}</div>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <></>
                                    )
                                    }
                                </>
                            )
                            }
                        </>
                    )
                    }
                </>
            )
            }
        </>
    )
}

export default TestimonialItem
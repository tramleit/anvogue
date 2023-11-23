import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TestimonialType } from '@/type/TestimonialType'
import Rate from '../Other/Rate'
import * as Icon from "@phosphor-icons/react/dist/ssr";

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
                        <Rate currentRate={data.star}></Rate>
                        <div className="heading6 title mt-4">{data.title}</div>
                        <div className="desc mt-2">{data.description}</div>
                        <div className="text-button name mt-4">{data.name}</div>
                        <div className="caption2 date text-secondary mt-1">{data.date}</div>
                    </div>
                </div>
            ) : (
                <>
                </>
            )
            }
        </>
    )
}

export default TestimonialItem
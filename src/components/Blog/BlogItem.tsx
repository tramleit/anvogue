import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BlogType } from '@/type/BlogType'
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface BlogProps {
    data: BlogType
    type: string
}

const BlogItem: React.FC<BlogProps> = ({ data, type }) => {
    return (
        <>
            {type === "style-one" ? (
                <div className="blog-item style-one h-full">
                    <Link href={'#!'} className="blog-main h-full block">
                        <div className="blog-thumb rounded-[20px] overflow-hidden">
                            <Image
                                src={data.thumbImg}
                                width={1000}
                                height={500}
                                alt='blog-img'
                                className='w-full duration-500'
                            />
                        </div>
                        <div className="blog-infor mt-7">
                            <div className="blog-tag bg-green py-1 px-2.5 rounded-full text-button-uppercase inline-block">{data.tag}</div>
                            <div className="heading6 blog-title mt-3 duration-300">{data.title}</div>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="blog-author caption1 text-secondary">by {data.author}</div>
                                <span className='w-[20px] h-[1px] bg-black'></span>
                                <div className="blog-date caption1 text-secondary">{data.date}</div>
                            </div>
                        </div>
                    </Link>
                </div>
            ) : (
                <>
                </>
            )
            }
        </>
    )
}

export default BlogItem
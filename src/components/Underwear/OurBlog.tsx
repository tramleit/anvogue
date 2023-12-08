import React from 'react'
import BlogItem from '../Blog/BlogItem'
import { BlogType } from '@/type/BlogType'

interface Props {
    data: Array<BlogType>;
    start: number;
    limit: number;
}
const OurBlog: React.FC<Props> = ({ data, start, limit }) => {
    return (
        <>
            <div className="news-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading3 text-center">Our Blog</div>
                    <div className="list-blog grid md:grid-cols-3 gap-[30px] mt-10">
                        {data.slice(start, limit).map((prd, index) => (
                            <BlogItem key={index} data={prd} type='style-one' />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurBlog
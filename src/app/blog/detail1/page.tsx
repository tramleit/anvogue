'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import blogData from '@/data/Blog.json'
import NewsInsight from '@/components/Home3/NewsInsight';
import Footer from '@/components/Footer/Footer'
import { useRouter } from 'next/navigation'

const BlogDetailOne = () => {
    const searchParams = useSearchParams()
    const router = useRouter()

    let blogId = searchParams.get('id')
    if (blogId === null) {
        blogId = '14'
    }

    const blogMain = blogData[Number(blogId) - 1]

    const handleBlogClick = (category: string) => {
        // Go to blog detail with category selected
        router.push(`/blog/default?category=${category}`);
    };

    const handleBlogDetail = (id: string) => {
        // Go to blog detail with id selected
        router.push(`/blog/detail1?id=${id}`);
    };

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-white" />
            </div>
            <div className='blog detail1'>
                <div className="bg-img md:mt-[74px] mt-14">
                    <Image
                        src={blogMain.thumbImg}
                        width={5000}
                        height={4000}
                        alt={blogMain.thumbImg}
                        className='w-full min-[1600px]:h-[800px] xl:h-[640px] lg:h-[520px] sm:h-[380px] h-[260px] object-cover'
                    />
                </div>
                <div className="container md:pt-20 pt-10">
                    <div className="blog-content flex items-center justify-center">
                        <div className="main md:w-5/6 w-full">
                            <div className="blog-tag bg-green py-1 px-2.5 rounded-full text-button-uppercase inline-block">{blogMain.tag}</div>
                            <div className="heading3 mt-3">{blogMain.title}</div>
                            <div className="author flex items-center gap-4 mt-4">
                                <div className="avatar w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                    <Image
                                        src={blogMain.avatar}
                                        width={200}
                                        height={200}
                                        alt='avatar'
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className="caption1 text-secondary">by {blogMain.author}</div>
                                    <div className="line w-5 h-px bg-secondary"></div>
                                    <div className="caption1 text-secondary">{blogMain.date}</div>
                                </div>
                            </div>
                            <div className="content md:mt-8 mt-5">
                                <div className="body1">{blogMain.description}</div>
                                <div className="body1 mt-3">I’ve always been passionate about underwear and shapewear and have a huge collection from over the years! When it came to shapewear, I could never find exactly what I was looking for and I would cut up pieces and sew them together to create the style and compression I needed.</div>
                                <div className="grid sm:grid-cols-2 gap-[30px] md:mt-8 mt-5">
                                    {blogMain.subImg.map((item, index) => (
                                        <Image
                                            key={index}
                                            src={item}
                                            width={3000}
                                            height={2000}
                                            alt={item}
                                            className='w-full rounded-3xl'
                                        />
                                    ))}
                                </div>
                                <div className="heading4 md:mt-8 mt-5">How did SKIMS start?</div>
                                <div className="body1 mt-4">This is such a hard question! Honestly, every time we drop a new collection I get obsessed with it. The pieces that have been my go-tos though are some of our simplest styles that we launched with. I wear our Fits Everybody Thong every single day – it is the only underwear I have now, it’s so comfortable and stretchy and light enough that you can wear anything over it.</div>
                                <div className="body1 mt-4">For bras, I love our Cotton Jersey Scoop Bralette – it’s lined with this amazing power mesh so you get great support and is so comfy I can sleep in it. I also love our Seamless Sculpt Bodysuit – it’s the perfect all in one sculpting, shaping and smoothing shapewear piece with different levels of support woven throughout.</div>
                            </div>
                            <div className="action flex items-center justify-between flex-wrap gap-5 md:mt-8 mt-5">
                                <div className="left flex items-center gap-3 flex-wrap">
                                    <p>Tag:</p>
                                    <div className="list flex items-center gap-3 flex-wrap">
                                        <div
                                            className={`tags bg-surface py-1.5 px-4 rounded-full text-button-uppercase cursor-pointer duration-300 hover:bg-black hover:text-white`}
                                            onClick={() => handleBlogClick('fashion')}
                                        >
                                            fashion
                                        </div>
                                        <div
                                            className={`tags bg-surface py-1.5 px-4 rounded-full text-button-uppercase cursor-pointer duration-300 hover:bg-black hover:text-white`}
                                            onClick={() => handleBlogClick('yoga')}
                                        >
                                            yoga
                                        </div>
                                        <div
                                            className={`tags bg-surface py-1.5 px-4 rounded-full text-button-uppercase cursor-pointer duration-300 hover:bg-black hover:text-white`}
                                            onClick={() => handleBlogClick('organic')}
                                        >
                                            organic
                                        </div>
                                    </div>
                                </div>
                                <div className="right flex items-center gap-3 flex-wrap">
                                    <p>Share:</p>
                                    <div className="list flex items-center gap-3 flex-wrap">
                                        <Link href={'https://www.facebook.com/'} target='_blank' className='bg-surface w-10 h-10 flex items-center justify-center rounded-full duration-300 hover:bg-black hover:text-white'>
                                            <div className="icon-facebook duration-100"></div>
                                        </Link>
                                        <Link href={'https://www.instagram.com/'} target='_blank' className='bg-surface w-10 h-10 flex items-center justify-center rounded-full duration-300 hover:bg-black hover:text-white'>
                                            <div className="icon-instagram duration-100"></div>
                                        </Link>
                                        <Link href={'https://www.twitter.com/'} target='_blank' className='bg-surface w-10 h-10 flex items-center justify-center rounded-full duration-300 hover:bg-black hover:text-white'>
                                            <div className="icon-twitter duration-100"></div>
                                        </Link>
                                        <Link href={'https://www.youtube.com/'} target='_blank' className='bg-surface w-10 h-10 flex items-center justify-center rounded-full duration-300 hover:bg-black hover:text-white'>
                                            <div className="icon-youtube duration-100"></div>
                                        </Link>
                                        <Link href={'https://www.pinterest.com/'} target='_blank' className='bg-surface w-10 h-10 flex items-center justify-center rounded-full duration-300 hover:bg-black hover:text-white'>
                                            <div className="icon-pinterest duration-100"></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="next-pre flex items-center justify-between md:mt-8 mt-5 py-6 border-y border-line">
                                {blogId === '1' ? (
                                    <>
                                        <div className="left cursor-pointer"
                                            onClick={() => handleBlogDetail(String(blogData.length))}
                                        >
                                            <div className="text-button-uppercase text-secondary2">Previous</div>
                                            <div className="text-title mt-2">{blogData[blogData.length - 1].title}</div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="left cursor-pointer"
                                            onClick={() => handleBlogDetail(blogData[Number(blogId) - 2].id)}
                                        >
                                            <div className="text-button-uppercase text-secondary2">Previous</div>
                                            <div className="text-title mt-2">{blogData[Number(blogId) - 2].title}</div>
                                        </div>
                                    </>
                                )}
                                {Number(blogId) === blogData.length ? (
                                    <>
                                        <div className="right text-right cursor-pointer"
                                            onClick={() => handleBlogDetail('1')}
                                        >
                                            <div className="text-button-uppercase text-secondary2">Next</div>
                                            <div className="text-title mt-2">{blogData[0].title}</div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="right text-right cursor-pointer"
                                            onClick={() => handleBlogDetail(blogData[Number(blogId)].id)}
                                        >
                                            <div className="text-button-uppercase text-secondary2">Next</div>
                                            <div className="text-title mt-2">{blogData[Number(blogId)].title}</div>
                                        </div>
                                    </>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:pb-20 pb-10'>
                    <NewsInsight data={blogData} start={0} limit={3} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BlogDetailOne
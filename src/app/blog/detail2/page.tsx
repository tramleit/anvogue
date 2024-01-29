'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import blogData from '@/data/Blog.json'
import NewsInsight from '@/components/Home3/NewsInsight';
import Footer from '@/components/Footer/Footer'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Rate from '@/components/Other/Rate';

const BlogDetailTwo = () => {
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
        router.push(`/blog/detail2?id=${id}`);
    };

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-white" />
            </div>
            <div className='blog detail2 md:mt-[74px] mt-[56px] border-t border-line'>
                <div className="container lg:pt-20 md:pt-14 pt-10">
                    <div className="blog-content flex justify-between max-lg:flex-col gap-y-10">
                        <div className="main xl:w-3/4 lg:w-2/3 lg:pr-[15px]">
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
                            <div className="bg-img md:py-10 py-6">
                                <Image
                                    src={blogMain.thumbImg}
                                    width={5000}
                                    height={4000}
                                    alt={blogMain.thumbImg}
                                    className='w-full object-cover rounded-3xl'
                                />
                            </div>
                            <div className="content">
                                <div className="body1">{blogMain.description}</div>
                                <div className="heading4 md:mt-8 mt-5">How did SKIMS start?</div>
                                <div className="body1 mt-2">I’ve always been passionate about underwear and shapewear and have a huge collection from over the years! When it came to shapewear, I could never find exactly what I was looking for and I would cut up pieces and sew them together to create the style and compression I needed.</div>
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
                                <div className="body1 mt-4">For bras, I love our Cotton Jersey Scoop Bralette – it{String.raw`'s`} lined with this amazing power mesh so you get great support and is so comfy I can sleep in it. I also love our Seamless Sculpt Bodysuit – it{String.raw`'s`} the perfect all in one sculpting, shaping and smoothing shapewear piece with different levels of support woven throughout.</div>
                                <div className="heading4 md:mt-8 mt-5">How did SKIMS start?</div>
                                <div className="body1 mt-4">This is such a hard question! Honestly, every time we drop a new collection I get obsessed with it. The pieces that have been my go-tos though are some of our simplest styles that we launched with. I wear our Fits Everybody Thong every single day – it is the only underwear I have now, it{String.raw`'s`} so comfortable and stretchy and light enough that you can wear anything over it.</div>
                                <div className="quote-block md:mt-8 mt-5 py-6 md:px-10 px-6 border border-line md:rounded-[20px] rounded-2xl flex items-center md:gap-10 gap-6">
                                    <Icon.Quotes className='text-green text-3xl rotate-180 flex-shrink-0' weight='fill' />
                                    <div>
                                        <div className="heading6">{String.raw`"`}For bras, I love our Cotton Jersey Scoop Bralette – it{String.raw`'s`} lined with this amazing power mesh so you get great support and is so comfy I can sleep in it.{String.raw`"`}</div>
                                        <div className="text-button-uppercase text-secondary mt-4">- Anthony Bourdain</div>
                                    </div>
                                </div>
                                <div className="body1 md:mt-8 mt-5">For bras, I love our Cotton Jersey Scoop Bralette – it{String.raw`'s`} lined with this amazing power mesh so you get great support and is so comfy I can sleep in it. I also love our Seamless Sculpt Bodysuit – it{String.raw`'s`} the perfect all in one sculpting, shaping and smoothing shapewear piece with different levels of support woven throughout.</div>
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
                                <div className="right list-social flex items-center gap-3 flex-wrap">
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
                            <div className="list-comment md:mt-[60px] mt-8">
                                <div className="heading flex items-center justify-between flex-wrap gap-4">
                                    <div className="heading4">03 Comments</div>
                                    <div className="right flex items-center gap-3">
                                        <label htmlFor='select-filter' className="uppercase">Sort by:</label>
                                        <div className="select-block relative">
                                            <select
                                                id="select-filter"
                                                name="select-filter"
                                                className='text-button py-2 pl-3 md:pr-14 pr-10 rounded-lg bg-white border border-line'
                                                defaultValue={'Sorting'}
                                            >
                                                <option value="Sorting" disabled>Sorting</option>
                                                <option value="newest">Newest</option>
                                                <option value="5star">5 Star</option>
                                                <option value="4star">4 Star</option>
                                                <option value="3star">3 Star</option>
                                                <option value="2star">2 Star</option>
                                                <option value="1star">1 Star</option>
                                            </select>
                                            <Icon.CaretDown size={12} className='absolute top-1/2 -translate-y-1/2 md:right-4 right-2' />
                                        </div>
                                    </div>
                                </div>
                                <div className="list-review mt-6">
                                    <div className="item">
                                        <div className="heading flex items-center justify-between">
                                            <div className="user-infor flex gap-4">
                                                <div className="avatar">
                                                    <Image
                                                        src={'/images/avatar/1.png'}
                                                        width={200}
                                                        height={200}
                                                        alt='img'
                                                        className='w-[52px] aspect-square rounded-full'
                                                    />
                                                </div>
                                                <div className="user">
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-title">Tony Nguyen</div>
                                                        <div className="span text-line">-</div>
                                                        <Rate currentRate={5} size={12} />
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-secondary2">1 days ago</div>
                                                        <div className="text-secondary2">-</div>
                                                        <div className="text-secondary2"><span>Yellow</span> / <span>XL</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="more-action cursor-pointer">
                                                <Icon.DotsThree size={24} weight='bold' />
                                            </div>
                                        </div>
                                        <div className="mt-3">I can{String.raw`'t`} get enough of the fashion pieces from this brand. They have a great selection for every occasion and the prices are reasonable. The shipping is fast and the items always arrive in perfect condition.</div>
                                        <div className="action flex justify-between mt-3">
                                            <div className="left flex items-center gap-4">
                                                <div className="like-btn flex items-center gap-1 cursor-pointer">
                                                    <Icon.HandsClapping size={18} />
                                                    <div className="text-button">20</div>
                                                </div>
                                                <div className="hide-rep-btn flex items-center gap-1 cursor-pointer">
                                                    <Icon.Chat size={18} />
                                                    <div className="text-button">Hide Replies</div>
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="reply-btn text-button text-secondary">Reply</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item md:mt-8 mt-5">
                                        <div className="heading flex items-center justify-between">
                                            <div className="user-infor flex gap-4">
                                                <div className="avatar">
                                                    <Image
                                                        src={'/images/avatar/2.png'}
                                                        width={200}
                                                        height={200}
                                                        alt='img'
                                                        className='w-[52px] aspect-square rounded-full'
                                                    />
                                                </div>
                                                <div className="user">
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-title">Guy Hawkins</div>
                                                        <div className="span text-line">-</div>
                                                        <Rate currentRate={4} size={12} />
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-secondary2">1 days ago</div>
                                                        <div className="text-secondary2">-</div>
                                                        <div className="text-secondary2"><span>Yellow</span> / <span>XL</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="more-action cursor-pointer">
                                                <Icon.DotsThree size={24} weight='bold' />
                                            </div>
                                        </div>
                                        <div className="mt-3">I can{String.raw`'t`} get enough of the fashion pieces from this brand. They have a great selection for every occasion and the prices are reasonable. The shipping is fast and the items always arrive in perfect condition.</div>
                                        <div className="action flex justify-between mt-3">
                                            <div className="left flex items-center gap-4">
                                                <div className="like-btn flex items-center gap-1 cursor-pointer">
                                                    <Icon.HandsClapping size={18} />
                                                    <div className="text-button">20</div>
                                                </div>
                                                <div className="hide-rep-btn flex items-center gap-1 cursor-pointer">
                                                    <Icon.Chat size={18} />
                                                    <div className="text-button">Hide Replies</div>
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="reply-btn text-button text-secondary">Reply</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item md:mt-8 mt-5">
                                        <div className="heading flex items-center justify-between">
                                            <div className="user-infor flex gap-4">
                                                <div className="avatar">
                                                    <Image
                                                        src={'/images/avatar/3.png'}
                                                        width={200}
                                                        height={200}
                                                        alt='img'
                                                        className='w-[52px] aspect-square rounded-full'
                                                    />
                                                </div>
                                                <div className="user">
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-title">John Smith</div>
                                                        <div className="span text-line">-</div>
                                                        <Rate currentRate={5} size={12} />
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-secondary2">1 days ago</div>
                                                        <div className="text-secondary2">-</div>
                                                        <div className="text-secondary2"><span>Yellow</span> / <span>XL</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="more-action cursor-pointer">
                                                <Icon.DotsThree size={24} weight='bold' />
                                            </div>
                                        </div>
                                        <div className="mt-3">I can{String.raw`'t`} get enough of the fashion pieces from this brand. They have a great selection for every occasion and the prices are reasonable. The shipping is fast and the items always arrive in perfect condition.</div>
                                        <div className="action flex justify-between mt-3">
                                            <div className="left flex items-center gap-4">
                                                <div className="like-btn flex items-center gap-1 cursor-pointer">
                                                    <Icon.HandsClapping size={18} />
                                                    <div className="text-button">20</div>
                                                </div>
                                                <div className="hide-rep-btn flex items-center gap-1 cursor-pointer">
                                                    <Icon.Chat size={18} />
                                                    <div className="text-button">Hide Replies</div>
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="reply-btn text-button text-secondary">Reply</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="form-review" className='form-review md:p-10 p-6 bg-surface rounded-xl md:mt-10 mt-6'>
                                    <div className="heading4">Leave A comment</div>
                                    <form className="grid sm:grid-cols-2 gap-4 gap-y-5 md:mt-6 mt-3">
                                        <div className="name ">
                                            <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="username" type="text" placeholder="Your Name *" required />
                                        </div>
                                        <div className="mail ">
                                            <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="email" type="email" placeholder="Your Email *" required />
                                        </div>
                                        <div className="col-span-full message">
                                            <textarea className="border border-line px-4 py-3 w-full rounded-lg" id="message" name="message" placeholder="Your message *" required ></textarea>
                                        </div>
                                        <div className="col-span-full flex items-start -mt-2 gap-2">
                                            <input type="checkbox" id="saveAccount" name="saveAccount" className='mt-1.5' />
                                            <label className="" htmlFor="saveAccount">Save my name, email, and website in this browser for the next time I comment.</label>
                                        </div>
                                        <div className="col-span-full sm:pt-3">
                                            <button className='button-main bg-white text-black border border-black'>Submit Reviews</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="right xl:w-1/4 lg:w-1/3 lg:pl-[45px]">
                            <div className="about-author">
                                <div className="heading flex gap-5">
                                    <div className="avatar w-[100px] h-[100px] rounded-full overflow-hidden flex-shrink-0">
                                        <Image
                                            src={blogMain.avatar}
                                            width={500}
                                            height={500}
                                            alt='avatar'
                                            priority={true}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                    <div>
                                        <div className="heading6">{blogMain.author}</div>
                                        <div className="caption1 text-secondary mt-1">200 Follower</div>
                                        <div className="button-main bg-white text-black px-5 py-1 border border-line text-button rounded-full capitalize mt-2">Follow</div>
                                    </div>
                                </div>
                                <div className="text-secondary mt-5">{blogMain.author} is a writer who draws. He’s the Bestselling author of “Number of The Year”. Donec vitae tortor efficitur, convallis lelobortis elit.</div>
                                <div className="list-social mt-4 flex items-center gap-6 flex-wrap">
                                    <Link href={'https://www.facebook.com/'} target='_blank' className=''>
                                        <div className="icon-facebook md:text-xl duration-100"></div>
                                    </Link>
                                    <Link href={'https://www.instagram.com/'} target='_blank' className=''>
                                        <div className="icon-instagram md:text-xl duration-100"></div>
                                    </Link>
                                    <Link href={'https://www.twitter.com/'} target='_blank' className=''>
                                        <div className="icon-twitter md:text-xl duration-100"></div>
                                    </Link>
                                    <Link href={'https://www.youtube.com/'} target='_blank' className=''>
                                        <div className="icon-youtube md:text-xl duration-100"></div>
                                    </Link>
                                    <Link href={'https://www.pinterest.com/'} target='_blank' className=''>
                                        <div className="icon-pinterest md:text-xl duration-100"></div>
                                    </Link>
                                </div>
                            </div>
                            <div className="recent md:mt-10 mt-6">
                                <div className="heading6">Recent Posts</div>
                                <div className="list-recent pt-1">
                                    {blogData.slice(12, 15).map(item => (
                                        <div className="item flex gap-4 mt-5 cursor-pointer" key={item.id} onClick={() => handleBlogDetail(item.id)}>
                                            <Image
                                                src={item.thumbImg}
                                                width={500}
                                                height={400}
                                                alt={item.thumbImg}
                                                className='w-20 h-20 object-cover rounded-lg flex-shrink-0'
                                            />
                                            <div>
                                                <div className="blog-tag whitespace-nowrap bg-green py-0.5 px-2 rounded-full text-button-uppercase text-xs inline-block">{item.tag}</div>
                                                <div className="text-title mt-1">{item.title}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="subcribe md:mt-10 mt-6 bg-surface p-6 rounded-[20px]">
                                <div className="text-center heading5">Subscribe For Daily Newsletter</div>
                                <form className='mt-5'>
                                    <input className='text-center md:h-[50px] h-[44px] w-full px-4 rounded-xl' type="text" placeholder='Your email address' />
                                    <button className='button-main text-center w-full mt-4'>Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:pb-20 md:pb-14 pb-10'>
                    <NewsInsight data={blogData} start={0} limit={3} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BlogDetailTwo
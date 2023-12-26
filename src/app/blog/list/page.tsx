'use client'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import blogData from '@/data/Blog.json'
import BlogItem from '@/components/Blog/BlogItem';
import Footer from '@/components/Footer/Footer'
import HandlePagination from '@/components/Other/HandlePagination'
import { useRouter } from 'next/navigation'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const BlogList = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 4;
    const offset = currentPage * productsPerPage;
    const router = useRouter()
    const searchParams = useSearchParams()
    let dataCategory = searchParams.get('category')
    const [category, setCategory] = useState<string | null>(dataCategory);

    const handleCategory = (category: string) => {
        setCategory(prevCategory => prevCategory === category ? null : category)
    }

    const handleBlogClick = (blogId: string) => {
        // Go to blog detail with blogId selected
        router.push(`/blog/detail1?id=${blogId}`);
    };

    let filteredData = blogData.filter(blog => {
        let isCategoryMatched = true
        if (category) {
            isCategoryMatched = blog.category === category && blog.category !== 'underwear'
        } else {
            isCategoryMatched = blog.category !== 'underwear'
        }

        return isCategoryMatched
    })

    if (filteredData.length === 0) {
        filteredData = [{
            id: "no-data",
            category: "no-data",
            tag: "no-data",
            title: "no-data",
            date: "no-data",
            author: "no-data",
            avatar: "no-data",
            thumbImg: "",
            coverImg: "",
            subImg: [
                "",
                ""
            ],
            shortDesc: "no-data",
            description: "no-data",
            slug: "no-data"
        }];
    }

    const pageCount = Math.ceil(filteredData.length / productsPerPage);

    // If page number 0, set current page = 0
    if (pageCount === 0) {
        setCurrentPage(0);
    }

    const currentProducts = filteredData.slice(offset, offset + productsPerPage);

    const handlePageChange = (selected: number) => {
        setCurrentPage(selected);
    };

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Blog List' subHeading='Blog List' />
            </div>
            <div className='blog list md:py-20 py-10'>
                <div className="container">
                    <div className="flex justify-between max-xl:flex-col gap-y-12">
                        <div className="left xl:w-3/4 xl:pr-2">
                            <div className="list-blog flex flex-col xl:gap-10 gap-8">
                                {currentProducts.map(item => (
                                    <BlogItem key={item.id} data={item} type='style-list' />
                                ))}
                            </div>
                            {pageCount > 1 && (
                                <div className="list-pagination w-full flex items-center md:mt-10 mt-6">
                                    <HandlePagination pageCount={pageCount} onPageChange={handlePageChange} />
                                </div>
                            )}
                        </div>
                        <div className="right xl:w-1/4 xl:pl-[52px]">
                            <form className='form-search relative w-full h-12'>
                                <input className='py-2 px-4 w-full h-full border border-line rounded-lg' type="text" placeholder='Search' />
                                <button>
                                    <Icon.MagnifyingGlass className='heading6 text-secondary hover:text-black duration-300 absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer' />
                                </button>
                            </form>
                            <div className="recent md:mt-10 mt-6 pb-8 border-b border-line">
                                <div className="heading6">Recent Posts</div>
                                <div className="list-recent pt-1">
                                    {blogData.slice(12, 15).map(item => (
                                        <div className="item flex gap-4 mt-5 cursor-pointer" key={item.id} onClick={() => handleBlogClick(item.id)}>
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
                            <div className="filter-category md:mt-10 mt-6 pb-8 border-b border-line">
                                <div className="heading6">Categories</div>
                                <div className="list-cate pt-1">
                                    <div
                                        className={`cate-item flex items-center justify-between cursor-pointer mt-3 ${category === 'fashion' ? 'active' : ''}`}
                                        onClick={() => handleCategory('fashion')}
                                    >
                                        <div className='capitalize has-line-before hover:text-black text-secondary'>Fashion</div>
                                        <div className="text-secondary2">
                                            ({blogData.filter(dataItem => dataItem.category === 'fashion').length})
                                        </div>
                                    </div>
                                    <div
                                        className={`cate-item flex items-center justify-between cursor-pointer mt-3 ${category === 'cosmetic' ? 'active' : ''}`}
                                        onClick={() => handleCategory('cosmetic')}
                                    >
                                        <div className='capitalize has-line-before hover:text-black text-secondary'>cosmetic</div>
                                        <div className="text-secondary2">
                                            ({blogData.filter(dataItem => dataItem.category === 'cosmetic').length})
                                        </div>
                                    </div>
                                    <div
                                        className={`cate-item flex items-center justify-between cursor-pointer mt-3 ${category === 'toys-kid' ? 'active' : ''}`}
                                        onClick={() => handleCategory('toys-kid')}
                                    >
                                        <div className='capitalize has-line-before hover:text-black text-secondary'>toys kid</div>
                                        <div className="text-secondary2">
                                            ({blogData.filter(dataItem => dataItem.category === 'toys-kid').length})
                                        </div>
                                    </div>
                                    <div
                                        className={`cate-item flex items-center justify-between cursor-pointer mt-3 ${category === 'yoga' ? 'active' : ''}`}
                                        onClick={() => handleCategory('yoga')}
                                    >
                                        <div className='capitalize has-line-before hover:text-black text-secondary'>yoga</div>
                                        <div className="text-secondary2">
                                            ({blogData.filter(dataItem => dataItem.category === 'yoga').length})
                                        </div>
                                    </div>
                                    <div
                                        className={`cate-item flex items-center justify-between cursor-pointer mt-3 ${category === 'organic' ? 'active' : ''}`}
                                        onClick={() => handleCategory('organic')}
                                    >
                                        <div className='capitalize has-line-before hover:text-black text-secondary'>organic</div>
                                        <div className="text-secondary2">
                                            ({blogData.filter(dataItem => dataItem.category === 'organic').length})
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-tags md:mt-10 mt-6">
                                <div className="heading6">Tags Cloud</div>
                                <div className="list-tags flex items-center flex-wrap gap-3 mt-4">
                                    <div
                                        className={`tags bg-white border border-line py-1.5 px-4 rounded-full text-button-uppercase text-secondary cursor-pointer duration-300 hover:bg-black hover:text-white ${category === 'fashion' ? 'active' : ''}`}
                                        onClick={() => handleCategory('fashion')}
                                    >
                                        fashion
                                    </div>
                                    <div
                                        className={`tags bg-white border border-line py-1.5 px-4 rounded-full text-button-uppercase text-secondary cursor-pointer duration-300 hover:bg-black hover:text-white ${category === 'cosmetic' ? 'active' : ''}`}
                                        onClick={() => handleCategory('cosmetic')}
                                    >
                                        cosmetic
                                    </div>
                                    <div
                                        className={`tags bg-white border border-line py-1.5 px-4 rounded-full text-button-uppercase text-secondary cursor-pointer duration-300 hover:bg-black hover:text-white ${category === 'toy-kid' ? 'active' : ''}`}
                                        onClick={() => handleCategory('toys-kid')}
                                    >
                                        toys kid
                                    </div>
                                    <div
                                        className={`tags bg-white border border-line py-1.5 px-4 rounded-full text-button-uppercase text-secondary cursor-pointer duration-300 hover:bg-black hover:text-white ${category === 'yoga' ? 'active' : ''}`}
                                        onClick={() => handleCategory('yoga')}
                                    >
                                        yoga
                                    </div>
                                    <div
                                        className={`tags bg-white border border-line py-1.5 px-4 rounded-full text-button-uppercase text-secondary cursor-pointer duration-300 hover:bg-black hover:text-white ${category === 'organic' ? 'active' : ''}`}
                                        onClick={() => handleCategory('organic')}
                                    >
                                        organic
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BlogList
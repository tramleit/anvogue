'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import blogData from '@/data/Blog.json'
import BlogItem from '@/components/Blog/BlogItem';
import Footer from '@/components/Footer/Footer'
import HandlePagination from '@/components/Other/HandlePagination'
import { useRouter } from 'next/navigation'

const BlogGrid = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 9;
    const offset = currentPage * productsPerPage;
    const router = useRouter()

    const handleBlogClick = (blogId: string) => {
        // Go to blog detail with blogId selected
        router.push(`/blog/detail1?id=${blogId}`);
    };

    let filteredData = blogData.filter(blog => {
        let isCategoryMatched = true
        isCategoryMatched = blog.category !== 'underwear'

        return isCategoryMatched
    })

    console.log(filteredData);
    

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
                <Breadcrumb heading='Blog Grid' subHeading='Blog Grid' />
            </div>
            <div className='blog grid md:py-20 py-10'>
                <div className="container">
                    <div className="list-blog grid lg:grid-cols-3 sm:grid-cols-2 md:gap-[42px] gap-8">
                        {currentProducts.map(item => (
                            <BlogItem key={item.id} data={item} type='style-one' />
                        ))}
                    </div>
                    {pageCount > 1 && (
                        <div className="list-pagination w-full flex items-center justify-center md:mt-10 mt-6">
                            <HandlePagination pageCount={pageCount} onPageChange={handlePageChange} />
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BlogGrid
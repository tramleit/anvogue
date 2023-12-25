'use client'
import React from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import reviewData from '@/data/Testimonial.json'
import TestimonialItem from '@/components/Testimonial/TestimonialItem';
import Footer from '@/components/Footer/Footer'

const CustomerFeedbacks = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Customer Feedbacks' subHeading='Customer Feedbacks' />
            </div>
            <div className='customer-feedbacks md:py-20 py-10'>
                <div className="container">
                    <div className="list-review grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-[30px] gap-5">
                        {reviewData.map(item => (
                            <TestimonialItem key={item.id} data={item} type='style-one' />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CustomerFeedbacks
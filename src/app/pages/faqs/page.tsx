'use client'
import React, { useState } from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const Faqs = () => {
    const [activeTab, setActiveTab] = useState<string | undefined>('how to buy')
    const [activeQuestion, setActiveQuestion] = useState<string | undefined>('')

    const handleActiveTab = (tab: string) => {
        setActiveTab(tab)
    }

    const handleActiveQuestion = (question: string) => {
        setActiveQuestion(prevQuestion => prevQuestion === question ? undefined : question)
    }

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='FAQs' subHeading='FAQs' />
            </div>
            <div className='faqs-block md:py-20 py-10'>
                <div className="container">
                    <div className="flex justify-between">
                        <div className="left w-1/4">
                            <div className="menu-tab flex flex-col gap-5">
                                {[
                                    'how to buy', 'payment methods', 'delivery', 'exchanges & returns', 'registration', 'look after your garments', 'contacts'
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className={`tab-item inline-block w-fit heading6 has-line-before text-secondary2 hover:text-black duration-300 ${activeTab === item ? 'active' : ''}`}
                                        onClick={() => handleActiveTab(item)}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="right w-2/3">
                            <div className={`tab-question flex flex-col gap-5 ${activeTab === 'how to buy' ? 'active' : ''}`}>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '1' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('1')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How does COVID-19 affect my online orders and store purchases?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '2' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('2')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">NEW! Plus sizes for Woman</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com and on all our online channels. Our customer services are still there for you, to answer any questions you may have, although due to the current situation, we are operating with longer waiting times.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '3' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('3')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How does COVID-19 affect my online orders and store purchases?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '4' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('4')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">NEW! Plus sizes for Woman</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com and on all our online channels. Our customer services are still there for you, to answer any questions you may have, although due to the current situation, we are operating with longer waiting times.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '5' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('5')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How does COVID-19 affect my online orders and store purchases?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '6' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('6')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">NEW! Plus sizes for Woman</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com and on all our online channels. Our customer services are still there for you, to answer any questions you may have, although due to the current situation, we are operating with longer waiting times.</div>
                                </div>
                            </div>
                            <div className={`tab-question flex flex-col gap-5 ${activeTab === 'payment methods' ? 'active' : ''}`}>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '2' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('2')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">NEW! Plus sizes for Woman</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com and on all our online channels. Our customer services are still there for you, to answer any questions you may have, although due to the current situation, we are operating with longer waiting times.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '3' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('3')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How does COVID-19 affect my online orders and store purchases?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '4' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('4')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">NEW! Plus sizes for Woman</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com and on all our online channels. Our customer services are still there for you, to answer any questions you may have, although due to the current situation, we are operating with longer waiting times.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '5' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('5')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How does COVID-19 affect my online orders and store purchases?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '6' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('6')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">NEW! Plus sizes for Woman</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com and on all our online channels. Our customer services are still there for you, to answer any questions you may have, although due to the current situation, we are operating with longer waiting times.</div>
                                </div>
                            </div>
                            <div className={`tab-question flex flex-col gap-5 ${activeTab === 'delivery' ? 'active' : ''}`}>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '1' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('1')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How does COVID-19 affect my online orders and store purchases?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '2' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('2')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">NEW! Plus sizes for Woman</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com and on all our online channels. Our customer services are still there for you, to answer any questions you may have, although due to the current situation, we are operating with longer waiting times.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '3' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('3')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How does COVID-19 affect my online orders and store purchases?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '4' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('4')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">NEW! Plus sizes for Woman</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com and on all our online channels. Our customer services are still there for you, to answer any questions you may have, although due to the current situation, we are operating with longer waiting times.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '5' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('5')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How does COVID-19 affect my online orders and store purchases?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '6' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('6')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">NEW! Plus sizes for Woman</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com and on all our online channels. Our customer services are still there for you, to answer any questions you may have, although due to the current situation, we are operating with longer waiting times.</div>
                                </div>
                            </div>
                            <div className={`tab-question flex flex-col gap-5 ${activeTab === 'exchanges & returns' ? 'active' : ''}`}>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '2' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('2')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">NEW! Plus sizes for Woman</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com and on all our online channels. Our customer services are still there for you, to answer any questions you may have, although due to the current situation, we are operating with longer waiting times.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '3' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('3')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How does COVID-19 affect my online orders and store purchases?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '4' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('4')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">NEW! Plus sizes for Woman</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com and on all our online channels. Our customer services are still there for you, to answer any questions you may have, although due to the current situation, we are operating with longer waiting times.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '5' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('5')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How does COVID-19 affect my online orders and store purchases?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '6' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('6')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">NEW! Plus sizes for Woman</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com and on all our online channels. Our customer services are still there for you, to answer any questions you may have, although due to the current situation, we are operating with longer waiting times.</div>
                                </div>
                            </div>
                            <div className={`tab-question flex flex-col gap-5 ${activeTab === 'registration' ? 'active' : ''}`}>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '1' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('1')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How does COVID-19 affect my online orders and store purchases?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '2' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('2')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">NEW! Plus sizes for Woman</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com and on all our online channels. Our customer services are still there for you, to answer any questions you may have, although due to the current situation, we are operating with longer waiting times.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '3' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('3')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How does COVID-19 affect my online orders and store purchases?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '4' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('4')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">NEW! Plus sizes for Woman</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com and on all our online channels. Our customer services are still there for you, to answer any questions you may have, although due to the current situation, we are operating with longer waiting times.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '5' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('5')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How does COVID-19 affect my online orders and store purchases?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '6' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('6')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">NEW! Plus sizes for Woman</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com and on all our online channels. Our customer services are still there for you, to answer any questions you may have, although due to the current situation, we are operating with longer waiting times.</div>
                                </div>
                            </div>
                            <div className={`tab-question flex flex-col gap-5 ${activeTab === 'look after your garments' ? 'active' : ''}`}>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '2' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('2')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">NEW! Plus sizes for Woman</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com and on all our online channels. Our customer services are still there for you, to answer any questions you may have, although due to the current situation, we are operating with longer waiting times.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '3' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('3')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How does COVID-19 affect my online orders and store purchases?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '4' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('4')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">NEW! Plus sizes for Woman</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com and on all our online channels. Our customer services are still there for you, to answer any questions you may have, although due to the current situation, we are operating with longer waiting times.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '5' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('5')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How does COVID-19 affect my online orders and store purchases?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '6' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('6')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">NEW! Plus sizes for Woman</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com and on all our online channels. Our customer services are still there for you, to answer any questions you may have, although due to the current situation, we are operating with longer waiting times.</div>
                                </div>
                            </div>
                            <div className={`tab-question flex flex-col gap-5 ${activeTab === 'contacts' ? 'active' : ''}`}>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '1' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('1')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How does COVID-19 affect my online orders and store purchases?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '2' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('2')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">NEW! Plus sizes for Woman</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com and on all our online channels. Our customer services are still there for you, to answer any questions you may have, although due to the current situation, we are operating with longer waiting times.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '3' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('3')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How does COVID-19 affect my online orders and store purchases?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '4' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('4')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">NEW! Plus sizes for Woman</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com and on all our online channels. Our customer services are still there for you, to answer any questions you may have, although due to the current situation, we are operating with longer waiting times.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '5' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('5')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How does COVID-19 affect my online orders and store purchases?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '6' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('6')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">NEW! Plus sizes for Woman</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The courier companies have adapted their procedures to guarantee the safety of our employees and our community. We thank you for your patience, as there may be some delays to deliveries.
                                        We remind you that you can still find us at Mango.com and on all our online channels. Our customer services are still there for you, to answer any questions you may have, although due to the current situation, we are operating with longer waiting times.</div>
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

export default Faqs
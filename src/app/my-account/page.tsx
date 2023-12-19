'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Footer from '@/components/Footer/Footer'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const MyAccount = () => {

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='My Account' subHeading='My Account' />
            </div>
            <div className="cart-block md:py-20 py-10">
                <div className="container">
                    <div className="content-main lg:px-[60px] md:px-4 flex gap-y-8 max-md:flex-col w-full">
                        <div className="left xl:w-1/3 md:w-5/12 w-full xl:pr-[40px] lg:pr-[28px] md:pr-[16px]">
                            <div className="user-infor bg-surface md:px-8 px-5 md:py-10 py-6 md:rounded-[20px] rounded-xl">
                                <div className="heading flex flex-col items-center justify-center">
                                    <div className="avatar">
                                        <Image
                                            src={'/images/avatar/1.png'}
                                            width={300}
                                            height={300}
                                            alt='avatar'
                                            className='md:w-[140px] w-[120px] md:h-[140px] h-[120px] rounded-full'
                                        />
                                    </div>
                                    <div className="name heading6 mt-4 text-center">Tony Nguyen</div>
                                    <div className="mail heading6 font-normal normal-case text-center mt-1">hi.avitex@gmail.com</div>
                                </div>
                                <div className="menu-tab lg:mt-10 mt-6">
                                    <div className="item px-5 py-4 flex items-center gap-3 cursor-pointer">
                                        <Icon.User size={20} weight='bold' />
                                        <div className="heading6">Account Details</div>
                                    </div>
                                    <div className="item px-5 py-4 flex items-center gap-3 cursor-pointer mt-2">
                                        <Icon.Bag size={20} weight='bold' />
                                        <div className="heading6">Your Orders</div>
                                    </div>
                                    <div className="item px-5 py-4 flex items-center gap-3 cursor-pointer mt-2">
                                        <Icon.MapPin size={20} weight='bold' />
                                        <div className="heading6">My Address</div>
                                    </div>
                                    <div className="item px-5 py-4 flex items-center gap-3 cursor-pointer mt-2">
                                        <Icon.SignOut size={20} weight='bold' />
                                        <div className="heading6">Logout</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right xl:w-2/3 md:w-7/12 w-full xl:pl-[40px] lg:pl-[28px] md:pl-[16px] flex items-center">
                            <div className="text-content w-full">
                                <form className="">
                                    <div className="heading5 pb-4">Information</div>
                                    <div className='grid sm:grid-cols-2 gap-4 gap-y-5'>
                                        <div className="first-name ">
                                            <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="firstName" type="text" defaultValue={'Tony'} placeholder='First name' />
                                        </div>
                                        <div className="last-name">
                                            <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="lastName" type="text" defaultValue={'Nguyen'} placeholder='Last name' />
                                        </div>
                                        <div className="email ">
                                            <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="email" type="email" defaultValue={'hi.avitex@gmail.com'} placeholder="Email address" />
                                        </div>
                                        <div className="phone-number">
                                            <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="phoneNumber" type="text" defaultValue={'(+12) 345 678 910'} placeholder="Phone number" />
                                        </div>
                                        <div className="col-span-full select-block">
                                            <select className="border border-line px-4 py-3 w-full rounded-lg" id="region" name="region" defaultValue={'default'}>
                                                <option value="default" disabled>Choose Country/Region</option>
                                                <option value="India">India</option>
                                                <option value="France">France</option>
                                                <option value="Singapore">Singapore</option>
                                            </select>
                                            <Icon.CaretDown className='arrow-down' />
                                        </div>
                                    </div>
                                    <div className="heading5 pb-4 lg:mt-10 mt-6">Change Password</div>
                                    <div className="pass">
                                        <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="password" type="password" placeholder="Password *" />
                                    </div>
                                    <div className="new-pass mt-5">
                                        <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="newPassword" type="password" placeholder="New Password *" />
                                    </div>
                                    <div className="confirm-pass mt-5">
                                        <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="confirmPassword" type="password" placeholder="Confirm Password *" />
                                    </div>
                                    <div className="block-button lg:mt-10 mt-6">
                                        <button className="button-main">Update Account</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MyAccount
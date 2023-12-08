'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import * as Icon from "@phosphor-icons/react/dist/ssr";

const VideoTutorial = () => {
    const [activeVideo, setActiveVideo] = useState<string>('1')

    const handleActiveVideo = (item: string) => {
        setActiveVideo(item)
    }

    return (
        <>
            <div className="video-tutorial-block md:mt-20 mt-14 bg-linear relative max-sm:flex max-sm:flex-col-reverse">
                <div className="container">
                    <div className="list-category lg:py-[160px] sm:py-20 py-10">
                        <div
                            onClick={() => handleActiveVideo('1')}
                            className={`item flex items-center gap-3 cursor-pointer ${activeVideo === '1' ? 'active' : ''}`}
                        >
                            <Icon.CaretDoubleRight size={24} />
                            <div className="heading4">Body treatment</div>
                        </div>
                        <div
                            onClick={() => handleActiveVideo('2')}
                            className={`item flex items-center gap-3 cursor-pointer sm:mt-7 mt-4 ${activeVideo === '2' ? 'active' : ''}`}
                        >
                            <Icon.CaretDoubleRight size={24} />
                            <div className="heading4">professinal makeup</div>
                        </div>
                        <div
                            onClick={() => handleActiveVideo('3')}
                            className={`item flex items-center gap-3 cursor-pointer sm:mt-7 mt-4 ${activeVideo === '3' ? 'active' : ''}`}
                        >
                            <Icon.CaretDoubleRight size={24} />
                            <div className="heading4">Haircut & Coloring</div>
                        </div>
                        <div
                            onClick={() => handleActiveVideo('4')}
                            className={`item flex items-center gap-3 cursor-pointer sm:mt-7 mt-4 ${activeVideo === '4' ? 'active' : ''}`}
                        >
                            <Icon.CaretDoubleRight size={24} />
                            <div className="heading4">Maincure & pedicure</div>
                        </div>
                        <div
                            onClick={() => handleActiveVideo('5')}
                            className={`item flex items-center gap-3 cursor-pointer sm:mt-7 mt-4 ${activeVideo === '5' ? 'active' : ''}`}
                        >
                            <Icon.CaretDoubleRight size={24} />
                            <div className="heading4">Skincare tutorial</div>
                        </div>
                    </div>
                </div>
                <div className="bg-video sm:absolute max-sm:relative top-0 right-0 bottom-0 w-1/2 max-sm:w-full">
                    <div className="bg-img w-full h-full">
                        <Image
                            src={'/images/banner/video-cos2.png'}
                            width={1000}
                            height={1000}
                            alt='bg-img'
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className="btn-play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-white sm:w-20 w-16 sm:h-20 h-16 rounded-full flex items-center justify-center duration-500 hover:bg-black hover:text-white">
                        <Icon.Play size={30} weight='fill' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoTutorial
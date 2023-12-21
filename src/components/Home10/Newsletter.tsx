import React from 'react'

const Newsletter = () => {
    return (
        <>
            <div className={`newsletter-block bg-green py-7`}>
                <div className="container flex max-lg:flex-col items-center lg:justify-between justify-center gap-8 gap-y-4">
                    <div className="text-content">
                        <div className="heading3 max-lg:text-center">Sign up and get 10% off</div>
                        <div className='mt-2 max-lg:text-center'>Sign up for early sale access, new in, promotions and more</div>
                    </div>
                    <div className="input-block xl:w-5/12 md:w-1/2 sm:w-3/5 w-full h-[52px]">
                        <form className='w-full h-full relative' action="post">
                            <input type="email" placeholder='Enter your e-mail' className='caption1 w-full h-full pl-4 pr-14 rounded-xl border border-line' required />
                            <button className='button-main bg-green text-black absolute top-1 bottom-1 right-1 flex items-center justify-center'>Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter
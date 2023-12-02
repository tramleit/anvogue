import React from 'react'

interface Props {
    props: string;
}

const Benefit: React.FC<Props> = ({ props }) => {
    return (
        <>
            <div className="container">
                <div className={`benefit-block ${props}`}>
                    <div className="list-benefit grid items-start lg:grid-cols-4 grid-cols-2 gap-[30px]">
                        <div className="benefit-item flex flex-col items-center justify-center">
                            <i className="icon-phone-call lg:text-6xl text-5xl"></i>
                            <div className="heading6 text-center mt-5">24/7 Customer Service</div>
                        </div>
                        <div className="benefit-item flex flex-col items-center justify-center">
                            <i className="icon-return lg:text-6xl text-5xl"></i>
                            <div className="heading6 text-center mt-5">14-Day Money Back</div>
                        </div>
                        <div className="benefit-item flex flex-col items-center justify-center">
                            <i className="icon-guarantee lg:text-6xl text-5xl"></i>
                            <div className="heading6 text-center mt-5">Our Guarantee</div>
                        </div>
                        <div className="benefit-item flex flex-col items-center justify-center">
                            <i className="icon-delivery-truck lg:text-6xl text-5xl"></i>
                            <div className="heading6 text-center mt-5">Shipping worldwide</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Benefit
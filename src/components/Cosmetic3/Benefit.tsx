import React from 'react'

interface Props {
    props: string;
}

const Benefit: React.FC<Props> = ({ props }) => {
    return (
        <>
            <div className="container">
                <div className={`benefit-block ${props}`}>
                    <div className="list-benefit grid items-start md:grid-cols-4 grid-cols-2 gap-[30px]">
                        <div className="benefit-item flex flex-col items-center justify-center">
                            <i className="icon-double-leaves lg:text-7xl text-5xl"></i>
                            <div className="body1 font-semibold uppercase text-center mt-5">Clean skincare</div>
                            <div className="caption1 text-secondary text-center mt-2">Clean and natural skincare with safe and transparent ingredients</div>
                        </div>
                        <div className="benefit-item flex flex-col items-center justify-center">
                            <i className="icon-earth lg:text-7xl text-5xl"></i>
                            <div className="body1 font-semibold uppercase text-center mt-5">european delivery</div>
                            <div className="caption1 text-secondary text-center mt-3">Fast delivery options with tracking No EU import duties</div>
                        </div>
                        <div className="benefit-item flex flex-col items-center justify-center">
                            <i className="icon-update lg:text-7xl text-5xl"></i>
                            <div className="body1 font-semibold uppercase text-center mt-5">Sustainability</div>
                            <div className="caption1 text-secondary text-center mt-3">Our signature shipping boxes are fully recyclable and biodegradable</div>
                        </div>
                        <div className="benefit-item flex flex-col items-center justify-center">
                            <i className="icon-user-shield lg:text-7xl text-5xl"></i>
                            <div className="body1 font-semibold uppercase text-center mt-5">authorized retailer</div>
                            <div className="caption1 text-secondary text-center mt-3">We are an authorized retailer for all the brands we carry</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Benefit
import React from 'react'

interface Props {
    props: string;
}

const Benefit: React.FC<Props> = ({ props }) => {
    return (
        <>
            <div className="container">
                <div className={`benefit-block ${props}`}>
                    <div className="list-benefit grid items-start md:grid-cols-3 grid-cols-1 gap-[160px]">
                        <div className="benefit-item flex flex-col items-center justify-center">
                            <i className="icon-double-leaves lg:text-7xl text-5xl"></i>
                            <div className="body1 font-semibold uppercase text-center mt-5">100% ORGANIC</div>
                            <div className="caption1 text-secondary text-center mt-2">We believe in skin that looks like skin and radiance that come naturally</div>
                        </div>
                        <div className="benefit-item flex flex-col items-center justify-center">
                            <i className="icon-leaves lg:text-7xl text-5xl"></i>
                            <div className="body1 font-semibold uppercase text-center mt-5">NO SYNTHETIC COLORS</div>
                            <div className="caption1 text-secondary text-center mt-3">With transparency ad our guide and color as our vehicle conventions</div>
                        </div>
                        <div className="benefit-item flex flex-col items-center justify-center">
                            <i className="icon-rabbit-heart lg:text-7xl text-5xl"></i>
                            <div className="body1 font-semibold uppercase text-center mt-5">NO ANIMAL TESTING</div>
                            <div className="caption1 text-secondary text-center mt-3">We challenge the conventions of clean beauty to create.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Benefit
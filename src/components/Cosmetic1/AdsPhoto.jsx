'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'

const AdsPhoto = () => {
    useEffect(() => {
        const imageComparisonSlider = document.querySelector('[data-component="image-comparison-slider"]');

        function setSliderstate(e, element) {
            const sliderRange = element.querySelector('[data-image-comparison-range]');

            if (e.type === 'input') {
                sliderRange.classList.add('image-comparison__range--active');
                return;
            }

            sliderRange.classList.remove('image-comparison__range--active');
            element.removeEventListener('mousemove', moveSliderThumb);
        }

        function moveSliderThumb(e) {
            const sliderRange = document.querySelector('[data-image-comparison-range]');
            const thumb = document.querySelector('[data-image-comparison-thumb]');
            let position = e.layerY - 20;

            if (e.layerY <= sliderRange.offsetTop) {
                position = -20;
            }

            if (e.layerY >= sliderRange.offsetHeight) {
                position = sliderRange.offsetHeight - 20;
            }

            thumb.style.top = `${position}px`;
        }

        function moveSliderRange(e, element) {
            const value = e.target.value;
            const slider = element.querySelector('[data-image-comparison-slider]');
            const imageWrapperOverlay = element.querySelector('[data-image-comparison-overlay]');

            slider.style.left = `${value}%`;
            imageWrapperOverlay.style.width = `${value}%`;

            element.addEventListener('mousemove', moveSliderThumb);
            setSliderstate(e, element);
        }

        function init(element) {
            const sliderRange = element.querySelector('[data-image-comparison-range]');

            if (sliderRange) {
                if ('ontouchstart' in window === false) {
                    sliderRange.addEventListener('mouseup', e => setSliderstate(e, element));
                    sliderRange.addEventListener('mousedown', moveSliderThumb);
                }

                sliderRange.addEventListener('input', e => moveSliderRange(e, element));
                sliderRange.addEventListener('change', e => moveSliderRange(e, element));
            }
        }

        if (imageComparisonSlider) {
            init(imageComparisonSlider);
        }
    }, []);

    return (
        <>
            <section className="image-comparison md:pt-[60px] pt-8" data-component="image-comparison-slider">
                <div className="image-comparison__slider-wrapper xl:h-[440px] md:h-[260px] overflow-hidden">
                    <label htmlFor="image-compare-range" className="image-comparison__label">Move image comparison slider</label>
                    <input type="range" min="0" max="100" value="50" className="image-comparison__range" id="image-compare-range"
                        data-image-comparison-range="" />

                    <div className="image-comparison__image-wrapper  image-comparison__image-wrapper--overlay"
                        data-image-comparison-overlay="">
                        <figure className="image-comparison__figure image-comparison__figure--overlay">
                            <picture className="image-comparison__picture">
                                <source media="(max-width: 40em)" srcSet="/images/banner/before.png" />
                                <source media="(min-width: 40.0625em) and (max-width: 48em)"
                                    srcSet="/images/banner/before.png" />
                                <img src="/images/banner/before.png" alt="Mojave desert in the sun"
                                    className="image-comparison__image" />
                            </picture>

                            <figcaption
                                className="image-comparison__caption image-comparison__caption--before absolute top-5 left-5 heading5 px-6 py-3 rounded-[30px] bg-surface2 text-white">
                                <span className="image-comparison__caption-body">Before</span>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="image-comparison__slider" data-image-comparison-slider="">
                        <span className="image-comparison__thumb" data-image-comparison-thumb="">
                            <svg className="image-comparison__thumb-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="10"
                                viewBox="0 0 18 10" fill="currentColor">
                                <path className="image-comparison__thumb-icon--left"
                                    d="M12.121 4.703V.488c0-.302.384-.454.609-.24l4.42 4.214a.33.33 0 0 1 0 .481l-4.42 4.214c-.225.215-.609.063-.609-.24V4.703z">
                                </path>
                                <path className="image-comparison__thumb-icon--right"
                                    d="M5.879 4.703V.488c0-.302-.384-.454-.609-.24L.85 4.462a.33.33 0 0 0 0 .481l4.42 4.214c.225.215.609.063.609-.24V4.703z">
                                </path>
                            </svg>
                        </span>
                    </div>

                    <div className="image-comparison__image-wrapper">
                        <figure className="image-comparison__figure">
                            <picture className="image-comparison__picture">
                                <source media="(max-width: 40em)" srcSet="/images/banner/after.png" />
                                <source media="(min-width: 40.0625em) and (max-width: 48em)"
                                    srcSet="/images/banner/after.png" />
                                <img src="/images/banner/after.png" alt="Mojave desert in the dark"
                                    className="image-comparison__image after" />
                            </picture>

                            <figcaption
                                className="image-comparison__caption image-comparison__caption--after absolute top-5 right-5 heading5 px-6 py-3 rounded-[30px] bg-surface2 text-white">
                                <span className="image-comparison__caption-body">After</span>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdsPhoto
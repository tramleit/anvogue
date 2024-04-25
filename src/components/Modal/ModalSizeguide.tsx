'use client'

import React, { useState } from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { ProductType } from '@/type/ProductType'
// import Slider from 'react-slider'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'

interface Props {
    data: ProductType | null;
    isOpen: boolean;
    onClose: () => void;
}

const ModalSizeguide: React.FC<Props> = ({ data, isOpen, onClose }) => {
    const [activeSize, setActiveSize] = useState<string>('')
    const [heightRange, setHeightRange] = useState<{ min: number; max: number }>({ min: 100, max: 200 });
    const [weightRange, setWeightRange] = useState<{ min: number; max: number }>({ min: 30, max: 90 });

    const calculateSize = (height: number, weight: number) => {
        if (height > 180 || weight > 70) {
            setActiveSize('2XL');
        } else if (height > 170 || weight > 60) {
            setActiveSize('XL');
        } else if (height > 160 || weight > 50) {
            setActiveSize('L');
        } else if (height > 155 || weight > 45) {
            setActiveSize('M');
        } else if (height > 150 || weight > 40) {
            setActiveSize('S');
        } else {
            setActiveSize('XS');
        }
    };

    const handleHeightChange = (values: number | number[]) => {
        if (Array.isArray(values)) {
            setHeightRange({ min: values[0], max: values[1] });
        }
        calculateSize(heightRange.max, weightRange.max)
    };

    const handleWeightChange = (values: number | number[]) => {
        if (Array.isArray(values)) {
            setWeightRange({ min: values[0], max: values[1] });
        }
        calculateSize(heightRange.max, weightRange.max)
    };

    return (
        <>
            <div className={`modal-sizeguide-block`} onClick={onClose}>
                <div
                    className={`modal-sizeguide-main md:p-10 p-6 rounded-[32px] ${isOpen ? 'open' : ''}`}
                    onClick={(e) => { e.stopPropagation() }}
                >
                    <div
                        className="close-btn absolute right-5 top-5 w-6 h-6 rounded-full bg-surface flex items-center justify-center duration-300 cursor-pointer hover:bg-black hover:text-white"
                        onClick={onClose}
                    >
                        <Icon.X size={14} />
                    </div>
                    <div className="heading3">Size guide</div>
                    <div className="md:mt-8 mt-6 progress">
                        <div className="flex imd:items-center gap-10 justify-between max-md:flex-col gap-y-5 max-md:pr-3">
                            <div className="flex items-center flex-shrink-0 gap-8">
                                <span className='flex-shrink-0 md:w-14'>Height</span>
                                <div className="flex items-center justify-center w-20 gap-1 py-2 border border-line rounded-lg flex-shrink-0">
                                    <span>{heightRange.max}</span>
                                    <span className='caption1 text-secondary'>Cm</span>
                                </div>
                            </div>
                            <Slider
                                range
                                defaultValue={[100, 200]}
                                min={100}
                                max={200}
                                onChange={handleHeightChange}
                            />
                        </div>
                        <div className="flex md:items-center gap-10 justify-between max-md:flex-col gap-y-5 max-md:pr-3 mt-5">
                            <div className="flex items-center gap-8 flex-shrink-0">
                                <span className='flex-shrink-0 md:w-14'>Weight</span>
                                <div className="flex items-center justify-center w-20 gap-1 py-2 border border-line rounded-lg flex-shrink-0">
                                    <span>{weightRange.max}</span>
                                    <span className='caption1 text-secondary'>Kg</span>
                                </div>
                            </div>
                            <Slider
                                range
                                defaultValue={[30, 90]}
                                min={30}
                                max={90}
                                onChange={handleWeightChange}
                            />
                        </div>
                    </div>
                    <div className="heading6 mt-8">suggests for you:</div>
                    <div className="list-size flex items-center gap-2 flex-wrap mt-3">
                        {data?.sizes.map((item, index) => (
                            <div
                                className={`size-item w-12 h-12 flex items-center justify-center text-button rounded-full bg-white border border-line ${activeSize === item ? 'active' : ''}`}
                                key={index}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Size</th>
                                <th>Bust</th>
                                <th>Waist</th>
                                <th>Low Hip</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>XS</td>
                                <td>32</td>
                                <td>24-25</td>
                                <td>33-34</td>
                            </tr>
                            <tr>
                                <td>S</td>
                                <td>34-35</td>
                                <td>26-27</td>
                                <td>35-36</td>
                            </tr>
                            <tr>
                                <td>M</td>
                                <td>36-37</td>
                                <td>28-29</td>
                                <td>38-40</td>
                            </tr>
                            <tr>
                                <td>L</td>
                                <td>38-39</td>
                                <td>30-31</td>
                                <td>42-44</td>
                            </tr>
                            <tr>
                                <td>XL</td>
                                <td>40-41</td>
                                <td>32-33</td>
                                <td>45-47</td>
                            </tr>
                            <tr>
                                <td>2XL</td>
                                <td>42-43</td>
                                <td>34-35</td>
                                <td>48-50</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ModalSizeguide
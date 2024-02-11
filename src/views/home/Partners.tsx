'use client';

import 'swiper/css/bundle';

import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import SwiperType from 'swiper';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { IoIosArrowRoundForward } from 'react-icons/io';

const companies: string[] = [
    '/images/partner-1.png',
    '/images/partner-2.png',
    '/images/partner-3.png',
    '/images/partner-4.png',
    '/images/partner-5.png',
    '/images/partner-6.png',
];

const Partners = () => {
    const slideRef = useRef<SwiperType | null>(null);
    const [tabIndex, setTabIndex] = useState(0);
    const [nextDisabled, setNextDisabled] = useState(true);

    console.log('tabIndex', tabIndex);
    return (
        <div>
            <div className="container flex gap-10">
                <div className="flex-1 min-h-full flex flex-col justify-start">
                    <div className="bg-gradient-primary w-[5rem] h-[0.4rem] mb-8"></div>
                    <h1 className="font-light text-4xl -text--Gray-gray-900 pb-16">
                        Meet the People <br />
                        <span className="font-bold">We are Working With </span>{' '}
                    </h1>
                </div>
                <div className="flex items-end gap-5 pb-5">
                    <button
                        className={`text-2xl border border-[#57007B] rounded-full p-1 ${
                            tabIndex == 0 ? 'bg-transparent text-[#57007B]' : 'bg-[#57007B] text-white'
                        }`}
                        onClick={() => slideRef?.current?.slidePrev()}
                        disabled={tabIndex === 0}>
                        <IoIosArrowRoundBack />
                    </button>
                    <button
                        className={`text-2xl border border-[#57007B] rounded-full p-1 ${
                            tabIndex + 4 === companies.length - 1
                                ? 'bg-transparent text-[#57007B]'
                                : 'bg-[#57007B] text-white'
                        }`}
                        onClick={() => slideRef?.current?.slideNext()}
                        disabled={tabIndex + 4 === companies.length - 1}>
                        <IoIosArrowRoundForward />
                    </button>
                </div>
            </div>
            <div className="w-full bg-[#F7F7FA] py-16">
                <Swiper
                    grabCursor={true}
                    loop={false}
                    speed={1000}
                    slidesPerGroup={1}
                    slidesPerView={1}
                    spaceBetween={16}
                    preventInteractionOnTransition={true}
                    loopPreventsSliding={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    }}
                    onInit={(swiper) => {
                        slideRef.current = swiper;
                    }}
                    onRealIndexChange={(swiper) => {
                        const realIndex = swiper.realIndex;
                        setTabIndex(realIndex);
                    }}
                    className="w-full">
                    {companies.map((src, i) => {
                        return (
                            <SwiperSlide key={i} className={`${i !== companies.length - 1 ? 'mr-4' : '!mr-0'}`}>
                                <div key={i} className="relative w-full h-[6rem]">
                                    <Image src={src} alt="company" fill className="object-contain" />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default Partners;

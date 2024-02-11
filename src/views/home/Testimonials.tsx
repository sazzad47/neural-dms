'use client';

import 'swiper/css/bundle';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import SwiperType from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { IoIosArrowRoundForward } from 'react-icons/io';

const customers: any[] = [
    { id: 1, name: 'Sazzad Hossen', position: 'Software Developer', rating: 5, photo: '/images/user-1.jpg' },
    { id: 2, name: 'John Doe', position: 'Project Manager', rating: 4, photo: '/images/user-2.jpg' },
    { id: 3, name: 'Jane Smith', position: 'UX Designer', rating: 4.5, photo: '/images/user-3.jpg' },
    { id: 4, name: 'Michael Johnson', position: 'Frontend Developer', rating: 4.2, photo: '/images/user-4.jpg' },
    { id: 5, name: 'Emily Davis', position: 'Marketing Manager', rating: 4.8, photo: '/images/user-5.jpg' },
];


const Testimonials = () => {
    const slideRef = useRef<SwiperType | null>(null);
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <div className="container gap-10">
                <div className="w-full min-h-full flex flex-col items-center">
                    <div className="bg-gradient-primary w-[5rem] h-[0.4rem] mb-8"></div>
                    <h1 className="text-center font-light text-4xl -text--Gray-gray-900 pb-16">
                        Why cutomers love <br />
                        <span className="font-bold">working with us </span>
                    </h1>
                </div>
                <div className="w-1/2 mx-auto relative">
                    <div className="absolute -top-3 -left-16">
                        <Image src="/images/inverted-comma.svg" alt="inverted-comma" height={50} width={50} />
                    </div>
                    <p className="text-[#718096] text-xl text-center">
                        Without any doubt I recommend Alcaline Solutions as one of the best web design and digital
                        marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to
                        introduce their work to someone else.
                    </p>
                    <div className="absolute -bottom-3 -right-16">
                        <Image src="/images/comma.svg" alt="inverted-comma" height={50} width={50} />
                    </div>
                </div>

                {/* <div className="flex items-end gap-5 pb-5">
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
                </div> */}
            </div>
            <div className="w-full py-16">
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
                    {customers.map(({name, position, rating, photo}, i) => {
                        return (
                            <SwiperSlide key={i} className={`${i !== customers.length - 1 ? 'mr-4' : '!mr-0'}`}>
                                <div className="relative w-[5rem] h-[5rem] mx-auto rounded-full overflow-hidden">
                                    <Image src={photo} alt="company" fill />
                                </div>
                                <h4 className='text-center mt-1 text-[#A0AEC0] text-lg'> {name} </h4>
                                <p className='text-center text-[#CBD5E0] text-sm'> {position} </p>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;

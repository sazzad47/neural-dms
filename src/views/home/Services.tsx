'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import { FaRobot } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const services = [
    {
        icon: <FaRobot className="text-4xl text-gray-500" />, // Using the robot icon
        title: 'AI Chatbot',
        desc: 'Mojeeb is an intelligent AI chatbot designed to assist you 24/7 with any queries or concerns you may have.',
    },
    {
        icon: <FaRobot className="text-4xl text-gray-500" />, // Using the robot icon
        title: 'Voice Assistant',
        desc: 'Mojeeb can also function as a voice assistant, helping you perform tasks using voice commands.',
    },
    {
        icon: <FaRobot className="text-4xl text-gray-500" />, // Using the robot icon
        title: 'Personalized Recommendations',
        desc: 'Get personalized recommendations tailored to your preferences and needs with Mojeeb.',
    },
    {
        icon: <FaRobot className="text-4xl text-gray-500" />, // Using the robot icon
        title: '24/7 Customer Support',
        desc: 'Access 24/7 customer support from Mojeeb for immediate assistance and resolution of issues.',
    },
    {
        icon: <FaRobot className="text-4xl text-gray-500" />, // Using the robot icon
        title: 'Automated Responses',
        desc: 'Mojeeb can provide automated responses to frequently asked questions, saving time and effort.',
    },
    {
        icon: <FaRobot className="text-4xl text-gray-500" />, // Using the robot icon
        title: 'Data Analysis',
        desc: 'Leverage Mojeeb to analyze data and provide insights for informed decision-making.',
    },
];
const Services = () => {
    return (
        <div className="bg-[#F9F9FF] py-12 ">
            <h1 className="section-heading text-center">Services we offer</h1>
            <div className="w-full mt-16">
                <Swiper
                    modules={[Pagination, A11y]}
                    grabCursor={true}
                    loop={false}
                    speed={1000}
                    slidesPerGroup={1}
                    slidesPerView={1}
                    spaceBetween={26}
                    preventInteractionOnTransition={true}
                    loopPreventsSliding={true}
                    // pagination={{
                    //     el: paginationRef.current,
                    //     type: 'bullets',
                    //     clickable: true,
                    //     bulletClass: 'bg-amber-400',
                    //     bulletActiveClass: 'bg-green-400',
                    // }}
                    pagination={{
                        el: '.pagination',
                        clickable: true,
                        renderBullet: function (index, className) {
                            return `<span class="dot swiper-pagination-bullet"></span>`;
                        },
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    className="w-full">
                    {services.map(({ icon, title, desc }, i) => {
                        return (
                            <SwiperSlide
                                key={i}
                                className={`service-card bg-[#FAFAFA] p-10 ${
                                    i !== services.length - 1 ? 'mr-4' : '!mr-0'
                                }`}>
                                <div key={i} className="w-full flex flex-col items-start gap-10">
                                    <div className="p-2 inline-block rounded-full border border-[#F76680]">{icon}</div>

                                    <div className="flex flex-col items-start gap-3">
                                        <h3 className="text-base leading-none tracking-tighter md:text-center uppercase">
                                            {title}
                                        </h3>

                                        <div className="leading-[1.3] text-sm text-light tracking-tightest">
                                            {desc}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                <div className="pagination mt-10 flex justify-center"></div>
            </div>
        </div>
    );
};

export default Services;

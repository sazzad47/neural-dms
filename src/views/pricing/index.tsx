import React from 'react';
import { FaCheck } from 'react-icons/fa6';

const PricingUI = () => {
    return (
        <div className="min-h-screen p-10">
            <h1 className="text-white font-heading font-extrabold text-6xl mt-10 mb-16 capitalize">Choose the right plan for your business</h1>
            <div className="mx-auto p-16 flex justify-between relative">
                <div className="price-card p-10 w-[35%] bg-[#0237D0] flex flex-col gap-6">
                    <h1 className="font-heading text-3xl font-bold text-center">Basic Plan</h1>
                    <p className="text-center">Get started with essential features for beginners.</p>
                    <ul className="flex flex-col gap-3">
                        <li className="flex gap-2 items-center">
                            <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center">
                                <FaCheck className="text-primary text-xl" />
                            </div>
                            One benefit
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center">
                                <FaCheck className="text-primary text-xl" />
                            </div>
                            One benefit
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center">
                                <FaCheck className="text-primary text-xl" />
                            </div>
                            One benefit
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-7 h-7 rounded-full bg-primary border border-white" />
                            One benefit
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-7 h-7 rounded-full bg-primary border border-white" />
                            One benefit
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-7 h-7 rounded-full bg-primary border border-white" />
                            One benefit
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-7 h-7 rounded-full bg-primary border border-white" />
                            One benefit
                        </li>
                    </ul>
                    <p className="text-white text-3xl font-extrabold text-center">
                        $4.99<span className="text-xl font-light opacity-[0.6]">/month </span>{' '}
                    </p>
                    <button className="btn-default text-[#0237D0] mx-auto">Choose</button>
                </div>

                <div className="price-card-popular w-[30%] absolute top-5 right-0 left-0 mx-auto bg-[#A643AD] ">
                    <div className="relative overflow-hidden flex flex-col gap-6 p-10">
                        <div className="absolute right-0 top-0 h-16 w-16 z-10">
                            <div className="absolute transform rotate-45 bg-primary text-center text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px]">
                                20% off
                            </div>
                        </div>
                        <h1 className="font-heading text-3xl font-bold text-center">Standard Plan</h1>
                        <p className="text-center">Get started with essential features for beginners.</p>
                        <ul className="flex flex-col gap-3">
                            <li className="flex gap-2 items-center">
                                <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center">
                                    <FaCheck className="text-primary text-xl" />
                                </div>
                                One benefit
                            </li>
                            <li className="flex gap-2 items-center">
                                <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center">
                                    <FaCheck className="text-primary text-xl" />
                                </div>
                                One benefit
                            </li>
                            <li className="flex gap-2 items-center">
                                <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center">
                                    <FaCheck className="text-primary text-xl" />
                                </div>
                                One benefit
                            </li>
                            <li className="flex gap-2 items-center">
                                <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center">
                                    <FaCheck className="text-primary text-xl" />
                                </div>
                                One benefit
                            </li>
                            <li className="flex gap-2 items-center">
                                <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center">
                                    <FaCheck className="text-primary text-xl" />
                                </div>
                                One benefit
                            </li>
                            <li className="flex gap-2 items-center">
                                <div className="w-7 h-7 rounded-full bg-primary border border-white" />
                                One benefit
                            </li>
                            <li className="flex gap-2 items-center">
                                <div className="w-7 h-7 rounded-full bg-primary border border-white" />
                                One benefit
                            </li>
                        </ul>
                        <p className="text-white text-3xl font-extrabold text-center">
                            $4.99<span className="text-xl font-light opacity-[0.6]">/month </span>{' '}
                        </p>
                        <button className="btn-default text-[#A643AD] mx-auto">Choose</button>
                    </div>
                </div>

                <div className="price-card p-10 w-[35%] bg-[#6589F0] flex flex-col gap-6">
                    <h1 className="font-heading text-3xl font-bold text-center">Premium Plan</h1>
                    <p className="text-center">Get started with essential features for beginners.</p>
                    <ul className="flex flex-col gap-3">
                        <li className="flex gap-2 items-center">
                            <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center">
                                <FaCheck className="text-primary text-xl" />
                            </div>
                            One benefit
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center">
                                <FaCheck className="text-primary text-xl" />
                            </div>
                            One benefit
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center">
                                <FaCheck className="text-primary text-xl" />
                            </div>
                            One benefit
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center">
                                <FaCheck className="text-primary text-xl" />
                            </div>
                            One benefit
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center">
                                <FaCheck className="text-primary text-xl" />
                            </div>
                            One benefit
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center">
                                <FaCheck className="text-primary text-xl" />
                            </div>
                            One benefit
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center">
                                <FaCheck className="text-primary text-xl" />
                            </div>
                            One benefit
                        </li>
                    </ul>
                    <p className="text-white text-3xl font-extrabold text-center">
                        $4.99<span className="text-xl font-light opacity-[0.6]">/month </span>{' '}
                    </p>
                    <button className="btn-default text-[#6589F0] mx-auto">Choose</button>
                </div>
            </div>
        </div>
    );
};

export default PricingUI;

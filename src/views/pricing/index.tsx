import React from 'react';
import { LuCheckCircle } from 'react-icons/lu';

const PricingUI = () => {
    return (
        <div className="min-h-screen p-16">
            <h1 className="text-center text-[#243B53] font-[500] text-6xl mt-16 mb-8">
                Pick the price <span className="text-gradient"> thats right for you </span>
            </h1>
            <p className="text-center text-[#486581] text-lg font-normal">
                Join millions of other customers on this platform
            </p>
            <div className="mt-20 w-full flex justify-center items-center gap-3">
                <label className="hover:cursor-pointer text-[#334E68] font-semibold text-sm" htmlFor="recurring">
                    Monthly
                </label>
                <input
                    className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                    type="checkbox"
                    role="switch"
                    id="recurring"
                />
                <label className="hover:cursor-pointer text-[#334E68] font-semibold text-sm" htmlFor="recurring">
                    Yearly
                </label>
            </div>
            <div className="mx-auto flex justify-between gap-7 mt-8 w-[70%]">
                <div className="price-card rounded-xl">
                    <div className="p-6 flex flex-col gap-3">
                        <div className="bg-[#E3F8FF] text-center w-[4rem] py-2 rounded-[1.5rem] text-[#035388] text-[0.6rem] font-semibold">
                            Lite
                        </div>
                        <p className="text-[#243B53] font-semibold text-3xl">
                            $7 <span className="text-[#829AB1] text-xs font-normal"> /month</span>
                        </p>
                        <p className="text-[#486581] text-xs">
                            Just using this for yourself? Lite is the way to go for the lites platform.
                        </p>
                        <button className="bg-[#127FBF] rounded-lg text-center w-full py-4 text-white font-semibold text-sm">
                            Select Lite
                        </button>
                    </div>
                    <div className="border border-t-[#F0F4F8]">
                        <ul className="p-6 flex flex-col gap-3">
                            <li className="flex items-center gap-2 text-[#486581] text-sm">
                                <LuCheckCircle className="text-2xl" />
                                One person team
                            </li>
                            <li className="flex items-center gap-2 text-[#486581] text-sm">
                                <LuCheckCircle className="text-2xl" />
                                One person team
                            </li>
                            <li className="flex items-center gap-2 text-[#486581] text-sm">
                                <LuCheckCircle className="text-2xl" />
                                One person team
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="price-card rounded-xl">
                    <div className="p-6 flex flex-col gap-3">
                        <div className="bg-[#E3F8FF] text-center w-[4rem] py-2 rounded-[1.5rem] text-[#620042] text-[0.6rem] font-semibold">
                            Pro
                        </div>
                        <p className="text-[#243B53] font-semibold text-3xl">
                            $19 <span className="text-[#829AB1] text-xs font-normal"> /month</span>
                        </p>
                        <p className="text-[#486581] text-xs">
                            Just using this for yourself? Lite is the way to go for the lites platform.
                        </p>
                        <button className="bg-[#127FBF] rounded-lg text-center w-full py-4 text-white font-semibold text-sm">
                            Select Pro
                        </button>
                    </div>
                    <div className="border border-t-[#F0F4F8]">
                        <ul className="p-6 flex flex-col gap-3">
                            <li className="flex items-center gap-2 text-[#486581] text-sm">
                                <LuCheckCircle className="text-2xl" />
                                One person team
                            </li>
                            <li className="flex items-center gap-2 text-[#486581] text-sm">
                                <LuCheckCircle className="text-2xl" />
                                One person team
                            </li>
                            <li className="flex items-center gap-2 text-[#486581] text-sm">
                                <LuCheckCircle className="text-2xl" />
                                One person team
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="price-card rounded-xl">
                    <div className="p-6 flex flex-col gap-3">
                        <div className="bg-[#E3F8FF] text-center w-[4rem] py-2 rounded-[1.5rem] text-[#004440] text-[0.6rem] font-semibold">
                            Team
                        </div>
                        <p className="text-[#243B53] font-semibold text-3xl">
                            $31 <span className="text-[#829AB1] text-xs font-normal"> /month</span>
                        </p>
                        <p className="text-[#486581] text-xs">
                            Just using this for yourself? Lite is the way to go for the lites platform.
                        </p>
                        <button className="bg-[#127FBF] rounded-lg text-center w-full py-4 text-white font-semibold text-sm">
                            Select Team
                        </button>
                    </div>
                    <div className="border border-t-[#F0F4F8]">
                        <ul className="p-6 flex flex-col gap-3">
                            <li className="flex items-center gap-2 text-[#486581] text-sm">
                                <LuCheckCircle className="text-2xl" />
                                One person team
                            </li>
                            <li className="flex items-center gap-2 text-[#486581] text-sm">
                                <LuCheckCircle className="text-2xl" />
                                One person team
                            </li>
                            <li className="flex items-center gap-2 text-[#486581] text-sm">
                                <LuCheckCircle className="text-2xl" />
                                One person team
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingUI;

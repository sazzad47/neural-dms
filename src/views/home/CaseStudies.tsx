import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const CaseStudies = () => {
    return (
        <div className="bg-[#F7F7FA] pb-16">
            <div className="container gap-10">
                <div className="w-full min-h-full flex flex-col items-center">
                    <div className="bg-gradient-primary w-[5rem] h-[0.4rem] mb-8"></div>
                    <h1 className="text-center font-light text-4xl -text--Gray-gray-900 pb-16">
                        Our recent <br />
                        <span className="font-bold">Case studies </span>
                    </h1>
                </div>

                <div className="w-full flex">
                    <div className="flex-1 rounded-s-3xl rounded-e-none overflow-hidden relative bg-[#F1F2FF]">
                        <Image src="/images/case-study-1.png" alt="case-study" fill />
                    </div>
                    <div className="flex-1 px-12 py-14 rounded-r-3xl bg-[#F1F2FF] border border-[#E7DAED]">
                        <h1 className="text-[#2D3748] text-3xl font-semibold mb-5">Website Design for SCFC Canada</h1>
                        <p className="text-[#4A5568] text-sm font-normal">
                            Born out of a vision, a single-minded objective that puts service before anything else,
                            Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the
                            shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The
                            management boasts of over 20 years of rich and varied experience in the shipping and freight
                            forwarding industry.
                        </p>
                        <div className="w-full flex justify-end mt-8">
                            <Link href="/" className="text-highlight font-semibold text-sm flex items-center gap-1">
                                Raed more
                                <MdOutlineKeyboardArrowRight className="text-lg" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-full flex mt-6">
                <div className="flex-1 rounded-s-3xl rounded-e-none overflow-hidden relative bg-[#F0FFF7]">
                        <Image src="/images/case-study-2.png" alt="case-study" fill />
                    </div>
                    <div className="flex-1 px-12 py-14 rounded-r-3xl bg-[#F0FFF7] border border-[#E7DAED]">
                        <h1 className="text-[#2D3748] text-3xl font-semibold mb-5">Website Design for SCFC Canada</h1>
                        <p className="text-[#4A5568] text-sm font-normal">
                            Born out of a vision, a single-minded objective that puts service before anything else,
                            Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the
                            shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The
                            management boasts of over 20 years of rich and varied experience in the shipping and freight
                            forwarding industry.
                        </p>
                        <div className="w-full flex justify-end mt-8">
                            <Link href="/" className="text-highlight font-semibold text-sm flex items-center gap-1">
                                Raed more
                                <MdOutlineKeyboardArrowRight className="text-lg" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-full flex mt-6">
                <div className="flex-1 rounded-s-3xl rounded-e-none overflow-hidden relative bg-[#FFF4F4]">
                        <Image src="/images/case-study-3.png" alt="case-study" fill />
                    </div>
                    <div className="flex-1 px-12 py-14 rounded-r-3xl bg-[#FFF4F4] border border-[#E7DAED]">
                        <h1 className="text-[#2D3748] text-3xl font-semibold mb-5">Website Design for SCFC Canada</h1>
                        <p className="text-[#4A5568] text-sm font-normal">
                            Born out of a vision, a single-minded objective that puts service before anything else,
                            Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the
                            shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The
                            management boasts of over 20 years of rich and varied experience in the shipping and freight
                            forwarding industry.
                        </p>
                        <div className="w-full flex justify-end mt-8">
                            <Link href="/" className="text-highlight font-semibold text-sm flex items-center gap-1">
                                Raed more
                                <MdOutlineKeyboardArrowRight className="text-lg" />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CaseStudies;

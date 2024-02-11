import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { TiSocialFacebook } from 'react-icons/ti';
import { FaLinkedinIn } from 'react-icons/fa6';
import { LiaDiscord } from 'react-icons/lia';
import { TbBrandYoutube } from 'react-icons/tb';

const Footer = () => {
    return (
        <div className="bg-Base-White pb-16">
            <div className="container flex justify-between items-start">
                <div className="flex flex-col gap-5">
                    <Link href="/">
                        <div className="flex items-center gap-2">
                            <Image src="logo.svg" alt="logo" height={25} width={20} />
                            <div className="font-logo font-bold text-xl text-secondary">Neural Dms</div>
                        </div>
                    </Link>
                    <p className="text-[#718096] text-lg font-normal">
                        Lorem Ipsum is simply dummy text of <br/> the printing and typesetting industry.
                    </p>
                    <ul className="flex gap-3">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="social-icon w-10 h-10 rounded-full p-1 flex justify-center items-center">
                            <TiSocialFacebook className="text-2xl" />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="social-icon w-10 h-10 rounded-full p-1 flex justify-center items-center">
                            <FaLinkedinIn className="text-2xl" />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="social-icon w-10 h-10 rounded-full p-1 flex justify-center items-center">
                            <LiaDiscord className="text-2xl" />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="social-icon w-10 h-10 rounded-full p-1 flex justify-center items-center">
                            <TbBrandYoutube className="text-2xl" />
                        </a>
                    </ul>
                </div>

                <div className="flex flex-col gap-5">
                    <h1 className="text-[#4A5568] text-lg font-bold">Links</h1>
                    <ul className="flex flex-col gap-1">
                        <Link href="/" className="text-[#718096] text-[1rem] font-normal">
                            About Us
                        </Link>
                        <Link href="/" className="text-[#718096] text-[1rem] font-normal">
                            Services
                        </Link>
                        <Link href="/" className="text-[#718096] text-[1rem] font-normal">
                            Case Studies
                        </Link>
                        <Link href="/" className="text-[#718096] text-[1rem] font-normal">
                            How it works
                        </Link>
                        <Link href="/" className="text-[#718096] text-[1rem] font-normal">
                            Blog
                        </Link>
                        <Link href="/" className="text-[#718096] text-[1rem] font-normal">
                            Careers
                        </Link>
                    </ul>
                </div>

				<div className="flex flex-col gap-5">
                    <h1 className="text-[#4A5568] text-lg font-bold">Links</h1>
                    <ul className="flex flex-col gap-1">
                        <Link href="/" className="text-[#718096] text-[1rem] font-normal">
                            About Us
                        </Link>
                        <Link href="/" className="text-[#718096] text-[1rem] font-normal">
                            Services
                        </Link>
                        <Link href="/" className="text-[#718096] text-[1rem] font-normal">
                            Case Studies
                        </Link>
                        <Link href="/" className="text-[#718096] text-[1rem] font-normal">
                            How it works
                        </Link>
                        <Link href="/" className="text-[#718096] text-[1rem] font-normal">
                            Blog
                        </Link>
                        <Link href="/" className="text-[#718096] text-[1rem] font-normal">
                            Careers
                        </Link>
                    </ul>
                </div>

				<div className="flex flex-col gap-5">
                    <h1 className="text-[#4A5568] text-lg font-bold">Links</h1>
                    <ul className="flex flex-col gap-1">
                        <Link href="/" className="text-[#718096] text-[1rem] font-normal">
                            About Us
                        </Link>
                        <Link href="/" className="text-[#718096] text-[1rem] font-normal">
                            Services
                        </Link>
                        <Link href="/" className="text-[#718096] text-[1rem] font-normal">
                            Case Studies
                        </Link>
                        <Link href="/" className="text-[#718096] text-[1rem] font-normal">
                            How it works
                        </Link>
                        <Link href="/" className="text-[#718096] text-[1rem] font-normal">
                            Blog
                        </Link>
                        <Link href="/" className="text-[#718096] text-[1rem] font-normal">
                            Careers
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;

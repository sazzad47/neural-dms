'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const SignUpUI: React.FC = () => {
    return (
        <div className="min-h-screen flex w-full bg-[#DDEAFC]">
            <div className="w-1/3 min-h-full py-10 ps-10">
                <Link href="/">
                    <div className="flex items-center gap-5">
                        <Image src="logo.svg" alt="logo" height={40} width={35} />
                        <div className="font-logo font-[900] text-2xl text-[#BC2666]">Neural Dms</div>
                    </div>
                </Link>
                <p className="text-[#2F1F53] text-2xl font-semibold mt-8">
                    Explore 3D Icons, Mockups and Illustrations here!
                </p>
                <div className="w-full h-[20rem] relative mt-20">
                    <Image
                        src="/images/sign-up-bg.png"
                        alt="signup"
                        fill
                        className="top-0 -right-20 object-contain rounded-2xl"
                    />
                </div>
            </div>
            <div className="flex-1 min-h-full bg-white rounded-tl-[12rem] p-28 flex justify-end">
                <div className="w-[60%] flex flex-col gap-3 items-start">
                    <h1 className="text-[#BC2666] text-2xl font-extrabold">Create Account</h1>
                    <div className="mt-4 w-full flex flex-col gap-3">
                        <div className="w-full relative flex items-center">
                            <input
                                type="text"
                                placeholder="Enter name"
                                className="pr-4 pl-2 py-2.5 outline-none placeholder:text-[#AEAEAE] text-sm text-black rounded bg-white border border-b-[#AEAEAE] border-white w-full"
                            />
                            <div className="absolute right-4">
                                <FaRegCircleUser className="text-xl" />
                            </div>
                        </div>
                        <div className="w-full relative flex items-center">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="pr-4 pl-2 py-2.5 outline-none placeholder:text-[#AEAEAE] text-sm text-black rounded bg-white border border-b-[#AEAEAE] border-white w-full"
                            />
                            <div className="absolute right-4">
                                <MdOutlineEmail className="text-xl" />
                            </div>
                        </div>
                        <div className="w-full relative flex items-center">
                            <input
                                type="password"
                                placeholder="Enter password"
                                className="pr-4 pl-2 py-2.5 outline-none placeholder:text-[#AEAEAE] text-sm text-black rounded bg-white border border-b-[#AEAEAE] border-white w-full"
                            />
                            <div className="absolute right-4">
                                <FaEyeSlash className="text-xl" />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input id="checked-checkbox" type="checkbox" className="w-4 h-4 accent-pink-500 rounded" />
                            <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-[#6B6B6B]">
                                I accept the{' '}
                                <Link href="/" className="text-[#BC2666]">
                                    {' '}
                                    terms of use{' '}
                                </Link>{' '}
                                and
                                <Link href="/" className="text-[#BC2666]">
                                    {' '}
                                    privacy policy
                                </Link>
                            </label>
                        </div>
                    </div>

                    <button className="mt-10 bg-[#BC2666] text-white text-2xl font-bold rounded-3xl text-center w-full py-4">
                        Sign Up
                    </button>
                    <div className="inline-flex items-center justify-center w-full relative">
                        <hr className="w-64 h-px my-8 bg-[#CDCDCD] border-0" />
                        <span className="absolute px-3 font-medium text-[#AEAEAE] text-sm -translate-x-1/2 bg-white left-1/2">
                            Or Sign Up With
                        </span>
                    </div>
                    <div className="w-full flex gap-3 items-center justify-center">
                        <div className="cursor-pointer w-20 h-20 flex items-center justify-center border border-[#AEAEAE] rounded-full">
                            <FcGoogle className="text-4xl" />
                        </div>
                        <div className="cursor-pointer w-20 h-20 flex items-center justify-center border border-[#AEAEAE] rounded-full">
                            <FaFacebook className="text-4xl" />
                        </div>
                        <div className="cursor-pointer w-20 h-20 flex items-center justify-center border border-[#AEAEAE] rounded-full">
                            <FaLinkedin className="text-4xl" />
                        </div>
                        <div className="cursor-pointer w-20 h-20 flex items-center justify-center border border-[#AEAEAE] rounded-full">
                            <FaInstagram className="text-4xl" />
                        </div>
                    </div>
                    <div className='w-full flex justify-center mt-10'>

                    <p className='text-xl text-center'>
                    Already have an account?  <Link href="/" className='text-[#BC2666] font-bold'> Sing In </Link>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpUI;

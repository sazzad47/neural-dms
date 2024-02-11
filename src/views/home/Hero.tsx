import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="container flex min-h-[70vh]">
            <div className="flex-1 min-h-full flex flex-col justify-center">
                <h1 className="font-light text-5xl -text--Gray-gray-900">
                    Great <span className="title-primary font-bold"> Product </span> is <br />
                    <span className="font-bold"> built by great </span>{' '}
                    <span className="title-secondary font-bold"> teams </span>
                </h1>
                <p className="text---Gray-gray-700 font-normal text-xl mt-7 mb-16">
                    We help build and manage a team of world-class developers to bring your vision to life
                </p>
                <Link href="/pricing">
                    <button className="btn-secondary"> Let’s get started! </button>
                </Link>
            </div>
            <div className="flex-1 relative">
                <Image src="/images/hero-image.jpg" alt='mojeeb' fill />
            </div>
        </div>
    );
};

export default Hero;

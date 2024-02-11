import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlineArrowRightAlt } from "react-icons/md";

const LeadingCompanies = () => {
    return (
        <div className="container flex min-h-[70vh] pb-16 gap-10">
            <div className="flex-1 min-h-full flex flex-col justify-start">
                <div className='bg-gradient-primary w-[5rem] h-[0.4rem] mb-8'></div>
                <h1 className="font-light text-4xl -text--Gray-gray-900">
                    Leading companies trust us <br />
                    <span className="font-bold">to develop software </span>{' '}
                </h1>
                <p className="text---Gray-gray-700 font-normal text-xl mt-7 mb-16">
                    We <span className='text-highlight'>add development capacity</span> to tech teams. Our value isn’t limited to building teams but is equally
                    distributed across the project lifecycle. We are a custom software development company that
                    guarantees the successful delivery of your project.
                </p>
                <Link href="/pricing">
                    <p className="text-Brand/Primary-bg font-[500] text-lg flex items-center gap-2">
                         See more Informations 
                         <MdOutlineArrowRightAlt className='text-3xl' />
                          </p>
                </Link>
            </div>
            <div className="flex-1 relative rounded-xl overflow-hidden">
                <Image src="/images/leading-companies.jpg" alt="mojeeb" fill />
            </div>
        </div>
    );
};

export default LeadingCompanies;

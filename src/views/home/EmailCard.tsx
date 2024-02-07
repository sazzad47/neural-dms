import React from 'react';

const EmailCard = () => {
    return (
        <div className="mt-16 bg-purple-light rounded-[3.5rem] p-14 flex flex-col gap-7 items-center">
            <h1 className="text-default font-heading font-extrabold text-6xl text-center">
                Discover Premium Features <br />
                <span className="text-purple-dark">Today!</span>
            </h1>
            <p className="text-black-80 font-normal text-xl text-center">Subscribe for Exclusive Benefits!</p>
            <div className="flex rounded-full shadow-sm">
                <input
                    type="email"
                    placeholder="Your Email"
                    className="py-3 px-4 w-[16rem] block border-gray-200 shadow-sm rounded-l-full text-sm text-black focus:z-10 focus:border-blue-500"
                />
                <button className="py-3 px-8 inline-flex justify-center items-center gap-x-2 text-sm text-black font-semibold rounded-r-full bg-active hover:bg-active">
                    Join
                </button>
            </div>
            <p className="font-heading font-extrabold text-3xl text-center">
                <span className="text-purple-dark">Enhance Your Experience with </span>
                <span className="text-default">
                    363 Subscribers <br /> and Growing
                </span>
            </p>
        </div>
    );
};

export default EmailCard;

import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 min-h-[70vh]">
            <h1 className="font-heading font-extrabold text-6xl">Unlock Document Insights with Ease</h1>
            <p className="font-normal text-xl text-center w-1/2">
                Elevate your document management. Upload documents, get insights, and extract valuable information
                effortlessly.
            </p>
            <Link href="/pricing">
                <button className="bg-active text-default rounded-full px-12 py-4">Explore Plans</button>
            </Link>
            <h3 className="font-heading font-bold text-2xl text-center">
                Subscribe now for advanced features and document intelligence.
            </h3>
        </div>
    );
};

export default Hero;

import Image from 'next/image';
import React from 'react';

const Logo = () => {
    return (
        <div className="flex items-center gap-5">
            <Image src="logo.svg" alt="logo" height={40} width={35} />
            <div className="font-logo font-bold text-3xl text-white">Neural Dms</div>
        </div>
    );
};

export default Logo;

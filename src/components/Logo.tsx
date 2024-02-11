import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href="/">
            <div className="flex items-center gap-5">
                <Image src="logo.svg" alt="logo" height={40} width={35} />
                <div className="font-logo font-bold text-3xl text-secondary">Neural Dms</div>
            </div>
        </Link>
    );
};

export default Logo;

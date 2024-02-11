import Logo from '@/components/Logo';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className="bg-Base-White shadow-nav px-6 py-3 flex justify-between items-center">
            <Logo />
            <ul className="flex gap-8 items-center font-[500] text-lg">
                <Link href="/">
                    <li> Services </li>
                </Link>
                <Link href="/">
                    <li> Case Studies </li>
                </Link>
                <Link href="/">
                    <li> About </li>
                </Link>
                <Link href="/">
                    <li> Blog </li>
                </Link>
                <Link href="/">
                    <li> How it Works </li>
                </Link>
                <Link href="/">
                    <li> Help </li>
                </Link>
            </ul>
            <Link href="/signup">
                <button className="btn-primary"> Sign Up </button>
            </Link>
        </div>
    );
};

export default Header;

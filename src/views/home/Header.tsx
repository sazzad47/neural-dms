import Logo from '@/components/Logo';
import React from 'react';

const Header = () => {
    return (
        <div className="w-full bg-standard px-10 py-5 rounded-full flex justify-between items-center">
            <Logo />
            <button className="bg-default rounded-full px-10 py-3">Login</button>
        </div>
    );
};

export default Header;

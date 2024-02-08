import Footer from '@/components/public/Footer';
import Header from '@/components/public/Header';
import React, { ReactNode } from 'react';

interface PublicLayoutProps {
    children: ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
    return (
        <div className='bg-gradient-to-r from-red-900 to-purple-900'>
            <div className="p-10">
                <Header />
            </div>
            {children}
            <Footer />
        </div>
    );
};

export default PublicLayout;

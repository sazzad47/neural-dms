import CopyRight from '@/components/public/CopyRight';
import Footer from '@/components/public/Footer';
import Header from '@/components/public/Header';
import React, { ReactNode } from 'react';

interface PublicLayoutProps {
    children: ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
            <CopyRight />
        </div>
    );
};

export default PublicLayout;

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import EmailCard from './EmailCard';
import ListCard from './ListCard';
import BlockCard from './BlockCard';

const HomeUI = () => {
    return (
        <div className="min-h-screen bg-default p-10">
            <Header />
            <Hero />
            <EmailCard />
            <ListCard />
            <BlockCard />
            <Footer />
        </div>
    );
};

export default HomeUI;

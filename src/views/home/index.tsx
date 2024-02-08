import React from 'react';
import Hero from './Hero';
import EmailCard from './EmailCard';
import ListCard from './ListCard';
import BlockCard from './BlockCard';

const HomeUI = () => {
    return (
        <div className="min-h-screen bg-default p-10">
            <Hero />
            <BlockCard />
            <ListCard />
            <EmailCard />
        </div>
    );
};

export default HomeUI;

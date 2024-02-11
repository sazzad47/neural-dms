import React from 'react';
import Hero from './Hero';
import Services from './Services';
import LeadingCompanies from './LeadingCompanies';
import Partners from './Partners';
import Testimonials from './Testimonials';
import CaseStudies from './CaseStudies';
import Hire from './Hire';

const HomeUI = () => {
    return (
        <div className="min-h-screen bg-default">
            <Hero />
            <Services />
            <LeadingCompanies />
            <Partners />
            <Testimonials />
            <CaseStudies />
            <Hire />
        </div>
    );
};

export default HomeUI;

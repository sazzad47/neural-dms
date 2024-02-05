import React from 'react';

const BlockCard = () => {
    return (
        <div className="flex gap-10 mt-16">
            <div className="flex-1 bg-secondary rounded-[3.5rem] p-14 flex flex-col gap-7 items-center">
                <h1 className="font-heading font-extrabold text-black text-4xl">Advanced Document Insights</h1>
                <p className="text-lg font-normal text-black-80 text-center">
                    Unlock powerful document analysis tools for enhanced management, extraction, and organization.
                </p>
            </div>
            <div className="flex-1 bg-secondary rounded-[3.5rem] p-14 flex flex-col gap-7 items-center">
                <h1 className="font-heading font-extrabold text-black text-4xl">Steady Document Organization</h1>
                <p className="text-lg font-normal text-black-80 text-center">
                    Streamline document handling, extraction, and analysis with predictable outcomes tailored to your needs.
                </p>
            </div>
        </div>
    );
};

export default BlockCard;

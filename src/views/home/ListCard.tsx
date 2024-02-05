import Image from 'next/image';
import React from 'react';
import { FaCheck } from 'react-icons/fa6';

const ListCard = () => {
    return (
        <div className="bg-blue-dark rounded-[3.5rem] p-14 flex justify-between mt-16">
            <div className="flex-1 relative">
                <Image src="document-1.svg" alt="document" fill />
            </div>
            <div className="flex-1 flex flex-col gap-10">
                <h1 className="font-heading font-extrabold text-6xl">
                    Transform Your Documents <br /> into Intelligent Insights
                </h1>
                <ul>
                    <li className="flex items-center gap-2">
                        <FaCheck className="text-xl" />
                        <p className="text-white font-normal">
                            No-code <span className="text-white-80">document extraction</span>
                        </p>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaCheck className="text-xl" />
                        <p className="text-white font-normal">
                            Over 100 <span className="text-white-80">data indicators & patterns</span>
                        </p>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaCheck className="text-xl" />
                        <p className="text-white font-normal">
                            Analyze & extract <span className="text-white-80">across multiple documents</span>
                        </p>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaCheck className="text-xl" />
                        <p className="text-white font-normal">
                            Streamlined processing.
                            <span className="text-white-80"> Tailor-made for your document types!</span>
                        </p>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaCheck className="text-xl" />
                        <p className="text-white font-normal">
                            Efficient prioritization.
                            <span className="text-white-80"> Personalize for specific document categories!</span>
                        </p>
                    </li>
                </ul>
                <p className="text-white-80 font-normal">
                    Explore the benefits of our paid subscription plans for advanced document analysis. <br /> Check out
                    <span className="text-purple-light underline"> this</span> article in our Blog section.
                </p>
            </div>
        </div>
    );
};

export default ListCard;

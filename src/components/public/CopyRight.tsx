import React from 'react';

const CopyRight = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='w-full border border-t-[#CBD5E0] p-5 flex justify-center items-center'>
        <p className="text-sm text-[#4A5568]">&copy; {currentYear} NeuralWize. All rights reserved.</p>
    </div>
  );
};

export default CopyRight;

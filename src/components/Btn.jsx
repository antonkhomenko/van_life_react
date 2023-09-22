import React from 'react';

const Btn = ({children }) => {
    return (
        <button
            className="bg-[#FF8C38] border-transparent rounded-[5px] text-white font-bold text-[16px] py-[11px] maw-w-[500px] w-full"
        >
            {children}
        </button>
    );
};

export default Btn;
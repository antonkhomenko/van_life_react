import React, {useEffect, useState} from 'react';
import theme from "tailwindcss/defaultTheme.js";
import axios from "axios";


const getVansData = async () => {
    const resp = await axios.get("http://localhost:8081/vans");
    const data = await resp.data;
    return data;
}

const Vans = () => {

    const [vansData, setVansData] = useState(null);

    useEffect(() => {
        getVansData().then(data => setVansData(data))
    }, [])

    return (
        <div className="max-w-screen-lg self-stretch w-full flex flex-col pt-[55px]">
            <h1 className="text-[#161616] text-[32px] font-bold">
                Explore our van options
            </h1>
            <div className="flex justify-between gap-[40px] pt-[22px]">
                <ul className="flex gap-[20px]">
                    <li className="hover:bg-[#E17654] hover:text-[#FFEAD0] bg-[#FFEAD0] px-[25px] py-[6px] border-transparent rounded-[5px] cursor-pointer">
                        Simple
                    </li>
                    <li className="hover:bg-[#161616] hover:text-[#FFEAD0] bg-[#FFEAD0] px-[25px] py-[6px] border-transparent rounded-[5px] cursor-pointer">
                        Luxury
                    </li>
                    <li className="hover:bg-[#115E59] hover:text-[#FFEAD0] bg-[#FFEAD0] px-[25px] py-[6px] border-transparent rounded-[5px] cursor-pointer">
                        Rugged
                    </li>
                </ul>
                <button className="text-[#4D4D4D] underline">
                    Clear filters
                </button>
            </div>
            <div className="pt-[55px] grid">

            </div>
        </div>
    );
};

export default Vans;
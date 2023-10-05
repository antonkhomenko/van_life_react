import React, {useEffect, useState} from 'react';
import axios from "axios";
import VanItem from "../components/VanItem.jsx";


const getVansData = async () => {
    const resp = await axios.get("http://localhost:8080/vans/");
    const data = await resp.data;
    return data;
}

const Vans = () => {

    const [vansData, setVansData] = useState([]);
    const [filteres, setFilteres] = useState([]);
    const [filteredVansData, setFilteredVansData] = useState([]);

    useEffect(() => {
        getVansData().then(data => setVansData(data))
    }, [])

    useEffect(() => {
        setFilteredVansData(vansData)
    }, [vansData])

    useEffect(() => {
        if(filteres.length === 0) {
            setFilteredVansData([...vansData]);
            return;
        }
       const newVans = vansData.filter(van => filteres.includes(van.VanType));
       setFilteredVansData(newVans);
    }, [filteres])

    const handleFilter = (e) => {
        const targetType = e.target.innerText.toLowerCase();
        if(!filteres.includes(targetType)) {
            setFilteres([...filteres, targetType]);
        } else {
            setFilteres(filteres.filter(item => item !== targetType))
        }
    }

    const handleClearFilter = () => {
        setFilteres([]);
    }

    return (
        <div className="max-w-screen-lg self-stretch w-full flex flex-col pt-[55px] px-[26px] pb-[82px]">
            <h1 className="text-[#161616] text-[32px] font-bold">
                Explore our van options
            </h1>
            <div className="flex justify-between gap-[40px] pt-[22px]">
                <ul className="flex gap-[20px]" onClick={handleFilter}>
                    <li
                        className="hover:bg-[#E17654] hover:text-[#FFEAD0] bg-[#FFEAD0] px-[25px] py-[6px] border-transparent rounded-[5px] cursor-pointer"
                        style={filteres.includes("simple") ? {backgroundColor: "#E17654", color: "#FFEAD0"} : {}}
                    >
                        Simple
                    </li>
                    <li
                        className="hover:bg-[#161616] hover:text-[#FFEAD0] bg-[#FFEAD0] px-[25px] py-[6px] border-transparent rounded-[5px] cursor-pointer"
                        style={filteres.includes("luxury") ? {backgroundColor: "#161616", color: "#FFEAD0"} : {}}
                    >
                        Luxury
                    </li>
                    <li
                        className="hover:bg-[#115E59] hover:text-[#FFEAD0] bg-[#FFEAD0] px-[25px] py-[6px] border-transparent rounded-[5px] cursor-pointer"
                        style={filteres.includes("rugged") ? {backgroundColor: "#115E59", color: "#FFEAD0"} : {}}
                    >
                        Rugged
                    </li>
                </ul>
                <button className="text-[#4D4D4D] underline hover:text-black" onClick={handleClearFilter}>
                    Clear filters
                </button>
            </div>
            <div className="pt-[55px] grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-x-[33px] gap-y-[26px] justify-between">
                {
                    filteredVansData.map(van => <VanItem data={van} key={van.Id}/>)
                }
            </div>
        </div>
    );
};

export default Vans;
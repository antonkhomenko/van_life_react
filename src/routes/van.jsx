import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import arrowImg from "/src/assets/arrow.png";
import axios from "axios";

const Van = () => {
    const [vanData, setVanData] = useState({});
    const navigate = useNavigate();
    const params = useParams();
    const handleBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        getVan(params.id)
            .then(data => setVanData(data))
    }, [])

    return (
        <div className="max-w-screen-lg w-full px-[26px] flex flex-col justify-between items-center gap-[40px] pb-[84px]">
            <button onClick={handleBack} className="self-start underline flex gap-x-[10px] items-center mt-[38px]">
                <img src={arrowImg} alt="arrow-img" className="max-w-[15px]"/>
                Back to all vans
            </button>
            <div className="flex flex-col justify-between">
                <img src={vanData.ImageUrl} alt={`${vanData.Name}-img`} className="w-full rounded-[5px] max-w-[500px]"/>
                <div className="flex flex-col gap-[10px] mt-[50px]">
                    <span className={`${vanData.VanType}-btn`}>
                        {vanData.VanType}
                    </span>
                    <span className="text-3xl font-bold mt-[10px]">
                        {vanData.Name}
                    </span>
                    <span>
                        <strong className="text-2xl">${vanData.Price}</strong>
                        /day
                    </span>
                </div>
                <p className="max-w-[500px] text-[16px] leading-6 mt-[10px] font-medium">
                    {vanData.Description}
                </p>
                <button className="w-full bg-[#FF8C38] text-white font-bold text-[18px] py-[12px] rounded-[5px] mt-[21px]">
                    Rent this van
                </button>
            </div>
        </div>
    );
};

const getVan = async (id) => {
    const resp = await axios.get(`http://localhost:8080/van/${id}`);
    const data = await resp.data;
    return data;
}

export default Van;
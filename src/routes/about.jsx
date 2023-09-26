import React from 'react';
import bg from "/src/assets/about-bg.png";
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className="flex flex-col w-full items-center">
            <div className="w-full py-[215px] bg-about bg-[top_65%_right_50%] bg-cover bg-no-repeat"/>
            <div className="max-w-screen-lg px-[26px] flex flex-col gap-[30px] pb-[53px]">
                <h1 className="font-bold text-4xl mt-[50px]">
                    Don’t squeeze in a sedan when you could relax in a van.
                </h1>
                <p className="font-medium text-[16px]">
                    Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </p>
                <p className="font-medium text-[16px]">
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
                <div className='bg-[#FFCC8D] px-[37px] py-[32px] flex flex-col gap-[25px] items-start mt-[20px]'>
                    <h2 className="font-bold text-[24px] text-[#161616]">
                        Your destination is waiting.<br/>
                        Your van is ready.
                    </h2>
                    <Link to="/vans" className="bg-black text-white font-bold text-[16px] px-[22px] py-[13px] border-transparent rounded-[10px]">
                        Explore our vans
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
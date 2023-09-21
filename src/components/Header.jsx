import React from 'react';
import logo from "/src/assets/logo.png"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="min-w-full">
            <div className="max-w-screen-lg mx-auto flex justify-between items-center px-[26px] py-[35px]">
                <Link to="/">
                    <img src={logo} alt="logo-img" className="w-auto h-[41px]"/>
                </Link>
                <nav className="flex gap-[25px]">
                    <Link to="/about" className="text-[#4D4D4D] text-[16px] font-[600]">About</Link>
                    <Link to="/van">Van</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
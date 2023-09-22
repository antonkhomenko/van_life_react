import React from 'react';
import logo from "/src/assets/logo.png"
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="min-w-full">
            <div className="max-w-screen-lg mx-auto flex justify-between items-center px-[26px] py-[35px]">
                <Link to="/">
                    <img src={logo} alt="logo-img" className="w-[144px]"/>
                </Link>
                <nav className="flex gap-[25px]">
                    <NavLink
                        to="/about"
                        className={({isActive}) => isActive ? "activeLink" : "inactiveLink"}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/vans"
                        className={({isActive}) => isActive ? "activeLink" : "inactiveLink"}
                    >
                        Vans
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;

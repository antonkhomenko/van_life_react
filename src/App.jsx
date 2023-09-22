import React from 'react';
import Header from "./components/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="grow flex justify-center">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;
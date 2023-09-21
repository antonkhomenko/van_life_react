import React from 'react';
import Header from "./components/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <div>
            <Header/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;
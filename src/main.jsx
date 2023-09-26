import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Error from "./Error.jsx";
import About from "./routes/about.jsx";
import Vans from "./routes/vans.jsx";
import Home from "./routes/home.jsx";
import axios from "axios";




const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Home/>,
                errorElement: <Error/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/vans",
                element: <Vans/>,
            },
            {
                path: "*",
                element: <Error/>,
            }
        ]
    }
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)

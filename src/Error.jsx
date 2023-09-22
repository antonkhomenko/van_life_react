import React from 'react';
import {NavLink, useRouteError} from "react-router-dom";

const Error = () => {

    return (
        <div>
            <h1>
                Sorry, the page you were looking for was not found.
            </h1>
            <NavLink to="/">
                Return to home
            </NavLink>
        </div>
    );
};

export default Error;
// Now, we'll tie the page content (think of it as the main) and the navigation between each page together. 

import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../NavbarComponent";

const Layout = () => {
    return (
        <>
            <NavbarComponent />
            <Outlet />
        </>
    );
};

export default Layout;
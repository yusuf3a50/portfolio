// Now, we'll tie the page content (think of it as the main) and the navigation between each page together. 

import React from "react";
import Container from 'react-bootstrap/Container';
import NavbarComponent from "../NavbarComponent";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <Container fluid>
                <NavbarComponent />
                <Outlet />
                <Footer />
            </Container>
        </>
    );
};

export default Layout;
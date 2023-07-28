import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/ELearningResources">e-Learning Resources</Link>
                </li>
                <li>
                    <Link to="/Projects">Projects</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>
                    <Link to="/ProfessionalExperience">ProfessionalExperience</Link>
                </li>
                <li>
                    <Link to="/Qualifications">Qualifications</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar; 
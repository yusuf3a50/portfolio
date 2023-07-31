import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaCodepen } from "react-icons/fa";
import '../css/main.css';

function Projects() {
    return (
        <>
            <h1>Projects:</h1>
            <table className='centredTable'>
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Description</th>
                        <th>Website</th>
                        <th>Repository</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Green-air</td>
                        <td>CFG nanodegree group project: Air quality and weather website</td>
                        <td><a href="https://green-air.netlify.app/" target="_blank" rel="noopener noreferrer">Netlify</a></td>
                        <td><a href="https://github.com/green-air/greenAirWebsite" target="_blank" rel="noopener noreferrer"><BsGithub /></a></td>
                    </tr>
                    <tr>
                        <td>Weather Selector App</td>
                        <td>Group project: Select your weather forecast!</td>
                        <td><a href="https://yusuf3a50.github.io/weatherApp/" target="_blank" rel="noopener noreferrer"></a>Github Pages</td>
                        <td><a href="https://github.com/yusuf3a50/weatherApp" target="_blank" rel="noopener noreferrer"><BsGithub /></a></td>
                    </tr>
                    <tr>
                        <td>qrgap</td>
                        <td>Python - security - transfer text files between devices via qrcodes</td>
                        <td>N/A</td>
                        <td><a href="https://github.com/sifr01/qrgap" target="_blank" rel="noopener noreferrer"><BsGithub /></a></td>
                    </tr>
                    <tr>
                        <td>koboMp3z</td>
                        <td>Python - convert mp3s enabling playing with ebook reader</td>
                        <td>N/A</td>
                        <td><a href="https://github.com/sifr01/koboMp3z" target="_blank" rel="noopener noreferrer"><BsGithub /></a></td>
                    </tr>
                    <tr>
                        <td>Tribute page</td>
                        <td>One project aspect of the freecodecamp course</td>
                        <td><a href="https://codepen.io/yusuf3a50/pen/dyZpRaM" target="_blank" rel="noopener noreferrer">Codepen.io</a></td>
                        <td><a href="https://codepen.io/yusuf3a50/pen/dyZpRaM" target="_blank" rel="noopener noreferrer"><FaCodepen /></a></td>
                    </tr>
                    <tr>
                        <td>Portfolio website</td>
                        <td>The repository for this website</td>
                        <td><a href="https://yusuf3a50.netlify.app/" target="_blank" rel="noopener noreferrer">Netlify</a></td>
                        <td><a href="https://github.com/yusuf3a50/portfolio/" target="_blank" rel="noopener noreferrer"><BsGithub /></a></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Projects;
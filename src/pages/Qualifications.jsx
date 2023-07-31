import React from 'react';
import '../css/main.css';
import intro2WebDevCert from '../imgs/CFG_introduction_to_web_dev_cert.pdf'
import nanoDegreeCert from '../imgs/CFG_nanodegree_Certificate.pdf'

function Qualifications() {
    return (
        <>
            <h1>Qualifications</h1>
            <table className='centredTable'>
                <thead>
                    <tr>
                        <th>Resource</th>
                        <th>Course</th>
                        <th>Progress</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td><a href="https://www.codecademy.com/" target="_blank"
                            rel="noopener noreferrer">Codecademy</a></td>
                        <td><a href="https://www.codecademy.com/learn/learn-java"
                            target="_blank" rel="noopener noreferrer">Learn Java</a></td>
                        <td>
                            <a href="https://www.codecademy.com/profiles/yusuf3a50"
                                target="_blank" rel="noopener noreferrer">
                                Studying Java (click to see progress)</a>
                        </td>
                    </tr> */}
                    <tr>
                        <td><a href="https://codefirstgirls.com/about-us/" target="_blank"
                            rel="noopener noreferrer">Code First Girls</a></td>
                        <td><a href="https://codefirstgirls.org.uk/courses/nanodegree/"
                            target="_blank" rel="noopener noreferrer">Nano Degree: Full stack developer</a></td>
                        <td>
                            <a href={nanoDegreeCert} class="image fit"
                                alt="certificate for CFG nanodegree course"
                                type="application/pdf" target="_blank" rel="noopener noreferrer">
                                Complete</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="https://codefirstgirls.com/about-us/" target="_blank"
                                rel="noopener noreferrer">Code First Girls</a>
                        </td>
                        <td>Introduction to Web Development</td>
                        <td>
                            <a href={intro2WebDevCert} class="image fit"
                                alt="certificate for CFG course in introduction to web development"
                                type="application/pdf" target="_blank" rel="noopener noreferrer">
                            Complete</a>
                        </td>
                    </tr>
                    <tr>
                        <td>CodeBar</td>
                        <td><a href="https://tutorials.codebar.io/js/lesson1/tutorial.html"
                            target="_blank" rel="noopener noreferrer">Introduction to JavaScript</a></td>
                        <td>Complete</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="https://www.freecodecamp.org/yusuf3a50" target="_blank"
                                rel="noopener noreferrer">FreeCodeCamp</a>
                        </td>
                        <td>Responsive Web Design</td>
                        <td>
                            <a href="https://www.freecodecamp.org/certification/yusuf3a50/responsive-web-design"
                                target="_blank" rel="noopener noreferrer">
                                Complete</a>
                        </td>
                    </tr>
                    {/* <tr>
                        <td>
                            <a  href="https://www.freecodecamp.org/yusuf3a50" 
                                target="_blank"
                                rel="noopener noreferrer">
                                FreeCodeCamp
                            </a>
                        </td>
                        <td>JavaScript Algorithms and Data Structures</td>
                        <td>Progressed to other courses</td>
                    </tr>
                    <tr>
                        <td>Scrimba</td>
                        <td>
                            <a href="https://scrimba.com/learn/learnjavascript"
                                target="_blank" rel="noopener noreferrer">Learn JavaScript</a>
                        </td>
                        <td>Progressed to other courses</td>
                    </tr>
                    <tr>
                        <td>Scrimba</td>
                        <td>
                            <a href="https://scrimba.com/learn/learnreact" target="_blank"
                                rel="noopener noreferrer">Learn React</a>
                        </td>
                        <td>Progressed to other courses</td>
                    </tr> */}
                    <tr>
                        <td><a href="https://flexboxfroggy.com/" target="_blank"
                            rel="noopener noreferrer">Flexbox Froggy</a></td>
                        <td>A game for learning CSS flexbox</td>
                        <td>Complete</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.learndirect.com" target="_blank"
                            rel="noopener noreferrer">
                                Learn Direct</a></td>
                        <td>PHP & MySQL</td>
                        <td>Complete</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Qualifications;
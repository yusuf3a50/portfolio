import React from 'react';
import selfie from '../imgs/selfie_cropped.jpg'
import '../css/main.css';
import '../css/typewriter.css'

function Home() {
    return (
        <>
            <div className='container-flex'>
            <div className='typewriter'>
                    <h1>Hello and welcome to my portfolio website.</h1>
            </div>
            </div>

            <h1>Yusuf</h1 >
            <img src={selfie} alt="selfie" className='selfie' />
            <h1>Full Stack Developer</h1>
        </>
    );
}

export default Home;
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
            
            <h1>I'm Yusuf and I'm a full stack developer</h1 >

            <p>here is a link to my CV</p>
            <img src={selfie} alt="selfie" className='selfie' />
        </>
    );
}

export default Home;
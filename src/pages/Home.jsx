import React from 'react';
import selfie from '../imgs/selfie_cropped.jpg'
import '../css/main.css';

function Home() {
    return (
        <>
            <h1>Hi</h1>
            <h1>I'm Yusuf and I'm a full stack developer</h1 >
            <h1>Welcome to my portfolio website.</h1>
            <p>here is a link to my CV</p>
            <img src={selfie} alt="selfie" className='selfie'/>
        </>
    );
}

export default Home;
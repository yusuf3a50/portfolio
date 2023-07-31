import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiAmazonec2 } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import '../css/Footer.css'

function Footer() {
    return (
        <>
            <div className='footer'>
                <a href="https://github.com/yusuf3a50"><BsGithub /></a>
                <a href="https://linkedin.com/in/yusuf3a50/"><BsLinkedin /></a>
                <p>This website is hosted on an <FaAws /> EC2 <SiAmazonec2 /> instance
                </p>
            </div>
        </>
    )
}

export default Footer;
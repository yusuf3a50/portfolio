import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiAmazonec2 } from "react-icons/si";
import { FaCodepen } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import '../css/Footer.css'

function Footer() {
    return (
        <>

            <div className='footer'>
                <div class="grid-container">
                    <div class="grid-item-icons">
                        <a href="https://github.com/yusuf3a50" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                    </div>
                    <div class="grid-item-icons">
                        <a href="https://linkedin.com/in/yusuf3a50/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                    </div>
                    <div class="grid-item-icons">
                        <a href="https://codepen.io/yusuf3a50/" target="_blank" rel="noopener noreferrer"><FaCodepen /></a>
                    </div>
                    <div class="grid-item-hosting">
                        <p>This website is hosted on an <FaAws /> EC2 <SiAmazonec2 /> instance</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;
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
                        <p>This website is hosted for free on my <FaAws /> T3-micro <SiAmazonec2 /> instance</p>
                        <p>(see the SSL certificate or the <a
                            href="https://load-balancer-hacknernoon-756014597.eu-north-1.elb.amazonaws.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            >address of the load balancer</a> I setup for this site.)
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;
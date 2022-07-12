import React from "react";
import "./Footer.css";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='hr'></div>
            <div className='top'>
                <a href='https://www.linkedin.com/in/lingadurai-p-971b53218/'>
                    <img src={linkedin} alt='' />
                </a>
                <a href='https://github.com/LingaduraiP'>
                    <img src={github}  alt='' />
                </a>
                <a href='https://www.instagram.com/m_r_porukki/'>
                    <img src={instagram} alt='' />
                </a>
            </div>
            <div className='bottom'>
                <h2>Lingadurai P</h2>
                <p>© 2022 Lingadurai P. Inc. All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;

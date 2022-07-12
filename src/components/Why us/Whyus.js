import React from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
import adidas from "../../assets/adidas.png";
import nb from "../../assets/nb.png";
import nike from "../../assets/nike.png";
import "./whyus.css";
const Whyus = () => {
    return (
        <div className='reason' id='Why'>
            <div className='reason-L'>
                <img src={image1} alt='' />
                <img src={image2} alt='' />
                <img src={image3} alt='' />
                <img src={image4} alt='' />
            </div>
            <div className='reason-R'>
                <span className='head'>some Reason</span>
                <div className='main-head'>
                    <span className='stroke-text why'>why</span>
                    <span className='why'>CHOOSE US?</span>
                </div>

                <div className='ans'>
                    <div>
                        <img src={tick} alt='' />
                        <span>OVER 140+ EXPERT COACHS</span>
                    </div>
                    <div>
                        <img src={tick} alt='' />
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={tick} alt='' />
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <img src={tick} alt='' />
                        <span>RELIABLE PARTNERS</span>
                    </div>
                </div>
                <div className='partners'>
                    <span>our partners</span>
                    <div className='img'>
                        <img src={nb} alt='' />
                        <img src={nike} alt='' />
                        <img src={adidas} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Whyus;

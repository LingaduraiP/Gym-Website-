import React from "react";
import { plansData } from "../../data/plansData";
import "./Journey.css";
import whiteTick from "../../assets/whiteTick.png";
import rightArrow from "../../assets/rightArrow.png";

const Journey = () => {
    return (
        <div className='journey' id='Journey'>
            <div className='blur journey-blur'></div>
            <div className='journey-head'>
                <span className='stroke-text'>start your</span>
                <span> journey</span>
                <span className='stroke-text'>with us</span>
            </div>
            <div className='journey-cards'>
                {plansData.map((data, index) => (
                    <div className='card' key={index}>
                        <span>{data.icon}</span>
                        <span>{data.name}</span>
                        <span>$ {data.price}</span>
                        <div className='features'>
                            {data.features.map((datas, index) => (
                                <div className='span' key={index}>
                                    <img src={whiteTick} alt='' />
                                    <span>{datas}</span>
                                </div>
                            ))}
                        </div>

                        <div className='benifit'>
                            <span>see benifits</span>
                            <img src={rightArrow} alt='' />
                        </div>
                        <button>Join now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Journey;

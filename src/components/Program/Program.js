import React from "react";
import { programsData } from "../../data/programsData";
import "./Program.css";
import rightArrow from "../../assets/rightArrow.png";

const Program = () => {
    return (
        <div className='programs' id='Program'>
            <div className='blur program-blur'></div>
            <div className='blur program-blur2'></div>
            <div className='heading'>
                <span className='stroke-text program-text'>Elplore our</span>
                <span className='program-text'>Programs</span>
                <span className='stroke-text program-text'>to share you </span>
            </div>
            <div className='container'>
                {programsData.map((data, index) => (
                    <div className='data-container' key={index}>
                        <span>{data.image}</span>
                        <span>{data.heading}</span>
                        <span>{data.details}</span>
                        <div className='button'>
                            <span>Join</span>
                            <img src={rightArrow} alt='' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Program;

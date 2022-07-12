import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Hero = () => {
    const spring = {
        type: "spring",
        damping: 10,
        stiffness: 100,
    };
    return (
        <div className='header' id='Home'>
            <div className='blur hero-blur'></div>

            <div className='left-H'>
                <Header />

                {/* The best Add div */}
                <div className='best-ad'>
                    <motion.div
                        initial={{ width: "100%" }}
                        whileInView={{ width: "20%" }}
                        transition={{ type: "spring", duration: 2 }}
                    ></motion.div>
                    <h3>The best fitness club in the town</h3>
                </div>

                {/* Hero Text */}
                <div className='hero-text'>
                    <div className='text-one'>
                        <span className='stroke-text'>Shape </span>
                        <span>your</span>
                    </div>
                    <div className='text-two'>
                        <span>ideal </span>
                        <span className='stroke-text'>body</span>
                    </div>
                    <p>
                        In here we will help you to shape and build your ideal
                        body and live up your life to fullest
                    </p>
                </div>
                {/* Counts */}
                <div className='counts'>
                    <div>
                        <span>
                            <CountUp
                                start={0}
                                end={40}
                                duration={2.75}
                                prefix='+'
                            />
                        </span>
                        <span> expert coatches</span>
                    </div>
                    <div>
                        <span>
                            <CountUp
                                start={344}
                                end={380}
                                duration={2.75}
                                prefix='+'
                            />
                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>
                            <CountUp
                                start={0}
                                end={40}
                                duration={2.75}
                                prefix='+'
                            />
                        </span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>

                {/* Button container */}
                <div className='btns'>
                    <button>Get Started</button>
                    <button>Learn More</button>
                </div>
            </div>

            {/*  Right side */}
            <div className='right-H'>
                <button>join now</button>
                <img className='hero-image' src={hero_image} alt='' />
                <motion.img
                    initial={{ right: "15rem" }}
                    whileInView={{ right: "20rem" }}
                    transition={{ type: "spring", duration: 2 }}
                    className='hero-image-back'
                    src={hero_image_back}
                    alt=''
                />
                <motion.div
                    initial={{ right: "-5rem" }}
                    transition={{ type: "spring", duration: 2 }}
                    whileInView={{ right: "3rem" }}
                    className='heart-rate'
                >
                    <img src={heart} alt='' />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                <motion.div
                    initial={{ right: "5rem" }}
                    transition={{ type: "spring", duration: 2 }}
                    whileInView={{ right: "25rem" }}
                    className='colories-rate'
                >
                    <img src={calories} alt='' />
                    <div className='rate'>
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;

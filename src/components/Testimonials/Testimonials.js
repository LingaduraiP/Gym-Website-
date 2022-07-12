import React from "react";
import "./Testimonials.css";
import rightArrow from "../../assets/rightArrow.png";
import leftArrow from "../../assets/leftArrow.png";
import { testimonialsData } from "../../data/testimonialsData";
import { motion } from "framer-motion";

const Testimonials = () => {
    const [count, setCount] = React.useState(0);
    const rightHandler = () => {
        if (count < testimonialsData.length - 1) {
            setCount((prev) => prev + 1);
        } else {
            setCount(0);
        }
    };
    const leftHandler = () => {
        if (count === 0) {
            setCount(testimonialsData.length - 1);
        } else {
            setCount((prev) => prev - 1);
        }
    };
    return (
        <div className='testimonials' id='Tesimonials'>
            <div className='blur t-blur'></div>
            <div className='left-T'>
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
                <div className='content'>
                    <motion.span
                        key={count}
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {testimonialsData[count].review}
                    </motion.span>
                    <div className='authour'>
                        <motion.span
                            key={count}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            {testimonialsData[count].name}
                        </motion.span>
                        <span>-</span>
                        <span>{testimonialsData[count].status}</span>
                    </div>
                </div>
            </div>
            <div className='right-T'>
                <div className='back back1'></div>
                <div className='back back2'></div>
                <motion.img
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    key={count}
                    className='author-image'
                    src={testimonialsData[count].image}
                    alt=''
                />
                <img
                    className='left btn'
                    onClick={leftHandler}
                    src={leftArrow}
                    alt=''
                />
                <img
                    className='right btn'
                    onClick={rightHandler}
                    src={rightArrow}
                    alt=''
                />
            </div>
        </div>
    );
};

export default Testimonials;

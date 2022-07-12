import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

import "./Email.css";

const Email = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_xd03ism",
                "template_75cdc2o",
                form.current,
                "8e2zkhPZsMG1V63tc"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("SUCCESS!");
                },
                (error) => {
                    console.log(error.text);
                    alert("FAILED...", error);
                }
            );
    };
    return (
        <div className='email'>
            <div className='left-E'>
                <div className='first'>
                    <span className='stroke-text'>ready to</span>
                    <span>level up</span>
                </div>
                <div className='second'>
                    <span>your body</span>
                    <span className='stroke-text'>with us</span>
                </div>
            </div>
            <div className='right-E'>
                <form ref={form} className='input' onSubmit={sendEmail}>
                    <input
                        type='text'
                        name='message'
                        placeholder='enter your email'
                    />
                    <button>submit</button>
                </form>
            </div>
        </div>
    );
};

export default Email;

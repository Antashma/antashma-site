import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
//import "dotenv/config";

export default function Contact() {
    const [isDisabled, setIsDisabled] = useState(false);
    const contactForm = useRef();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        setIsDisabled(true);
        e.preventDefault();

        emailjs.sendForm('contact_service', 'contact_us', contactForm.current, {
        publicKey: "O5UN_FiqzW7zKoBEY",})
            .then(() => {
                console.log('SUCCESS!');
                navigate("/message-sent");
            })
            .catch((error) => {
               console.log('FAILED...', error.text);
                navigate("/message-failed");
            });
    }

    return (
            <div className="content">
                <form id="contact-form" ref={contactForm} onSubmit={handleSubmit}>
                    <label id="name-lbl">Name: 
                        <input required type="text" name="name" id="contact-name" />
                    </label>

                    <label id="email-lbl">Email:
                        <input required type="email" name="email" id="contact-email"/>
                    </label>
                    
                    <label id="msg-lbl">Message: 
                       <textarea required name="message" id="contact-message"></textarea> 
                    </label>
                    <input type="submit" disabled={isDisabled} />
                </form>
            {/* <p>Email me: antashma@gmail.com</p> */}
            </div>
    )
}
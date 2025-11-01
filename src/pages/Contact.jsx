import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import linkedinIcon from "../assets/icons/linkedin.png";
import instagramIcon from "../assets/icons/instagram.png";
import githubIcon from "../assets/icons/github.png";


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
                <section id="socials--container">
                    <h3>Connect with me</h3>
                    <div id="socials">
                        <a href="https://github.com/Antashma" target='_blank' title='github'><img className='social'src={githubIcon} width={60} height={60}/></a>
                        <a href="https://www.linkedin.com/in/samantha-lee-goodman/" target='_blank' title="linkedin"><img className='social'src={linkedinIcon} width={60} height={60}/></a>
                        <a href="https://www.instagram.com/dev.antashma/" target='_blank' title="instagram"><img className='social'src={instagramIcon} width={60} height={60}/></a>
                    </div>
                </section>
                <section id="contact-form--container">
                    <h3>Send me a message</h3>
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
                 </section>
            </div>
    )
}
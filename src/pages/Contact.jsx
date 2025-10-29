import WindowTitleBar from "../components/WindowTitleBar";


export default function Contact() {
    const style = {
        display: "none"
    }

    return (
        <section id="contact" className="window" style={style}>
            <WindowTitleBar titleText="📄contact.txt" windowId="contact"/>
            <div className="content">
                {/* <form id="contact-form" method="POST" action="sendEmail.php">
                    <label>Name: 
                        <input type="text" name="name" id="contact-name" />
                    </label>
                    <label>Email:
                        <input type="email" name="email" id="contact-email"/>
                    </label>
                    
                    <label>Message: 
                       <textarea name="message" id="contact-message"></textarea> 
                    </label>
                    <input type="submit"/>
                </form> */}
            <p>Email me: antashma@gmail.com</p>
            </div>
        </section>
    )
}
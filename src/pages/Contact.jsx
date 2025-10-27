import WindowTitleBar from "../components/WindowTitleBar";

export default function Contact() {
    const style = {
        display: "none"
    }

    return (
        <section id="contact" className="window" style={style}>
            <WindowTitleBar titleText="📄contact.txt" windowId="contact"/>
            <div className="content">
                <p>Email me: <br />
                  antashma@gmail.com
                </p>
            </div>
        </section>
    )
}
import WindowTitleBar from "../components/WindowTitleBar";
import pfp from "../assets/pfp.jpg";

export default function About() {

    const style = {
        display:"block"
    }

    return (
        <section id="about" className="window" style={style}>
            <WindowTitleBar titleText="📜about_me.doc" windowId="about" />
            <div className="content">
                <img src={pfp} alt="profile picture" className="profile-img" width={200} height={200} />
                <p>Hi, I'm Samantha—welcome to my little corner of the web!
                <br />
                Here, you'll find a collection of projects, big and small, born from a love of tinkering with my favorite languages—especially JavaScript. Whether it's a quirky side experiment or a full-fledged app, there's always something brewing.
                <br />
                See something that sparks your interest? I'd love to hear your thoughts—or even collaborate! Feel free to reach out via the contact page.<br />
                Enjoy your stay!</p>
            </div>
        </section>
    )
}
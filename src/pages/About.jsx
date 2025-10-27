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
                <div className="profile-text">
                    <p>Hi, I'm Samantha—welcome to my little corner of the web!</p>

                    <p>Here, you'll find a collection of projects, big and small, born from a love of tinkering with my favorite languages—especially JavaScript. Whether it's a quirky side experiment or a full-fledged app, there's always something brewing.</p>

                    <p>See something that sparks your interest? I'd love to hear your thoughts—or even collaborate! Feel free to reach out via the contact page.</p>
                    
                    <p>Enjoy your stay!</p>

                    <p className="credits">Site created with ❤️ & ☕ by <a href="https://github.com/Antashma" title="Github link">@antashma</a>
                    <br />
                    Heart emoticon icons created by <a href="https://www.flaticon.com/packs/heart-emoticons" title="heart emoticon icons">Smashicons - Flaticon</a></p>
                    
                </div>
                
            </div>
        </section>
    )
}
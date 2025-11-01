import { Link } from "react-router-dom";
import pfp from "../assets/pfp.jpg";

export default function About() {

    return (
        <div className="content">
            <img src={pfp} alt="profile picture" className="profile-img" width={200} height={200} />
            <div className="profile-text">
                <p>Hi, I'm Samantha—welcome to my little corner of the web!</p>

                <p>Here, you'll find a collection of <Link to="/projects">projects</Link>, big and small, born from a love of tinkering with my favorite languages—especially JavaScript. Whether it's a quirky side experiment or a full-fledged app, there's always something brewing.</p>

                <p>See something that sparks your interest? I'd love to hear your thoughts or even collaborate! Feel free to reach out via the <Link to="/contact" >contact page</Link>.</p>

                <p>Enjoy your stay!</p>

                <p className="credits">
                    Site created with ❤️ & ☕ by <a href="https://github.com/Antashma" title="Github link">@antashma</a>
                    <br />
                    Icons created by <a href="https://www.flaticon.com/authors/freepik" title="icons by freepik">Freepik - Flaticon</a>
                </p>
                
            </div>

        </div>
    )
}
import { Link } from "react-router-dom";

import Icon from "./components/Icon";

export default function IconNav() {
    return (
        <nav id="icons">
            <Link to="/about">
                <Icon windowId="about" iconText="About" />
            </Link>

            <Link to="/projects">
                <Icon windowId="projects" iconText="Projects" />
            </Link>

            <Link to="/contact">
                <Icon windowId="contact" iconText="Contact" />
            </Link>
        </nav>
    )
}
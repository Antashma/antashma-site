import Icon from "./components/Icon";

export default function IconNav() {
    return(
        <nav id="icons">
            <Icon windowId="about" iconText="About" />
            <Icon windowId="projects" iconText="Projects" />
            <Icon windowId="contact" iconText="Contact" />
        </nav>
    )
}
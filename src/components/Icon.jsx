import aboutIcon from "../assets/icons/about-icon.png";
import contactIcon from "../assets/icons/contact-icon.png";
import projectsIcon from "../assets/icons/contact-icon.png";


export default function Icon({ windowId, iconText }) {

    function selectIconImg() {
        switch(windowId) {
            case "about":
                return aboutIcon;
            case "projects":
                return projectsIcon;
            case "contact":
                return contactIcon;
            default:
                console.error(`"${windowId}" icon not found!`)
                break;
        }
    }


    return(
        <div id={`${windowId}-icon`} class="desktop-icon--container">
            <img class="icon-img" src={selectIconImg()} alt={`${windowId} icon`}/>
            <p class="icon-text">{iconText}</p>
        </div>
    )
}
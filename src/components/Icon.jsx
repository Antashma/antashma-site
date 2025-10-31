import { useState } from "react";

// import aboutIcon from "../assets/icons/about-icon.png";
// import contactIcon from "../assets/icons/contact-icon.png";
// import projectsIcon from "../assets/icons/contact-icon.png";

import aboutIcon from "../assets/icons/id-card.png";
import contactIcon from "../assets/icons/letter.png";
import projectsIcon from "../assets/icons/folder.png";


export default function Icon({ windowId, iconText }) {
    const [isHovering, setIsHovering] = useState(false);

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
        <div 
            id={`${windowId}-icon`} 
            className="desktop-icon--container"
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
            >
                <img className="icon-img" src={selectIconImg()} alt={`${windowId} icon`}/>
                <p className={`icon-text ${isHovering ? "hover-bg" : "" }`}>
                        {iconText}
                </p>
        </div>
    )
}
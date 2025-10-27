import { useState } from "react";

import { openWindow } from "../scripts";

import aboutIcon from "../assets/icons/about-icon.png";
import contactIcon from "../assets/icons/contact-icon.png";
import projectsIcon from "../assets/icons/contact-icon.png";


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
            onClick={() => openWindow(windowId)}
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
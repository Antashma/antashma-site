import { closeWindow } from "../scripts";

export default function WindowTitleBar({ titleText, windowId }) {
    return (
        <div className="title-bar">
                <h2>{titleText}</h2>
                <span className="close-btn" onClick={() => closeWindow(windowId)}>X</span>
        </div>
    )
}
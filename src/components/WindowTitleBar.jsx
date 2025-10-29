export default function WindowTitleBar({ titleText, close }) {
    return (
        <div className="title-bar">
                <h2>{titleText}</h2>
                <span className="close-btn" onClick={close}>✕</span>
        </div>
    )
}
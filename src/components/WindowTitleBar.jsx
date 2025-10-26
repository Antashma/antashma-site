export default function WindowTitleBar({ titleText }) {
    return (
        <div class="title-bar">
                <h2>{titleText}</h2>
                <span class="close-btn">X</span>
        </div>
    )
}
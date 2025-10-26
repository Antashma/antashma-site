import pfpImg from "../assets/pfp.jpg";


export default function Header() {
    return(
        <header>
            <div id="logo--container">
				<img src={pfpImg} width="30" height="30" />
				<span>antashma.dev OS</span>
		    </div>
			<nav>
				<a href="#">Home</a>
				<a href="#projects">Projects</a>
				<a href="#">Contact</a>
			</nav>
        </header>
    )
}
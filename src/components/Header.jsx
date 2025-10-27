import TimeDate from "./TimeDate";
import pfpImg from "../assets/pfp.jpg";


export default function Header() {
    return(
        <header>
            <div id="logo--container">
				<img src={pfpImg} width="30" height="30" />
				<span>antashma.dev OS</span>
		    </div>
			{/* <div className="time-date--container">
				<span id="time">🕒 11:03am</span>
				<span id="date">📅 10/26/2025</span>
			</div> */}
			<TimeDate />
        </header>
    )
}
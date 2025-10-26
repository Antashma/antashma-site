import Header from "./components/Header";
import IconNav from "./IconNav";
import ProjectsContainer from "./pages/ProjectsContainer"
// import LeetcodeContainer from "./pages/LeetcodeContaintainer"

import './App.css'
import About from "./pages/About";


function App() {

	return (
		<div id="app">
			<Header />
			<IconNav />
			<main>
				<About />
				{/* <ProjectsContainer /> */}
				{/* <LeetcodeContainer /> */}
			</main>

			<footer>
				<p>Created with ❤️ & ☕ by <a href="https://github.com/Antashma" title="Github link">@antashma</a></p>
				<p>Heart emoticon icons created by <a href="https://www.flaticon.com/packs/heart-emoticons" title="heart emoticon icons">Smashicons - Flaticon</a></p>
			</footer>
		</div>

	)
}

export default App

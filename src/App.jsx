import Header from "./components/Header";
import IconNav from "./IconNav";
import ProjectsContainer from "./pages/ProjectsContainer"
import Contact from "./pages/Contact";
import About from "./pages/About";
// import LeetcodeContainer from "./pages/LeetcodeContaintainer"

import './App.css'


function App() {

	return (
		<div id="app">
			<Header />
			<IconNav />
			<main>
				<About />
				<ProjectsContainer />
				<Contact />
			</main>

			<footer>
				<p>Created with ❤️ & ☕ by <a href="https://github.com/Antashma" title="Github link">@antashma</a></p>
				<p>Heart emoticon icons created by <a href="https://www.flaticon.com/packs/heart-emoticons" title="heart emoticon icons">Smashicons - Flaticon</a></p>
			</footer>
		</div>

	)
}

export default App

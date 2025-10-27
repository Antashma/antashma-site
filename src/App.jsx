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
		</div>

	)
}

export default App

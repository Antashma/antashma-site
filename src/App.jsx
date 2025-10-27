import Header from "./components/Header";
import IconNav from "./IconNav";
import Projects from "./pages/Projects"
import Contact from "./pages/Contact";
import About from "./pages/About";


import './App.css'


function App() {

	return (
		<div id="app">
			<Header />
			<IconNav />
			<main>
				<About />
				<Projects />
				<Contact />
			</main>
		</div>

	)
}

export default App

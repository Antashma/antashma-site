import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import IconNav from "./IconNav";
import WindowShell from "./components/WindowShell";
import About from "./pages/About";
import Projects from "./pages/Projects"
import Contact from "./pages/Contact";

import './App.css';


function App() {

	const location = useLocation();
	
	return (
		<div id="app">
			<Header />
			<IconNav />

			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={null} />
					<Route path="/about"
						element={
							<WindowShell title="Welcome!" windowId="about">
								<About />
							</WindowShell>
						} 
					/>
					<Route path="/projects"
						element={
							<WindowShell title="Projects" windowId="projects">
								<Projects />
							</WindowShell>
						} 
					/>
					<Route path="/contact"
						element={
							<WindowShell title="Contact" windowId="contact">
								<Contact />
							</WindowShell>
						} 
					/>
				</Routes>
			</AnimatePresence>
		</div>

	)
}

export default App

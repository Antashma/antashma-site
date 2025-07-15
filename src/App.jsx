import pfpImg from "./assets/pfp.jpg"
import './App.css'

function App() {

	return (
		<div id="container">
			<div id="container--content">
				<header>
						<div>
							<img src={pfpImg} width="75" height="75" />
							<span>antashma.dev</span>
						</div>
						<nav>
							<a href="#">Home</a>
							<a href="#">Projects</a>
							<a href="#">Contact</a>
						</nav>
				</header>

				<main>
					<h1>Welcome</h1>
					<section>
						<h2>Hello!</h2>
						<p>Hi, I'm Samantha—welcome to my little corner of the web!</p>
						<p>Here, you'll find a collection of projects, big and small, born from a love of tinkering with my favorite languages—especially JavaScript. Whether it's a quirky side experiment or a full-fledged app, there's always something brewing.</p>
						<p>See something that sparks your interest? I'd love to hear your thoughts—or even collaborate! Feel free to reach out via the contact page.</p>
						<p>Enjoy your stay!</p>
					</section>

					<section>
						<h2>Under Construction</h2>
						<p>Check back again soon!</p>
					</section>


							
				</main>

				<footer>
						<p><a href="https://github.com/Antashma">@antashma</a></p>
				</footer>
			</div>
		</div>
	)
}

export default App

import { useState } from "react";
import projects from "../data/projects";
import WindowTitleBar from "../components/WindowTitleBar";


export default function ProjectsContainer() {
    const [currentProject, setCurrentProject] = useState(projects[0]);

    const style = {
        display: "none"
    }

    function handleClick(id){
        const found = projects.find(p => p.id === id);
        setCurrentProject(found);
    }

    return (
        <section id="projects" className="window" style={style}>
            <WindowTitleBar titleText="📂Projects/" windowId="projects" />
            <div className="content">

                <nav id="project-nav">
                    <ul>
                        <li onClick={() => handleClick(0)}>PokEvalute</li>
                        <li onClick={() => handleClick(1)}>Get The Sequence</li>
                        <li onClick={() => handleClick(2)}>To Do List</li>
                    </ul>
                </nav>

                <div class="project-details">
                    <h3>{currentProject.name}</h3>
                    <p>{currentProject.description}</p>
                    <p class="tech-stack">{currentProject.techStack.join(", ")}</p>
                    <a class="cta-link" href={currentProject.url} target="_blank">{currentProject.url}</a>
                </div>
            </div> 
        </section>
    )
}
import projects from "../data/projects";
import WindowTitleBar from "../components/WindowTitleBar";
import ProjectDetails from "../components/ProjectDetails";


export default function Projects() {

    const style = {
        display: "none"
    }

    return (
        <section id="projects" className="window" style={style}>
            <WindowTitleBar titleText="📂Projects/" windowId="projects" />
            <div className="content">
                {
                    projects.map(project => (<ProjectDetails key={project.id} projectData={project} />))
                } 
            </div> 
        </section>
    )
}
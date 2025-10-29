import projects from "../data/projects";

import ProjectDetails from "../components/ProjectDetails";


export default function Projects() {

    return (
            <div className="content">
                {
                    projects.map(project => (<ProjectDetails key={project.id} projectData={project} />))
                } 
            </div> 
    )
}
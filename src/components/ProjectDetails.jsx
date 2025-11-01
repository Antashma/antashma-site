export default function ProjectDetails({ projectData }) {
    return (
        <div className="project-details">
            <h3>{projectData.name}</h3>
            <p>{projectData.description}</p>
            <p className="tech-stack">Tech stack: {projectData.techStack.join(", ")}</p>
            <a className="cta-link" href={projectData.url} target="_blank">{projectData.url}</a>
        </div>
    )
}
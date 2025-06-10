import { useEffect, useState } from 'react';

import './projects.css';

import projectsDataJson from '../../data/projects.json';

const Projects = ({limit, location}) => {
    const [projectsData, setProjectsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            if (Array.isArray(projectsDataJson)) {
                setProjectsData(projectsDataJson);
                setIsLoading(false);
            } else {
                throw new Error("projects.json is not an array or is invalid.");
            }
        } catch (err) {
            console.error("Error loading projects data from import:", err);
            setError(err);
            setIsLoading(false);
        }
    }, []);

    if (isLoading) {
        return <section className="section featured-projects-container"><h2>Featured Projects</h2><p>Loading projects...</p></section>;
    }

    if (error) {
        return <section className="section featured-projects-container"><h2>Featured Projects</h2><p>Error: {error.message}</p></section>;
    }

    const projectsToRender = Array.isArray(projectsData)
        ? (typeof limit === 'number' && limit >= 0 ? projectsData.slice(0, limit) : projectsData)
        : [];

    return (
        <section className="section featured-projects-container" location={location}>
            <h2>Featured Projects</h2>
            <div className="projects-container">
                {
                    projectsToRender.map((project, index) => {
                        const imgSrc = `/${project.thumbnail}.png`;
                        return (
                            <div className="project" key={project.id || index}>
                                <a href={project.url} target="_blank" rel="noreferrer">
                                    <div 
                                        style={{ backgroundImage: `url(${imgSrc})` }} 
                                        alt={project.title} 
                                        className="project-image" 
                                    />
                                    <p className="project-title">{project.title}</p>
                                    <p className="project-description">{project.description}</p>
                                    <ul className="project-language-list">
                                        {project.languages.map((language, index) => {
                                            return (
                                                <li>{language}</li>
                                            )
                                        })}
                                    </ul>
                                </a>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Projects;
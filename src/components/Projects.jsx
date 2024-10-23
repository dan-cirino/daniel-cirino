// Projects.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Projects.css'; // Ensure to create this CSS file for styling

const projects = [
    {
        title: 'a',
        description: 'A brief description of project one.',
        image: 'path/to/image1.jpg', // Add image path
        link: 'https://example.com/project-one', // Link to the project
    },
    // Add more projects here...
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

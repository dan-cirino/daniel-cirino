// eslint-disable-next-line no-unused-vars
import React from 'react';

const projects = [
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio website built with React and Tailwind CSS.',
        demo: 'https://myportfolio.com',
        github: 'https://github.com/username/portfolio'
    },
    {
        title: 'E-Commerce Platform',
        description: 'An online store built using MERN stack.',
        demo: 'https://mystore.com',
        github: 'https://github.com/username/ecommerce-platform'
    },
];

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

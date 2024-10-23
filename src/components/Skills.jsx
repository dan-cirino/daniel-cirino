// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Skills.css'; // Ensure you have this CSS file for styling

const Skills = () => {
    const skills = {
        'Programming Languages': ['Java', 'SQL'],
        'Technologies': ['Spring', 'Spring Boot', 'AWS', 'React', 'Gradle', 'Maven', 'Git', 'Postman'],
        'Databases': ['MariaDB', 'Redis', 'Cassandra', 'MySQL'],
        'Other Skills': ['Object-Oriented Programming (OOP)', 'SOLID Principles', 'Design Patterns', 'Data Structures', 'Algorithms', 'Unit Testing (JUnit, Mockito)', 'Test-Driven Development (TDD)', 'Multithreading']
    };

    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                {Object.entries(skills).map(([category, items], index) => (
                    <div key={index} className="skills-category">
                        <h3 className="category-title">{category}</h3>
                        <ul className="skills-list">
                            {items.map((skill, skillIndex) => (
                                <li key={skillIndex} className="skill-item">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

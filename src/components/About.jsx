// eslint-disable-next-line no-unused-vars
import React from 'react';
import pic from '../assets/Pic.jpeg'; // Adjust the path if necessary
import './About.css'; // Make sure to create this CSS file for styling

const About = () => {
    return (
        <section id="about">
            <div className="about-content">
                <img
                    src={pic}
                    alt="Daniel Cirino"
                    className="about-image"
                />
                <p>
                    Tech-savvy professional with substantial experience developing high-quality applications. Proven success in leading software development projects from start to finish, ensuring they meet deadlines and stay within budget. A flexible and proactive team player with strong communication and technical skills, known for creativity, enthusiasm, and hands-on approach. Adept at building robust relationships and managing competing demands to achieve challenging technical goals.
                </p>
            </div>
        </section>
    );
};

export default About;

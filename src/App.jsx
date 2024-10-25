// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import Projects from './components/Projects.jsx';
import Navbar from './components/Navbar.jsx';
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <About />
                <Skills />
                <Projects />
            </main>
        </div>
    );
}

export default App;

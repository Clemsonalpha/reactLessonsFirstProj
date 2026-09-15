import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      {/* Navigation */}
      <nav className="navbar">
        <h2 className="logo">CJ.</h2>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <p className="welcome">THANKS FOR CHECKING MY SITE</p>

          <h1>
            Hello, I'm <span>Clemson Joel</span>
          </h1>

          <h2>Frontend Developer</h2>

          <p className="description">
            I create modern, responsive and user-friendly websites using HTML,
            CSS, JavaScript and React.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Contact Me
            </a>

            <a href="#skills" className="secondary-btn">
              My Skills
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I'm a developer who enjoys turning ideas into beautiful and functional
          digital experiences. I'm currently learning React and improving my
          frontend development skills.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>My Skills</h2>

        <div className="skills-container">
          <div className="skill-card">
            <h3>HTML</h3>
            <p>Building structured and accessible websites.</p>
          </div>

          <div className="skill-card">
            <h3>CSS</h3>
            <p>Creating responsive and attractive interfaces.</p>
          </div>

          <div className="skill-card">
            <h3>JavaScript</h3>
            <p>Adding functionality and interactivity to websites.</p>
          </div>

          <div className="skill-card">
            <h3>React</h3>
            <p>Building modern user interfaces with components.</p>
          </div>
        </div>
      </section>

      {/* React Counter Practice */}
      <section className="counter-section">
        <h2>React Counter</h2>

        <p>
          You clicked the button <strong>{count}</strong> times.
        </p>

        <button className="counter-btn" onClick={() => setCount(count + 1)}>
          Click Me
        </button>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2>Let's Work Together</h2>

        <p>
          Have a project or idea you would like to bring to life? Feel free to
          reach out.
        </p>

        <a href="mailto:clemsonjoel44@gmail.com" className="primary-btn">
          Send Me an Email
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Clemson Joel. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default App;

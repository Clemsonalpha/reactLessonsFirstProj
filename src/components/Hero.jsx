export default function Hero() {
  return (
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
  );
}

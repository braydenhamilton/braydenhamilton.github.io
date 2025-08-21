import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="background-effects">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container">
        <header className="header">
          <div className="header-glow"></div>
          <h1 className="title">
            <span className="title-main">Brayden Hamilton</span>
            <span className="title-accent">Software Engineer</span>
          </h1>
        </header>

        <main className="main-content">
          <section id="about" className="section glass-card floating">
            <div className="card-header">
              <h2 className="section-title">
                <span className="title-icon">👨‍💻</span>
                About Me
              </h2>
            </div>
            <p className="about-text">
              Final year Computer Systems Engineering student with a passion for backend development 
              and a track record of excellence in both academics and competitive sailing. I thrive 
              on solving complex problems and building scalable solutions.
            </p>
          </section>

          <section id="projects" className="section glass-card floating">
            <div className="card-header">
              <h2 className="section-title">
                <span className="title-icon">⚡</span>
                Projects
              </h2>
            </div>
            <div className="projects-grid">
              <div className="project-category">
                <h4>Personal Projects</h4>
                
                <div className="project-card">
                  <h5 className="project-title">Portfolio Website</h5>
                  <ul className="project-description">
                    <li>Modern responsive portfolio showcasing futuristic glass morphism design</li>
                    <li>Built with React TypeScript and custom CSS animations for smooth UX</li>
                  </ul>
                  <div className="project-tech-badges">
                    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
                    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
                    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
                  </div>
                </div>

                <div className="project-card">
                  <h5 className="project-title">Data Analytics Dashboard</h5>
                  <ul className="project-description">
                    <li>Interactive dashboard for visualizing large datasets with real-time updates</li>
                    <li>Implemented efficient SQL queries and Python data processing algorithms</li>
                  </ul>
                  <div className="project-tech-badges">
                    <img src="https://img.shields.io/badge/Python-306998?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
                    <img src="https://img.shields.io/badge/SQL-%2307405e.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="SQL" />
                    <img src="https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white" alt="Jupyter" />
                  </div>
                </div>
              </div>

              <div className="project-category">
                <h4>University Projects</h4>
                
                <div className="project-card">
                  <h5 className="project-title">FPGA Digital Signal Processor</h5>
                  <ul className="project-description">
                    <li>Designed and implemented real-time audio filtering system on Intel Cyclone V</li>
                    <li>Optimized VHDL code achieving 98% hardware utilization efficiency</li>
                  </ul>
                  <div className="project-tech-badges">
                    <img src="https://img.shields.io/badge/VHDL-616161?style=for-the-badge" alt="VHDL" />
                    <img src="https://img.shields.io/badge/Cyclone_V_FPGA-0067a5?style=for-the-badge&logo=intel&logoColor=white" alt="Intel Cyclone V" />
                    <img src="https://img.shields.io/badge/Quartus_Prime-00285A?style=for-the-badge&logo=intel&logoColor=white" alt="Quartus" />
                  </div>
                </div>

                <div className="project-card">
                  <h5 className="project-title">IoT Environmental Monitor</h5>
                  <ul className="project-description">
                    <li>Custom PCB design with ATmega328PB for multi-sensor data collection</li>
                    <li>Wireless transmission system with low-power sleep modes for battery efficiency</li>
                  </ul>
                  <div className="project-tech-badges">
                    <img src="https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=white" alt="C" />
                    <img src="https://img.shields.io/badge/ATmega328PB-ed1b2d?style=for-the-badge" alt="ATmega328PB" />
                    <img src="https://img.shields.io/badge/Altium_Designer-A5915F?style=for-the-badge&logo=altiumdesigner&logoColor=white" alt="Altium Designer" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="experience" className="section glass-card floating">
            <div className="card-header">
              <h2 className="section-title">
                <span className="title-icon">🚀</span>
                Experience
              </h2>
            </div>
            <div className="card floating-card">
              <div className="card-glow"></div>
              <h3 className="card-title">Software Engineering Intern</h3>
              <p className="card-company">EROAD</p>
              <p className="card-subtitle">2024 – 2025</p>
              <div className="tech-tags">
                <span className="tech-tag">Java</span>
                <span className="tech-tag">Spring Boot</span>
                <span className="tech-tag">Snowflake</span>
                <span className="tech-tag">SQL</span>
                <span className="tech-tag">Cloud</span>
                <span className="tech-tag">TerraForm</span>
              </div>
            </div>
            <div className="card floating-card">
              <div className="card-glow"></div>
              <h3 className="card-title">Software Engineering Intern</h3>
              <p className="card-company">EROAD</p>
              <p className="card-subtitle">2023 – 2024</p>
              <div className="tech-tags">
                <span className="tech-tag">Java</span>
                <span className="tech-tag">Spring Boot</span>
                <span className="tech-tag">Analytics</span>
                <span className="tech-tag">Agile</span>
              </div>
            </div>
          </section>

          
        </main>

        <footer className="footer glass-card floating">
          <div className="social-links">
            <a href="https://github.com/braydenhamilton" target="_blank" rel="noopener noreferrer" className="social-link">
              <div className="social-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/brayden-hamilton-202559281/" target="_blank" rel="noopener noreferrer" className="social-link">
              <div className="social-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
            </a>
            <a href="mailto:brayden23nz@gmail.com" className="social-link">
              <div className="social-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
            </a>
          </div>
          <a href="/Brayden_CV_2025_Coloured.html" className="cv-link neon-button">
            <span>View My CV</span>
            <div className="neon-glow"></div>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default App;
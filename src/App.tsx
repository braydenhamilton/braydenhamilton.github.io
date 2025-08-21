import './App.css';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Brayden Hamilton</h1>
        <p className="subtitle">Software Developer</p>
      </header>

      <main className="main-content">
        <section id="experience" className="section">
          <h2 className="section-title">Experience</h2>
          <div className="card">
            <h3 className="card-title">Software Engineer at Tech Company</h3>
            <p className="card-subtitle">2022 - Present</p>
            <p className="card-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <div className="card">
            <h3 className="card-title">Project One</h3>
            <p className="card-content">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Project Two</h3>
            <p className="card-content">
              Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="social-links">
          <a href="https://github.com/braydenhamilton" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/brayden-hamilton-202559281/" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </div>
        <a href="/cv.html" className="cv-link">View My CV</a>
      </footer>
    </div>
  );
};

export default App;
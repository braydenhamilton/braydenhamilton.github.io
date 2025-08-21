import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Brayden Hamilton</h1>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="[CV_LINK]" target="_blank" rel="noopener noreferrer">CV</a>
          <a href="https://github.com/braydenhamilton" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="[LINKEDIN_LINK]" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </nav>
      </header>

      <main>
        <section id="projects">
          <h2>Projects</h2>
          <div className="project-list">
            {/* Add your projects here */}
            <div className="project-item">
              <h3>Project 1</h3>
              <p>Description of project 1.</p>
            </div>
            <div className="project-item">
              <h3>Project 2</h3>
              <p>Description of project 2.</p>
            </div>
          </div>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <div className="experience-list">
            {/* Add your experience here */}
            <div className="experience-item">
              <h3>Company 1 - Position</h3>
              <p>Description of your role and accomplishments.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; 2024 Brayden Hamilton</p>
      </footer>
    </div>
  )
}

export default App

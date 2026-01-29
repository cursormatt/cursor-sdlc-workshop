const Slide06Section1Intro = () => (
  <>
    <div className="section-header">
      <span className="section-badge section1">Section 1</span>
      <span className="phase-badge">Greenfield Project • 45 min • Teams of 5</span>
    </div>
    <h2>Build Something From Scratch</h2>
    <div className="intro-callout cyan">
      <p>
        <strong>In this section</strong>, you'll experience the{' '}
        <strong>complete software development lifecycle</strong> — from planning to
        testing — while learning how Cursor can assist at each stage.
      </p>
      <p>
        You'll also practice <strong>git workflow</strong> in a collaborative team
        setting, just like real engineering teams do every day.
      </p>
    </div>
    <div className="two-col">
      <div>
        <div className="tiles" style={{ gridTemplateColumns: '1fr', gap: '0.75rem' }}>
          <div className="tile cyan">
            <div className="tile-number">01</div>
            <div className="tile-title">
              Experience the <span className="highlight-green">complete SDLC</span>
            </div>
          </div>
          <div className="tile cyan">
            <div className="tile-number">02</div>
            <div className="tile-title">
              Learn how <span className="highlight-green">Cursor assists</span> at each stage
            </div>
          </div>
          <div className="tile cyan">
            <div className="tile-number">03</div>
            <div className="tile-title">
              Practice <span className="highlight-green">git workflow</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 style={{ fontSize: '0.9rem', marginBottom: '0.4rem' }}>
          Pick a project (splits into 5 features):
        </h3>
        
        <div className="project-category">
          <div className="project-category-label">Chrome Extensions</div>
          <div className="project-ideas">
            <div className="project-idea">
              <span className="project-icon">📖</span>
              <div>
                <strong>Dictionary</strong>
                <span>lookup, translation, flashcards, favorites, word of the day</span>
              </div>
            </div>
            <div className="project-idea">
              <span className="project-icon">📸</span>
              <div>
                <strong>Screenshot Tool</strong>
                <span>capture area, crop, annotate/draw, download, copy</span>
              </div>
            </div>
            <div className="project-idea">
              <span className="project-icon">🖍️</span>
              <div>
                <strong>Page Highlighter</strong>
                <span>highlight text, colors, notes, save, export</span>
              </div>
            </div>
            <div className="project-idea">
              <span className="project-icon">😀</span>
              <div>
                <strong>Emoji Picker</strong>
                <span>emoji grid, search, recents, favorites, copy</span>
              </div>
            </div>
            <div className="project-idea">
              <span className="project-icon">🔖</span>
              <div>
                <strong>Save for Later</strong>
                <span>save page, reading list, tags, search, mark as read</span>
              </div>
            </div>
          </div>
        </div>

        <div className="project-category">
          <div className="project-category-label">Web Apps</div>
          <div className="project-ideas">
            <div className="project-idea">
              <span className="project-icon">✅</span>
              <div>
                <strong>Todo List</strong>
                <span>add tasks, check off, delete, categories, due dates</span>
              </div>
            </div>
            <div className="project-idea">
              <span className="project-icon">🌤️</span>
              <div>
                <strong>Weather Dashboard</strong>
                <span>current, forecast, cities, backgrounds, units</span>
              </div>
            </div>
            <div className="project-idea">
              <span className="project-icon">💵</span>
              <div>
                <strong>Tip Calculator</strong>
                <span>bill input, tip slider, split, round up, history</span>
              </div>
            </div>
            <div className="project-idea">
              <span className="project-icon">❓</span>
              <div>
                <strong>Quiz Game</strong>
                <span>questions, answers, score, timer, results</span>
              </div>
            </div>
          </div>
        </div>

        <div className="project-idea build-your-own" style={{ marginTop: '0.4rem' }}>
          <span className="project-icon">✨</span>
          <div>
            <strong>Build Your Own!</strong>
            <span>pitch your idea — needs 5 splittable features</span>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Slide06Section1Intro

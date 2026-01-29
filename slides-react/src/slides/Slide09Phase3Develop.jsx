const Slide09Phase3Develop = () => (
  <>
    <div className="section-header">
      <span className="section-badge section1">Section 1</span>
      <span className="phase-badge">Phase 3: Develop • 20 min</span>
    </div>
    <h2>
      Develop{' '}
      <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
        (EACH person)
      </span>
    </h2>
    <div className="scrollable">
      <div className="checklist">
        {/* Git START */}
        <div className="check-group git">
          <div className="check-group-label">Git: Start</div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Pull latest</strong> — sync the official project
                (including the MVP) to your computer
              </div>
            </div>
            <div className="code-block">
              <code>git pull origin main</code>
            </div>
          </div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Create your branch</strong> — make your own sandbox you
                can safely play in until you're ready to share
              </div>
            </div>
            <div className="code-block">
              <code>git checkout -b [your-name]/[feature]</code>
            </div>
          </div>
        </div>

{/* IN CURSOR */}
          <div className="check-group work section1">
            <div className="check-group-label">In Cursor</div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Run the project</strong> — make sure the base MVP works
              first
            </div>
          </div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Use Plan Mode</strong> to design YOUR section from the PRD
            </div>
          </div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Implement your feature</strong> using Tab completion +
              Cmd+K
            </div>
          </div>
        </div>

        {/* Git FINISH */}
        <div className="check-group git">
          <div className="check-group-label">Git: Finish</div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Stage your changes</strong> — decide which files you
                want to share with the team
              </div>
            </div>
            <div className="code-block">
              <code>git add .</code>
            </div>
          </div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Commit</strong> — create a description of what you built
              </div>
            </div>
            <div className="code-block">
              <code>git commit -m "Add [feature]"</code>
            </div>
          </div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Push</strong> — propose your sandbox be added to the
                single-source-of-truth on GitHub
              </div>
            </div>
            <div className="code-block">
              <code>git push origin [your-name]/[feature]</code>
            </div>
          </div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Open a PR</strong> — let teammates confirm they want your
              changes to become officially part of the real project
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Slide09Phase3Develop

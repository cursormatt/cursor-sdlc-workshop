const Slide07Phase1Plan = () => (
  <>
    <div className="section-header">
      <span className="section-badge section1">Section 1</span>
      <span className="phase-badge">Phase 1: Plan • 10 min</span>
    </div>
    <h2>Plan</h2>
    <div className="scrollable">
      <div className="checklist">
        {/* Git START */}
        <div className="check-group git">
          <div className="check-group-label">Git: Start</div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Clone the repo</strong> — download a copy of the project
                to your computer
              </div>
            </div>
            <div className="code-block">
              <code>
                git clone [REPO_URL]
                <br />
                cd sdlc-workshop
              </code>
            </div>
          </div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Create a branch</strong> — make your own sandbox you can
                safely play in until you're ready to share
              </div>
            </div>
            <div className="code-block">
              <code>git checkout -b [team]/setup</code>
            </div>
          </div>
        </div>

        {/* IN CURSOR */}
        <div className="check-group work section1">
          <div className="check-group-label">In Cursor</div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Create your team folder</strong>
              </div>
            </div>
            <div className="code-block">
              <code>mkdir teams/[your-team-name]</code>
            </div>
          </div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Each person: Add yourself to team members</strong>
              </div>
            </div>
            <div className="code-block">
              <code>
                <span className="comment">
                  # Create teams/[team]/members/[your-name].md
                </span>
                <br />
                # [Your Name]
                <br />
                **Role:** [AE/FE/ADM]
                <br />
                **Fun fact:** [Something about you]
              </code>
            </div>
          </div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Create a PRD</strong> with{' '}
              <span className="highlight">5 specific tasks</span> (one per team
              member, assigned by name)
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
              <code>git commit -m "[Team] - Initial setup and PRD"</code>
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
              <code>git push origin [team]/setup</code>
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

export default Slide07Phase1Plan

import netflixScreenshot from '../assets/netflix_homepage.webp'

const Slide17Transformation = () => (
  <>
    <div className="section-header">
      <span className="section-badge section3">Section 3</span>
      <span className="phase-badge">The Transformation</span>
    </div>
    <h2>Before → After</h2>
    <div className="transformation-compare">
      <div className="transformation-panel">
        <h3 style={{ color: 'var(--red)' }}>😬 You Start With</h3>
        <div className="ugly-site">
          <h1>Netflix</h1>
          <hr />
          <p>Welcome to Netflix. Here are some movies you can watch:</p>
          <ul>
            <li><a href="#">The Shawshank Redemption</a> - Drama (1994)</li>
            <li><a href="#">The Dark Knight</a> - Action (2008)</li>
            <li><a href="#">Inception</a> - Sci-Fi (2010)</li>
            <li><a href="#">Pulp Fiction</a> - Crime (1994)</li>
            <li><a href="#">Forrest Gump</a> - Drama (1994)</li>
          </ul>
          <p>TV Shows:</p>
          <ul>
            <li><a href="#">Breaking Bad</a></li>
            <li><a href="#">Stranger Things</a></li>
            <li><a href="#">The Crown</a></li>
          </ul>
          <hr />
          <p><a href="#">Sign in</a> | <a href="#">Create account</a></p>
          <div className="ugly-counter">Page views: 12,847</div>
        </div>
      </div>
      <div className="transformation-panel">
        <h3 style={{ color: 'var(--green)' }}>🎉 You Build</h3>
        <div className="nice-site">
          <img src={netflixScreenshot} alt="Netflix homepage" />
        </div>
      </div>
    </div>
  </>
)

export default Slide17Transformation

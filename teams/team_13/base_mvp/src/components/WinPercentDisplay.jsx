import './WinPercentDisplay.css'

/**
 * WinPercentDisplay — Feature 2
 * Shows the selected team's win percentage in a big, polished card
 * with a visual progress ring and team name.
 *
 * Props:
 *   team  – object with { id, name, winPercent }
 */
export default function WinPercentDisplay({ team }) {
  if (!team) return null

  const { name, winPercent } = team

  // SVG circle math for the progress ring
  const radius = 70
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (winPercent / 100) * circumference

  // Color based on win percentage
  const getColor = (pct) => {
    if (pct >= 15) return '#22c55e' // green — strong contender
    if (pct >= 10) return '#3b82f6' // blue — solid pick
    if (pct >= 6) return '#f59e0b'  // amber — outside shot
    return '#ef4444'                // red — long shot
  }

  const color = getColor(winPercent)

  return (
    <div className="wpd-card">
      {/* Progress ring */}
      <div className="wpd-ring-wrapper">
        <svg className="wpd-ring" viewBox="0 0 160 160">
          {/* Background track */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="#1e293b"
            strokeWidth="12"
          />
          {/* Filled arc */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="wpd-ring-progress"
          />
        </svg>
        <span className="wpd-percent" style={{ color }}>
          {winPercent}%
        </span>
      </div>

      {/* Team name and label */}
      <h2 className="wpd-team-name">{name}</h2>
      <p className="wpd-label">Chance of winning the World Cup</p>

      {/* Tier badge */}
      <span className="wpd-badge" style={{ background: color }}>
        {winPercent >= 15
          ? 'Top contender'
          : winPercent >= 10
            ? 'Strong pick'
            : winPercent >= 6
              ? 'Outside shot'
              : 'Long shot'}
      </span>
    </div>
  )
}

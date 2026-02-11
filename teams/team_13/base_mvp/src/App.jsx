import { useState } from 'react'
import { TEAMS } from './data/teams.js'
import WinPercentDisplay from './components/WinPercentDisplay.jsx'
import './App.css'

export default function App() {
  // First team is selected by default
  const [selectedTeam, setSelectedTeam] = useState(TEAMS[0])

  return (
    <div className="app">
      <h1 className="title">World Cup Prediction</h1>
      <p className="subtitle">Pick your favorite team and see their chance of winning.</p>

      <label htmlFor="team-picker" className="picker-label">Your team</label>
      <select
        id="team-picker"
        value={selectedTeam.id}
        onChange={(e) => {
          const team = TEAMS.find((t) => t.id === e.target.value)
          if (team) setSelectedTeam(team)
        }}
        className="team-picker"
      >
        {TEAMS.map((team) => (
          <option key={team.id} value={team.id}>
            {team.name}
          </option>
        ))}
      </select>

      <WinPercentDisplay team={selectedTeam} />
    </div>
  )
}

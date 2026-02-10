# LinkedOut — Section 3: Real-World Chaos

5 teams compete to transform an ugly LinkedIn clone into something beautiful.

## Team Folders

| Team | Folder | Port | URL |
|------|--------|------|-----|
| Team 1 | `team_1/` | 3001 | http://localhost:3001 |
| Team 2 | `team_2/` | 3002 | http://localhost:3002 |
| Team 3 | `team_3/` | 3003 | http://localhost:3003 |
| Team 4 | `team_4/` | 3004 | http://localhost:3004 |
| Team 5 | `team_5/` | 3005 | http://localhost:3005 |

## Getting Started

### 1. Join your team

Add yourself to your team's `members/` folder. You already know how to do this from Section 1!

> **Ask Cursor:** "Add me to this team. My name is [name] and my GitHub username is [username]."

Or copy your member file from the `teams/` section if you already made one there.

### 2. Run the app

Each team works **only in their own folder**:

```bash
cd linkedout/team_X
npm install
npm run dev
```

Your app will be running at the URL listed above.

## What You're Working With

LinkedOut is a deliberately ugly LinkedIn clone. It has:
- A navigation bar with links
- A feed full of posts (some very funny)
- A profile sidebar
- News, jobs, games, messaging, and more

**The catch:** It looks like it was built in 1998. Tables for layout, no styling, placeholder images. Your job is to make it look and feel like a real app.

## The Rules

1. **Stay in your team's folder** — don't touch other teams' code
2. **No PR over 500 lines** (auto-rejected)
3. **Everyone must contribute at least 1 merged PR**
4. **Coordinate with your team** — plan who's working on what so you don't step on each other

## Feature Ideas

Here are some things you could improve (pick and divide among your team):

### Visual / Layout
- Replace the HTML tables with CSS flexbox or grid
- Add a real color scheme (LinkedIn blue? Dark mode?)
- Style the navigation bar properly
- Add profile photo placeholders (initials in a circle)
- Make the feed cards look like real social media posts

### Interactive
- Make the Like/Comment/Repost buttons actually work
- Add a working search bar
- Make the "Create a Post" box functional
- Add expand/collapse for long posts
- Make poll options clickable

### Content
- Add real avatar images or generated ones
- Style the job listings like cards
- Make the games section interactive
- Add notification badges that update
- Create a dark mode toggle

## File Structure

Each team folder is a complete React app:

```
team_X/
├── members/                # Add your member file here first!
│   └── README.md
├── index.html              # Vite entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Dev server config (port)
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Main layout
│   ├── App.css             # Styles (intentionally minimal)
│   ├── components/
│   │   ├── Navbar.jsx      # Top navigation
│   │   ├── LeftSidebar.jsx # Profile & groups
│   │   ├── Feed.jsx        # Post feed
│   │   ├── Post.jsx        # Individual post
│   │   └── RightSidebar.jsx# News, jobs, games, messages
│   └── data/
│       └── mockData.js     # All the fake data
```

## Tips

- **Start with CSS** — the biggest visual impact for the least code
- **Each person should own a component** — one person styles the Navbar, another does Feed, etc.
- **Don't rewrite everything** — improve incrementally
- **Use Cursor** — tell it what you want and let it generate the code

# Catch Falling Stars - make.fun Entry

A tiny browser game built from the prompt:

> "Build a tiny browser game: catch falling stars in a basket. Move with arrow keys or mouse, 60 seconds on the clock, score for each star caught, win at 20 stars, lose if 5 stars hit the ground. Title screen, playing screen, win screen and loss screen, all in one HTML file, no network."

## Game Features
- **Single HTML file** - no external assets, fully self-contained
- **Canvas 2D** graphics with smooth animations
- **Keyboard & mouse controls** - arrow keys or mouse drag to move basket
- **Game states**: Title → Playing → Win/Loss with deterministic URL parameters
- **Score tracking**: catch stars to win (20), avoid ground hits to stay alive (5 missed = game over)
- **60-second timer** adds urgency
- **Responsive 1280x720** (16:9) display

## Video
The video showcases:
1. **Title card** (5s) - the original prompt text
2. **Agent working** (8s) - code screenshot with slow zoom/pan
3. **Gameplay montage** (15s) - title → playing → win transitions
4. **Referral end card** (5s) - make.fun referral card with code `pnwd2w29`

Total duration: ~33 seconds, 1280x720, H.264/AAC.

## make.fun Badges
[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/buahrasa01-hub/makefun-post-x/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/buahrasa01-hub/makefun-post-x/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

*This entry participates in the "The agent builds a game from one prompt" bounty (post-x-the-agent-builds-a-game-from-20261122-1709).*

## Usage
- Open `game/index.html` in a browser
- Use `?shot=title|play|win|loss` URL parameter for reproducible states
- Video available at `video.mp4`

## License
MIT License (see LICENSE file)

---
*POST.json names the X post for this entry: https://x.com/buahrasa1/status/2124644962562420890*

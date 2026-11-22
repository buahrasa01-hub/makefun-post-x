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
[![Make.fun](https://make.fun/press/brand-badge/16x9/makefun-badge-16x9.png)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

*This entry participates in the "The agent builds a game from one prompt" bounty (post-x-the-agent-builds-a-game-from-20261122-1709).*

## Usage
- Open `game/index.html` in a browser
- Use `?shot=title|play|win|loss` URL parameter for reproducible states
- Video available at `video.mp4`

## License
MIT License (see LICENSE file)

---
*POST.json contains a placeholder URL until the human posts on X. The final post address will replace the placeholder after submission.*

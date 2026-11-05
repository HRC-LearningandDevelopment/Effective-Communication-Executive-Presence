# Effective Communication & Executive Presence

Self-paced e-learning course for HealthRecon Connect senior leaders (VPs, Center Heads and Directors), part of the Senior Leadership Programme. Same interface and learner experience as *Planning and Prioritizing for Results* and *Client Call Handling*.

Plain HTML, CSS and JavaScript. No build step, no backend, no login.

## Deploy to GitHub Pages

1. Upload **the contents of this folder** (not the folder itself) to the root of the repository, so `index.html` sits at the top level. Include the hidden `.nojekyll` file.
2. In the repository, go to **Settings → Pages**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, and save.
3. The course is live at `https://<your-org>.github.io/<repo>/` within a minute or two.

The course must be served over http(s). Opening `index.html` straight from disk won't load the audio or the course text.

## Where things live

| To change… | Edit |
|---|---|
| Any course text, page order, activities, quiz questions, pass mark | `ep-course-data.js` |
| Audio scripts (what each voice says) | `ep-course-data.js` → blocks with `t: 'av'` |
| Look, layout and behaviour | `index.html` |
| Logos, fonts, audio | `assets/` |

If you change an audio script, the matching MP3 in `assets/audio/` must be regenerated (ElevenLabs, Eleven v3 model) and its line start times updated in `assets/audio/manifest.json`, otherwise captions won't match the voice.

## Course structure

- **Start:** Welcome (name for the certificate, how it works, objectives) · One Week, Five Rooms.
- **Part 1, know your presence:** Your Communication Style · The Three S’s of Presence · The Presence Mirror.
- **Part 2, communicate up and across:** The CEO Update · The Steering Meeting · The Virtual Floor.
- **Part 3, lead the room under pressure:** The Town Hall · The Tough Question · Listening as Presence.
- **Wrap-up:** key takeaways, 30-day presence plan and toolkit, final check (8 questions, 80% to pass), results, certificate and PDF of answers.

**Certificate unlocks when** the learner has entered their name, completed every module and passed the final check.

## Audio

Two audio-visual clips, voiced with ElevenLabs v3:
- *One challenge, two replies* (The Three S’s of Presence)
- *Who speaks first* (Listening as Presence)

Cast: Narrator = Alice, Arun (VP) = Eric, Karen (client COO) and Lakshmi (Quality Head) = Sarah, Meera (Tower Lead) = Lily.
Every clip has live captions, a full transcript, and a "read instead" option.

## How saving works

Progress, answers, activity state and reflections are saved in the learner's browser (`localStorage`, key `hrc-exec-presence-v1`). Progress is per browser and per device; "Reset my progress" in the sidebar clears it. Nothing is sent to a server and there is no LMS reporting. Completion evidence is the downloaded certificate and the PDF of answers.

## Fonts

Proxima Nova is a commercial typeface. Confirm your licence covers web embedding on a public site before publishing.

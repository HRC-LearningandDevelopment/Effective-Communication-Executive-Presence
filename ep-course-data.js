/* Effective Communication & Executive Presence — all course text lives here. */
window.EP_COURSE = {
  title: 'Effective Communication & Executive Presence',
  kicker: 'Senior Leadership Programme · About 2 hours',
  storeKey: 'hrc-exec-presence-v1',
  passMark: 80,
  certLines: ['Effective Communication', '& Executive Presence'],
  certSub: 'Senior Leadership Programme · Leadership Foundations',
  nextSteps: [
    'Ask three colleagues to complete the colleague version of the Presence Mirror (in your toolkit).',
    'Share your 30-day presence plan with the person who will review your progress.',
    'Use the 60-second brief for your very next update to a senior leader.'
  ],
  // Voice cast (ElevenLabs premade voices).
  speakers: {
    narrator: { name: 'Narrator', role: 'Course guide', tone: 'cyan', eleven: 'Xb7hH8MSUJpSbSDYk0k2' },
    arun: { name: 'Arun', role: 'VP, Operations, HRC', tone: 'teal', photo: 'assets/people/arun.png', eleven: 'cjVigY5qzO86Huf0OWal' },
    karen: { name: 'Karen Doyle', role: 'COO, client', tone: 'amber', photo: 'assets/people/karen.png', eleven: 'EXAVITQu4vr4xnSDxMaL' },
    meera: { name: 'Meera', role: 'Tower Lead, HRC', tone: 'violet', photo: 'assets/people/meera.png', eleven: 'pFZP5JQG7iQjIQuC4Bku' },
    lakshmi: { name: 'Lakshmi', role: 'Quality Head, HRC', tone: 'pink', photo: 'assets/people/lakshmi.png', eleven: 'EXAVITQu4vr4xnSDxMaL' }
  },
  // Faces for people who appear in activities but don't speak.
  people: {
    maria: { name: 'Maria', role: 'Center Head, HRC', photo: 'assets/people/maria.png' },
    ravi: { name: 'Ravi', role: 'Director, HRC', photo: 'assets/people/ravi.png' }
  },
  groups: [
    { label: 'Start', mods: ['welcome', 'week'] },
    { label: 'Part 1: Know Your Presence', mods: ['style', 'sss', 'mirror'] },
    { label: 'Part 2: Communicate Up and Across', mods: ['ceo', 'steer', 'virtual'] },
    { label: 'Part 3: Lead the Room Under Pressure', mods: ['town', 'tough', 'listen'] },
    { label: 'Wrap-Up', mods: ['takeaways', 'final', 'results'] }
  ],
  modules: {
    welcome: { title: 'Welcome', mins: 2, hero: true, pages: [[
      { t: 'lede', html: 'What do people say about you when you leave the room? At your level, people judge the strategy partly by how you communicate it.' },
      { t: 'p', html: 'This course is for <strong>VPs, Center Heads and Directors</strong> across the US, India, the Philippines and Sri Lanka. It is about being heard: clearly, credibly and calmly, in every room you lead. It takes about 2 hours, in three parts of about 40 minutes, and your progress saves automatically in this browser.' },
      { t: 'name' },
      { t: 'h3', text: 'How It Works' },
      { t: 'flow', items: [
        '<strong>Part 1: know your presence.</strong> Your communication style, the three S’s, and the Presence Mirror. About 30 minutes.',
        '<strong>Part 2: communicate up and across.</strong> The CEO update, the steering meeting, and the virtual floor. About 40 minutes.',
        '<strong>Part 3: lead the room under pressure.</strong> The town hall, the tough question, and listening. About 30 minutes.',
        '<strong>Wrap-up.</strong> Your 30-day presence plan, a toolkit, a final check (80% to pass) and your certificate. About 15 minutes.'
      ] },
      { t: 'h3', text: 'By the end, you will be able to' },
      { t: 'objectives', items: [
        'Recognise your executive communication style and when to flex it.',
        'Assess your presence across Substance, Signal and Steadiness.',
        'Brief senior leaders with the bottom line up front.',
        'Influence peers without authority, and lead clearly through a screen and across regions.',
        'Deliver hard news and handle tough questions with honesty and calm.'
      ] },
      { t: 'callout', tone: 'tip', html: 'Your progress is saved on this device only. Nothing is sent or tracked. Your reflections and results are included in the PDF of your answers at the end.' }
    ]] },

    week: { title: 'One Week, Five Rooms', mins: 3, pages: [
      [
        { t: 'quote', html: 'Presence isn’t what you intend. It’s what people experience.' },
        { t: 'p', html: 'At senior level, every word, pause and email is amplified. You’ll follow a senior leader through one demanding week. Each day brings a different room, and each room needs a different kind of communication: <strong>upward, across, across regions, down, and under pressure.</strong>' },
        { t: 'cards', cols: 5, items: [
          { tone: 'cyan', kicker: 'Mon', text: '5 minutes with the CEO' },
          { tone: 'violet', kicker: 'Tue', text: 'Cross-tower steering meeting' },
          { tone: 'green', kicker: 'Wed', text: 'Video call with four countries' },
          { tone: 'amber', kicker: 'Thu', text: 'Town hall: 300 people, hard news' },
          { tone: 'pink', kicker: 'Fri', text: 'The question you can’t fully answer' }
        ] },
        { t: 'poll', id: 'poll', q: 'Which room would you find hardest this week?', opts: [
          { title: 'The CEO update', sub: 'Upward', fb: 'Slow down in <strong>Room 1: The CEO update</strong>. BLUF and the 60-second brief are built for exactly this.' },
          { title: 'The steering meeting', sub: 'Across', fb: 'Slow down in <strong>Room 2: The steering meeting</strong>. It’s about influencing peers you don’t manage.' },
          { title: 'The virtual floor', sub: 'Across regions', fb: 'Slow down in <strong>Room 3: The virtual floor</strong>: camera presence, leading in writing, and reading regions.' },
          { title: 'The town hall', sub: 'Down', fb: 'Slow down in <strong>Room 4: The town hall</strong>, where you’ll build a five-part hard-news message.' },
          { title: 'The tough question', sub: 'Under pressure', fb: 'Slow down in <strong>Room 5: The tough question</strong>, and practise the four-step answer.' }
        ] }
      ],
      [
        { t: 'h3', text: 'What makes this senior-level' },
        { t: 'p', html: 'Good communicators do the things on the left. Senior leaders with presence do the things on the right.' },
        { t: 'cards', cols: 2, items: [
          { tone: 'grey', kicker: 'Good communicator', list: ['Sharing information', 'Presenting all the data', 'Being liked in the room', 'Answering every question', 'Speaking first and most', 'Polished slides'] },
          { tone: 'green', kicker: 'Senior leader with presence', list: ['Shaping decisions', 'Leading with the bottom line', 'Being trusted outside it', 'Answering honestly, including “I don’t know”', 'Listening first and deciding clearly', 'A clear message people can repeat'] }
        ] },
        { t: 'callout', tone: 'key', html: '<strong>Keep your hardest room in mind.</strong> Every room is covered, but the one you chose is where you’ll get the most from slowing down.' }
      ]
    ] },

    style: { title: 'Your Communication Style', mins: 10, pages: [[
      { t: 'lede', html: 'Twelve situations. Every option is something an effective senior leader might do, so there’s <strong>no right answer</strong>.' },
      { t: 'profile', id: 'a-style', title: 'Your Executive Communication Style', inst: 'Pick what you would most likely do first, not what you think you should do.',
        styles: {
          DE: { name: 'Decider', motto: 'Clarity drives action', tone: 'pink',
            strengths: 'Crisp and decisive. People know where they stand, meetings end with decisions, and updates get to the point.',
            others: 'Can come across as abrupt. You may close debate too early, and people may stop raising concerns.',
            flex: 'In meetings you lead, ask one question and let others speak before you give your view. Then decide.' },
          NA: { name: 'Narrator', motto: 'Stories move people', tone: 'violet',
            strengths: 'Inspiring and memorable. You make change meaningful and help people see where things are heading.',
            others: 'Can sound polished but light on detail. Analytical audiences may want more proof before they trust the story.',
            flex: 'Anchor every story with one hard number and one specific next step, with an owner and a date.' },
          CV: { name: 'Convener', motto: 'Inclusion builds commitment', tone: 'green',
            strengths: 'People feel heard and safe to disagree, so buy-in is strong and resistance surfaces early.',
            others: 'Can seem slow, or unclear about where you stand. Decisions may drift while everyone is consulted.',
            flex: 'End every discussion by stating your own view, then the decision, the owner and the date.' },
          EX: { name: 'Expert', motto: 'Evidence earns trust', tone: 'cyan',
            strengths: 'Credible, accurate and well prepared. People trust your analysis, and your recommendations hold up to scrutiny.',
            others: 'Can bury the message in detail. On camera or in a town hall you may come across as distant.',
            flex: 'Say your one-sentence conclusion first. Put the detail in an appendix and bring it out only when asked.' }
        },
        items: [
          { q: 'You have five minutes with the CEO about a slipping account. You open with…', opts: [['EX', 'The data on what’s slipping and why'], ['CV', 'What you’ve heard from the client and the team leaders involved'], ['DE', 'The decision you need from the CEO today'], ['NA', 'The story of the account and where it’s heading']] },
          { q: 'In a meeting where peers push back on your proposal, you tend to…', opts: [['CV', 'Invite each person to voice their concerns before you respond'], ['NA', 'Reframe the proposal around the bigger goal everyone shares'], ['EX', 'Walk them through the evidence again, more carefully'], ['DE', 'Summarise the options and push for a decision in the room']] },
          { q: 'Writing to a large group about a change, your draft usually…', opts: [['DE', 'Is short: what’s changing, from when, and what to do'], ['EX', 'Includes the reasoning and data behind the change'], ['NA', 'Explains why the change matters and where it’s taking us'], ['CV', 'Invites questions and tells people where to share their views']] },
          { q: 'On a video call with teams in four countries, you’re most likely to…', opts: [['NA', 'Open with a short story or example to bring people in'], ['DE', 'Keep it tight, cover the agenda and finish early'], ['CV', 'Call on people by name so every region is heard'], ['EX', 'Share your screen and walk through the numbers']] },
          { q: 'Colleagues would most likely describe your communication as…', opts: [['EX', '“Precise and well prepared”'], ['DE', '“Direct and decisive”'], ['CV', '“Inclusive and approachable”'], ['NA', '“Inspiring and engaging”']] },
          { q: 'Someone asks a hostile question at a town hall. Your instinct is to…', opts: [['CV', 'Acknowledge their frustration and thank them for raising it'], ['EX', 'Answer with the facts, as completely as you can'], ['NA', 'Connect your answer to the bigger picture of why we’re doing this'], ['DE', 'Give a short, direct answer and move on']] },
          { q: 'Before an important presentation, you spend most time on…', opts: [['NA', 'The storyline and the opening'], ['CV', 'Talking to key people beforehand to understand their views'], ['DE', 'The ask and the decisions you want at the end'], ['EX', 'Checking every figure and preparing for detailed questions']] },
          { q: 'What frustrates you most in how others communicate is…', opts: [['DE', 'Long updates that never reach the point'], ['NA', 'Presentations full of numbers with no story'], ['EX', 'Confident claims with no evidence'], ['CV', 'Leaders who talk and don’t listen']] },
          { q: 'Delivering news your team won’t like, you focus on…', opts: [['EX', 'Explaining the reasons clearly and accurately'], ['NA', 'Helping them see where this leads and why it’s worth it'], ['CV', 'Giving people space to react and ask questions'], ['DE', 'Being clear and quick, so uncertainty doesn’t linger']] },
          { q: 'When your presentation runs short of time, you…', opts: [['CV', 'Cut content to protect time for discussion'], ['DE', 'Skip to the recommendation and the ask'], ['NA', 'Keep the core story and drop the detail'], ['EX', 'Speed up so the key data is still covered']] },
          { q: 'In a steering meeting, you add most value by…', opts: [['DE', 'Driving the group to a decision'], ['CV', 'Making sure every tower’s view is on the table'], ['EX', 'Bringing the analysis no one else has'], ['NA', 'Reminding people what we’re ultimately trying to achieve']] },
          { q: 'The communication setting you find hardest is…', opts: [['NA', 'A detailed operational review full of numbers'], ['EX', 'An off-the-cuff talk with no time to prepare'], ['DE', 'A long consensus discussion with no clear end'], ['CV', 'Announcing a decision without consulting anyone']] }
        ],
        kp: [
          'There is no best style. Each one works brilliantly in some rooms and struggles in others.',
          'Your strengths, overused, become how others experience you on a bad day.',
          'The five rooms in this course will show you where to flex.'
        ] }
    ]] },

    sss: { title: 'The Three S’s of Presence', mins: 10, pages: [
      [
        { t: 'lede', html: 'Executive presence isn’t charisma, and it isn’t about looks or volume. It’s whether people <strong>trust you to lead when it matters</strong>. Three things build that trust.' },
        { t: 'cards', items: [
          { tone: 'cyan', kicker: 'Substance', text: 'What you know, decide and stand for. A clear point of view, sound judgement, and knowing the business impact of your work.' },
          { tone: 'pink', kicker: 'Signal', text: 'How you come across: your words, voice, writing and presence on camera. Clarity and brevity signal confidence.' },
          { tone: 'green', kicker: 'Steadiness', text: 'How you show up under pressure. Calm, consistent and honest, especially when the news is bad or the question is hostile.' }
        ] },
        { t: 'av', id: 'av-ep-sss', kind: 'Scenario replay', title: 'One challenge, two replies', mins: '1 min', lines: [
          { sp: 'narrator', emo: 'neutral', beat: 'The quarterly review', tag: 'calm', text: 'Arun is presenting the quarterly review. The client’s COO cuts in.' },
          { sp: 'karen', emo: 'serious', beat: '“Why should we renew?”', tag: 'frustrated, firm', text: 'Your SLAs look fine on paper, but my team is still chasing denials every week. Why should we renew?' },
          { sp: 'arun', emo: 'serious', beat: 'Reply 1', tag: 'defensive, rushed', text: 'Well, that’s not really fair. The numbers show we’re hitting every target, so I’m not sure where that’s coming from.' },
          { sp: 'narrator', emo: 'thoughtful', beat: 'Substance, without steadiness', tag: 'thoughtfully', text: 'Arun knows the account. But the room just watched him get defensive. Let’s replay it.' },
          { sp: 'arun', emo: 'empathetic', beat: 'Reply 2 · Pause. Acknowledge.', tag: 'calm, measured', text: 'That’s a fair challenge. Green SLAs don’t help if your team is still chasing denials.' },
          { sp: 'arun', emo: 'serious', beat: 'A clear point of view', tag: 'calm, confident', text: 'Here’s what I see: sixty percent of those denials trace to two payers. I’ll bring you a fix for both by Friday, and we’ll review the trend together in two weeks.' },
          { sp: 'karen', emo: 'neutral', tag: 'measured, reassured', text: 'Okay. That’s what I needed to hear.' },
          { sp: 'narrator', emo: 'warm', beat: 'Substance · Signal · Steadiness', tag: 'warmly', text: 'Same knowledge, same leader. This time: a clear point of view, said simply, and said calmly. That’s all three S’s.' }
        ], ask: { q: 'What changed most in the second reply?', opts: [
          { text: 'Arun had more data', fb: 'He knew the same facts both times. Substance was never the gap.' },
          { text: 'He stayed steady, acknowledged the challenge, then gave a clear view and a date', ok: true, fb: 'Exactly. Steadiness let his substance land, and a short, specific answer was the signal.' },
          { text: 'He apologised to the client', fb: 'He didn’t apologise. He acknowledged a fair point, which is different, and stronger.' }
        ] } },
        { t: 'callout', tone: 'key', html: '<strong>The shadow of the leader.</strong> At senior level, people read meaning into everything: a short email, a missed meeting, a sigh on camera. Your team takes its cue on how worried to be from how you look. Presence is managing that shadow on purpose.' }
      ],
      [
        { t: 'sim', id: 'a-sss', title: 'Which S is missing?', intro: 'Each leader below has strong presence in two S’s but not the third. Spot the gap.', stepWord: 'Leader', nextLbl: 'Next leader', doneHead: 'All three gaps spotted.', replay: 'Try again', steps: [
          { who: 'arun', sit: 'Arun knows his towers inside out and gives crisp, well-structured updates. But when a client executive challenged him publicly last month, he became defensive, and his team noticed.', opts: [
            { text: 'Substance', fb: 'His substance is strong: he knows the business. The gap showed under pressure.' },
            { text: 'Signal', fb: 'His updates are clear, so signal is mostly strong. The gap was how he handled pressure.' },
            { text: 'Steadiness', ok: true, fb: 'Strong knowledge and clear updates, but his composure slipped under challenge, and the team took its cue from that.' }
          ] },
          { who: 'maria', sit: 'Maria is calm in every crisis and has excellent judgement. But her emails run to several screens and her updates take ten minutes to reach the point.', opts: [
            { text: 'Substance', fb: 'Her judgement is excellent, so substance isn’t the issue.' },
            { text: 'Signal', ok: true, fb: 'Strong substance and steadiness, but long messages make her seem less clear than she is. BLUF would change how she’s perceived.' },
            { text: 'Steadiness', fb: 'She’s calm in every crisis, so steadiness is strong.' }
          ] },
          { who: 'ravi', sit: 'Ravi is warm, confident and a great presenter. People enjoy his town halls. But in steering meetings he rarely takes a position, and colleagues aren’t sure what he thinks.', opts: [
            { text: 'Substance', ok: true, fb: 'Strong signal and steadiness, but without a clear point of view his presence has nothing behind it. People follow leaders who stand for something.' },
            { text: 'Signal', fb: 'He presents well, so signal is strong. What’s missing is a clear position.' },
            { text: 'Steadiness', fb: 'He’s confident and calm. The gap is a point of view.' }
          ] }
        ], kp: [
          'Substance without signal: people don’t hear how good your thinking is.',
          'Signal without substance: polished, but nothing to follow.',
          'Either without steadiness: trust drops the moment pressure arrives.'
        ] }
      ]
    ] },

    mirror: { title: 'The Presence Mirror', mins: 10, pages: [[
      { t: 'lede', html: 'Rate yourself honestly from <strong>1 (rarely)</strong> to <strong>5 (consistently)</strong>. This is for you only.' },
      { t: 'selfcheck', id: 'a-mirror', title: 'The Presence Mirror', inst: 'Twelve behaviours, four for each S. Your lowest S is where to focus first.',
        scale: [['1', 1], ['2', 2], ['3', 3], ['4', 4], ['5', 5]],
        groups: {
          S: { name: 'Substance', tip: 'Before your next leadership meeting, write down your position on the top issue in one sentence, and say it.' },
          G: { name: 'Signal', tip: 'For the next two weeks, start every update and email with the bottom line, and end with one clear ask.' },
          T: { name: 'Steadiness', tip: 'Before high-stakes moments, prepare your answer to the three hardest questions, and practise pausing for two seconds before you answer.' }
        },
        items: [
          { g: 'S', text: 'I have a clear point of view on our biggest issues, and I share it.' },
          { g: 'S', text: 'I make decisions at my level rather than passing them upward.' },
          { g: 'S', text: 'I can explain the business impact of what my teams do.' },
          { g: 'S', text: 'I say “I don’t know” when I don’t, and I follow up.' },
          { g: 'G', text: 'I lead with the headline in updates and presentations.' },
          { g: 'G', text: 'My emails and messages are short and end with a clear ask.' },
          { g: 'G', text: 'I come across on camera with the same energy as in person.' },
          { g: 'G', text: 'In meetings I don’t chair, I listen more than I speak.' },
          { g: 'T', text: 'I stay calm and measured when I’m challenged in public.' },
          { g: 'T', text: 'I deliver bad news early and plainly.' },
          { g: 'T', text: 'My mood on a bad day doesn’t set the tone for the room.' },
          { g: 'T', text: 'I disagree with peers or seniors respectfully, in the room rather than afterwards.' }
        ] },
      { t: 'callout', tone: 'tip', html: '<strong>Self-ratings are only half the picture.</strong> Ask three colleagues to complete the colleague version in your toolkit at the end, and look for the biggest gap between how you see yourself and how they see you.' }
    ]] },

    ceo: { title: 'Room 1: The CEO Update', mins: 15, pages: [
      [
        { t: 'assignment', tag: 'Monday · The situation', title: 'Five minutes with the CEO', html: 'A major account with three of our towers is at risk. SLAs are green, but the new client COO won’t meet us, and a competitor has been invited in.' },
        { t: 'h3', text: 'Three tools for upward communication' },
        { t: 'cards', items: [
          { tone: 'cyan', kicker: 'BLUF', text: 'Bottom Line Up Front. Your first sentence is the conclusion, the risk or the decision you need. Background comes only if asked.' },
          { tone: 'violet', kicker: 'The Pyramid', text: 'One main message at the top, supported by no more than three points, each backed by evidence. Senior people listen top-down.' },
          { tone: 'green', kicker: 'Situation – Complication – Resolution', text: 'A short storyline for any update: what’s happening, why it matters now, and what you recommend.' }
        ] }
      ],
      [
        { t: 'h3', text: 'Here’s how most people start' },
        { t: 'quote', html: 'So, as you know, Meridian has been with us for six years across three towers. Over the last quarter there have been some changes on the client side, including a new COO. Our SLAs have been green, which is good, although CSAT has moved a bit. The team has been doing great work. We’ve also heard they may be talking to another vendor, so we think we should probably do something about the relationship…' },
        { t: 'sim', id: 'a-bluf', title: 'Fix the opening', intro: 'The CEO interrupts after 30 seconds: “What do you need from me?”', stepWord: 'Opening', doneHead: 'Opening fixed.', replay: 'Try again', steps: [
          { sit: 'Which opening would have avoided that?', opts: [
            { text: '“Let me give you some background on Meridian first, so you have the full picture.”', fb: 'This is the rambling version with a warning label. Senior leaders want the conclusion first and the background only if they ask.' },
            { text: '“Our SLAs on Meridian are all green, but there are some concerns we should discuss.”', fb: 'Better, but it leads with reassurance and is vague about the problem. The CEO still has to ask what you need.' },
            { text: '“Meridian’s renewal is at risk, and I need your help to get us in front of their new COO within two weeks.”', ok: true, fb: 'The risk and the ask in one sentence. The CEO can now decide how much background they need.' }
          ] }
        ], kp: ['Your first sentence is the risk, the conclusion or the decision you need.', 'Reassurance before the problem makes the listener work harder to find it.', 'Background is for when they ask.'] },
        { t: 'buckets', id: 'a-brief', title: 'What belongs in a 60-second brief?', inst: 'Sort each item. Drag it, or select it and then select a box.', buckets: [
          { id: 'in', title: 'Say it in the 60 seconds', tone: 'green' }, { id: 'out', title: 'Keep for later', sub: 'Follow-up note, if at all', tone: 'grey' }
        ], chips: [
          { text: 'The risk and what’s at stake: renewal in five months', b: 'in', why: 'The risk is your bottom line.' },
          { text: 'The support or decision you need, and by when', b: 'in', why: 'The ask is why you’re in the room.' },
          { text: 'What you’ve already done', b: 'in', why: 'It shows you’re in control, not just escalating.' },
          { text: 'One or two key facts: CSAT trend, competitor invited', b: 'in', why: 'Just enough evidence to back the ask.' },
          { text: 'The full six-year history of the account', b: 'out', why: 'History can wait unless the CEO asks.' },
          { text: 'Every SLA metric for the last quarter', b: 'out', why: 'Full metrics belong in a follow-up note.' },
          { text: 'The names of everyone on the account team', b: 'out', why: 'Not needed for the decision.' }
        ], kp: ['Risk, ask, action, and just enough evidence.', 'Keep the rest in reserve for questions.'] }
      ],
      [
        { t: 'h3', text: 'Build your own 60-second brief' },
        { t: 'p', html: 'Use a real issue you’re dealing with. Write it in this order, then read it aloud and time yourself. Aim for under 60 seconds (about 140 words).' },
        { t: 'flow', items: ['<strong>Bottom line:</strong> the risk, conclusion or decision.', '<strong>Situation:</strong> what’s happening.', '<strong>Complication:</strong> why it matters now.', '<strong>Resolution:</strong> what you recommend.', '<strong>The ask, with a date.</strong>'] },
        { t: 'reflect', id: 'r-brief', label: 'My 60-second brief', rows: 7, model: 'Example: “Meridian’s renewal is at risk, and I need your help to reach their new COO. SLAs are green, but CSAT has slipped three quarters running. The new COO hasn’t met us, and a competitor has been invited in; renewal is in five months. I recommend a senior meeting within two weeks, led by me, with a joint improvement plan. Could you call their CEO this week to open the door?”' },
        { t: 'callout', tone: 'key', html: '<strong>In writing, the same rules apply.</strong> Put the bottom line in the subject or first line, keep to one page, and end with a clear ask and a date. If it needs a meeting to explain, it needs a shorter memo.' }
      ]
    ] },

    steer: { title: 'Room 2: The Steering Meeting', mins: 12, pages: [
      [
        { t: 'assignment', tag: 'Tuesday · The situation', title: 'A shared flex pool across three towers', html: 'You want to create a shared flex pool to handle volume spikes. You don’t manage the other two tower heads, and both are worried about losing their people.' },
        { t: 'h3', text: 'Influencing without authority' },
        { t: 'cards', cols: 2, items: [
          { tone: 'cyan', kicker: 'Pre-wire', text: 'The real decision is often made before the meeting. Meet key people one to one, hear their concerns, and adjust your proposal.' },
          { tone: 'green', kicker: 'Start from the shared goal', text: 'Frame the proposal around what everyone wants, such as fewer missed SLAs and less weekend overtime, not what you want.' },
          { tone: 'amber', kicker: 'Offer options, not ultimatums', text: 'A pilot, a phased start or an exit clause makes it easier for people to say yes.' },
          { tone: 'violet', kicker: 'Use decision language', text: '“I’m asking us to decide…” with an owner and a date. Without it, meetings end in “let’s take it offline.”' }
        ] }
      ],
      [
        { t: 'sim', id: 'a-steer', title: 'Three decisions', intro: 'Two tower heads are worried the flex pool will take their best people at the worst time. Make the three calls that decide whether it happens.', stepWord: 'Decision', nextLbl: 'Next decision', doneHead: 'Meeting closed with a decision.', replay: 'Replay the meeting', steps: [
          { sit: 'A week before the meeting. How do you prepare?', opts: [
            { text: 'Send the full proposal deck to everyone the night before, so they can read it.', fb: 'Better than nothing, but a deck doesn’t hear concerns. Objections will surface in the meeting, in front of everyone.' },
            { text: 'Meet each of the two tower heads one to one, hear their concerns, and adjust the proposal before the meeting.', ok: true, fb: 'That’s pre-wiring. By the meeting, their concerns are already built into the proposal, and they’re more likely to support it in public.' },
            { text: 'Ask the CEO to mandate the flex pool, so there’s no debate.', fb: 'You might win this decision, but you’ll lose the peers you need for the next one. Influence without authority means persuading, not escalating.' }
          ] },
          { sit: 'In the meeting, a tower head says: “This will hurt my SLA. I can’t support it.”', opts: [
            { text: 'Show the data proving it won’t affect their SLA.', fb: 'Data helps, but leading with it can feel like you’re trying to win the argument. Find out what would make it workable first.' },
            { text: 'Acknowledge the concern, ask what would make it workable, and offer a 60-day pilot with an exit clause.', ok: true, fb: 'You treat the objection as information, not opposition, and a pilot with an exit makes it safe to say yes.' },
            { text: 'Note the concern and move on, to keep the meeting on time.', fb: 'Unresolved objections don’t disappear. They come back as quiet resistance after the meeting.' }
          ] },
          { sit: 'The last five minutes. Most people seem broadly supportive, but nobody has said yes. How do you close?', opts: [
            { text: '“Let’s take this offline and keep thinking about it.”', fb: 'This is how good proposals die. Without a decision, everyone leaves with a different idea of what happens next.' },
            { text: 'Summarise everyone’s views and promise to circulate notes.', fb: 'A useful summary, but no decision. Ask for the decision, then send the notes.' },
            { text: '“I’m asking us to decide today: a 60-day pilot from 1 December, owned by me, reviewed on 31 January. Can we agree?”', ok: true, fb: 'Decision language with an owner and a date. If someone still disagrees, now is when they have to say so.' }
          ] }
        ], kp: [
          'Do the persuading before the meeting.',
          'Treat objections as information, and make yes safe with a pilot or an exit.',
          'Always ask for the decision, with an owner and a date.'
        ] }
      ]
    ] },

    virtual: { title: 'Room 3: The Virtual Floor', mins: 13, pages: [
      [
        { t: 'lede', html: 'Most of your teams experience you through a camera, a Teams message or an email. Presence has to travel through a screen and across four countries.' },
        { t: 'selfcheck', id: 'a-camera', title: 'Presence on camera', inst: 'Be honest about your last few video calls. Anything below “Yes” is an easy win for your next call.', items: [
          'My camera is at eye level, with light in front of me rather than behind.',
          'I look at the lens, not the screen, when making key points.',
          'I speak slower and pause more than I would in person.',
          'I use fewer slides and talk to people rather than the screen.',
          'I invite quieter people by name and check the chat.',
          'I’m on camera when I expect others to be.'
        ], bands: [
          { min: 10, label: 'Strong on camera', text: 'Keep it up, and pick one “Sometimes” to turn into a habit.' },
          { min: 6, label: 'Developing', text: 'Choose two items to practise on your next three calls. Eye-level camera and looking at the lens are the quickest wins.' },
          { min: 0, label: 'Focus area', text: 'Start with the set-up: camera at eye level, light in front, camera on. Then slow down and pause.' }
        ] }
      ],
      [
        { t: 'sim', id: 'a-write', title: 'Leading in writing', intro: 'In four countries and three time zones, people skim. Which message is more likely to get a fast, clear response from regional leads?', stepWord: 'Pair', nextLbl: 'Next pair', doneHead: 'Both messages sharpened.', replay: 'Try again', steps: [
          { sit: 'A Teams message about the Q4 roster.', opts: [
            { text: '“Hi all, hope you’re well. Following on from last week’s discussions about the Q4 roster and the various points that were raised, I’ve put together an updated version…”', fb: 'The ask is buried. Lead with the action.' },
            { text: '“Action by Thu 5 pm IST: please approve the Q4 roster (attached). Reply yes, or flag changes. Two changes since last week: Sat cover in Manila; Colombo shift timings.”', ok: true, fb: 'The action, deadline and time zone come first, followed by only what’s changed.' }
          ] },
          { sit: 'An email subject line.', opts: [
            { text: 'Subject: Update', fb: 'Gives the reader no reason to open it, and no idea it needs a decision.' },
            { text: 'Subject: Decision needed by Fri – Posting tower overtime cap', ok: true, fb: 'The subject line tells people what you need and by when, before they even open it.' }
          ] }
        ], kp: ['Action, deadline and time zone first.', 'Then only what’s changed.', 'The subject line says what you need and by when.'] }
      ],
      [
        { t: 'h3', text: 'How presence can read differently across regions' },
        { t: 'p', html: 'These are tendencies people often describe, not rules about individuals. Select a card to see the leader move. <strong>Global Cultural Alignment</strong> covers this in more depth.' },
        { t: 'flip', items: [
          { title: 'US leaders and clients', sub: 'Tend to value directness, brevity and visible confidence. Long preambles can read as a lack of clarity.', back: 'Get to the point, state your view, and invite challenge openly.' },
          { title: 'India teams', sub: 'Respect for hierarchy may mean people defer in large meetings and share their real views one to one.', back: 'Ask junior voices first, and follow up one to one after big meetings.' },
          { title: 'Philippines teams', sub: 'Warmth, humour and harmony matter. Public criticism can cause real loss of face.', back: 'Build rapport before business. Praise in public; give correction in private.' },
          { title: 'Sri Lanka teams', sub: 'Formality and respect for seniority may make people quieter in large forums.', back: 'Use smaller forums, and explicitly invite disagreement: “Tell me where this won’t work.”' }
        ] }
      ]
    ] },

    town: { title: 'Room 4: The Town Hall', mins: 12, pages: [
      [
        { t: 'assignment', tag: 'Thursday · The situation', title: 'Two towers are merging', html: 'From 1 December, two towers will merge under one leadership structure. No roles are being removed, but about 40 people will change reporting lines. Rumours have already started.' },
        { t: 'h3', text: 'Five parts of a hard-news message' },
        { t: 'cards', items: [
          { tone: 'cyan', kicker: '1 · What’s changing', text: 'Say it in the first minute, plainly.' },
          { tone: 'violet', kicker: '2 · Why', text: 'The honest business reason.' },
          { tone: 'green', kicker: '3 · What it means for you', text: 'Specific, including what isn’t changing.' },
          { tone: 'amber', kicker: '4 · What happens next', text: 'Dates, steps, who to talk to.' },
          { tone: 'pink', kicker: '5 · Where to ask', text: 'Q&A, FAQ, managers, open hours.' }
        ] },
        { t: 'seq', id: 'a-town-seq', title: 'Put the message in order', inst: 'Select the parts of the merger message in the order you would deliver them.', items: [
          { text: '“From 1 December, our two towers will merge into one.”' },
          { text: '“We’re doing this so our clients get one joined-up team and fewer handoffs.”' },
          { text: '“No roles are being removed. About 40 of you will have a new reporting manager.”' },
          { text: '“Team meetings this week; the new structure is published on Monday.”' },
          { text: '“Q&A now, an FAQ by Friday, and open hours with me every Wednesday.”' }
        ], kp: ['News first. Long build-ups increase anxiety and feed rumours.', 'Say what isn’t changing, as clearly as what is.', 'Close with where people can ask, so the rumour mill isn’t the only channel.'] }
      ],
      [
        { t: 'sim', id: 'a-town', title: 'Which opening line?', intro: '300 people have joined. Many have already heard a rumour.', stepWord: 'Opening', doneHead: 'Strong opening.', replay: 'Try again', steps: [
          { sit: 'How do you open?', opts: [
            { text: '“I’m really excited to share some great news about an opportunity for our teams to grow together…”', fb: 'Spin for hard news damages trust immediately. People can tell the difference, and they’ll doubt everything that follows.' },
            { text: '“I want to start with the news, because I know there are rumours. From 1 December, our two towers will merge into one. No roles are being removed. I’ll explain why, what it means for you, and then take every question.”', ok: true, fb: 'The news in the first minute, what isn’t changing, and a clear plan for the session. It calms people and shuts down the rumour.' },
            { text: '“Before we get to the main topic, let me walk you through our performance this quarter and the market context we’re operating in.”', fb: 'Context matters, but making people wait for the news they came for increases anxiety. Give the news first, then the context.' }
          ] }
        ], kp: ['Hard news, said plainly, in the first minute.', 'No spin words for hard news.', 'Tell people how the session will run.'] },
        { t: 'cards', cols: 2, items: [
          { tone: 'green', kicker: 'Do', list: ['Brief managers before the town hall', 'Give the same message in every region and shift', 'Say what isn’t changing', 'Follow up in writing the same day'] },
          { tone: 'pink', kicker: 'Avoid', list: ['Spin words like “exciting opportunity” for hard news', 'Promising “no more changes”', 'Long build-ups before the news', 'Letting people hear it from a rumour first'] }
        ] }
      ],
      [
        { t: 'h3', text: 'Build your message' },
        { t: 'p', html: 'Use the merger, or a real change you need to announce. Write one or two sentences for each of the five parts.' },
        { t: 'reflect', id: 'r-town', label: 'My hard-news message', rows: 8, hint: 'What’s changing · Why · What it means for you · What happens next · Where to ask', model: 'Example: “From 1 December, Posting and Patient Statement will merge into one tower. Why: so our clients get one joined-up team and fewer handoffs. What it means for you: no roles are being removed; about 40 of you will have a new reporting manager, and you’ll hear from them this week. What happens next: team meetings this week, and the new structure published on Monday. Where to ask: Q&A now, an FAQ by Friday, and open hours with me every Wednesday this month.”' }
      ]
    ] },

    tough: { title: 'Room 5: The Tough Question', mins: 12, pages: [
      [
        { t: 'lede', html: 'The moment people remember from a town hall is rarely the presentation. It’s <strong>how the leader handled the hardest question.</strong>' },
        { t: 'h3', text: 'A four-step answer' },
        { t: 'cards', cols: 4, items: [
          { tone: 'cyan', kicker: '1 · Pause', text: 'Two seconds. It signals you’re taking the question seriously, and it steadies you.' },
          { tone: 'violet', kicker: '2 · Acknowledge', text: 'Name the concern behind the question, without repeating any hostile words.' },
          { tone: 'amber', kicker: '3 · Answer honestly', text: 'What you know, what you don’t, and when they’ll hear more. Never guess.' },
          { tone: 'green', kicker: '4 · Bridge', text: 'Link back to your core message or a concrete commitment.' }
        ] }
      ],
      [
        { t: 'sim', id: 'a-tough', title: 'Three questions from the floor', intro: 'The merger announcement is done. Hands go up.', stepWord: 'Question', nextLbl: 'Next question', doneHead: 'Floor handled.', replay: 'Replay the questions', steps: [
          { sit: '“After this merger, are there going to be job cuts?” You know of no plans, but you can’t control every future decision.', opts: [
            { text: '“No, absolutely not. Nobody will lose their job.”', fb: 'A promise you can’t control. If anything changes later, your credibility goes with it.' },
            { text: '“I can’t comment on that.”', fb: 'Safe, but it sounds like you’re hiding something, and rumours fill the gap.' },
            { text: '“I understand why you’re asking. There are no plans to remove roles, and I won’t promise what I can’t control. What I can commit to is that if anything changes, you’ll hear it from me first, not from a rumour.”', ok: true, fb: 'You acknowledge the fear, share what you know, are honest about the limits, and make a commitment you can keep.' }
          ] },
          { sit: '“Leadership keeps saying people matter, but our workload has doubled. Why should we believe you?” The room goes quiet.', opts: [
            { text: '“That’s not fair. We’ve invested a lot in our people this year.”', fb: 'Defensive. The room hears that the leader can’t take criticism, and the real issue goes unaddressed.' },
            { text: '(Pause.) “That’s a fair challenge, and thank you for saying it out loud. You’re right that workload has gone up. Here’s what we’re doing about it this quarter, and I’ll come back to this group in four weeks with what’s changed.”', ok: true, fb: 'The pause steadies you, acknowledgement disarms the hostility, and a specific commitment with a date rebuilds trust.' },
            { text: '“Let’s take that offline after the session.”', fb: 'Sometimes necessary, but here it looks like avoidance. Answer it in the room, then follow up.' }
          ] },
          { sit: '“What happens to our shift allowance in the new structure?” You genuinely don’t know.', opts: [
            { text: 'Give your best guess so you don’t look unprepared.', fb: 'A wrong guess at a town hall becomes the official answer. Correcting it later costs far more credibility than saying “I don’t know.”' },
            { text: '“HR will be in touch about that.”', fb: 'Accurate, perhaps, but it passes the question on. Own the follow-up yourself, even if HR provides the answer.' },
            { text: '“I don’t know yet, and I don’t want to guess on something this important. I’ll find out and post the answer in the FAQ by Friday.”', ok: true, fb: 'Saying “I don’t know” with a specific follow-up and date is a sign of confidence, not weakness.' }
          ] }
        ], kp: [
          'Never promise what you can’t control.',
          'Pause, then acknowledge the concern, not the hostile words.',
          '“I don’t know” plus a specific follow-up and date is a sign of confidence.',
          'Bridge to a commitment you can keep.'
        ] }
      ]
    ] },

    listen: { title: 'Listening as Presence', mins: 5, pages: [[
      { t: 'lede', html: 'The most senior person in the room often speaks last. Listening well is one of the clearest signals of confidence.' },
      { t: 'cards', cols: 2, items: [
        { tone: 'cyan', kicker: 'Questions that signal confidence', list: ['“What am I missing?”', '“What would you do if this were your call?”', '“What’s the one thing that would make this work?”', '“Who disagrees, and why?”'] },
        { tone: 'green', kicker: 'Habits that build trust', list: ['Let others speak first in meetings you don’t chair', 'Wait three seconds after asking a question', 'Summarise what you heard before you respond', 'Ask junior or quieter voices first'] }
      ] },
      { t: 'av', id: 'av-ep-listen', kind: 'Meeting clip', title: 'Who speaks first', mins: '1 min', lines: [
        { sp: 'narrator', emo: 'neutral', beat: 'A meeting Arun doesn’t chair', tag: 'calm', text: 'A cross-tower meeting. Arun isn’t chairing, but the decision affects his teams. Listen to how he enters the conversation.' },
        { sp: 'meera', emo: 'thoughtful', tag: 'hesitant, unsure', text: 'I think the weekend roster could work, but I’m worried about cover for the Manila team.' },
        { sp: 'arun', emo: 'curious', beat: '“What am I missing?”', tag: 'curious, calm', text: 'That’s useful, Meera. Before I share my view: what am I missing? Who sees this differently?' },
        { sp: 'lakshmi', emo: 'serious', tag: 'candid, matter-of-fact', text: 'Honestly, quality dips every time we move people across queues at short notice.' },
        { sp: 'arun', emo: 'serious', beat: 'Summarise. Then decide.', tag: 'calm, confident', text: 'So the risks are Manila cover, and quality when people move at short notice. Here’s my view: let’s pilot it for four weekends, with a quality check after each one. Can we agree that today?' },
        { sp: 'narrator', emo: 'thoughtful', beat: 'Speak last. Land hardest.', tag: 'thoughtfully', text: 'Arun spoke last, but his view landed hardest, because it was built on what he heard. Listening first isn’t passive. It’s presence.' }
      ], ask: { q: 'Why did Arun’s view land so well?', opts: [
        { text: 'He was the most senior person in the room', fb: 'Seniority alone often shuts people down. It was how he used it that mattered.' },
        { text: 'He asked first, summarised what he heard, then gave a clear view with a decision', ok: true, fb: 'Yes. Listening made his view better informed, and the summary showed people they were heard.' },
        { text: 'He avoided taking a position', fb: 'He did take a position, clearly, with a pilot and a decision request.' }
      ] } },
      { t: 'sim', id: 'a-listen', title: 'The meeting you don’t chair', intro: 'In a cross-tower meeting you don’t chair, a decision is being discussed that affects your teams.', stepWord: 'Moment', doneHead: 'Well judged.', replay: 'Try again', steps: [
        { sit: 'What’s the strongest move?', opts: [
          { text: 'Speak first, so your view frames the discussion.', fb: 'Sometimes right, but speaking first as the senior person can shut down others’ views. Usually it’s better to listen first.' },
          { text: 'Listen first, ask “What am I missing?”, then give a clear view with your reasoning.', ok: true, fb: 'Listening first means your view is better informed, and when you do speak, people listen more carefully.' },
          { text: 'Stay quiet and raise your concerns with the chair afterwards.', fb: 'This undermines the meeting and the chair. Disagree in the room, respectfully.' }
        ] }
      ], kp: ['Listen first, then give a clear view.', 'Disagree in the room, respectfully, not afterwards.'] }
    ]] },

    takeaways: { title: 'Key Takeaways and Your Plan', mins: 8, pages: [
      [
        { t: 'takeaways', items: [
          { title: 'Presence is what people experience.', text: 'At senior level, every word, pause and email is amplified.' },
          { title: 'Know your style, and flex it.', text: 'Every style works in some rooms and struggles in others.' },
          { title: 'Build all three S’s.', text: 'Substance, Signal and Steadiness. Your lowest one is where to start.' },
          { title: 'Bottom line up front.', text: 'Risk, ask, action, and just enough evidence.' },
          { title: 'Influence before the meeting.', text: 'Pre-wire, offer options, and ask for the decision with an owner and a date.' },
          { title: 'News first, honestly.', text: 'Say what’s changing and what isn’t. Never promise what you can’t control.' },
          { title: 'Listen first, then decide clearly.', text: 'The most senior person in the room often speaks last.' }
        ] },
        { t: 'callout', tone: 'key', html: '<strong>Presence grows through deliberate repetition, not through knowing more.</strong>' }
      ],
      [
        { t: 'h3', text: 'My 30-day presence plan' },
        { t: 'p', html: 'Pick one or two things to practise. Your style and lowest S from Part 1 are good places to start.' },
        { t: 'reflect', id: 'r-room', label: 'The room I most want to get better at, and the next real occasion', rows: 2 },
        { t: 'reflect', id: 'r-habit1', label: 'Habit 1 I’ll practise', rows: 2, hint: 'For example: “Start every update and email with the bottom line for the next two weeks.”' },
        { t: 'reflect', id: 'r-habit2', label: 'Habit 2 I’ll practise', rows: 2 },
        { t: 'reflect', id: 'r-stop', label: 'One habit I’ll stop', rows: 2 },
        { t: 'reflect', id: 'r-mirror', label: 'Three colleagues I’ll ask to complete the Presence Mirror for me', rows: 2 },
        { t: 'reflect', id: 'r-review', label: 'I’ll review progress with (name) by (date)', rows: 2 }
      ],
      [
        { t: 'h3', text: 'Your presence toolkit' },
        { t: 'p', html: 'Quick-reference tools for your next update, meeting or town hall.' },
        { t: 'cards', cols: 2, items: [
          { tone: 'cyan', kicker: 'The 60-second brief', list: ['Bottom line: the risk, conclusion or decision, in one sentence', 'Situation: what’s happening', 'Complication: why it matters now', 'Resolution: what you recommend', 'Ask: what you need, from whom, by when'] },
          { tone: 'violet', kicker: 'Decision language', list: ['“I’m asking us to decide today on…”', '“My recommendation is… because…”', '“Can we agree: owner X, review date Y?”', '“I disagree, and here’s why. If we go ahead, I’ll back it fully.”'] },
          { tone: 'amber', kicker: 'Hard-news message', list: ['What’s changing: in the first minute, plainly', 'Why: the honest business reason', 'What it means for you: including what isn’t changing', 'What happens next: dates, steps, who to talk to', 'Where to ask: Q&A, FAQ, managers, open hours'] },
          { tone: 'green', kicker: 'The tough-question answer', list: ['Pause: two seconds', 'Acknowledge: name the concern, not the hostile words', 'Answer honestly: what you know, what you don’t, when they’ll hear more', 'Bridge: back to your core message or a commitment'] },
          { tone: 'pink', kicker: 'Camera checklist', list: ['Camera at eye level, light in front of you', 'Look at the lens for key points', 'Slow down and pause more than in person', 'Fewer slides; talk to people, not the screen', 'Invite questions in chat and by name'] }
        ] },
        { t: 'h3', text: 'Presence Mirror: colleague version' },
        { t: 'p', html: 'Send this to three colleagues: <em>“Please rate me from 1 (rarely) to 5 (consistently) on each behaviour. Be honest; it’s for my development only. Then tell me one thing to keep doing and one thing to do more of.”</em>' },
        { t: 'list', items: [
          '<strong>Substance:</strong> Has a clear point of view on our biggest issues, and shares it.',
          '<strong>Substance:</strong> Makes decisions at their level rather than passing them upward.',
          '<strong>Substance:</strong> Can explain the business impact of what their teams do.',
          '<strong>Substance:</strong> Says “I don’t know” when they don’t, and follows up.',
          '<strong>Signal:</strong> Leads with the headline in updates and presentations.',
          '<strong>Signal:</strong> Writes short emails and messages that end with a clear ask.',
          '<strong>Signal:</strong> Comes across on camera with the same energy as in person.',
          '<strong>Signal:</strong> Listens more than they speak in meetings they don’t chair.',
          '<strong>Steadiness:</strong> Stays calm and measured when challenged in public.',
          '<strong>Steadiness:</strong> Delivers bad news early and plainly.',
          '<strong>Steadiness:</strong> Doesn’t let a bad day set the tone for the room.',
          '<strong>Steadiness:</strong> Disagrees respectfully, in the room rather than afterwards.'
        ] }
      ]
    ] },

    final: { title: 'Final Check', mins: 6, pages: [[
      { t: 'p', html: 'Eight scenario questions. You need <strong>80%</strong> (7 out of 8) to pass, and you can retake it as many times as you like. Your best score counts.' },
      { t: 'quiz' }
    ]] },

    results: { title: 'Results and Certificate', mins: 2, pages: [[ { t: 'results' } ]] }
  },

  quiz: [
    { q: 'You have 60 seconds with the CEO about a slipping account. What should your first sentence be?', o: ['The background and history of the account', 'The risk and the support you need', 'A summary of all SLA results', 'What the team has been working on'], a: 1, fb: 'BLUF: lead with the bottom line. The CEO can ask for background if they need it.' },
    { q: 'Two peers are likely to oppose your proposal at next week’s steering meeting. What’s the best preparation?', o: ['Meet each of them one to one beforehand to hear and address their concerns', 'Send the deck to everyone the night before', 'Ask the CEO to mandate the decision', 'Prepare extra data to win the debate in the room'], a: 0, fb: 'Pre-wiring builds their concerns into the proposal before the meeting.' },
    { q: 'How should you close a meeting where people seem supportive but no one has agreed?', o: ['Suggest taking it offline', 'Promise to circulate notes', 'Ask for the decision, with an owner and a review date', 'Wait for the next meeting'], a: 2, fb: 'Decision language turns support into a decision and surfaces any hidden disagreement.' },
    { q: 'On a call with four countries, participants from some regions stay quiet. What’s the best approach?', o: ['Assume silence means agreement', 'Ask everyone to be more vocal next time', 'Shorten the call', 'Invite people by name, use smaller forums, and follow up one to one'], a: 3, fb: 'Silence often reflects hierarchy or harmony norms, not agreement. Create safe ways to speak.' },
    { q: 'What’s the right order for a hard-news town hall message?', o: ['Context → performance → why → what’s changing', 'What’s changing → why → what it means for you → what happens next → where to ask', 'Why → vision → what’s changing → Q&A', 'Q&A first, then the announcement'], a: 1, fb: 'Give the news first. Long build-ups increase anxiety and feed rumours.' },
    { q: 'Someone asks a question at a town hall that you can’t answer. What should you do?', o: ['Give your best guess', 'Say HR will follow up', 'Say you don’t know and commit to when they’ll hear the answer', 'Move on to the next question'], a: 2, fb: '“I don’t know” with a specific follow-up is a sign of confidence.' },
    { q: 'A Convener-style leader wants to strengthen their presence. Which flex move fits best?', o: ['End discussions by stating their own view and the decision, owner and date', 'Consult even more people before deciding', 'Use more data in presentations', 'Speak first in meetings'], a: 0, fb: 'Conveners build buy-in. The flex is making their own position and the decision clear.' },
    { q: 'Which Teams message to regional leads is most effective?', o: ['“Hi all, following on from last week’s discussions, I’ve put together an update…”', '“Please see attached and let me know your thoughts when you can.”', '“Update on rosters.”', '“Action by Thu 5 pm IST: approve the Q4 roster (attached). Reply yes or flag changes.”'], a: 3, fb: 'Action, deadline with time zone, and what to do. Everything else is optional.' }
  ]
};

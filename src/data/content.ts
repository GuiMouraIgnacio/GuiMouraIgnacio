export const personal = {
  name: 'Guilherme Moura Ignácio',
  shortName: 'Guilherme',
  role: 'Senior Fullstack Developer',
  location: 'Lisbon, Portugal',
  email: 'guilherme.m.ignacio@gmail.com',
  linkedin: 'https://www.linkedin.com/in/guilhermemouraignacio/',
  tagline: 'I build things that scale.',
  summary:
    "I'm a fullstack developer with 8+ years of experience shipping products people actually use. From game analytics platforms to influencer campaign tools: I care about the craft, the architecture, and the impact numbers behind what I build.",
  about: [
    "Originally from Brazil, now based in Lisbon. I've been writing code professionally since 2017 and I still get the same kick out of solving a hairy technical problem as I did on day one.",
    "I've built backends that serve millions of requests a day, frontends used by tens of thousands of people, and everything in between. Including the awkward infrastructure glue that keeps it all together.",
    "Outside of work I'm into gaming, which might explain why two of my most memorable gigs were in the games industry.",
  ],
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Languages & Frameworks',
    skills: ['TypeScript', 'Node.js', 'React', 'React Native', 'Angular', 'Ionic'],
  },
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS / SCSS', 'Tailwind', 'MUI', 'Bootstrap'],
  },
  {
    category: 'Backend & Databases',
    skills: ['RESTful APIs', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'RabbitMQ'],
  },
  {
    category: 'Infrastructure',
    skills: ['AWS', 'Docker', 'Terraform', 'Jenkins', 'CI/CD'],
  },
  {
    category: 'Methodology',
    skills: ['Agile / Scrum', 'Code Review', 'Unit Testing', 'Jest'],
  },
]

export interface Game {
  title: string
  description: string
  jam: string
  year: number
  genre: string[]
  roles: string[]
  url: string
  solo: boolean
}

export const games: Game[] = [
  {
    title: 'Drill Bit',
    description:
      'Play as an alien miner on a strange planet: drill, upgrade, and go deeper to escape. A chill roguelite extraction loop with no combat.',
    jam: 'Brackeys Game Jam 2026.1',
    year: 2026,
    genre: ['Action', 'Roguelite', 'Pixel Art'],
    roles: ['Everything'],
    url: 'https://cmak0ta.itch.io/drill-bit',
    solo: true,
  },
  {
    title: 'Veggie Run',
    description:
      'Grow crops, take good care of them, then put your veggies to the test in illegal vegetable racing. A farming + runner hybrid.',
    jam: 'VimJam 5',
    year: 2024,
    genre: ['Simulation', 'Farming'],
    roles: ['Art', 'Programming'],
    url: 'https://patrickalfa.itch.io/veggie-run',
    solo: false,
  },
  {
    title: 'Scalatro',
    description:
      "It's Balatro, but with scales. Set up your weights deck, find the best strategies to score high, and beat the bosses in this roguelike balancing game.",
    jam: 'GMTK Game Jam 2024',
    year: 2024,
    genre: ['Puzzle', 'Roguelike'],
    roles: ['Art', 'Programming'],
    url: 'https://patrickalfa.itch.io/scalatro',
    solo: false,
  },
  {
    title: "Luna's Ritual",
    description:
      'A Risk of Rain and Vampire Survivors-inspired roguelike where the druid Luna fights shadow animals, earns resources, and faces a final boss.',
    jam: 'Ludum Dare 55',
    year: 2024,
    genre: ['Action', 'Roguelike'],
    roles: ['Art', 'Programming'],
    url: 'https://patrickalfa.itch.io/lunas-ritual',
    solo: false,
  },
  {
    title: 'Golfberg Machine',
    description:
      'A golf game where you are the environment. Place props, rotate obstacles, and engineer the perfect stroke, in as few moves as possible.',
    jam: 'GMTK Game Jam 2023',
    year: 2023,
    genre: ['Puzzle'],
    roles: ['Art'],
    url: 'https://patrickalfa.itch.io/golfbergmachine',
    solo: false,
  },
  {
    title: 'Robot Repair ARENA',
    description:
      'First-person hook-based online multiplayer. Collect your missing robot parts before the enemy team does, using a grappling hook.',
    jam: 'Global Game Jam 2021',
    year: 2021,
    genre: ['Action', 'Multiplayer'],
    roles: ['Art', 'Level Design', 'Programming'],
    url: 'https://patrickalfa.itch.io/robot-repair-arena',
    solo: false,
  },
  {
    title: 'Grocery Rush',
    description:
      'Race through a closing supermarket, complete your shopping list, and dodge furious customers. Fast-paced rogue-like shopping chaos.',
    jam: 'Ubisoft Game Jam 2020',
    year: 2020,
    genre: ['Action'],
    roles: ['Art', 'Level Design', 'Programming'],
    url: 'https://joaovn.itch.io/grocery-rush',
    solo: false,
  },
]

export interface Experience {
  company: string
  role: string
  period: string
  highlights: string[]
  metrics: { label: string; value: string }[]
}

export const experiences: Experience[] = [
  {
    company: 'Leetify AB',
    role: 'Senior Fullstack Developer',
    period: 'Sept 2024 – Feb 2026',
    highlights: [
      'Co-led the ground-up development of the League of Legends product vertical, providing performance statistics and player analysis.',
      'Architected systems to process over 10 million game matches.',
    ],
    metrics: [
      { label: 'Monthly Active Users', value: '50k+' },
      { label: 'Matches processed', value: '10M+' },
    ],
  },
  {
    company: 'JMG Brands & Talents',
    role: 'Senior Fullstack Developer',
    period: 'May 2021 – Aug 2024',
    highlights: [
      'Maintained a campaign management platform facilitating 200+ annual campaigns.',
      'Developed interactive Twitch Widgets for CPI/CPE campaigns requiring live engagement between creators and viewers.',
      'Spearheaded the development and integration of new platform features.',
    ],
    metrics: [
      { label: 'Annual campaigns', value: '200+' },
      { label: 'Platform revenue', value: '$1M+' },
    ],
  },
  {
    company: 'Softgames',
    role: 'Fullstack Developer',
    period: 'Sept 2019 – Apr 2021',
    highlights: [
      'Managed backend systems for a high-traffic gaming portfolio.',
      'Built and maintained game backends, cross-promotion tools, and data warehouses.',
      'Implemented Node.js and React solutions within dockerized environments using Terraform on AWS.',
    ],
    metrics: [
      { label: 'Monthly Active Users', value: '500k+' },
      { label: 'Daily requests', value: 'millions' },
    ],
  },
  {
    company: 'FCamara Consulting',
    role: 'Developer',
    period: 'Sept 2017 – Aug 2019',
    highlights: [
      'Developed web applications for sales management using JavaScript, Node.js, and Angular 2+.',
      'Integrated custom software with the VTEX ecommerce framework.',
      'Led business meetings with clients and ensured consistent production flow.',
    ],
    metrics: [],
  },
]

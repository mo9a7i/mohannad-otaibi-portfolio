export type Tag = { name: string; note?: string }

export type DirectoryGroup = {
  id: string
  label: string
  blurb: string
  items: Tag[]
}

export type Feature = {
  title: string
  description?: string
}

export type Game = {
  name: string
  studio?: string
  year?: string
  played: boolean
}

export type Quote = {
  text: string
  author: string
  source?: string
}

export const profile = {
  name: 'Mohannad Faihan Otaibi',
  handle: 'mohannadotaibi',
  role: 'Developer · DevOps · Security',
  location: 'Riyadh, Saudi Arabia',
  email: 'mohannad.otaibi@gmail.com',
  whatsapp: 'https://wa.me/966545582222',
  resume: '/mohannad-otaibi-resume.pdf',
  bio: 'Full-stack developer and DevOps engineer with a soft spot for automation, self-hosting and security tooling. This is my living workbench — the software I run, the systems I break in, the skills I lean on, and the corners of the web I keep coming back to.',
}

export type Social = { id: string; label: string; href: string }

export const socials: Social[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/Mo9a7i' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohannadotaibi/' },
  { id: 'x', label: 'X / Twitter', href: 'https://twitter.com/bufai7an' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/user/mo9a7i' },
  { id: 'twitch', label: 'Twitch', href: 'https://www.twitch.tv/bufai7an' },
  { id: 'live', label: 'BuFai7an.Live', href: 'https://bufai7an.live/' },
  { id: 'foursquare', label: 'Foursquare', href: 'https://foursquare.com/bufai7an' },
  { id: 'stackoverflow', label: 'Stack Overflow', href: 'https://stackoverflow.com/users/5588602/mohannad-otaibi' },
  { id: 'npm', label: 'npm', href: 'https://www.npmjs.com/~mo9a7i' },
  { id: 'traidnt', label: 'Traidnt.net', href: 'http://web.archive.org/web/20160213150705/http://www.traidnt.net/vb/u53424/' },
  { id: 'adslgate', label: 'ADSLGATE', href: 'https://www.adslgate.com/dsl/member.php?u=299526' },
  { id: 'swalif', label: 'Swalif.net', href: 'https://www.swalif.net/softs/1317.html' },
]

export const directory: DirectoryGroup[] = [
  {
    id: 'software',
    label: 'Software',
    blurb: 'My basic setup for each PC',
    items: [
      { name: 'ComfyUI' },
      { name: 'LM Studio' },
      { name: 'Ostris AI Toolkit' },
      { name: 'CPU-Z' },
      { name: 'Kubernetes' },
      { name: 'Argo CD' },
      { name: 'Vault' },
      { name: 'Helm' },
      { name: 'Rancher' },
      { name: 'Windmill' },
      { name: 'Longhorn' },
      { name: 'Kong Gateway' },
      { name: 'DeepSeek' },
      { name: 'Claude' },
      { name: 'ChatGPT' },
      { name: 'Cursor AI' },
      { name: 'Linear' },
      { name: 'Hoppscotch' },
      { name: 'DevToys' },
      { name: 'Ente Auth' },
      { name: 'Docker' },
      { name: 'Terraform' },
      { name: 'Ansible' },
      { name: 'Docker Desktop' },
      { name: 'VS Code' },
      { name: 'Insomnia' },
      { name: 'Termius' },
      { name: 'GitHub Desktop' },
      { name: 'BitWarden' },
      { name: 'PowerToys' },
      { name: 'Warp' },
      { name: 'Brave Browser' },
      { name: 'Figma' },
      { name: 'Slack' },
      { name: 'Discord' },
      { name: 'Streamlabs OBS' },
      { name: 'SteelSeries GG' },
      { name: 'Steam' },
      { name: 'Stremio' },
      { name: 'SAP S4HANA' },
      { name: 'SAP Ariba' },
      { name: 'WinUtil' },
      { name: 'WinSCP' },
      { name: 'MySQL Workbench' },
      { name: 'HeidiSQL' },
      { name: 'VMware Workstation' },
      { name: 'VMware ESXi' },
      { name: 'VirtualBox' },
      { name: 'Fiddler' },
      { name: 'K-Lite' },
      { name: 'WinDirStat' },
      { name: 'Advanced IP Scanner' },
      { name: 'Recuva' },
      { name: 'Revo Uninstaller' },
      { name: 'Free Download Manager' },
      { name: '7-zip' },
      { name: 'CCleaner' },
      { name: 'Grammarly' },
      { name: 'TestDisk' },
      { name: 'Screaming Frog' },
      { name: 'Speccy' },
      { name: 'GPU-Z' },
      { name: 'Chocolatey' },
      { name: 'Homebrew' },
      { name: 'Winget' },
      { name: 'pnpm' },
      { name: 'Bun' },
      { name: 'Grafana' },
      { name: 'Prometheus' },
      { name: 'Kibana' },
      { name: 'Logstash' },
      { name: 'Fluent Bit' },
      { name: 'Veeam' },
      { name: 'Coolify' },
    ],
  },
  {
    id: 'systems',
    label: 'Operating Systems',
    blurb: "Used, and still using",
    items: [
      { name: 'macOS', note: 'Latest' },
      { name: 'Windows', note: '3.2 → latest' },
      { name: 'Kali Linux', note: 'Since BackTrack' },
      { name: 'ParrotOS' },
      { name: 'Ubuntu', note: '10.04 LTS → current' },
      { name: 'CentOS', note: '5.7 → current' },
      { name: 'Whonix', note: 'Privacy focused' },
      { name: 'Qubes OS', note: 'Security focused' },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    blurb: 'Programming languages I am comfortable with',
    items: [
      { name: 'Java' },
      { name: 'Python' },
      { name: 'C#' },
      { name: 'PHP' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Dart' },
      { name: 'Perl' },
      { name: 'VBA' },
      { name: 'VB.net' },
      { name: 'HTML' },
      { name: 'SASS/SCSS' },
      { name: 'SQL', note: 'MySQL / MSSQL' },
      { name: 'Bash' },
      { name: 'Batch' },
      { name: 'PowerShell' },
      { name: 'Markdown' },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Tools',
    blurb: 'Frameworks, libraries and development platforms',
    items: [
      { name: 'React' },
      { name: 'Vue.js' },
      { name: 'Next.js' },
      { name: 'NuxtJS' },
      { name: 'Astro' },
      { name: 'Flutter' },
      { name: 'Laravel' },
      { name: 'CodeIgniter' },
      { name: 'ASP.NET' },
      { name: 'Express.js' },
      { name: 'AdonisJS' },
      { name: 'Node.js' },
      { name: 'ElectronJS' },
      { name: 'Strapi' },
      { name: 'WordPress Plugins' },
      { name: 'jQuery' },
      { name: 'Jekyll' },
      { name: 'Bootstrap' },
      { name: 'Tailwind' },
      { name: 'shadcn/ui' },
      { name: 'Firebase' },
      { name: 'Docker' },
      { name: 'Expo' },
      { name: 'React Native' },
      { name: 'Zustand' },
      { name: 'Appwrite' },
    ],
  },
  {
    id: 'standards',
    label: 'Standards',
    blurb: 'Principles and practices I try to go by',
    items: [
      { name: 'Microservices' },
      { name: 'DevOps' },
      { name: 'FinOps' },
      { name: 'Serverless' },
      { name: 'DRY' },
      { name: '10 Laws to Design By' },
      { name: 'PSR-2' },
      { name: 'PHP The Right Way' },
      { name: 'PHP Best Practices' },
      { name: 'Getting Things Done' },
      { name: 'Usability Testing Demystified' },
      { name: 'Article Publishing Guidelines' },
    ],
  },
  {
    id: 'organizations',
    label: 'Organizations',
    blurb: 'Teams whose work I respect and follow',
    items: [
      { name: '6 Degrees Tech' },
      { name: 'Promotion Efficiency' },
      { name: 'Efficiency Center' },
      { name: 'Burooj' },
      { name: 'Deets.Pro' },
      { name: 'Zahma o La' },
      { name: 'Hetzner' },
      { name: 'Cloudflare' },
      { name: 'Thiqah' },
      { name: 'Nothink.org' },
      { name: 'Frappe.io' },
      { name: 'Helge Klein / SetACL' },
      { name: 'DigitalOcean' },
      { name: 'GitHub' },
      { name: 'cPanel' },
      { name: 'WHMCS' },
      { name: 'Clickatell' },
      { name: 'Toot Studio' },
    ],
  },
  {
    id: 'bookmarks',
    label: 'Bookmarks',
    blurb: 'Sites I browse, or need, most of the time',
    items: [
      { name: 'daily.dev' },
      { name: 'Hugging Face' },
      { name: 'Ali BuSaleh' },
      { name: 'Smashing Magazine' },
      { name: 'David Walsh' },
      { name: 'Abraham Williams' },
      { name: 'Hacker News' },
      { name: 'BlackHat World' },
      { name: 'Tiny Subversions' },
      { name: 'FileHippo' },
      { name: 'Cats Who Code' },
      { name: 'TechCrunch' },
      { name: '@flaviocopes' },
      { name: 'Tuts+' },
      { name: 'SpeckyBoy' },
      { name: 'Dynamic Drive' },
      { name: 'Tutorial 9' },
      { name: 'Google Hosted Libraries' },
      { name: 'iBrand Studio' },
      { name: 'DesignModo' },
      { name: 'AskDaveTaylor' },
      { name: 'DeviantArt' },
      { name: 'Product Hunt' },
      { name: 'GetApp' },
      { name: 'Momondo' },
      { name: 'UX Booth' },
      { name: 'HowToGeek' },
      { name: 'PWN Wiki' },
      { name: 'mubix' },
      { name: 'Sahab.net' },
      { name: 'Traidnt.net' },
      { name: 'C4Arab.com' },
      { name: 'Alkahf' },
    ],
  },
]

export const achievements: Feature[] = [
  {
    title: 'Arabic Reverse Text Converter',
    description:
      'A web page that helps write Arabic in applications that do not support it — such as legacy Photoshop, Call of Duty and similar tools.',
  },
  {
    title: 'GitHub Stats Dashboard',
    description:
      'Generates beautiful, interactive GitHub statistics dashboards for organizations and personal repositories.',
  },
  {
    title: 'Huawei 5G CPE Pro 2 Port Forwarding Guide',
    description:
      'A comprehensive guide for configuring port forwarding on the Huawei 5G CPE Pro 2 router to achieve Open NAT type.',
  },
  {
    title: 'Mother of all Lighthouse Reports',
    description: 'A central place to check the latest Lighthouse reports for our websites.',
  },
  {
    title: 'What to agree on with your dev shop',
    description: 'A guide on what to settle with a software company regarding your new app.',
  },
  {
    title: 'Washing a coffee-stained MBP 13 i7 motherboard',
    description: 'My experience cleaning tea residue off a MacBook Pro logic board — and living to tell it.',
  },
  {
    title: 'Why doesn\u2019t my domain work right after registration?',
    description: 'A short explainer on DNS propagation for people who just bought their first domain.',
  },
  { title: 'vBulletinner.sh' },
  { title: 'vBulletinner.sh +' },
  { title: 'NetLogger' },
  {
    title: 'FTPer',
    description:
      "A small bash script in '/usr/local/bin' that automates sending files to a remote FTP through the command line.",
  },
  { title: 'Path App API Wrapper' },
]

export const contributions: Feature[] = [
  {
    title: 'Nebula (CoD)',
    description: 'Added a translation and a Beamsmasher calculator with a tools page.',
  },
  {
    title: 'SaudiOSS',
    description: 'Created a page for the Saudi Open Source Society with Astro.',
  },
  {
    title: 'UniGetUI',
    description: 'Arabic translation for UniGetUI.',
  },
  {
    title: '@flowdegree/swarmapp-api',
    description:
      'A Node.js library providing a programmatic interface to the Swarm (Foursquare) API.',
  },
  {
    title: '@6degrees/node-cron-utils',
    description:
      'Private utilities for handling cron expressions, including doubling cron intervals.',
  },
  {
    title: '@6degrees/f6snypi',
    description: 'An API wrapper for the F6sny API service.',
  },
  {
    title: '@flowdegree/arabic-strings',
    description:
      'A library for handling Arabic strings — removing diacritics and normalizing characters.',
  },
  {
    title: '@flowdegree/spit-it',
    description:
      'A CLI tool that dumps all source files in a directory into one file, respecting .gitignore and .spitignore.',
  },
]

export const quotes: Quote[] = [
  { text: 'You cannot arrest an idea, it is bulletproof.', author: 'Anonymous' },
  { text: 'The quieter you become, the more you are able to hear.', author: 'Rumi', source: 'BackTrack OS' },
  {
    text: 'We only see two things in people; what we want to see, and what they want to show us.',
    author: 'James Remer',
    source: 'as Harry Morgan',
  },
  {
    text: 'It is not the strongest species that survive, nor the most intelligent, but the ones responsive to change.',
    author: 'Charles Darwin',
  },
  {
    text: 'As a programmer, it is your job to put yourself out of business. What you do today can be automated tomorrow.',
    author: 'Doug McIlroy',
  },
  {
    text: 'Never spend 6 minutes doing something by hand when you can spend 6 hours failing to automate it.',
    author: 'Zhuowei Zhang',
  },
  {
    text: 'Automated testing is a safety net that protects the program from its programmers.',
    author: 'Yegor Bugayenko',
  },
]

export const games: Game[] = [
  { name: 'Call of Duty: Black Ops 7', studio: 'Treyarch', year: '2025', played: false },
  { name: 'Doom 95', played: true },
  { name: 'Second Life', played: true },
  { name: 'FiveM GTA', played: true },
  { name: 'Call of Duty: World at War', played: true },
  { name: 'Call of Duty: Modern Warfare 2', played: true },
  { name: 'Call of Duty: Black Ops', played: true },
  { name: 'Call of Duty: Modern Warfare 3', studio: 'Infinity Ward & Sledgehammer', year: '2011', played: false },
  { name: 'Call of Duty: Black Ops II', played: true },
  { name: 'Call of Duty: Ghosts', played: true },
  { name: 'Call of Duty: Advanced Warfare', played: true },
  { name: 'Call of Duty: Black Ops III', played: true },
  { name: 'Call of Duty: Infinite Warfare', studio: 'Infinity Ward', year: '2016', played: false },
  { name: 'Call of Duty: WWII', studio: 'Sledgehammer Games', year: '2017', played: false },
  { name: 'Call of Duty: Black Ops 4', played: true },
  { name: 'Call of Duty: Modern Warfare', played: true },
  { name: 'Call of Duty: Black Ops Cold War', studio: 'Treyarch & Raven', year: '2020', played: true },
  { name: 'Call of Duty: Vanguard', played: true },
  { name: 'Call of Duty: Modern Warfare II', played: true },
  { name: 'Call of Duty: Modern Warfare III', studio: 'Infinity Ward & Sledgehammer', year: '2023', played: true },
  { name: 'Call of Duty: Black Ops 6', played: true },
]

export const navSections = [
  { id: 'stack', label: 'stack' },
  { id: 'work', label: 'work' },
  { id: 'contributions', label: 'contrib' },
  { id: 'games', label: 'games' },
  { id: 'quotes', label: 'quotes' },
  { id: 'contact', label: 'contact' },
]

export const navSectionsV2 = [
  { id: 'stack', label: 'stack' },
  { id: 'work', label: 'work' },
  { id: 'contributions', label: 'contrib' },
  { id: 'games', label: 'games' },
  { id: 'places', label: 'places' },
  { id: 'quotes', label: 'quotes' },
  { id: 'contact', label: 'contact' },
]

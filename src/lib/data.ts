import type { Project, Story, App, TimelineEvent, Device } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Artist and Cat',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
    link: 'https://www.youtube.com/watch?v=PtHrV0IhhWE',
    status: 'wip',
    description: 'A tiny cozy game about artist and his cat',
    category: 'project'
  },
  {
    id: '2',
    title: 'Figma 2025',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop',
    link: 'https://vjy.me/figma-2025',
    status: 'new',
    description: 'Config Agenda Poster for 2025 event',
    category: 'work'
  },
  {
    id: '3',
    title: 'Kigen',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=400&fit=crop',
    link: 'https://kigen.design',
    status: 'new',
    description: 'Figma plugin to generate design system variables and styles',
    category: 'project'
  },
  {
    id: '4',
    title: 'Cool Shapes',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=400&fit=crop',
    link: 'https://coolshap.es',
    description: 'Cool abstract shapes for visual design',
    category: 'project'
  },
  {
    id: '5',
    title: 'Ghost Hand Kit',
    year: '2023-now',
    image: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=400&h=400&fit=crop',
    link: 'https://vjy.me/hand',
    description: 'Hand Gestures for AR/VR design experience',
    category: 'project'
  },
  {
    id: '6',
    title: '3dicons',
    year: '2021-now',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=400&fit=crop',
    link: 'https://3dicons.co',
    status: 'v2',
    description: 'Beautifully Crafted Open-source 3dicons library',
    category: 'project'
  },
  {
    id: '7',
    title: 'Distort',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400&h=400&fit=crop',
    link: 'https://distort.app',
    status: 'new',
    description: 'Figma plugin to distort the shape like pucker & Bloat of illustrator',
    category: 'project'
  },
  {
    id: '8',
    title: 'Practo',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop',
    link: 'https://practo.com',
    description: 'Help design team building design system and visual identity',
    category: 'work'
  },
  {
    id: '9',
    title: 'My Tiny Page',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop',
    link: 'https://x.com/realvjy/status/1890027365641883981',
    status: 'wip',
    description: 'New template for nxt-lnk bio link',
    category: 'project'
  },
  {
    id: '10',
    title: 'Fameo',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop',
    link: '#',
    description: 'Visual Identity and App Design',
    category: 'work'
  },
  {
    id: '11',
    title: 'Animate it',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=400&fit=crop',
    link: 'https://s.vjy.me/project-animate',
    description: 'Figma plugin to quickly create smart components',
    category: 'project'
  },
  {
    id: '12',
    title: 'ClickUp',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop',
    link: 'https://clickup.com',
    description: 'More details soon',
    category: 'work'
  }
];

export const stories: Story[] = [
  {
    id: '1',
    title: 'Artist & Cat | Devlog #3',
    date: 'Feb 15, 2026',
    category: 'Devlog',
    link: 'https://story.vjy.me/76'
  },
  {
    id: '2',
    title: 'A Beginning Without Certainty',
    date: 'Jan 30, 2026',
    category: 'Blog',
    link: 'https://story.vjy.me/75'
  },
  {
    id: '3',
    title: 'Artist & Cat | Devlog #2',
    date: 'Jan 26, 2026',
    category: 'Devlog',
    link: 'https://story.vjy.me/74'
  },
  {
    id: '4',
    title: 'Why Your First Launch Will Feel Like Failure',
    date: 'Jan 19, 2026',
    category: 'Blog',
    link: 'https://story.vjy.me/73'
  },
  {
    id: '5',
    title: 'Unsure, But Still Curious',
    date: 'Jan 6, 2026',
    category: 'Blog',
    link: 'https://story.vjy.me/72'
  },
  {
    id: '6',
    title: 'Artist & Cat | Devlog #1',
    date: 'Jan 5, 2026',
    category: 'Devlog',
    link: 'https://story.vjy.me/71'
  },
  {
    id: '7',
    title: 'The Rise of Creators Who Create Nothing',
    date: 'Dec 22, 2025',
    category: 'Blog',
    link: 'https://story.vjy.me/70'
  },
  {
    id: '8',
    title: 'Progress Without the Noise',
    date: 'Dec 18, 2025',
    category: 'Blog',
    link: 'https://story.vjy.me/69'
  },
  {
    id: '9',
    title: 'Artist & Cat | Devlog #0',
    date: 'Dec 17, 2025',
    category: 'Devlog',
    link: 'https://story.vjy.me/68'
  },
  {
    id: '10',
    title: 'Expedition 33 Shows What Care Looks Like',
    date: 'Dec 12, 2025',
    category: 'Insight',
    link: 'https://story.vjy.me/67'
  }
];

export const apps: App[] = [
  {
    id: '1',
    name: 'Figma',
    category: 'Design',
    icon: 'Figma',
    description: 'Figma is my design tool of choice. I do every design work from planning, ui design to creating beautiful illustrations',
    link: 'https://figma.com',
    color: '#F24E1E'
  },
  {
    id: '2',
    name: 'Cron',
    category: 'Productivity',
    icon: 'Calendar',
    description: 'Cron is the next-generation calendar for professionals and teams.',
    link: 'https://cron.com',
    color: '#FF6B35'
  },
  {
    id: '3',
    name: 'Slack',
    category: 'Communication',
    icon: 'MessageSquare',
    description: 'Slack brings team communication and collaboration into one place so you can get more work done.',
    link: 'https://slack.com',
    color: '#4A154B'
  },
  {
    id: '4',
    name: 'VS Code',
    category: 'Coding',
    icon: 'Code',
    description: 'The best and recommended IDE for developing. Very ease to use and have lots of add-ons.',
    link: 'https://code.visualstudio.com',
    color: '#007ACC'
  },
  {
    id: '5',
    name: 'Spotify',
    category: 'Entertainment',
    icon: 'Music',
    description: 'Spotify offers the best music discovery and recommendation app as well as podcast place.',
    link: 'https://spotify.com',
    color: '#1DB954'
  },
  {
    id: '6',
    name: 'Linear',
    category: 'Productivity',
    icon: 'LineChart',
    description: 'Managing the project backlogs',
    link: 'https://linear.app',
    color: '#5E6AD2'
  },
  {
    id: '7',
    name: 'Notion',
    category: 'Productivity',
    icon: 'FileText',
    description: 'Notion is an amazing app that helps me stay organized and on top of my tasks.',
    link: 'https://notion.so',
    color: '#000000'
  },
  {
    id: '8',
    name: 'Discord',
    category: 'Communication',
    icon: 'MessageCircle',
    description: 'The voice and text chat features are top-notch and the app is easy to use.',
    link: 'https://discord.com',
    color: '#5865F2'
  },
  {
    id: '9',
    name: 'Gumroad',
    category: 'Indiemaker',
    icon: 'ShoppingBag',
    description: 'A great platform for indie makers. With it, you can sell your products and services online with ease.',
    link: 'https://gumroad.com',
    color: '#FF90E8'
  },
  {
    id: '10',
    name: 'Da Vinci',
    category: 'Video',
    icon: 'Video',
    description: 'It\'s an easy-to-use video editing tool that has a lot of great features and it\'s free.',
    link: 'https://blackmagicdesign.com',
    color: '#FF6B6B'
  }
];

export const devices: Device[] = [
  { id: '1', name: 'MacBook Pro', icon: 'Laptop' },
  { id: '2', name: 'iPad Pro', icon: 'Tablet' },
  { id: '3', name: 'iPhone', icon: 'Smartphone' },
  { id: '4', name: 'Apple Watch', icon: 'Watch' },
  { id: '5', name: 'AirPods', icon: 'Headphones' },
  { id: '6', name: 'LG Monitor', icon: 'Monitor' },
  { id: '7', name: 'Keychron', icon: 'Keyboard' },
  { id: '8', name: 'MX Master', icon: 'Mouse' },
  { id: '9', name: 'Sony XM5', icon: 'Headphones' },
  { id: '10', name: 'Stream Deck', icon: 'LayoutGrid' }
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    date: 'Dec 22, 2025',
    title: 'Rebranding designletter to Sidenotes',
    description: 'Designletter name changing to Sidenotes, to cover more than just design topics and works as a personal newsletter and blog to share wide variety of topics.',
    tags: ['newsletter'],
    link: 'https://realvjy.substack.com'
  },
  {
    id: '2',
    date: 'Dec 17, 2025',
    title: 'Project Artist and Cat | Devlog #0',
    description: 'Posted first devlog of Artist and Cat on YouTube',
    tags: ['youtube', 'devlog'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=340&fit=crop',
    link: 'https://www.youtube.com/watch?v=PtHrV0IhhWE'
  },
  {
    id: '3',
    date: 'Jul 19, 2025',
    title: 'Kigen Documentation V2',
    description: 'Released new version of Kigen documentation with improved UI and more features.',
    tags: ['release']
  },
  {
    id: '4',
    date: 'Jul 7, 2025',
    title: 'Kigen Color Generator',
    description: 'Launched new color generator feature in Kigen plugin.',
    tags: ['release']
  },
  {
    id: '5',
    date: 'Jun 15, 2025',
    title: 'Started working on Artist and Cat game',
    description: 'Began development of my first indie game using Godot engine.',
    tags: ['devlog']
  }
];

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/Amitsha1818', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/amitshetty18', icon: 'Linkedin' },
  { name: 'Instagram', url: 'https://www.instagram.com/amit_shetty___', icon: 'Instagram' },
  { name: 'Dribbble', url: 'https://dribbble.com/realvjy', icon: 'Dribbble' },
  { name: 'Medium', url: 'https://realvjy.medium.com', icon: 'BookOpen' }
];

export const featuredProjects = [
  { name: '3dicons', url: 'https://3dicons.co', icon: 'Box' },
  { name: 'Designletter', url: 'https://designletter.co', icon: 'Mail' },
  { name: 'Illlustrations', url: 'https://illlustrations.co', icon: 'Palette' }
];

export const footerLinks = [
  { name: 'links', url: '/links' },
  { name: 'supporters', url: '#' },
  { name: 'bookshelf', url: '#' },
  { name: 'tech stack', url: '/stack' },
  { name: 'version', url: '#' },
  { name: 'this uikit', url: '#' }
];

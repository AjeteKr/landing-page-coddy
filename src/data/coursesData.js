export const coursesData = [
  {
    id: 1,
    name: 'Programming for the Little Ones',
    ageRange: '5-8',
    duration: '10 months',
    price: '35',
    image: '🧒',
    description: 'Development of logics through programming',
    shortDescription: 'Perfect starter course for young learners',
    fullDescription: `Introduction to programming concepts through visual and interactive methods. Children learn problem-solving, critical thinking, and basic coding principles using age-appropriate tools and games.`,
    whatYouLearn: [
      'Basic programming concepts and logic',
      'Problem-solving skills',
      'Computational thinking',
      'Creative expression through code'
    ],
    features: [
      'Small groups (max 10 students)',
      'Experienced teachers from IT companies',
      'No grades - focus on learning and creativity',
      'High-tech classroom atmosphere',
      'Hands-on projects and games'
    ],
    startDate: 'January 2026',
    schedule: '2 classes per week',
    url: 'https://kosovo.coddyschool.com/en/courses/programmirovanie-dlya-samih-malenkih/'
  },
  {
    id: 2,
    name: 'Web Mastering',
    ageRange: '9-14',
    duration: '9 months',
    price: '35',
    image: '🌐',
    description: 'Website development from scratch',
    shortDescription: 'Learn to create your own websites',
    fullDescription: `Master HTML, CSS, and JavaScript to build beautiful, functional websites. From static pages to interactive web applications, students learn industry-standard tools and best practices used by professional developers.`,
    whatYouLearn: [
      'HTML structure and semantics',
      'CSS styling and layouts',
      'JavaScript interactivity',
      'Responsive web design',
      'Web development tools and frameworks'
    ],
    features: [
      'Real-world project development',
      'Industry-standard tools',
      'Teachers with practical experience',
      'Portfolio building',
      'Deploy your projects online'
    ],
    startDate: 'January 2026',
    schedule: '2 classes per week',
    url: 'https://kosovo.coddyschool.com/en/courses/web-mastering/'
  },
  {
    id: 3,
    name: 'Game Programming with Python',
    ageRange: '12-18',
    duration: '9 months',
    price: '35',
    image: '🎮',
    description: 'Develop games in Python - powerful, versatile, and easy-to-learn language',
    shortDescription: 'Create amazing games from concept to completion',
    fullDescription: `Learn game development using Python - one of the most popular programming languages. Students develop their own 2D and 3D games, understanding game mechanics, physics, and user interaction. Perfect for aspiring game developers.`,
    whatYouLearn: [
      'Python fundamentals',
      'Game development principles',
      'Graphics and animation',
      'Game physics and collision detection',
      'Publishing and distribution'
    ],
    features: [
      'Create publishable games',
      'Learn from experienced game developers',
      'Modern game engines (Pygame, Godot)',
      'Collaborate on projects',
      'Showcase your work'
    ],
    startDate: 'January 2026',
    schedule: '2 classes per week',
    url: 'https://kosovo.coddyschool.com/en/courses/programmirovanie-igr-na-python/'
  },
  {
    id: 4,
    name: 'Game Design in Roblox Studio',
    ageRange: '6-12',
    duration: '6-7 months',
    price: '35',
    image: '🎪',
    description: 'Create interactive games and experiences in Roblox Studio',
    shortDescription: 'Build your own multiplayer game world',
    fullDescription: `Unleash your creativity in Roblox Studio! Design and develop your own game worlds with advanced mechanics. Learn scripting, world-building, and how to share your creations with millions of players worldwide.`,
    whatYouLearn: [
      'Roblox Studio interface and tools',
      'Lua scripting basics',
      'Game mechanics and interactions',
      'World-building and design',
      'Monetization basics'
    ],
    features: [
      'Create playable games immediately',
      'Access to Roblox\'s massive platform',
      'Learn scripting in Lua',
      'Collaborate with other creators',
      'Share games with thousands of players',
      'Fun, game-based learning'
    ],
    startDate: 'January 2026',
    schedule: '2 classes per week',
    url: 'https://kosovo.coddyschool.com/en/courses/sozdanie_igr_v_roblox_studio/'
  },
  {
    id: 5,
    name: 'Design Thinking & Startup Course',
    ageRange: '14-18',
    duration: '8 months',
    price: '35',
    image: '💡',
    description: 'Learn to think like an entrepreneur and innovator',
    shortDescription: 'Turn your ideas into reality',
    fullDescription: `Develop skills to create successful startups. Learn design thinking, product development, market research, and business fundamentals. Perfect for students who want to start their own IT business or join innovative companies.`,
    whatYouLearn: [
      'Design thinking methodology',
      'Business model development',
      'Market research and validation',
      'Product roadmap creation',
      'Pitching and presentation skills'
    ],
    features: [
      'Real startup simulations',
      'Mentorship from IT entrepreneurs',
      'Develop your own business idea',
      'Networking opportunities',
      'Soft skills development'
    ],
    startDate: 'January 2026',
    schedule: '2 classes per week',
    url: 'https://kosovo.coddyschool.com/en/courses/startup-course/'
  },
  {
    id: 6,
    name: 'Mobile App Development',
    ageRange: '13-18',
    duration: '10 months',
    price: '35',
    image: '📱',
    description: 'Create mobile applications for iOS and Android',
    shortDescription: 'Build apps that millions can use',
    fullDescription: `Master modern mobile app development. Learn to build native and cross-platform applications. From concept to App Store publication, students develop real mobile apps using current industry technologies.`,
    whatYouLearn: [
      'Mobile app architecture',
      'UI/UX design for mobile',
      'Native and cross-platform development',
      'APIs and backend integration',
      'App Store publishing'
    ],
    features: [
      'Build real, publishable apps',
      'Learn multiple platforms',
      'Understand mobile design principles',
      'Monetization strategies',
      'Industry-standard tools'
    ],
    startDate: 'February 2026',
    schedule: '2-3 classes per week',
    url: 'https://kosovo.coddyschool.com/en/courses/mobile-development/'
  }
];

export const studentsData = [
  {
    id: 1,
    name: 'Vigan Gashi',
    email: 'vigan.gashi@school.com',
    courses: ['Game Programming with Python'],
    enrollmentDate: 'January 2026',
    status: 'active',
    image: '👨‍🎓'
  },
  {
    id: 2,
    name: 'Loris Orllati',
    email: 'loris.orllati@school.com',
    courses: ['Game Programming with Python'],
    enrollmentDate: 'January 2026',
    status: 'active',
    image: '👨‍🎓'
  },
  {
    id: 3,
    name: 'Erdi Krasniqi',
    email: 'erdi.krasniqi@school.com',
    courses: ['Web Mastering'],
    enrollmentDate: 'January 2026',
    status: 'active',
    image: '👨‍🎓'
  },
  {
    id: 4,
    name: 'Esila Fejzula',
    email: 'esila.fejzula@school.com',
    courses: ['Game Design in Roblox Studio'],
    enrollmentDate: 'January 2026',
    status: 'active',
    image: '👩‍🎓'
  },
  {
    id: 5,
    name: 'Art Bllaca',
    email: 'art.bllaca@school.com',
    courses: ['Programming for the Little Ones'],
    enrollmentDate: 'January 2026',
    status: 'active',
    image: '👦'
  }
];

export const navbarLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Support", path: "/support" },
  { name: "Contact Us", path: "/contact" },
];

// constants/focusAreas.ts
export const FOCUS_AREAS = [
  {
    id: 1,
    title: "Food Security",
    description:
      "Enhancing agricultural skills and technologies to ensure food security.",
    icon: "/images/food.jpg",
  },
  {
    id: 2,
    title: "Health & Hygiene",
    description:
      "Promoting hygiene, sanitation, and access to safe drinking water.",
    icon: "/images/health.jpg",
  },
  {
    id: 3,
    title: "Peace & Reconciliation",
    description: "Building peace and reconciliation among communities.",
    icon: "/images/peace.jpg",
  },
  {
    id: 4,
    title: "Education",
    description:
      "Empowering communities through education and adult literacy programs.",
    icon: "/images/education.jpg",
  },
  {
    id: 5,
    title: "Empowerment",
    description:
      "Restoring dignity and self-respect through community-driven development.",
    icon: "/images/empower.jpg",
  },
];

//quick links
// constants/quickLinks.ts

export const quickLinks = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About Us",
    href: "/about",
  },
  {
    id: 3,
    title: "Programs",
    href: "/programs",
  },
  {
    id: 4,
    title: "Get Involved",
    href: "/get-involved",
  },
  {
    id: 5,
    title: "Contact Us",
    href: "/contact",
  },
];

// contact Links
export const contactLinks = [
  {
    title: "Rumbek",
    icon: "/icons/map-pin.svg",
  },
  {
    title: "Lakes State",
    icon: "/icons/map-pin.svg",
  },
  {
    title: "+211 920 528 714",
    icon: "/icons/phone.svg",
  },
  {
    title: "bishop.pacong@gmail.com",
    icon: "/icons/mail.svg",
  },
];

export const impactStories = [
  {
    image: "/images/impact4.jpg",
    title: "Evangelism and Spiritual Growth",
    description:
      "Through our evangelism programs, we have reached over 10,000 individuals, spreading the message of hope, love, and faith.",
  },
  {
    image: "/images/impact.jpg",
    title: "Clean Water Initiative",
    description:
      "We aim to provid access to clean and safe drinking water for over 1,000 families in Lakes State.",
  },
  {
    image: "/images/impact2.jpg",
    title: "Education for All",
    description:
      "We aim to support children with quality education, school supplies, and scholarships.",
  },
  {
    image: "/images/impact3.jpg",
    title: "Cultural Enrichment and Peacebuilding",
    description:
      "We have organized cultural events and peacebuilding workshops that bring together diverse communities.",
  },
  {
    image: "/images/impact5.png",
    title: "Sustainable Agriculture",
    description:
      "We aim to train farmers in sustainable farming techniques, including crop diversification, irrigation, and soil conservation.",
  },
];

// constants/footerLinks.js
export const footerLinks = {
  quickLinks: [
    { title: "About Us", url: "#about" },
    { title: "Programs", url: "#programs" },
    { title: "Get Involved", url: "#get-involved" },
    { title: "Contact Us", url: "#contact" },
  ],
  contactLinks: [
    { title: "Rumbek", icon: "/icons/map-pin.svg" },
    { title: "Lakes State", icon: "/icons/map-pin.svg" },
    { title: "+211 920 528 714", icon: "/icons/phone.svg" },
    { title: "bishop.pacong@gmail.com", icon: "/icons/mail.svg" },
  ],
  socialLinks: [
    { icon: "/icons/facebook.svg", url: "#" },
    { icon: "/icons/twitter.svg", url: "#" },
    { icon: "/icons/instagram.svg", url: "#" },
  ],
};

//support options
export const supportOptions = [
  {
    id: "education",
    title: "Support Education",
    description:
      "Help fund school supplies, teacher training, and scholarships for students in need.",
    imageSrc: "/images/partner.png",
    link: "/support-details#education",
    bgClass: "bg-gradient-blue",
  },
  {
    id: "water",
    title: "Water Projects",
    description:
      "Provide safe drinking water by funding wells, filtration systems, and sanitation programs.",
    imageSrc: "/images/water.png",
    link: "/support-details#water",
    bgClass: "bg-gradient-gray",
  },
  {
    id: "food",
    title: "Food Security",
    description:
      "Support agricultural training, food distribution, and sustainable farming initiatives.",
    imageSrc: "/images/partner2.png",
    link: "/support-details#food",
    bgClass: "bg-gradient-vertical",
  },
  {
    id: "peace",
    title: "Peace and Reconciliation",
    description:
      "Support initiatives that foster peace, reconciliation, and harmony among communities in South Sudan.",
    imageSrc: "/images/peace1.png",
    link: "/support-details#peace",
    bgClass: "bg-gradient-green",
  },
];

// constants/otherSupportOptions.js
export const otherSupportOptions = [
  {
    id: "volunteer",
    title: "Volunteer With Us",
    description:
      "Use your skills and time to help communities in need. Join our initiatives today.",
    imageSrc: "/images/volunteer.png",
    link: "/support-details#volunteer",
    bgClass: "bg-gradient",
  },
  {
    id: "partner",
    title: "Become a Partner",
    description:
      "Collaborate with us to create long-term, sustainable impact in communities.",
    imageSrc: "/images/partner.png",
    link: "/support-details#partner",
    bgClass: "bg-gradient-blue",
  },
];

//faqs
export const faqs = [
  {
    question: "What is CCSO?",
    answer:
      "CCSO (Christ Compassion Service Organization) is an indigenous South Sudanese non-governmental organization (NGO) committed to alleviating poverty, promoting sustainable livelihoods, and fostering peace and reconciliation in South Sudan.",
  },
  {
    question: "What is the mission of CCSO?",
    answer:
      "CCSO's mission is to alleviate poverty among vulnerable communities in South Sudan and make them self-reliant through initiatives like food security, agricultural development, hygiene awareness, peacebuilding, and evangelism.",
  },
  {
    question: "What is the vision of CCSO?",
    answer:
      "CCSO envisions a democratic, peaceful, and progressive South Sudan where all people have equal opportunities for human development without discrimination.",
  },
  {
    question: "Where does CCSO operate?",
    answer:
      "CCSO primarily focuses on Lakes State in South Sudan but plans to expand its operations to other parts of the country in the future.",
  },
  {
    question: "What are the core values of CCSO?",
    answer:
      "CCSO's core values include equality, transparency, accountability, grassroots participation, and the recognition of indigenous wisdom.",
  },
  {
    question: "What programs does CCSO offer?",
    answer:
      "CCSO focuses on food security, agricultural development, hygiene and sanitation, disaster preparedness, peacebuilding, and evangelism.",
  },
  {
    question: "How does CCSO promote food security?",
    answer:
      "CCSO enhances food security by transferring agricultural skills, promoting sustainable farming practices, and supporting agro-business groups.",
  },
  {
    question: "What is CCSO doing to promote peace and reconciliation?",
    answer:
      "CCSO actively engages in peacebuilding initiatives to reduce inter-ethnic conflicts and promote harmony among South Sudanese communities.",
  },
  {
    question: "How does CCSO support education?",
    answer:
      "CCSO encourages community participation in education, promotes adult literacy, and advocates for the education and welfare of the girl child.",
  },
  {
    question: "Does CCSO provide clean water?",
    answer:
      "Yes, CCSO works to prevent waterborne diseases by providing safe drinking water and promoting hygiene and sanitation awareness.",
  },
  {
    question: "Can I partner with CCSO?",
    answer:
      "Yes, CCSO invites partnerships with like-minded organizations, donors, and stakeholders to collaborate on impactful community programs.",
  },
  {
    question: "How can my organization collaborate with CCSO?",
    answer:
      "Organizations can collaborate with CCSO by supporting its programs, sharing resources, or participating in joint initiatives aimed at community development.",
  },
  {
    question: "Does CCSO work with local governments?",
    answer:
      "Yes, CCSO collaborates with county authorities, community leaders, and other stakeholders to enhance socio-economic development in South Sudan.",
  },
  {
    question: "How can I support CCSO?",
    answer:
      "You can support CCSO by donating funds, volunteering, or partnering with the organization to implement its programs.",
  },
  {
    question: "Where do donations to CCSO go?",
    answer:
      "Donations are used to fund CCSO's programs, including food security, agricultural development, peacebuilding, and community health initiatives.",
  },
  {
    question: "Is CCSO a non-profit organization?",
    answer:
      "Yes, CCSO is a non-profit organization dedicated to serving vulnerable communities in South Sudan.",
  },
  {
    question: "Can I volunteer with CCSO?",
    answer:
      "Yes, CCSO welcomes volunteers who can contribute their skills and time to support its initiatives.",
  },
  {
    question: "What kind of volunteer opportunities does CCSO offer?",
    answer:
      "Volunteer opportunities include teaching, agricultural training, peacebuilding, hygiene awareness, and community mobilization.",
  },
  {
    question: "How can I get involved with CCSO’s work?",
    answer:
      "You can get involved by volunteering, donating, or spreading awareness about CCSO’s mission and programs.",
  },
  {
    category: "Future Plans",
    question: "What are CCSO’s future plans?",
    answer:
      "CCSO plans to expand its operations to other parts of South Sudan, conduct situational assessments, and scale up its programs to reach more communities.",
  },
];

export const supportProcedures = {
  education: {
    title: "Sponsor A Student - Inspire the Future",
    description:
      "Help fund school supplies, teacher training, and scholarships for students in need. Your support ensures access to quality education for underprivileged children.",
    steps: [
      "Choose an education sponsorship package (e.g., school supplies, scholarships).",
      "Donate through our secure payment portal or set up a recurring contribution.",
      "Receive updates on the impact of your sponsorship, including student progress reports.",
      "Participate in community engagement programs to understand local educational challenges.",
      "Support adult literacy programs to empower parents and guardians.",
      "Advocate for the education and welfare of the girl child through targeted initiatives.",
    ],
    image: "/images/edu.png",
  },
  water: {
    title: "Water for Life - Support Sustainable Water Access",
    description:
      "Provide safe drinking water by funding wells, filtration systems, and sanitation programs. Clean water is essential for health and development.",
    steps: [
      "Select a water project to support (e.g., well drilling, sanitation training).",
      "Contribute a one-time or recurring donation to fund clean water initiatives.",
      "Track the progress of the project with updates and reports.",
      "Engage in community awareness programs on hygiene and sanitation practices.",
      "Support disaster preparedness initiatives to ensure water security during emergencies.",
      "Collaborate with local leaders to identify and address water-related challenges.",
    ],
    image: "/images/water1.png",
  },
  food: {
    title: "Cultivate Change - Support Food Independence",
    description:
      "Support agricultural training, food distribution, and sustainable farming initiatives to combat hunger and promote self-sufficiency.",
    steps: [
      "Choose a food security program (e.g., community farming, emergency food relief).",
      "Donate to provide necessary resources like seeds, tools, and training.",
      "Receive updates on how your contribution is helping communities achieve food sustainability.",
      "Support the transfer of appropriate agricultural technologies to enhance food production.",
      "Promote agro-business skills to ensure processing and marketing of agricultural products.",
      "Encourage sustainable practices like irrigation, water conservation, and environmental protection.",
    ],
    image: "/images/food.png",
  },
  peace: {
    title: "Promote Peace and Reconciliation",
    description:
      "Support initiatives that foster peace, reconciliation, and harmony among communities in South Sudan.",
    steps: [
      "Choose a peace-building program (e.g., community dialogues, conflict resolution workshops).",
      "Donate to fund peace and reconciliation initiatives.",
      "Receive updates on the progress and impact of peace-building activities.",
      "Engage in community-led peace initiatives to address inter-ethnic conflicts.",
      "Support the restoration of dignity and self-respect through reconciliation programs.",
      "Advocate for grassroots participation in peace-building processes.",
    ],
    image: "/images/peace2.png",
  },
};

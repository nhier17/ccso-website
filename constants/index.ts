import {
   Droplets, 
   Sprout, 
   Handshake, 
   Heart, 
   GraduationCap ,
   Brain,
   Scale,
   Shield,
   Users,
   Cpu,
   BookOpen,
   Store,
   Truck,
   Baby,
   Zap,
   Wrench,
   Leaf,
   Target,
   TrendingUp,
   Globe,
   Award,
   Briefcase,
   HeartHandshake,
   MessageSquare,
   Laptop,
   Calendar,
  } from "lucide-react";

export const navbarLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Get Involved", path: "/get-involved"},
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];


//quick links
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

//address
export const addressInfo = [
  {
    icon: "/icons/map-pin.svg",
    title: "South Sudan Office",
    details: [
      "Lakes State",
      "Rumbek Center, South Sudan"
    ]
  },
  {
    icon: "/icons/mail.svg",
    title: "Email",
    details: [
      "bishop.pacong@gmail.com",
      "bishop.pacong@gmail.com"
    ]
  },
  {
    icon: "/icons/phone.svg",
    title: "Phone",
    details: [
      "+211 920 528 714",
      "+254 724 396 190"
    ]
  },
  {
    icon: "/icons/clock.svg",
    title: "Office Hours",
    details: [
      "Monday - Friday: 8:00 AM - 5:00 PM",
      "Saturday: 9:00 AM - 1:00 PM"
    ]
  }
];

// footer links
export const footerLinks = {
  quickLinks: [
    { title: "About Us", url: "/about" },
    { title: "Programs", url: "/programs" },
    { title: "Get Involved", url: "/get-involved" },
    { title: "Blog", url: "/blog" },
    { title: "Donate", url: "/donate" },
    { title: "Contact Us", url: "/contact" },
  ],
  contactLinks: [
    { title: "Rumbek, Lakes State", icon: "/icons/map-pin.svg" },
    { title: "+211 920 528 714", icon: "/icons/phone.svg" },
    { title: "bishop.pacong@gmail.com", icon: "/icons/mail.svg" },
  ],
  socialLinks: [
    { icon: "/icons/facebook.svg", url: "#" },
    { icon: "/icons/twitter.svg", url: "#" },
    { icon: "/icons/instagram.svg", url: "#" },
  ],
};

// focus areas
export const FOCUS_AREAS = [
  {
    id: 1,
    title: "Food Security",
    description:
      "Supporting sustainable farming and climate-smart food production.",
    img: "/images/food4.JPG",
    slug: "food-security",
  },
  {
    id: 2,
    title: "Health & Hygiene",
    description:
      "Improving health through clean water, sanitation, and community education.",
    img: "/images/health.jpg",
    slug: "health-hygiene",
  },
  {
    id: 3,
    title: "Peace & Reconciliation",
    description:
      "Strengthening social cohesion through dialogue and peacebuilding.",
    img: "/images/peace.jpg",
    slug: "peace-reconciliation",
  },
  {
    id: 4,
    title: "Education",
    description:
      "Expanding access to education, literacy, and youth mentorship.",
    img: "/images/education.jpg",
    slug: "education",
  },
  {
    id: 5,
    title: "Community Empowerment",
    description:
      "Building skills, leadership, and locally driven development solutions.",
    img: "/images/empower.jpg",
    slug: "community-empowerment",
  },
];

//faqs
export const faqs = [
  {
    question: "How can I donate to CCSO?",
    answer: "You can donate online through our secure donation page, by mail, or by wire transfer. Visit our Donate page for detailed information on all giving options."
  },
  {
    question: "Can I volunteer if I don't live in South Sudan?",
    answer: "Yes! We offer remote volunteer opportunities in areas such as grant writing, social media management, graphic design, and more. Visit our Get Involved page to learn about current openings."
  },
  {
    question: "Can my organization partner with CCSO?",
    answer: "We welcome partnerships with organizations that share our values and mission. Please contact us through the form above to discuss potential collaboration opportunities."
  },
  {
    question: "Where does CCSO operate?",
    answer:
      "CCSO primarily focuses on Lakes State in South Sudan but plans to expand its operations to other parts of the country in the future.",
  },
  {
    question: "What programs does CCSO offer?",
    answer:
      "CCSO focuses on food security, agricultural development, hygiene and sanitation, disaster preparedness, peacebuilding, and evangelism.",
  },
 
  {
    question: "How can my organization collaborate with CCSO?",
    answer:
      "Organizations can collaborate with CCSO by supporting its programs, sharing resources, or participating in joint initiatives aimed at community development.",
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
];


export const completedProjects = [
  {
    id: "food-distribution-lakes-state",
    title: "Food Distribution in Lakes State",
    description: "We provided emergency food relief to 1,500 families affected by severe flooding in Lakes State.",
    imageSrc: [
      "/images/food8.jpg",
      "/images/food-project.jpg",
      "/images/food-project1.jpg",
    ],
    location: "Rumbek East",
    category: "Food and Hygiene",
    budget: "$10,000",
    overview:
      "Following devastating floods in Lakes State, thousands of families were left without food and clean water. CCSO responded swiftly by organizing an emergency food distribution program to ensure affected communities had immediate access to essential supplies.",
    impact:
      "This project directly impacted **1,500+ families**, providing them with nutritious food packs. Through strong community partnerships, we ensured timely and effective aid distribution to the most affected areas.",
    futureGoals:
      "To continue strengthening food security efforts, CCSO is working on developing a **long-term agricultural resilience program**, enabling communities to grow their own food and reduce dependency on emergency aid.",
    achievements: [
      "Distributed 1,000 kg of food supplies to affected families",
      "Reduced acute malnutrition rates by 40% in target communities",
      "Established 3 community food distribution committees",
      "Reached 100% of targeted households within 2 weeks",
      "Collaborated with 5 local community organizations"
    ],
    sustainability: "Established community-led food committees to manage future distributions"
  },
  {
    id: "education-support",
    title: "Education Sponsorship & Support Program",
    description:
      "Through generous donations and sponsorships, CCSO has empowered hundreds of students in South Sudan to pursue and complete their education.",
    imageSrc: [
      "https://brokenchalk.org/wp-content/uploads/2023/06/South-Sudan_Oxfam-Girl-Education-Project.jpg",
      "https://images.squarespace-cdn.com/content/v1/622788d3e3ba772c3c93eb9c/6cf909a6-721b-4e0a-9724-a2b15add9e2a/Yambio+01.jpg",
    ],
    location: "Juba, Wau, Nairobi",
    category: "Education",
    budget: "$20,000 annually",
    overview:
      "The Education Support Program by CCSO was launched to address the widespread educational gaps faced by South Sudanese children, especially those displaced or affected by conflict. With support from well-wishers and sponsors, we provide tuition assistance, essential school supplies, and mentoring to vulnerable students across South Sudan and neighboring regions.",
    impact:
      "So far, CCSO has sponsored **over 200 students** to complete their primary, secondary, and tertiary education. We have distributed **1,000+ learning kits** and facilitated mentorships, with **85% of sponsored students** completing their academic year successfully.",
    futureGoals:
      "We aim to **build two fully equipped schools** in underserved rural areas and **expand our scholarship initiative** to reach **at least 500 students annually**, with a strong emphasis on supporting girls' education.",
    achievements: [
      "50+ students sponsored through full academic cycles",
      "95% graduation rate among sponsored high school students",
      "15 university graduates produced from the program",
      "1,000+ learning kits distributed annually",
      "Established 3 after-school tutoring centers"
    ],
    sustainability: "Alumni network providing mentorship and community leadership"
  },
  {
    id: "church-construction",
    title: "Church Construction Initiative",
    description: "Constructed a permanent church structure in Mathiang, serving as a spiritual center and multifunctional space for over 300 community members.",
    imageSrc: [
      "/images/school-project.jpg",
      "/images/school-project3.jpg",
      "/images/school-project1.jpg",
    ],
    location: "Mathiang",
    category: "Evangelism",
    budget: "$10,000",
    overview:
      "CCSO spearheaded the construction of a permanent church building in Mathiang to provide a dedicated place of worship, spiritual guidance, and community gathering. The project emerged from the need to replace temporary makeshift structures that were vulnerable to weather and lacked the capacity to serve the growing congregation.",
    impact:
      "The new church building now accommodates over 300 congregants and doubles as a space for community events, prayer meetings, youth fellowship, and Sunday school activities. It strengthens the spiritual fabric of the community and provides a safe, dignified environment for faith-based programs.",
    futureGoals:
      "CCSO plans to furnish the church with essential interior fittings, expand its outreach programs, and support leadership training for local pastors and youth leaders to foster sustainable community development through faith.",
    achievements: [
      "Completed 400 sqm church building with seating for 300+",
      "Installed solar-powered lighting system for evening services",
      "Constructed adjacent community hall for multi-purpose use",
      "Trained 10 local builders in construction skills",
      "Established community maintenance committee"
    ],
    sustainability: "Community-owned and managed with local leadership structure"
  },
  {
    id: "peace-awareness",
    title: "Peace and Reconciliation Program",
    description: "Promoted peace and reconciliation among 5,000+ people across conflict-affected regions.",
    imageSrc: [
      "/images/peace-project2.jpg",
      "/images/peace-project.jpg",
      "/images/peace-project1.jpg",
    ],
    location: "Pacong",
    category: "Peace and Reconciliation",
    budget: "$5,000",
    overview:
      "Recognizing the urgent need for conflict resolution, CCSO launched a peace awareness program to **foster reconciliation and social cohesion** in communities affected by inter-ethnic conflicts.",
    impact:
      "Over **500 people** participated in peace dialogues and reconciliation workshops, leading to **reduced community tensions** and stronger social bonds.",
    futureGoals:
      "CCSO is committed to **expanding peace awareness programs** across other conflict-affected regions and **training local peace ambassadors** to sustain long-term harmony.",
    achievements: [
      "Facilitated 78 successful peace dialogues between conflicting groups",
      "Trained 45 community peace ambassadors",
      "Reduced conflict incidents by 75% in target areas",
      "Established 12 community peace committees",
      "Created early warning systems in 8 villages"
    ],
    sustainability: "Community peace committees continue mediation work independently"
  }
];

//values
export const valuesData = [
   {
     title: "Equality & Justice",
     description: "Promoting a society where everyone is treated equally without discrimination on grounds of ethnicity, age, religion or disability.",
     icon: Scale,
     color: "from-primary to-blue-500"
   },
   {
     title: "Transparency & Accountability",
     description: "Operating with honesty and transparency, ensuring accountability to communities and stakeholders in all our work.",
     icon: Shield,
     color: "from-blue-500 to-green-500"
   },
   {
     title: "Grassroots Participation",
     description: "Encouraging community participation and involvement at grassroots level in decision-making processes.",
     icon: Users,
     color: "from-green-500 to-yellow-500"
   },
   {
     title: "Indigenous Wisdom",
     description: "Recognizing and complementing local experience and wisdom as the foundation for sustainable development.",
     icon: Brain,
     color: "from-purple-500 to-pink-500"
   }
];

export const campaigns = [
  {
    id: "water",
    name: "Water Wells Project",
    raised: 500,
    goal: 10000,
    featured: true,
    impact: "Provides clean drinking water to entire villages",
    urgency: "Dry season approaching",
  },
  {
    id: "education",
    name: "Education Program",
    raised: 5000,
    goal: 50000,
    impact: "Keeps children in school and supports teachers",
    urgency: "School term ongoing",
  },
  {
    id: "healthcare",
    name: "Healthcare Initiative",
    raised: 5000,
    goal: 200000,
    impact: "Delivers essential medical care to remote communities",
    urgency: "Medical supplies running low",
  },
];

//leaders 
export const leaders = [
  {
    name: "Bishop Joseph Maker Atot",
    role: "Founder & Executive Director",
    bio: "Bishop Joseph Maker Atot provides strategic and spiritual leadership for CCSO, drawing on decades of ministry and community engagement to guide the organization’s mission across South Sudan.",
    image: "/images/leader1.jpg",
  },
  {
    name: "Rebecca Achol Majak",
    role: "Deputy Chairperson",
    bio: "Rebecca supports CCSO’s strategic direction by working with partners and stakeholders to ensure programs respond effectively to community priorities and development goals.",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_960_720.png",
  },
  {
    name: "Hellena Ding Maker",
    role: "Secretary",
    bio: "Hellena coordinates organizational communication and documentation, supporting smooth operations, accountability, and transparent reporting across CCSO’s programs.",
    image: "/images/leader5.jpg",
  },
  {
    name: "Abraham Nhier",
    role: "IT & Software Development",
    bio: "Abraham leads CCSO’s digital systems and technology initiatives, strengthening communication, data management, and operational efficiency across programs.",
    image: "/images/leader3.JPEG",
  },
  {
    name: "James Magok Chilim",
    role: "Information Officer",
    bio: "James manages information and reporting processes at CCSO, supporting accurate data collection, community outreach, and evidence-based decision-making.",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_960_720.png",
  },
  {
    name: "Mary Atueny",
    role: "Finance Manager",
    bio: "Mary oversees CCSO’s financial planning and reporting, ensuring responsible resource management, compliance, and accountability across all initiatives.",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_960_720.png",
  },
];


//history 
export const history = [
  {
    year: "2019",
    title: "CCSO Is Founded",
    description: "CCSO was established to respond to urgent humanitarian and development needs through faith-driven, community-led action in South Sudan."
  },
  {
    year: "2019",
    title: "Education Initiative Begins",
    description: "CCSO launched its first education initiatives, supporting vulnerable learners with school materials and assistance to improve access to education."
  },
  {
    year: "2021",
    title: "Peace-Building Focus",
    description: "CCSO expanded its work to include peacebuilding and dialogue initiatives aimed at strengthening social cohesion in conflict-affected communities."
  },
  {
    year: "2022",
    title: "Growth in Evangelism",
    description: "CCSO strengthened its evangelism efforts by expanding outreach programs that promote hope, reconciliation, and spiritual growth"
  },
  {
    year: "2023",
    title: "Health awareness campaign",
    description: "CCSO conducted community health awareness campaigns focused on disease prevention, hygiene education, and improved health outcomes."
  },
  {
    year: "2024",
    title: "First Food Relief Program",
    description: "In response to rising food insecurity, CCSO launched emergency food distribution to support families affected by crisis and displacement."
  },
  {
    year: "2025",
    title: "Global Partnerships Appeal",
    description: "CCSO initiated global partnership efforts to expand resources, strengthen programs, and scale sustainable community impact."
  }
];


//why partner with us 
export const partnerWithUs = {
  type: [
    {
      title: "Organizational", 
      desc: "Join forces with us on program implementation, resource sharing, or joint fundraising."
    },
    {
      title: "Corporate",
      desc: "Engage your company in corporate social responsibility through sponsorship or employee engagement."
    },
    {
      title: "Academic",
      desc: "Collaborate on research, internships, or knowledge exchange related to our work."
    }
  ],
  benefits: [
    "Increased impact through combined resources",
    "Shared knowledge and expertise",
    "Greater visibility for collaborative work",
    "Access to broader networks and resources"
  ]
};

//why partner with us 
export const whyPartnerwithus = [
    {
      icon: Users,
      title: "Local Expertise",
      description: "Deep community connections and cultural understanding",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Proven Track Record",
      description: "5+ years of successful community development",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Scalable Impact",
      description: "Models that can expand across South Sudan",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Transparent operations and international best practices",
      color: "from-purple-500 to-pink-500"
    }
  ]

  //areas of collaboration 
  export const areas = [
      {
        title: "Education & Skills",
        description: "Literacy programs, vocational training, and youth development",
        icon: Award,
        color: "bg-blue-100 text-blue-700"
      },
      {
        title: "Healthcare",
        description: "Mobile clinics, maternal health, and disease prevention",
        icon: HeartHandshake,
        color: "bg-red-100 text-red-700"
      },
      {
        title: "Water & Sanitation",
        description: "Clean water access and hygiene education",
        icon: Zap,
        color: "bg-cyan-100 text-cyan-700"
      },
      {
        title: "Peace Building",
        description: "Conflict resolution and community reconciliation",
        icon: Shield,
        color: "bg-orange-100 text-orange-700"
      },
      {
        title: "Agriculture",
        description: "Food security and sustainable farming",
        icon: TrendingUp,
        color: "bg-green-100 text-green-700"
      },
      {
        title: "Economic Empowerment",
        description: "Micro-enterprise and livelihood programs",
        icon: Briefcase,
        color: "bg-purple-100 text-purple-700"
      }
  ];

  //next steps 
  export const nextSteps = [
      {
        step: "1",
        title: "Initial Review",
        description: "We'll review your inquiry within 48 hours"
      },
      {
        step: "2",
        title: "Discovery Call",
        description: "Schedule a video call to discuss possibilities"
      },
      {
        step: "3",
        title: "Proposal Development",
        description: "We'll create a tailored partnership proposal"
      },
      {
        step: "4",
        title: "Agreement & Launch",
        description: "Finalize terms and begin collaboration"
      }
  ];

//donate
export const donate = {
type: [
  {
    title: "Monthly Giving (Most Impact)",
    desc: "Provide consistent support that allows communities to plan, grow, and thrive long-term."
  },
  {
    title: "One-Time Donation",
    desc: "Make an immediate impact where it’s needed most today."
  },
  {
    title: "Sponsor a Program",
    desc: "Directly support a specific initiative aligned with your passion."
  }
],
benefits: [
  "$25 provides school supplies for one child",
  "$50 supports a farmer with seeds and tools",
  "$100 helps provide clean water access",
  "$250 sponsors a peace-building workshop",
  "$500 supports a community health outreach"
]
};

//donate tiers
export const donationTiers = [
  {
    amount: 25,
    title: "Community Builder",
    anchor: "Be the reason a family has clean water this month",
    impactMonthly: "Provides clean water to one family every month",
    impactOnce: "Provides emergency clean water support for a family",
  },
  {
    amount: 50,
    title: "Hope Provider",
    anchor: "Give a family stability and dignity every month",
    impactMonthly: "Feeds and supports a vulnerable family monthly",
    impactOnce: "Provides food assistance to a family in crisis",
    recommended: true,
  },
  {
    amount: 100,
    title: "Future Maker",
    anchor: "Change a child’s future, month after month",
    impactMonthly: "Sponsors a child’s education and learning materials",
    impactOnce: "Supports a child’s education for one month",
  },
  {
    amount: 250,
    title: "Village Champion",
    anchor: "Help an entire community rise sustainably",
    impactMonthly: "Funds long-term farming & livelihood projects",
    impactOnce: "Kickstarts a community development initiative",
  },
];

export const presetTierMapping = {
  "Water Guardian": 25,
  "Agricultural Empowerment": 50,
  "Health Advocate": 100,
  "Community Builder": 250,
};

//donate faqs
export const donationFaqs = [
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes, CCSO is a registered nonprofit organization, and donations are tax-deductible in many countries. We provide tax receipts for all donations."
    },
    {
      question: "How much of my donation goes directly to programs?",
      answer: "At least 85% of all donations go directly to our programs in South Sudan, with the remainder covering essential administrative and fundraising costs."
    },
    {
      question: "Can I specify how my donation is used?",
      answer: "Yes, you can designate your donation for a specific program or initiative. Please include a note with your donation or select the appropriate option when donating online."
    },
    {
      question: "Do you accept non-monetary donations?",
      answer: "Yes, we accept in-kind donations that support our programs. Please contact us to discuss specific items or services you wish to donate."
    },
    {
      question: "Can I see the impact of my donation?",
      answer: "We provide regular updates on our programs and impact through our newsletter, website, and social media. Donors also receive annual impact reports."
    }
];

//what happens next 
export const whatNext = [
    {
      step: 1,
      title: "Funds Deployed",
      description: "Your donation is immediately allocated to priority programs",
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      title: "Community Implementation",
      description: "Local leaders coordinate training and resource distribution",
      icon: Users,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: 3,
      title: "Impact Creation",
      description: "Real change happens in communities through sustainable programs",
      icon: TrendingUp,
      color: "from-orange-500 to-amber-500"
    }
 ];

 //share on social
 export const platforms = [
    { name: "Twitter", color: "bg-blue-500 hover:bg-blue-600" },
    { name: "Facebook", color: "bg-blue-700 hover:bg-blue-800" },
    { name: "LinkedIn", color: "bg-blue-600 hover:bg-blue-700" },
    { name: "Instagram", color: "bg-pink-600 hover:bg-pink-700" }
 ];

 //stay connected 
 export const items = [
    {
      title: "Monthly Giving",
      description: "Create lasting impact with automatic monthly donations",
      icon: Calendar,
      color: "from-blue-500 to-cyan-500",
      buttonText: "Set Up Monthly",
      href: "/donate?recurring=true"
    },
    {
      title: "Volunteer",
      description: "Share your skills and time with our communities",
      icon: Heart,
      color: "from-green-500 to-emerald-500",
      buttonText: "Explore Opportunities",
      href: "/volunteer"
    },
    {
      title: "Impact Stories",
      description: "See how donations transform lives in South Sudan",
      icon: Target,
      color: "from-orange-500 to-amber-500",
      buttonText: "Read Stories",
      href: "/blog"
    }
  ];

//volunteer
export const volunteer = {
  type: [
    {
      title: "Field Volunteers", 
      desc: "Join us on the ground in South Sudan for hands-on involvement in our programs."
    },
    {
      title: "Remote Volunteers",
      desc: "Offer your skills remotely in areas like communications, fundraising to help amplify our impact from anywhere in the world."
    },
    {
      title: "Professional Services",
      desc: "Offer pro bono professional services in areas like accounting, legal advice and so much more."
    }
  ],
  benefits: [
    "Agricultural specialists (3-6 months)",
    "English teachers (6-12 months)",
    "Community Health Workers",
    "Youth Empowerment Facilitators",
    "Grant writers (remote)",
    "Medical Professionals (Doctors/Nurses)",
    "Monitoring & Evaluation Assistants"
  ]
};

//volunteer roles 
export const volunteerRoles = [
    {
      title: "On-Site Field Volunteer",
      location: "South Sudan",
      duration: "3-12 months",
      description: "Work directly with communities on education, health, or agriculture projects",
      requirements: ["Relevant degree", "Cross-cultural experience", "Physical fitness"],
      icon: Globe,
      color: "from-primary to-blue-500"
    },
    {
      title: "Remote Professional",
      location: "Remote",
      duration: "Flexible",
      description: "Provide expertise in areas like marketing, IT, fundraising, or research",
      requirements: ["Professional experience", "Reliable internet", "10+ hours/week"],
      icon: Laptop,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Short-Term Team",
      location: "South Sudan",
      duration: "2-4 weeks",
      description: "Join specialized teams for medical missions, construction, or training",
      requirements: ["Team player", "Specific skills", "Travel readiness"],
      icon: Users,
      color: "from-purple-500 to-pink-500"
    }
  ];

//volunteer benefits 
export const volunteerBenefits =[
    {
      title: "Make an Impact",
      description: "Directly contribute to improving lives in South Sudanese communities",
      icon: HeartHandshake,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Gain Experience",
      description: "Develop new skills and get hands-on experience in community development",
      icon: GraduationCap,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cultural Exchange",
      description: "Immerse yourself in South Sudanese culture and traditions",
      icon: Globe,
      color: "from-orange-500 to-amber-500"
    },
    {
      title: "Career Growth",
      description: "Build your resume with meaningful international experience",
      icon: Briefcase,
      color: "from-purple-500 to-pink-500"
    }
];

//skills needed
 export const skills = [
      { skill: "Medical Professionals", urgency: "High", color: "bg-red-100 text-red-700" },
      { skill: "Teachers & Trainers", urgency: "High", color: "bg-blue-100 text-blue-700" },
      { skill: "Agriculture Experts", urgency: "Medium", color: "bg-green-100 text-green-700" },
      { skill: "IT & Data Specialists", urgency: "Medium", color: "bg-purple-100 text-purple-700" },
      { skill: "Fundraising Experts", urgency: "High", color: "bg-orange-100 text-orange-700" },
      { skill: "Construction Engineers", urgency: "Medium", color: "bg-amber-100 text-amber-700" },
  ];

//volunteer steps 
export const steps = [
   {
     step: "1",
     title: "Apply",
     description: "Complete our online application form",
     icon: MessageSquare,
     color: "from-blue-500 to-cyan-500"
   },
   {
     step: "2",
     title: "Interview",
     description: "Virtual interview with our team",
     icon: Users,
     color: "from-green-500 to-emerald-500"
   },
   {
     step: "3",
     title: "Orientation",
     description: "Comprehensive training and preparation",
     icon: GraduationCap,
     color: "from-orange-500 to-amber-500"
   },
   {
     step: "4",
     title: "Deploy",
     description: "Begin your volunteer service",
     icon: Globe,
     color: "from-purple-500 to-pink-500"
   }
];

//what to expect
export const whatToExpect = [
    {
      title: "Quick Response",
      description: "We review applications within 5 business days"
    },
    {
      title: "Support Provided",
      description: "Training, accommodation, and local support included"
    },
    {
      title: "Flexible Options",
      description: "Remote and on-site opportunities available"
    },
    {
      title: "Cultural Preparation",
      description: "Comprehensive orientation before deployment"
    }
];

//upcoming projects
export const upcomingEvents = [
  {
    title: "Borehole Drilling & Water Pans Construction",
    date: "October 15, 2025",
    location: "Cuecock, Pacong, Malengagok & Mathiang, Western Bahr Naam County",
    description:
      "CCSO is launching a 3-month initiative to drill boreholes and construct water pans in underserved communities. This project aims to improve access to clean and safe water, directly benefiting hundreds of families. We invite partners and donors to support this vital cause.",
    image: "/images/water3.jpg"
  },
  {
    title: "Returnees Livelihoods Support Project (RLSP)",
    date: "November 5, 2025",
    location: "Diocese of Pacong, Rumbek East County, Lakes State",
    description:
      "This project supports returnees with essential livelihoods tools, vocational training, and economic empowerment. CCSO is committed to rebuilding lives and enhancing self-reliance. We're seeking donors and collaborators to join our mission.",
    image: "/images/hood.jpg"
  },
  {
    title: "Peace Training for Youths and Leaders",
    date: "December 10, 2025",
    location: "Rumbek Town, Western Lakes State",
    description:
      "CCSO is organizing peace training workshops targeting youth and community leaders to foster harmony and non-violent conflict resolution. Your support will help equip participants with tools for long-term peacebuilding.",
    image: "/images/impact2.jpg"
  }
];


//success testimonial
export const successTestimonials = [
  {
    name: "David Miller",
    role: "Agricultural Volunteer, 2024",
    quote: "Volunteering with CCSO was one of the most rewarding experiences of my life. Sharing agricultural knowledge with farmers in South Sudan and seeing their yields improve was incredibly fulfilling. The team's dedication and the warm welcome from the communities made this experience unforgettable.",
    img: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Ema Thompson",
    role: "Remote Marketing Volunteer, 2023",
    quote: "Even working remotely, I felt deeply connected to CCSO's mission. Using my marketing skills to help raise awareness and funds for their work gave me a sense of purpose. The team was supportive and collaborative, making it easy to contribute meaningfully despite the distance.",
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];
//program stats
export const programStats = [
  {
    id: 1,
    slug: "clean-water",
    icon: Droplets,
    title: "Clean Water Access Initiative",
    shortDescription:
      "Building sustainable water points and training communities to ensure long-term access to clean, safe drinking water.",
    location: "Rumbek East, Rumbek Center",
    status: "Active",
    color: "blue",
    image: "/images/water.png",
    duration: "Since 2024",
    annualBudget: "$120,000",
    fundingGoal: "$200,000",
    fundingProgress: 60,

    impact: {
      currentLabel: "People Served",
      currentValue: 2,
      goalLabel: "Target by 2026",
      goalValue: 10,
      progress: 5,
    },

    highlights: [
      { label: "Water Points Built", value: "2" },
      { label: "Communities Served", value: "2" },
    ],

    overview: "Our Clean Water Initiative focuses on providing sustainable water solutions through community-led approaches. Each water point includes training local committees for maintenance and hygiene education to ensure long-term sustainability.",

    objectives: [
      "Provide clean water access to 100 people by 2026",
      "Reduce waterborne diseases by 70% in target communities",
      "Train 5 local technicians in water point maintenance",
      "Establish 10 community water management committees",
      "Reduce women's water collection time by 80%"
    ],

    approach: [
      {
        title: "Community-Led Implementation",
        description: "Local communities identify locations and participate in construction",
        icon: Users
      },
      {
        title: "Sustainable Technology",
        description: "locally repairable hand pumps",
        icon: Cpu
      },
      {
        title: "Hygiene Education",
        description: "Comprehensive water, sanitation, and hygiene training",
        icon: Shield
      },
      {
        title: "Local Capacity Building",
        description: "Training community members in maintenance and management",
        icon: BookOpen
      }
    ],

    stories: [
      {
        title: "Maria's Daily Journey",
        description: "How a solar-powered borehole transformed life for a mother of five",
        impact: "Reduced water collection time from 4 hours to 15 minutes daily",
        image: "/images/water-story1.jpg"
      },
      {
        title: "Community Ownership Success",
        description: "Local water committee successfully maintains borehole for 2+ years",
        impact: "Zero breakdowns with community-funded maintenance fund",
        image: "/images/water-story2.jpg"
      }
    ],

    fundingNeeds: [
      { amount: "$50", description: "Provides water purification tablets for 1 family for 6 months" },
      { amount: "$150", description: "Trains 1 community member in basic water point maintenance" },
      { amount: "$500", description: "Installs handwashing station at a community water point" },
      { amount: "$2000", description: "Funds construction materials for a new hand-dug well" }
    ]
  },

  {
    id: 2,
    slug: "agriculture",
    icon: Sprout,
    title: "Agricultural Empowerment Program",
    shortDescription:
      "Equipping farmers with sustainable agriculture skills, tools, and cooperative support to strengthen food security.",
    status: "Expanding",
    color: "green",
    image: "/images/food3.JPG",
    duration: "Since 2024",
    annualBudget: "$180,000",
    fundingGoal: "$250,000",
    fundingProgress: 5,

    impact: {
      currentLabel: "Farmers Trained",
      currentValue: 200,
      goalLabel: "Target by 2025",
      goalValue: 500,
      progress: 5,
    },

    highlights: [
      { label: "Farmers Trained", value: "200" },
      { label: "Cooperatives Formed", value: "12" },
      { label: "Acres Cultivated", value: "450" },
    ],

    overview: "We promote climate-smart agriculture through farmer field schools, seed multiplication programs, and cooperative development to build resilient food systems in South Sudan's challenging environment.",

    objectives: [
      "Train 1,000 farmers in sustainable agriculture by 2025",
      "Increase crop yields by 150% for participating farmers",
      "Establish 50 farmer cooperatives with market linkages",
      "Create 6 community seed banks for climate-resilient varieties",
      "Reduce post-harvest losses by 60% through improved storage"
    ],

    approach: [
      {
        title: "Farmer Field Schools",
        description: "Hands-on training in climate-resilient farming techniques",
        icon: GraduationCap
      },
      {
        title: "Seed Multiplication",
        description: "Local production of improved, climate-adapted seeds",
        icon: Leaf
      },
      {
        title: "Cooperative Development",
        description: "Building farmer groups for collective marketing",
        icon: Users
      },
      {
        title: "Market Linkages",
        description: "Connecting farmers to local and regional markets",
        icon: Store
      }
    ],

    stories: [
      {
        title: "Samuel's Harvest Miracle",
        description: "From one bag of maize to surplus for his family and community",
        impact: "Increased yield from 150kg to 850kg per acre",
        image: "/images/agri-story1.jpg"
      },
      {
        title: "Women's Cooperative Success",
        description: "How 15 women transformed vegetable farming into a thriving business",
        impact: "Increased household income by 300% for member families",
        image: "/images/agri-story2.jpg"
      }
    ],

    fundingNeeds: [
      { amount: "$30", description: "Provides improved seeds for one farmer for a season" },
      { amount: "$100", description: "Equips a farmer with basic tools (hoe, machete, watering can)" },
      { amount: "$400", description: "Funds a farmer field school session for 25 farmers" },
      { amount: "$1000", description: "Establishes a community seed bank with 10 varieties" }
    ]
  },

{
  id: 3,
  slug: "healthcare",
  icon: Heart,
  title: "Healthcare & Wellness Program",
  shortDescription: "Aiming to deliver essential healthcare through mobile clinics, maternal health services, and community education.",
  longDescription: "Our proposed Healthcare & Wellness Program seeks funding to bring essential medical services to remote communities through mobile clinics, maternal and child health centers, and community health worker networks. We plan to focus on preventive care, maternal health, and disease prevention in areas with limited access to medical facilities. This program is designed but requires funding to launch.",
  location: "Remote Communities, Rumbek East, Yirol",
  status: "Planning",
  color: "red",
  image: "/images/health1.jpeg",
  duration: "Proposed for 2024",
  annualBudget: "$220,000",
  fundingGoal: "$220,000",
  fundingProgress: 5, 
  
  impact: {
    currentLabel: "Funding Required",
    currentValue: 11000, 
    goalLabel: "Target to Launch",
    goalValue: 220000, 
    progress: 5,
  },
  
  highlights: [
    { label: "Target Communities", value: "8" },
    { label: "Mobile Clinics Planned", value: "2" },
    { label: "Health Workers to Train", value: "30" },
    { label: "Lives to Impact", value: "15,000" },
  ],
  
  overview: "This is a proposed program that urgently needs funding to launch. We have conducted needs assessments, developed comprehensive plans, and identified partner communities ready for implementation. Your support will enable us to start saving lives and improving health outcomes in some of South Sudan's most underserved areas.",
  
  objectives: [
    "Provide 10,000 medical consultations in the first year",
    "Reduce maternal mortality by 30% in target areas within 2 years",
    "Train 30 community health workers in basic healthcare",
    "Achieve 70% vaccination coverage for children under 5",
    "Establish 2 maternal waiting homes near health facilities"
  ],
  
  approach: [
    {
      title: "Mobile Health Units",
      description: "Planning to bring medical services directly to remote villages",
      icon: Truck
    },
    {
      title: "Community Health Workers",
      description: "Ready to train local volunteers in basic healthcare and prevention",
      icon: Users
    },
    {
      title: "Maternal Health Focus",
      description: "Designed specialized care for pregnant women and newborns",
      icon: Baby
    },
    {
      title: "Preventive Health Education",
      description: "Community workshops planned on prevention and healthy practices",
      icon: BookOpen
    }
  ],
  
  stories: [
    {
      title: "Why We Need This Program",
      description: "In remote communities, women walk 10+ miles to reach basic healthcare. Children die from preventable diseases. Our needs assessment shows urgent need for mobile clinics.",
      impact: "Your funding could prevent 500+ preventable deaths in the first year",
      image: "/images/health-need.jpg"
    },
    {
      title: "Community Readiness",
      description: "Local communities have identified clinic sites, committed volunteers, and are ready to partner. They await our arrival with hope.",
      impact: "8 communities prepared to host mobile clinics once funded",
      image: "/images/community-ready.jpg"
    }
  ],
  
  fundingNeeds: [
    { amount: "$25", description: "Could provide a complete prenatal care kit for one expectant mother" },
    { amount: "$75", description: "Would fund vaccinations for 10 children once we launch" },
    { amount: "$300", description: "Could support one mobile clinic outreach day" },
    { amount: "$800", description: "Would train one community health worker for 6 months" },
    { amount: "$5000", description: "Could purchase essential medical equipment for one mobile clinic" },
    { amount: "$25000", description: "Would fund the entire program for one month, saving countless lives" }
  ],
  
  fundingUrgency: "High",
  timeline: "Can launch within 3 months of full funding",
  communityCommitment: "8 communities have pledged land, volunteers, and local support",
  partnerships: "In discussions with Ministry of Health and local hospitals for referrals",
  sustainabilityPlan: "Gradual transition to community ownership with health insurance schemes"
},

  {
    id: 4,
    slug: "education",
    icon: GraduationCap,
    title: "Education & Skills Development",
    shortDescription:
      "Expanding access to literacy, vocational training, and youth development opportunities.",
    location: "Juba, Wau, Rumbek, Bor",
    status: "Active",
    color: "purple",
    image: "/images/education.jpg",
    duration: "Since 2019",
    annualBudget: "$250,000",
    fundingGoal: "$350,000",
    fundingProgress: 20,

    impact: {
      currentLabel: "Students Enrolled",
      currentValue: 50,
      goalLabel: "Target by 2025",
      goalValue: 200,
      progress: 20,
    },

    highlights: [
      { label: "Literacy Graduates", value: "50" },
      { label: "Youth Trained", value: "50" },
    ],

    overview: "We provide inclusive education through accelerated learning programs, vocational training centers, and community libraries, focusing on marginalized groups including girls, displaced children, and youth affected by conflict.",

    objectives: [
      "Enroll 200 out-of-school children and youth by 2026",
      "Achieve 80% literacy rate among program participants",
      "Train 500 youth in market-relevant vocational skills",
      "Establish 15 community learning centers",
      "Support 100 girls' secondary education through scholarships"
    ],

    approach: [
      {
        title: "Accelerated Learning",
        description: "Condensed curriculum for over-age learners to catch up",
        icon: Zap
      },
      {
        title: "Vocational Training",
        description: "Market-aligned skills in construction, tailoring, and agriculture",
        icon: Wrench
      },
      {
        title: "Girls' Education",
        description: "Scholarships and safe learning environments for girls",
        icon: Users
      },
      {
        title: "Community Libraries",
        description: "Creating spaces for continued learning and digital access",
        icon: BookOpen
      }
    ],

    stories: [
      {
        title: "James' Second Chance",
        description: "From child soldier to skilled carpenter through vocational training",
        impact: "Now employs 3 other youth in his woodworking workshop",
        image: "/images/edu-story1.jpg"
      },
      {
        title: "Girls' School Success",
        description: "How a girls' boarding school transformed community attitudes",
        impact: "Increased girls' secondary enrollment from 15% to 45%",
        image: "/images/edu-story2.jpg"
      }
    ],

    fundingNeeds: [
      { amount: "$20", description: "Provides school supplies for one student for a year" },
      { amount: "$100", description: "Funds one month of vocational training for a youth" },
      { amount: "$500", description: "Supports a girls' scholarship for one school term" },
      { amount: "$1500", description: "Equips a vocational training workshop with basic tools" }
    ]
  },

  {
    id: 5,
    slug: "peacebuilding",
    icon: Handshake,
    title: "Peace & Reconciliation Initiative",
    shortDescription:
      "Supporting dialogue, reconciliation, and local peacebuilding in conflict-affected communities.",
    location: "Conflict-Affected Areas, Rumbek, Jonglei, Unity State",
    status: "Critical",
    color: "orange",
    image: "/images/peace.jpg",
    duration: "Since 2020",
    teamSize: 10,
    annualBudget: "$150,000",
    fundingGoal: "$200,000",
    fundingProgress: 25,

    impact: {
      currentLabel: "Communities Engaged",
      currentValue: 20,
      goalLabel: "Target by 2025",
      goalValue: 50,
      progress: 25,
    },

    highlights: [
      { label: "Peace Dialogues", value: "78" },
      { label: "Agreements Reached", value: "15" },
      { label: "Peace Committees", value: "25" },
      { label: "Youth Trained", value: "180" },
    ],

    overview: "We employ locally-led approaches to peacebuilding, combining traditional conflict resolution mechanisms with modern mediation techniques to address both immediate conflicts and underlying tensions.",

    objectives: [
      "Establish peace committees in 50 conflict-prone communities",
      "Train 300 youth as peace ambassadors in their communities",
      "Facilitate 100 inter-community dialogues and reconciliation events",
      "Support women's participation in 80% of peace processes",
      "Document and promote 20 traditional peace agreements"
    ],

    approach: [
      {
        title: "Traditional Mechanisms",
        description: "Leveraging local customs and elder wisdom for conflict resolution",
        icon: Users
      },
      {
        title: "Youth Engagement",
        description: "Empowering young people as agents of peace and change",
        icon: Target
      },
      {
        title: "Women's Mediation",
        description: "Training women leaders in negotiation and mediation skills",
        icon: Heart
      },
      {
        title: "Trauma Healing",
        description: "Addressing psychological wounds from prolonged conflict",
        icon: Shield
      }
    ],

    stories: [
      {
        title: "Cattle Raid Ceasefire",
        description: "How traditional leaders brokered peace after decades of violence",
        impact: "Zero cattle raids for 18 months following peace agreement",
        image: "/images/peace-story1.jpg"
      },
      {
        title: "Women's Peace Council",
        description: "Cross-ethnic women's group prevents renewed conflict",
        impact: "Successfully mediated 12 community conflicts without violence",
        image: "/images/peace-story2.jpg"
      }
    ],

    fundingNeeds: [
      { amount: "$50", description: "Funds a community peace dialogue for 20 participants" },
      { amount: "$150", description: "Trains one youth peace ambassador for 3 months" },
      { amount: "$400", description: "Supports a women's mediation workshop for 15 leaders" },
      { amount: "$1000", description: "Establishes a peace resource center in a conflict zone" }
    ]
  },
];

// current issues
export const currentIssues = [
  {
    id: 1,
    title: "Flood Crisis Response",
    description:
      "Seasonal floods have displaced families, destroyed homes, and cut off access to essential services. CCSO is delivering emergency shelter, relief supplies, and recovery support.",
    progress: 35,
    status: "Urgent",
    iconColor: "red",
    buttonText: "Support Flood Response",
    img: "/images/floods3.jpg",
  },
  {
    id: 2,
    title: "Food Security Crisis",
    description:
      "Conflict and climate shocks have pushed households into severe hunger. CCSO is providing urgent food assistance while supporting recovery and resilience.",
    progress: 5,
    status: "Critical",
    iconColor: "orange",
    buttonText: "Help Fight Hunger",
    img: "/images/food8.jpg",
  },
  {
    id: 3,
    title: "Education Support",
    description:
      "Displacement and poverty are forcing children out of school. CCSO is helping vulnerable learners stay in education through targeted school support.",
    progress: 5,
    status: "Important",
    iconColor: "yellow",
    buttonText: "Support Education",
    img: "https://brokenchalk.org/wp-content/uploads/2023/08/South-Sudan_Windle-Trust.jpg",
  },
];



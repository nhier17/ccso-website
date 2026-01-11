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
    raised: 0,
    goal: 10000,
    featured: true,
    impact: "Provides clean drinking water to entire villages",
    urgency: "Dry season approaching",
  },
  {
    id: "education",
    name: "Education Program",
    raised: 0,
    goal: 50000,
    impact: "Keeps children in school and supports teachers",
    urgency: "School term ongoing",
  },
  {
    id: "healthcare",
    name: "Healthcare Initiative",
    raised: 0,
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
    sector: "Water",
    status: "Proposed",
    icon: Droplets,
    color: "blue",
    image: "/images/water.png",

    summary: {
      title: "Borehole Drilling & Water Pans Construction",
      shortDescription:
        "Constructing water pans and drilling boreholes to provide sustainable water access for households and livestock in underserved communities.",
      overview:
        "This 3-month initiative focuses on drilling boreholes and constructing water pans in Cuecok, Pacong, Malengagok, and Mathiang payams of Western and Eastern Bahr Naam State to address chronic water shortages affecting both human consumption and livestock needs.",
      location: [
        "Cuecock",
        "Pacong",
        "Malengagok",
        "Mathiang"
      ],
      duration: "3 months",
    },

    problemStatement:
      "Residents of Western and Eastern Bahr Naam State face severe water shortages, forcing women and girls to walk 6 hours daily to fetch water from contaminated sources, while male youths miss school to search for water and pasture for livestock. Communities rely on contaminated shallow ponds and rivers, leading to high rates of waterborne diseases and disrupted education for children.",

    targetBeneficiaries: {
      primary: "Rural households, women, children, pastoral communities, and livestock keepers",
      estimatedNumber: 4000,
      demographics: ["Women and girls", "School-age children", "Pastoral communities", "Livestock owners"],
    },

    theoryOfChange:
      "If communities are provided with accessible, clean water sources through boreholes and water pans, then time spent fetching water will decrease, school attendance will improve, livestock mortality will reduce, and waterborne diseases will decline, leading to improved health, education, and economic productivity.",

    objectives: [
    "Construct 4 functional water pans in Cuecok, Pacong, Malengagok, and Mathiang payams",
    "Drill 4 functional boreholes in the four target payams",
    "Establish 5-member water management committees in each of the four payams",
    "Improve access to clean water for 4,000 residents and their livestock",
    "Increase school attendance for boys and girls by reducing water-fetching time",
    ],

    keyActivities: [
    "Community mobilization meetings in all four payams",
    "Site identification and clearance for water pans and boreholes",
    "Construction of 4 water pans with fencing",
    "Drilling of 4 boreholes with proper infrastructure",
    "Formation and training of water management committees",
    "Handover ceremonies to beneficiary communities",
    ],

    indicators: [
    { indicator: "Number of water pans constructed and functional", target: "4" },
    { indicator: "Number of boreholes drilled and functional", target: "4" },
    { indicator: "Water management committees established", target: "4 committees (5 members each)" },
    { indicator: "Reduction in water collection time for women and girls", target: "From 6 hours to 1 hour daily" },
    { indicator: "Increase in school attendance among affected children", target: "50% improvement" },
    ],

    risksAndMitigation: [
    {
      risk: "Seasonal flooding affecting construction timelines",
      mitigation: "Pre-position materials before rainy season and engage local labor for rapid construction",
    },
    {
      risk: "Community conflicts over water access points",
      mitigation: "Involve all stakeholders in site selection and establish clear usage guidelines",
    },
    {
      risk: "Equipment breakdown during drilling operations",
      mitigation: "Hire experienced contractors with backup equipment and establish maintenance protocols",
    },
    ],

    budgetSummary: {
    annualBudget: "$84,000",
    fundingGoal: "$84,000",
    fundingGap: "$84,000",
    breakdown: [
      { item: "Construction of 4 water pans", amount: "$28,000" },
      { item: "Drilling of 4 boreholes", amount: "$52,000" },
      { item: "Administrative costs (5%)", amount: "$4,000" }
    ]
    },

    sustainabilityPlan:
      "Water management committees (5 members each in all four payams) will oversee maintenance, establish usage guidelines, and collect nominal fees for repairs. Local capacity will be built through training on basic maintenance, and communities will contribute labor during construction to foster ownership.",

    evidenceOfImpact: [],

    donationAnchors: [
    { amount: "$50", description: "Provides clean water for one family for 6 months" },
    { amount: "$250", description: "Funds fencing for one water pan to protect from contamination" },
    { amount: "$1,000", description: "Supports one community mobilization and training session" },
    { amount: "$7,000", description: "Constructs one complete water pan for an entire community" },
    { amount: "$13,000", description: "Drills one borehole providing water for 1,000 people" },
    { amount: "$21,000", description: "Funds one water pan and contributes to a borehole" },
    ],
  },

  {
    id: 2,
    slug: "agriculture",
    sector: "Agriculture",
    status: "Expanding",
    icon: Sprout,
    color: "green",
    image: "/images/food3.JPG",

    summary: {
      title: "Agricultural Empowerment Program",
      shortDescription:
        "Equipping farmers with sustainable agriculture skills, tools, and cooperative support to strengthen food security.",
      overview:
        "We promote climate-smart agriculture through farmer field schools, seed multiplication programs, and cooperative development to build resilient food systems in South Sudan's challenging environment.",
      location: ["Rumbek East", "Yirol", "Bor"],
      duration: "Since 2024",
    },

    problemStatement:
      "Farmers in South Sudan face low productivity due to outdated farming methods, lack of access to quality inputs, climate change impacts, and poor market linkages, leading to chronic food insecurity and poverty.",

    targetBeneficiaries: {
      primary: "Smallholder farmers, women farmer groups, youth agricultural entrepreneurs",
      estimatedNumber: 1000,
      demographics: ["Smallholder farmers", "Women-led households", "Youth (18-35)"],
    },

    theoryOfChange:
      "If farmers are equipped with climate-smart agricultural techniques, quality inputs, and market access through cooperatives, then agricultural productivity will increase, leading to improved food security and household incomes.",

    objectives: [
      "Train 1,000 farmers in sustainable agriculture by 2025",
      "Increase crop yields by 150% for participating farmers",
      "Establish 50 farmer cooperatives with market linkages",
      "Create 6 community seed banks for climate-resilient varieties",
      "Reduce post-harvest losses by 60% through improved storage",
    ],

    keyActivities: [
      "Farmer field schools and hands-on training sessions",
      "Establishment and support of farmer cooperatives",
      "Distribution of improved seeds and farming tools",
      "Climate-smart agriculture demonstrations",
      "Market linkage development and value chain strengthening",
    ],

    indicators: [
      { indicator: "Farmers trained in sustainable practices", target: "1,000" },
      { indicator: "Increase in average crop yields", target: "+150%" },
      { indicator: "Farmer cooperatives established", target: "50" },
      { indicator: "Reduction in post-harvest losses", target: "-60%" },
    ],

    risksAndMitigation: [
      {
        risk: "Unpredictable rainfall patterns due to climate change",
        mitigation: "Promote drought-resistant crops and water harvesting techniques",
      },
      {
        risk: "Market price fluctuations affecting farmer incomes",
        mitigation: "Establish forward contracts and collective bargaining through cooperatives",
      },
    ],

    budgetSummary: {
      annualBudget: "$180,000",
      fundingGoal: "$180,000",
      fundingGap: "$180,000",
    },

    sustainabilityPlan:
      "Farmer cooperatives will establish revolving seed funds, collective marketing systems, and savings groups to ensure long-term program benefits continue beyond project funding.",

    evidenceOfImpact: [],

    donationAnchors: [
      { amount: "$30", description: "Provides improved seeds for one farmer for a season" },
      { amount: "$100", description: "Equips a farmer with basic tools (hoe, machete, watering can)" },
      { amount: "$400", description: "Funds a farmer field school session for 25 farmers" },
      { amount: "$1,000", description: "Establishes a community seed bank with 10 varieties" },
    ],
  },

  {
    id: 3,
    slug: "healthcare",
    sector: "Health",
    status: "Planning",
    icon: Heart,
    color: "red",
    image: "/images/health1.jpeg",

    summary: {
      title: "Healthcare & Wellness Program",
      shortDescription:
        "Aiming to deliver essential healthcare through mobile clinics, maternal health services, and community education.",
      overview:
        "Our proposed Healthcare & Wellness Program seeks funding to bring essential medical services to remote communities through mobile clinics, maternal and child health centers, and community health worker networks. We plan to focus on preventive care, maternal health, and disease prevention in areas with limited access to medical facilities.",
      location: ["Remote Communities", "Rumbek East", "Yirol"],
      duration: "Proposed for 2024",
    },

    problemStatement:
      "Remote communities in South Sudan face severe healthcare access challenges, with women walking 10+ miles for basic care, high maternal and child mortality rates, and preventable diseases causing unnecessary deaths due to lack of medical facilities and trained personnel.",

    targetBeneficiaries: {
      primary: "Women and children, elderly, displaced populations in remote areas",
      estimatedNumber: 3000,
      demographics: ["Pregnant women", "Children under 5", "Elderly", "Displaced families"],
    },

    theoryOfChange:
      "If remote communities receive regular mobile clinic services, community health worker support, and maternal health interventions, then healthcare access will improve, leading to reduced mortality rates and better health outcomes.",

    objectives: [
      "Provide 10,000 medical consultations in the first year",
      "Reduce maternal mortality by 30% in target areas within 2 years",
      "Train 30 community health workers in basic healthcare",
      "Achieve 70% vaccination coverage for children under 5",
      "Establish 2 maternal waiting homes near health facilities",
    ],

    keyActivities: [
      "Mobile clinic outreach to remote villages",
      "Training of community health workers",
      "Maternal and child health services",
      "Vaccination campaigns and preventive healthcare",
      "Health education and awareness sessions",
    ],

    indicators: [
      { indicator: "Medical consultations provided", target: "10,000" },
      { indicator: "Community health workers trained", target: "30" },
      { indicator: "Children under 5 vaccinated", target: "70%" },
      { indicator: "Reduction in maternal mortality", target: "-30%" },
    ],

    risksAndMitigation: [
      {
        risk: "Security challenges in remote areas",
        mitigation: "Coordinate with local authorities and community leaders for safe access",
      },
      {
        risk: "Limited local healthcare infrastructure for referrals",
        mitigation: "Establish partnership agreements with regional hospitals in advance",
      },
    ],

    budgetSummary: {
      annualBudget: "$220,000",
      fundingGoal: "$220,000",
      fundingGap: "$220,000",
    },

    sustainabilityPlan:
      "Gradual transition to community ownership with health insurance schemes, local government partnerships, and capacity building of local health workers to ensure long-term service continuity.",

    evidenceOfImpact: [],

    donationAnchors: [
      { amount: "$25", description: "Could provide a complete prenatal care kit for one expectant mother" },
      { amount: "$75", description: "Would fund vaccinations for 10 children once we launch" },
      { amount: "$300", description: "Could support one mobile clinic outreach day" },
      { amount: "$800", description: "Would train one community health worker for 6 months" },
      { amount: "$5,000", description: "Could purchase essential medical equipment for one mobile clinic" },
      { amount: "$25,000", description: "Would fund the entire program for one month, saving countless lives" },
    ],
  },

  {
  id: 4,
  slug: "pacong-girls-school",
  sector: "Education",
  status: "Planning", 
  icon: GraduationCap,
  color: "purple",
  image: "/images/education.jpg", 

  summary: {
    title: "Pacong Girls' Primary School",
    shortDescription: "Establishing a community-owned primary school to enhance access to quality education for 200 girls annually and provide adult literacy for 30 women in rural Rumbek East.",
    overview: "This project will construct a new school facility in Pacong to serve as a pilot education center for four underserved villages: Pacong, Cueicok, Malengagok, and Mathiang. The initiative addresses a 98% illiteracy rate among women and girls in the area through comprehensive educational infrastructure and community integration.",
    location: [
      "Pacong",
      "Cueicok",
      "Malengagok",
      "Mathiang"
    ],
    duration: "12 months",
    },

  problemStatement: "The Pacong area has a staggering 98% illiteracy rate among women and girls due to cultural norms, underinvestment in girls' education, and lack of nearby schools. Women and girls face extreme educational deprivation, with no existing primary school infrastructure serving the four target villages, perpetuating cycles of poverty and gender inequality.",

  targetBeneficiaries: {
    primary: "Girls (ages 6-14) and adult women, particularly childbearing mothers from underserved rural communities",
    estimatedNumber: 230, 
    demographics: ["Girls (primary school age)", "Adult women (childbearing age)", "Host community members", "Returnees", "Internally Displaced Persons (IDPs)"],
  },

  theoryOfChange: "If a community-owned primary school with comprehensive infrastructure is established in Pacong, then girls' enrollment will increase, female illiteracy will decrease, women's literacy will improve, and intercommunity relations will strengthen, leading to transformative educational and social outcomes for marginalized populations.",

  objectives: [
    "Increase primary school enrollment among girls from four villages by 200 students annually",
    "Reduce female illiteracy rate by at least 30% within the first three years",
    "Improve adult literacy among 30 women through evening classes",
    "Enhance peaceful coexistence among host, returnee, and IDP communities through shared educational spaces",
    "Establish sustainable school management through community ownership and participation",
  ],

  keyActivities: [
    "Community mobilization, land acquisition, and School Management Committee formation",
    "Site preparation including land clearing, fencing, and sanitation facilities construction",
    "Construction of 4 classrooms, kitchen, staff room, office block, latrines, store, and borehole",
    "Recruitment and orientation of 5 qualified teachers",
    "Targeted enrollment campaigns across the four villages for girls and women",
    "Curriculum delivery with morning sessions for children and evening literacy for adult women",
    "School feeding program implementation through school garden and subsidized community water",
    "Monthly monitoring and evaluation of attendance, teacher performance, and academic progress",
  ],

  indicators: [
    { indicator: "Girls enrolled in primary school annually", target: "200" },
    { indicator: "Adult women enrolled in evening literacy classes", target: "30" },
    { indicator: "Reduction in female illiteracy rate", target: "30%" },
    { indicator: "Classrooms constructed and functional", target: "4" },
    { indicator: "Qualified teachers recruited and trained", target: "5" },
    { indicator: "Mixed student composition from all target community groups", target: "Achieved" },
  ],

  risksAndMitigation: [
    {
      risk: "Security instability affecting construction and school operations",
      mitigation: "Engage local security committees and maintain close coordination with community leaders",
    },
    {
      risk: "Cultural resistance to girls' education and women's literacy programs",
      mitigation: "Conduct extensive community sensitization and involve traditional leaders in planning",
    },
    {
      risk: "Limited community participation in school management",
      mitigation: "Establish clear governance structure with incentives for School Management Committee members",
    },
  ],

    budgetSummary: {
    annualBudget: "$231,642.85",
    fundingGoal: "$231,642.85",
    fundingGap: "$231,642.85",
    },

    sustainabilityPlan:
      "School Management Committee (SMC) comprised of community stakeholders will oversee operations. School garden will provide food for feeding program and potential income. Community ownership model ensures long-term maintenance and operation. Adult literacy graduates may become future teachers or tutors.",

    evidenceOfImpact: [],

  donationAnchors: [
    { amount: "$35", description: "Provides one desk for a student" },
    { amount: "$250", description: "Funds one teacher's salary for one month" },
    { amount: "$1,000", description: "Supports school feeding program for one month" },
    { amount: "$3,000", description: "Constructs one classroom with basic materials" },
    { amount: "$13,000", description: "Drills the borehole for clean water access" },
    { amount: "$50,000", description: "Funds teacher salaries and training for one year" },
    { amount: "$141,712", description: "Covers complete school construction materials and labor" },
  ],
  },

  {
    id: 5,
    slug: "peacebuilding",
    sector: "Peace & Governance",
    status: "Critical",
    icon: Handshake,
    color: "orange",
    image: "/images/peace.jpg",

    summary: {
      title: "Peace & Reconciliation Initiative",
      shortDescription:
        "Supporting dialogue, reconciliation, and local peacebuilding in conflict-affected communities.",
      overview:
        "We employ locally-led approaches to peacebuilding, combining traditional conflict resolution mechanisms with modern mediation techniques to address both immediate conflicts and underlying tensions in South Sudan's conflict-prone regions.",
      location: ["Conflict-Affected Areas", "Rumbek", "Jonglei", "Unity State"],
      duration: "Since 2020",
    },

    problemStatement:
      "Decades of conflict have created deep-seated inter-communal tensions, cattle raiding cycles, and resource-based conflicts that undermine development efforts and perpetuate violence, displacement, and human suffering.",

    targetBeneficiaries: {
      primary: "Conflict-affected communities, youth at risk of violence, women peacebuilders, traditional leaders",
      estimatedNumber: 5000,
      demographics: ["Youth (15-35)", "Women", "Traditional leaders", "Displaced populations"],
    },

    theoryOfChange:
      "If communities engage in structured dialogue, build local peace committees, and address root causes of conflict through traditional and modern peacebuilding approaches, then sustainable peace will be achieved, creating conditions for development and prosperity.",

    objectives: [
      "Establish peace committees in 50 conflict-prone communities",
      "Train 300 youth as peace ambassadors in their communities",
      "Facilitate 100 inter-community dialogues and reconciliation events",
      "Support women's participation in 80% of peace processes",
      "Document and promote 20 traditional peace agreements",
    ],

    keyActivities: [
      "Community peace committee formation and training",
      "Inter-community dialogue and mediation sessions",
      "Youth peace ambassador training programs",
      "Women's peace leadership development",
      "Trauma healing and reconciliation workshops",
    ],

    indicators: [
      { indicator: "Peace committees established", target: "50" },
      { indicator: "Youth peace ambassadors trained", target: "300" },
      { indicator: "Inter-community dialogues facilitated", target: "100" },
      { indicator: "Women's participation in peace processes", target: "80%" },
    ],

    risksAndMitigation: [
      {
        risk: "Escalation of violence during peace processes",
        mitigation: "Work through trusted intermediaries and ensure security protocols",
      },
      {
        risk: "Political interference in community peace efforts",
        mitigation: "Maintain neutrality and build broad-based community ownership",
      },
    ],

    budgetSummary: {
      annualBudget: "$150,000",
      fundingGoal: "$200,000",
      fundingGap: "$195,000",
    },

    sustainabilityPlan:
      "Build local ownership through community peace funds, establish traditional peace institutions, and develop early warning systems managed by local committees to ensure long-term conflict prevention.",

    evidenceOfImpact: [],

    donationAnchors: [
      { amount: "$50", description: "Funds a community peace dialogue for 20 participants" },
      { amount: "$150", description: "Trains one youth peace ambassador for 3 months" },
      { amount: "$400", description: "Supports a women's mediation workshop for 15 leaders" },
      { amount: "$1,000", description: "Establishes a peace resource center in a conflict zone" },
    ],
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

//stories
export const stories: Story[] = [
  {
    slug: "church-built-mathiang",
    title: "Church Built in Mathiang Becomes Community Hub",
    excerpt: "More than 300 residents now have a spiritual home and space for youth gatherings, Sunday school, and community events.",
    category: "Evangelism",
    program: "Church Development",
    location: "Mathiang Village",
    date: "2025-03-15",
    readTime: "4 min read",
    coverImage: "/images/school-project.jpg",
    status: "report",
    impact: {
      beneficiaries: 300,
      duration: "6 months",
      outputs: [
        "Church building constructed and furnished",
        "Weekly worship services established",
        "Youth and community meetings hosted"
      ]
    }
  },
  {
    slug: "education-crisis",
    title: "Education Crisis: Help Us Get More Kids in School",
    excerpt: "Thousands of displaced or impoverished children remain out of school due to conflict, poverty, and displacement.",
    category: "Education",
    program: "Education Support",
    location: "South Sudan",
    date: "2025-02-20",
    readTime: "4 min read",
    coverImage: "https://brokenchalk.org/wp-content/uploads/2023/08/South-Sudan_Windle-Trust.jpg",
    status: "report",
    impact: {
      beneficiaries: 1200,
      duration: "1 academic year",
      outputs: [
        "School fees and learning materials provided",
        "Psychosocial support sessions conducted",
        "Community outreach to identify out-of-school children"
      ]
    }
  },
  {
    slug: "education-support-vulnerable-students",
    title: "Education Support Program Empowers Vulnerable Students",
    excerpt: "Through scholarships, learning materials, and mentorship, CCSO supported vulnerable children to remain in school and pursue their education.",
    category: "Education",
    program: "Education Support",
    location: "Multiple Counties, South Sudan",
    date: "2025-03-30",
    readTime: "6 min read",
    coverImage: "https://brokenchalk.org/wp-content/uploads/2023/06/South-Sudan_Oxfam-Girl-Education-Project.jpg",
    status: "report",
    impact: {
      beneficiaries: 200,
      duration: "Academic year",
      outputs: [
        "School fees and uniforms provided",
        "Learning kits distributed",
        "Mentorship and psychosocial support"
      ]
    }
  },
  {
    slug: "emergency-food-relief-lakes-state",
    title: "Emergency Food Relief Reaches 1,500 Families in Lakes State",
    excerpt: "CCSO responded swiftly to severe flooding in Rumbek East by distributing emergency food supplies to vulnerable households.",
    category: "Emergency",
    program: "Emergency Response",
    location: "Rumbek East County, Lakes State",
    date: "2025-04-30",
    readTime: "5 min read",
    coverImage: "/images/food8.jpg",
    status: "report",
    impact: {
      beneficiaries: 1500,
      duration: "3 months",
      outputs: [
        "Food parcels distributed to flood-affected households",
        "Emergency coordination with local leaders"
      ]
    }
  },
  {
    slug: "flood-food-crisis",
    title: "Communities Face Urgent Flood and Food Crises",
    excerpt: "Ongoing floods and food shortages have devastated several regions, displacing families and disrupting livelihoods.",
    category: "Emergency",
    program: "Emergency Response",
    location: "Multiple Counties",
    date: "2025-03-01",
    readTime: "5 min read",
    coverImage: "/images/floods3.jpg",
    status: "report",
    impact: {
      beneficiaries: 2200,
      duration: "3 months",
      outputs: [
        "Emergency food distributions conducted",
        "Clean water provided to flood-affected households",
        "Shelter materials distributed"
      ]
    }
  },
  {
    slug: "peace-training-youth-community-leaders",
    title: "Peace Training Program Engages Youth and Community Leaders",
    excerpt: "CCSO brought together youth and local leaders for peacebuilding and reconciliation training aimed at reducing conflict and fostering social cohesion.",
    category: "Peace",
    program: "Peace & Reconciliation",
    location: "Rumbek Town, Western Lakes State",
    date: "2025-04-20",
    readTime: "4 min read",
    coverImage: "/images/peace-project.jpg",
    status: "report",
    impact: {
      beneficiaries: 5000,
      duration: "2 months",
      outputs: [
        "Peacebuilding workshops for youth and elders",
        "Dialogue forums between conflicting groups",
        "Training on non-violent conflict resolution"
      ]
    }
  },
  {
    slug: "supporting-local-farmers",
    title: "Sowing Seeds of Hope: Supporting Local Farmers",
    excerpt: "CCSO is helping families recover from food insecurity through sustainable agriculture and seed distribution.",
    category: "Agriculture",
    program: "Food Security & Livelihoods",
    location: "Rural Communities",
    date: "2025-01-25",
    readTime: "3 min read",
    coverImage: "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg",
    status: "report",
    impact: {
      beneficiaries: 800,
      duration: "4 months",
      outputs: [
        "Drought-resistant seeds distributed",
        "Farming tools provided",
        "Training on sustainable agriculture conducted"
      ]
    }
  }
];

//docs
export const documentCategories = [
    {
      id: "legal",
      title: "Legal & Registration",
      description: "Official registration documents and legal compliance",
      icon: Shield,
      color: "bg-blue-100 text-blue-800 border-blue-200",
      documents: [
        {
          title: "Certificate of Registration",
          description: "Official NGO registration with Relief & Rehabilitation Commission (RRC)",
          year: "2019",
          type: "PDF",
          size: "1.2 MB",
          downloadUrl: "/documents/legal/registration-certificate.pdf",
          public: true
        },
        {
          title: "Constitution & Bylaws",
          description: "Governing documents and organizational structure",
          year: "2020",
          type: "PDF",
          size: "850 KB",
          downloadUrl: "/docs/ccso-laws.pdf",
          public: true
        },
                {
          title: "Concept & Strategy",
          description: "CCSO Concept & Strategy",
          year: "2020",
          type: "PDF",
          size: "850 KB",
          downloadUrl: "/docs/ccso-concept.pdf",
          public: true
        },
      ]
    },
  ];
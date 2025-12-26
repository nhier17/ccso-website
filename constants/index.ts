import {
   Droplets, 
   Sprout, 
   Handshake, 
   Heart, 
   GraduationCap 
  } from "lucide-react";

export const navbarLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Get Involved", path: "/get-involved"},
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

// constants/focusAreas.ts
export const FOCUS_AREAS = [
  {
    id: 1,
    title: "Food Security",
    description:
      "Supporting sustainable farming and climate-smart food production.",
    img: "/images/food4.JPG",
  },
  {
    id: 2,
    title: "Health & Hygiene",
    description:
      "Improving health through clean water, sanitation, and community education.",
    img: "/images/health.jpg",
  },
  {
    id: 3,
    title: "Peace & Reconciliation",
    description:
      "Strengthening social cohesion through dialogue and peacebuilding.",
    img: "/images/peace.jpg",
  },
  {
    id: 4,
    title: "Education",
    description:
      "Expanding access to education, literacy, and youth mentorship.",
    img: "/images/education.jpg",
  },
  {
    id: 5,
    title: "Community Empowerment",
    description:
      "Building skills, leadership, and locally driven development solutions.",
    img: "/images/empower.jpg",
  },
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

export const impactStories = [
  {
    image: "/images/impact4.jpg",
    title: "Renewed Hope and Spiritual Growth",
    description:
      "Through community-led evangelism, individuals and families are finding renewed hope, healing, and spiritual encouragement in the midst of hardship.",
  },
  {
    image: "/images/impact.jpg",
    title: "Access to Clean and Safe Water",
    description:
      "Reliable access to clean water is reducing illness and easing the daily burden faced by women and children in underserved communities.",
  },
  {
    image: "/images/impact2.jpg",
    title: "Children Staying in School",
    description:
      "Children once at risk of dropping out are now learning in safer, more supportive environments with access to essential school materials.",
  },
  {
    image: "/images/impact3.jpg",
    title: "Communities Rebuilding Trust",
    description:
      "Dialogue and cultural engagement are helping formerly divided communities rebuild trust, understanding, and peaceful coexistence.",
  },
  {
    image: "/images/impact5.png",
    title: "Stronger Livelihoods Through Farming",
    description:
      "Smallholder farmers are improving harvests and household stability through practical, community-based farming practices.",
  },
];


// constants/footerLinks.js
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
    location: "Rumbet East",
    category: "Food and Hygiene",
    overview:
      "Following devastating floods in Lakes State, thousands of families were left without food and clean water. CCSO responded swiftly by organizing an emergency food distribution program to ensure affected communities had immediate access to essential supplies.",
    impact:
      "This project directly impacted **1,500+ families**, providing them with nutritious food packs. Through strong community partnerships, we ensured timely and effective aid distribution to the most affected areas.",
    futureGoals:
      "To continue strengthening food security efforts, CCSO is working on developing a **long-term agricultural resilience program**, enabling communities to grow their own food and reduce dependency on emergency aid.",
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
    overview:
      "The Education Support Program by CCSO was launched to address the widespread educational gaps faced by South Sudanese children, especially those displaced or affected by conflict. With support from well-wishers and sponsors, we provide tuition assistance, essential school supplies, and mentoring to vulnerable students across South Sudan and neighboring regions.",
    impact:
      "So far, CCSO has sponsored **over 200 students** to complete their primary, secondary, and tertiary education. We have distributed **1,000+ learning kits** and facilitated mentorships, with **85% of sponsored students** completing their academic year successfully.",
    futureGoals:
      "We aim to **build two fully equipped schools** in underserved rural areas and **expand our scholarship initiative** to reach **at least 500 students annually**, with a strong emphasis on supporting girls' education.",
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
    overview:
      "CCSO spearheaded the construction of a permanent church building in Mathiang to provide a dedicated place of worship, spiritual guidance, and community gathering. The project emerged from the need to replace temporary makeshift structures that were vulnerable to weather and lacked the capacity to serve the growing congregation.",
    impact:
      "The new church building now accommodates over 300 congregants and doubles as a space for community events, prayer meetings, youth fellowship, and Sunday school activities. It strengthens the spiritual fabric of the community and provides a safe, dignified environment for faith-based programs.",
    futureGoals:
      "CCSO plans to furnish the church with essential interior fittings, expand its outreach programs, and support leadership training for local pastors and youth leaders to foster sustainable community development through faith.",
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
    overview:
      "Recognizing the urgent need for conflict resolution, CCSO launched a peace awareness program to **foster reconciliation and social cohesion** in communities affected by inter-ethnic conflicts.",
    impact:
      "Over **5,000 people** participated in peace dialogues and reconciliation workshops, leading to **reduced community tensions** and stronger social bonds.",
    futureGoals:
      "CCSO is committed to **expanding peace awareness programs** across other conflict-affected regions and **training local peace ambassadors** to sustain long-term harmony.",
  },
];


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


export const impactStats = [
  { number: "10K+", label: "Lives Impacted", color: "text-blue-600" },
  { number: "5+", label: "Projects Completed", color: "text-green-600" },
  { number: "25+", label: "Communities Reached", color: "text-orange-600" },
  { number: "20K+", label: "Aid Delivered", color: "text-purple-600" },
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

    impact: {
      currentLabel: "People Served",
      currentValue: 100,
      goalLabel: "Target by 2025",
      goalValue: 1000,
      progress: 10,
    },

    highlights: [
      { label: "Water Points Built", value: "2" },
      { label: "Communities Served", value: "2" },
    ],
  },

  {
    id: 2,
    slug: "agriculture",
    icon: Sprout,
    title: "Agricultural Empowerment Program",
    shortDescription:
      "Equipping farmers with sustainable agriculture skills, tools, and cooperative support to strengthen food security.",
    location: "Rumbek East",
    status: "Expanding",
    color: "green",
    image: "/images/food3.JPG",

    impact: {
      currentLabel: "Farmers Trained",
      currentValue: 200,
      goalLabel: "Target by 2025",
      goalValue: 5000,
      progress: 5,
    },

    highlights: [
      { label: "Farmers Trained", value: "200" },
      { label: "Cooperatives Formed", value: "12" },
    ],
  },

  {
    id: 3,
    slug: "healthcare",
    icon: Heart,
    title: "Healthcare & Wellness Program",
    shortDescription:
      "Delivering essential healthcare through mobile clinics, maternal health services, and community education.",
    location: "Remote Communities, Rumbek East",
    status: "Growing",
    color: "red",
    image: "/images/health1.jpeg",

    impact: {
      currentLabel: "Consultations",
      currentValue: 100,
      goalLabel: "Target by 2025",
      goalValue: 1000,
      progress: 10,
    },

    highlights: [
      { label: "Consultations", value: "100" },
      { label: "Health Workers Trained", value: "10" },
    ],
  },

  {
    id: 4,
    slug: "education",
    icon: GraduationCap,
    title: "Education & Skills Development",
    shortDescription:
      "Expanding access to literacy, vocational training, and youth development opportunities.",
    location: "Juba, Wau, Rumbek",
    status: "Active",
    color: "purple",
    image: "/images/education.jpg",

    impact: {
      currentLabel: "Graduates",
      currentValue: 100,
      goalLabel: "Target by 2025",
      goalValue: 2500,
      progress: 4,
    },

    highlights: [
      { label: "Literacy Graduates", value: "100" },
      { label: "Youth Trained", value: "100" },
    ],
  },

  {
    id: 5,
    slug: "peacebuilding",
    icon: Handshake,
    title: "Peace & Reconciliation Initiative",
    shortDescription:
      "Supporting dialogue, reconciliation, and local peacebuilding in conflict-affected communities.",
    location: "Conflict-Affected Areas, Rumbek",
    status: "Critical",
    color: "orange",
    image: "/images/peace.jpg",

    impact: {
      currentLabel: "Communities Engaged",
      currentValue: 20,
      goalLabel: "Target by 2025",
      goalValue: 50,
      progress: 40,
    },

    highlights: [
      { label: "Peace Dialogues", value: "78" },
      { label: "Agreements Reached", value: "15" },
    ],
  },
];


//blog posts
export const blogPosts = [
  {
    id: 1,
    title: "Emergency Food Relief Reaches 1,500 Families in Lakes State",
    excerpt: "CCSO responded swiftly to severe flooding in Rumbek East by distributing food to over 1,500 affected families.",
    category: "food and hygiene",
    date: "April 30, 2025",
    readTime: "5 min read",
    image: "/images/food8.jpg",
    featured: true,
    content: `
      <p>For generations, the women and children of Rumbek village spent hours each day walking miles to collect water from a distant, often contaminated source. This daily burden not only consumed valuable time but also contributed to widespread waterborne illnesses in the community.</p>
      
      <p>Through the generous support of our donors and partners, CCSO was able to implement a comprehensive water project in Rumbek. This initiative involved drilling a deep well, installing a solar-powered pump system, and constructing water distribution points throughout the village.</p>
      
      <h3>Community Involvement</h3>
      <p>From the beginning, community members were actively involved in the project. Local leaders formed a water management committee responsible for overseeing construction, establishing usage guidelines, and collecting small maintenance fees to ensure sustainability.</p>
      
      <p>Community members contributed labor for construction, digging trenches for pipelines and helping build the water points. This participation created a sense of ownership and pride in the project.</p>
      
      <h3>Immediate Impact</h3>
      <p>The impact of reliable water access was immediately apparent. Women and children no longer spent hours collecting water, allowing more time for education, income-generating activities, and family care. Waterborne diseases decreased dramatically, reducing medical expenses and improving overall health.</p>
      
      <p>The local school reported increased attendance, particularly among girls who previously missed classes due to water collection duties.</p>
      
      <h3>Long-Term Sustainability</h3>
      <p>To ensure long-term success, CCSO provided technical training to community members for basic maintenance and repairs. The water management committee established a transparent financial system for collecting and managing maintenance funds.</p>
      
      <p>Regular monitoring visits by CCSO staff help identify and address any challenges before they become major issues.</p>
      
      <h3>Looking Forward</h3>
      <p>The Rumbek water project serves as a model for our work in other communities. The combination of appropriate technology, community involvement, and sustainable management practices has created a lasting solution to a critical need.</p>
      
      <p>We are grateful to all who supported this project and continue to partner with us in bringing clean water to vulnerable communities across South Sudan.</p>
    `
  },
  {
    id: 2,
    title: "Peace Program Engages Over 5,000 for Reconciliation",
    excerpt: "Our Peace and Reconciliation initiative has successfully brought together over 5,000 individuals for dialogue and healing.",
    category: "peace",
    date: "April 20, 2025",
    readTime: "4 min read",
    image: "/images/peace-project.jpg",
    content: `
      <p>CCSO’s Peace and Reconciliation Program has fostered dialogue across divided communities by hosting forums, workshops, and community gatherings aimed at restoring trust and harmony.</p>
      <p>Participants shared personal stories of conflict, loss, and hope, creating an environment of mutual understanding and healing. Through traditional dispute resolution methods and modern peacebuilding strategies, we helped rebuild fractured relationships.</p>
      <p>The engagement of youth, women, and elders was crucial to this success, ensuring inclusivity and long-lasting peace outcomes.</p>
    `
  },
  {
    id: 3,
    title: "Education Support Empowers Over 200 South Sudanese Students",
    excerpt: "From tuition to learning kits, our sponsorship program has helped hundreds of vulnerable students pursue their dreams.",
    category: "education",
    date: "March 30, 2025",
    readTime: "6 min read",
    image: "https://brokenchalk.org/wp-content/uploads/2023/06/South-Sudan_Oxfam-Girl-Education-Project.jpg",
    content: `
      <p>Access to education is life-changing. CCSO provided school fees, uniforms, and essential learning materials to over 200 students, many of whom had dropped out due to poverty.</p>
      <p>We collaborated with local schools to monitor academic progress and address barriers to learning, such as child labor and early marriage. Girls received additional mentorship and menstrual hygiene kits.</p>
      <p>Parents expressed renewed hope for their children's future as school attendance improved and dropout rates declined.</p>
    `
  },
  {
    id: 4,
    title: "Church Built in Mathiang Becomes Community Hub",
    excerpt: "More than 300 residents now have a spiritual home and space for youth gatherings, Sunday school, and community events.",
    category: "evangelism",
    date: "March 15, 2025",
    readTime: "4 min read",
    image: "/images/school-project.jpg",
    content: `
      <p>CCSO supported the construction of a church in Mathiang village, which now serves as a multipurpose center for worship, youth engagement, and community meetings.</p>
      <p>Residents volunteered time and materials for construction, while church leaders developed a schedule for weekly services and community outreach events.</p>
      <p>This project has strengthened spiritual life and social bonds within the village, creating a safe space for dialogue, learning, and growth.</p>
    `
  },
  {
    id: 5,
    title: "Communities Face Urgent Flood and Food Crises",
    excerpt: "Ongoing floods and food shortages have devastated several regions. We're working to deliver emergency aid—but we need your help.",
    category: "emergency",
    date: "March 1, 2025",
    readTime: "5 min read",
    image: "/images/floods3.jpg",
    content: `
      <p>Severe flooding in multiple counties has displaced families, destroyed farmland, and disrupted food supply chains. CCSO’s rapid response teams are on the ground delivering life-saving assistance.</p>
      <p>Food packs, clean water, and shelter materials are being distributed to the most affected areas. We're also assessing long-term recovery needs including crop rehabilitation and water infrastructure repairs.</p>
      <p>Your support is critical in reaching more families and preventing further suffering during this crisis.</p>
    `
  },
  {
    id: 6,
    title: "Education Crisis: Help Us Get More Kids in School",
    excerpt: "Thousands of displaced or impoverished children remain out of school. Join our mission to change that.",
    category: "education",
    date: "February 20, 2025",
    readTime: "4 min read",
    image: "https://brokenchalk.org/wp-content/uploads/2023/08/South-Sudan_Windle-Trust.jpg",
    content: `
      <p>Barriers to education such as displacement, poverty, and gender inequality have left thousands of South Sudanese children without access to learning.</p>
      <p>CCSO is working with local communities to identify out-of-school children and provide them with scholarships, school materials, and psychosocial support.</p>
      <p>Your donations help us expand our reach and ensure every child has the opportunity to learn and thrive.</p>
    `
  },
  {
    id: 7,
    title: "Sowing Seeds of Hope: Supporting Local Farmers",
    excerpt: "CCSO is helping families bounce back from food insecurity with sustainable agriculture and seed distributions.",
    category: "agriculture",
    date: "January 25, 2025",
    readTime: "3 min read",
    image: "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: `
      <p>With funding from our partners, CCSO has launched a program to support smallholder farmers with drought-resistant seeds, tools, and training in sustainable farming practices.</p>
      <p>Farmers have already begun harvesting improved yields, boosting food security and income in their communities.</p>
      <p>We believe that investing in agriculture is key to building resilience and ensuring long-term development in South Sudan.</p>
    `
  }
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


export const testimonials = [
  {
    quote: "CCSO's work has transformed communities. Their dedication to sustainable development is inspiring.",
    author: "Jane Smith",
    role: "Corporate Partner",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    quote: "Being a volunteer with CCSO has been life-changing. The impact we make is real and measurable.",
    author: "John Davis",
    role: "Volunteer",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    quote: "Their transparent approach and effective use of resources made us confident in our partnership.",
    author: "Sarah Johnson",
    role: "Foundation Director",
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  }
];

export const testimonialsData = [
  {
    name: 'Mary Akuol',
    role: 'Community Leader, Rumbek',
    content: 'CCSO brought us clean water for the first time in decades. Our children no longer walk hours to fetch water, and they can now attend school regularly. This has transformed our entire community.',
    avatar: 'https://images.pexels.com/photos/8090034/pexels-photo-8090034.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
  },
  {
    name: 'Joseph Marial',
    role: 'Pacong',
    content: 'The agricultural training I received from CCSO has doubled my harvest. I can now feed my family and sell surplus crops at the market. Their approach respects our traditional knowledge while teaching new techniques.',
    avatar: 'https://images.pexels.com/photos/8090032/pexels-photo-8090032.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
  },
  {
    name: 'Sarah Aweng',
    role: 'Mother of 4, Yirol',
    content: 'The health education program saved my youngest child\'s life. CCSO taught us about nutrition and disease prevention. Their mobile clinic provides care when we need it most, with dignity and respect.',
    avatar: 'https://images.pexels.com/photos/8090037/pexels-photo-8090037.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
  },
];

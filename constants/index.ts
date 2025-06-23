import { Droplets, Sprout, Handshake, Heart, GraduationCap } from "lucide-react";

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
      "Enhancing agricultural skills and technologies to ensure food security.",
    img: "/images/food4.JPG",
  },
  {
    id: 2,
    title: "Health & Hygiene",
    description:
      "Promoting hygiene, sanitation, and access to safe drinking water.",
    img: "/images/health.jpg",
  },
  {
    id: 3,
    title: "Peace & Reconciliation",
    description: "Building peace and reconciliation among communities.",
    img: "/images/peace.jpg",
  },
  {
    id: 4,
    title: "Education",
    description:
      "Empowering communities through education and adult literacy programs.",
    img: "/images/education.jpg",
  },
  {
    id: 5,
    title: "Empowerment",
    description:
      "Restoring dignity and self-respect through community-driven development.",
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
    amount: 30,
    title: "Community Builder",
    description: "Provides clean water to a family for one month",
    impact: "Helps 1 family access clean water",
  },
  {
    amount: 50,
    title: "Hope Provider",
    description: "Feeds a family for a week",
    impact: "Supports 1 family with essential nutrition",
    recommended: true,
  },
  {
    amount: 100,
    title: "Future Maker",
    description: "Sponsors a child's education for one month",
    impact: "Enables 1 child to attend school",
  },
  {
    amount: 250,
    title: "Village Champion",
    description: "Helps build sustainable farming projects",
    impact: "Empowers an entire community",
  },
];

export const impactStats = [
  { number: "10K+", label: "Lives Impacted", color: "text-blue-600" },
  { number: "5+", label: "Projects Completed", color: "text-green-600" },
  { number: "25+", label: "Communities Reached", color: "text-orange-600" },
  { number: "20K+", label: "Aid Delivered", color: "text-purple-600" },
];

export const campaigns = [
  { name: "Water Wells Project", progress: 5, goal: "10,000", raised: "500" },
  { name: "Education Program", progress: 10, goal: "50,000", raised: "5,000" },
  { name: "Healthcare Initiative", progress: 5, goal: "200,000", raised: "5,000" },
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

//leaders 
export const leaders = [
  {
    name: "Bishop Joseph Maker Atot",
    role: "Founder & Executive Director",
    bio: "As Founder and Executive Director, Bishop Joseph Maker Atot provides visionary leadership, drawing on his deep experience in ministry and community development to guide CCSO's mission across South Sudan.",
    image: "/images/leader1.jpg"
  },
  {
    name: "Rebecca Achol Majak",
    role: "Deputy Chairperson",
    bio: "Rebecca supports the strategic direction of CCSO by collaborating closely with stakeholders and ensuring that the organization's initiatives align with community needs and development goals.",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_960_720.png"
  },
  {
    name: "Hellena Ding Maker",
    role: "Secretary",
    bio: "Hellena oversees organizational communication, documentation, and record-keeping, ensuring smooth internal operations and transparent reporting at CCSO.",
    image: "/images/leader5.jpg"
  },
  {
    name: "Abraham Nhier",
    role: "IT and Software Development",
    bio: "Abraham manages CCSO’s technology initiatives, developing digital solutions that enhance communication, data management, and program efficiency across the organization.",
    image: "/images/leader3.JPEG"
  },
  {
    name: "James Magok Chilim",
    role: "Information Officer",
    bio: "James leads CCSO’s information management efforts, ensuring accurate data collection, reporting, and community outreach to support informed decision-making and transparency.",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_960_720.png"
  },
  {
    name: "Mary Atueny",
    role: "Finance Manager",
    bio: "Mary oversees the financial operations of CCSO, managing budgets, financial reporting, and compliance to ensure resources are used effectively and responsibly.",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_960_720.png"
  }
];

//history 
export const history = [
  {
    year: "2019",
    title: "CCSO Is Founded",
    description: "Rev. Joseph Maker Atot establishes CCSO,  aiming to restore dignity and hope to displaced and vulnerable communities through faith-based, community-driven development."
  },
  {
    year: "2019",
    title: "Education Initiative Begins",
    description: "Start of our education program where various students receive scholarships and support for their education."
  },
  {
    year: "2021",
    title: "Peace-Building Focus",
    description: "Our peace and reconciliation program is launched to foster dialogue and healing in conflict-affected communities, promoting unity and social cohesion."
  },
  {
    year: "2022",
    title: "Growth in Evangelism",
    description: "We expand our evangelism efforts with the construction of Mathiang Church, reaching remote communities with the life-transforming message of the gospel."
  },
  {
    year: "2023",
    title: "Health awareness campaign",
    description: "CCSO rolls out a comprehensive health awareness program focusing on HIV/AIDS education, reducing stigma, and improving health outcomes across local communities."
  },
  {
    year: "2024",
    title: "First Food Relief Program",
    description: "In response to devastating floods, CCSO launches its first large-scale food relief initiative, delivering life-saving supplies to families in crisis."
  },
  {
    year: "2025",
    title: "Global Partnerships Appeal",
    description: "CCSO launches a global appeal for partnerships to expand its reach and impact, ensuring sustainable development and empowerment for communities in need."
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
      title: "One-Time Donation", 
      desc: "Make a single contribution to support our programs and initiatives."
    },
    {
      title: "Monthly Giving",
      desc: "Become a regular supporter with a monthly donation to help us plan for the future."
    },
    {
      title: "Sponsor a project",
      desc: "Fund a specific program or initiative aligned with your interests."
    }
  ],
  benefits: [
    "$25 can provide school supplies for a child",
    "$25 can provide school supplies for a child",
    "$50 can support a farmer with seeds and tools",
    "$100 can help provide clean water access",
    "$250 can sponsor a peace-building workshop"
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
      id: 'clean-water',
      icon: Droplets,
      title: 'Clean Water Access Initiative',
      description: 'Building sustainable water points and training communities in maintenance to ensure long-term access to clean, safe drinking water.',
      longDescription: 'Our flagship program addresses the critical water crisis in Western Lakes State. We construct boreholes, hand pumps, and water storage systems while training local technicians for maintenance. Each water point serves 300-500 people and includes hygiene education programs.',
      impact: {
        current: '100 people served',
        goal: '1,000 people by 2025',
        progress: 2,
      },
      location: 'Rumbek East, Rumbek Center',
      status: 'Active',
      color: 'blue',
      image: '/images/water.png',
      stats: [
        { label: 'Water Points Built', value: '2' },
        { label: 'Communities Served', value: '2' },
        { label: 'Maintenance Technicians Trained', value: '15' },
      ],
      outcomes: [
        'Reduce waterborne diseases by 70% in served communities',
        'Increase children attendance in school by 45%',
        'Save 3-4 hours daily previously spent fetching water',
      ],
    },
    {
      id: 'agriculture',
      icon: Sprout,
      title: 'Agricultural Empowerment Program',
      description: 'Training farmers in sustainable agriculture techniques, providing seeds and tools, and establishing cooperatives for food security.',
      longDescription: 'We empower smallholder farmers with modern agricultural techniques while respecting traditional knowledge. Our program includes seed distribution, tool provision, irrigation training, and cooperative formation for better market access.',
      impact: {
        current: '200 farmers trained',
        goal: '5,000 farmers by 2025',
        progress: 5,
      },
      location: 'Rumbek East',
      status: 'Expanding',
      color: 'green',
      image: '/images/food3.jpg',
      stats: [
        { label: 'Farmers Trained', value: '200' },
        { label: 'Cooperatives Formed', value: '12' },
        { label: 'Hectares Under Cultivation', value: '1,200' },
      ],
      outcomes: [
        'Increase average crop yield by 85%',
        'Improve food security for 8,500+ family members',
        'Increase farmer income by 120% on average',
      ],
    },
    {
      id: 'healthcare',
      icon: Heart,
      title: 'Healthcare & Wellness Program',
      description: 'Mobile health clinics, maternal health programs, and community health education to improve wellness outcomes.',
      longDescription: 'Our healthcare initiative brings medical services directly to remote communities through mobile clinics. We focus on maternal health, child nutrition, disease prevention, and training community health workers.',
      impact: {
        current: '100 consultations provided',
        goal: '1,000 consultations by 2025',
        progress: 5,
      },
      location: 'Remote Communities, Rumbek East',
      status: 'Growing',
      color: 'red',
      image: '/images/health1.jpeg',
      stats: [
        { label: 'Medical Consultations', value: '100' },
        { label: 'Community Health Workers', value: '10' },
        { label: 'Maternal Health Sessions', value: '320' },
      ],
      outcomes: [
        'Reduce maternal mortality by 40% in target areas',
        'Decrease childhood malnutrition by 35%',
        'Increase vaccination coverage to 78%',
      ],
    },
    {
      id: 'education',
      icon: GraduationCap,
      title: 'Education & Skills Development',
      description: 'Adult literacy programs, vocational training, and youth development initiatives to build community capacity.',
      longDescription: 'We believe education is the foundation of sustainable development. Our programs include adult literacy classes, vocational skills training, youth leadership development, and scholarship support for promising students.',
      impact: {
        current: '100 graduates',
        goal: '2,500 graduates by 2025',
        progress: 5,
      },
      location: 'Juba, Wau, Nairobi, Uganda',
      status: 'Active',
      color: 'purple',
      image: '/images/education.jpg',
      stats: [
        { label: 'Adult Literacy Graduates', value: '100' },
        { label: 'Vocational Training Graduates', value: '100' },
        { label: 'Youth Leaders Trained', value: '100' },
      ],
      outcomes: [
        'Increase adult literacy rate from 15% to 65%',
        'Increase youth employment rate by 60%',
        'Increase women\'s participation in leadership roles by 100%',
      ],
    },
    {
      id: 'peacebuilding',
      icon: Handshake,
      title: 'Peace & Reconciliation Initiative',
      description: 'Community dialogue programs, conflict resolution training, and inter-tribal reconciliation efforts.',
      longDescription: 'In a region affected by conflict, we facilitate dialogue between communities, train local peace ambassadors, and support reconciliation processes. Our approach combines traditional conflict resolution with modern peacebuilding techniques.',
      impact: {
        current: '101 communities engaged',
        goal: '50 communities by 2025',
        progress: 20,
      },
      location: 'Conflict-Affected Areas, Rumbek',
      status: 'Critical',
      color: 'orange',
      image: '/images/peace.jpg',
      stats: [
        { label: 'Peace Dialogues Facilitated', value: '78' },
        { label: 'Peace Ambassadors Trained', value: '120' },
        { label: 'Reconciliation Agreements', value: '15' },
      ],
      outcomes: [
        'Reduce violent conflicts by 65% in target areas',
        'Resume inter-community trade in 12 locations',
        'Return displaced families to 8 communities',
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
    title: "Flood Crisis",
    description:
      "Heavy rains have displaced thousands, destroyed homes, and cut off vital infrastructure. Urgent support is needed to provide shelter, food, and medical aid to the affected families.",
    progress: 35,
    status: "Urgent",
    iconColor: "red",
    buttonText: "Help Now",
    img: "/images/floods3.jpg"
  },
  {
    id: 15,
    title: "Food Security Crisis",
    description:
      "Communities are struggling with hunger due to failed harvests, rising food prices, and limited access to supplies. Your support can help deliver emergency food packages and sustainable solutions.",
    progress: 5,
    status: "Critical",
    iconColor: "orange",
    buttonText: "Support Project",
    img: "/images/food8.jpg"
  },
  {
    id: 3,
    title: "Education Support",
    description:
      "Many children are out of school due to poverty, displacement, or lack of resources. Help us provide learning materials, school fees, and safe learning environments to secure their future.",
    progress: 5,
    status: "Important",
    iconColor: "yellow",
    buttonText: "Contribute",
    img: "https://brokenchalk.org/wp-content/uploads/2023/08/South-Sudan_Windle-Trust.jpg"
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

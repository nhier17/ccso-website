import { HeartPulse, Droplet, BookOpen, HandHelping, Users, Globe, Target, Trophy } from "lucide-react";
import { Program, Metric } from "@/types";

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
    location: "Lakes State",
    category: "Food and Hygiene",
    overview:
      "Following devastating floods in Lakes State, thousands of families were left without food and clean water. CCSO responded swiftly by organizing an emergency food distribution program to ensure affected communities had immediate access to essential supplies.",
    impact:
      "This project directly impacted **1,500+ families**, providing them with nutritious food packs. Through strong community partnerships, we ensured timely and effective aid distribution to the most affected areas.",
    futureGoals:
      "To continue strengthening food security efforts, CCSO is working on developing a **long-term agricultural resilience program**, enabling communities to grow their own food and reduce dependency on emergency aid.",
  },
  {
    id: "clean-water-project",
    title: "Clean Water Access Project",
    description: "Installed 5 water purification stations in rural areas, benefiting over 10,000 people.",
    imageSrc: [
      "https://i.pinimg.com/736x/f9/f5/d8/f9f5d807b2b44dc6fc7ba815713d11c8.jpg",
      "https://i.pinimg.com/736x/0b/8a/cc/0b8acc45bbe8361493f0b63219fe8c0a.jpg",
      "https://i.pinimg.com/736x/b9/88/34/b988345e8dc613832ee02f4aa929ede2.jpg"
    ],
    location: "Rumbek Center",
    category: "Food and Hygiene",
    overview:
      "Many rural communities in South Sudan suffer from limited access to clean drinking water, leading to high rates of waterborne diseases. This project aimed to **install five solar-powered water purification stations** in the most vulnerable areas.",
    impact:
      "Over **10,000 people** now have reliable access to safe drinking water. Health clinics reported a **35% decrease in waterborne diseases** within the first three months.",
    futureGoals:
      "CCSO plans to expand this initiative by installing **10 additional purification stations** and launching a **community-led water maintenance program** to ensure long-term sustainability.",
  },
  {
    id: "education-support",
    title: "Education Support Program",
    description: "Distributed learning materials and sponsored 200 students in remote villages.",
    imageSrc: [
      "https://brokenchalk.org/wp-content/uploads/2023/06/South-Sudan_Oxfam-Girl-Education-Project.jpg",
      "https://images.squarespace-cdn.com/content/v1/622788d3e3ba772c3c93eb9c/6cf909a6-721b-4e0a-9724-a2b15add9e2a/Yambio+01.jpg",
    ],
    location: "Yambio",
    category: "Education",
    overview:
      "Many children in remote South Sudanese villages struggle to access education due to a lack of resources and school infrastructure. Our program focuses on providing **school supplies, scholarships, and teacher training**.",
    impact:
      "We distributed **1,000+ learning materials** and **sponsored 200 students**, enabling them to continue their education. Over **85% of sponsored students** successfully completed their academic year.",
    futureGoals:
      "CCSO is committed to **building two new schools in rural areas** and **expanding our scholarship program to reach 500 students annually**.",
  },
  {
    id: "classroom-construction",
    title: "Classroom Construction Initiative",
    description: "Built modern classrooms, providing a safe learning environment for 300+ children.",
    imageSrc: [
      "/images/school-project.jpg",
      "/images/school-project3.jpg",
      "/images/school-project1.jpg",
    ],
    location: "Rumbek East",
    category: "Education",
    overview:
      "To address the lack of educational infrastructure, CCSO initiated the construction of modern classrooms in rural areas. This project aimed to provide **safe and conducive learning spaces** for children who previously studied in overcrowded or open-air environments.",
    impact:
      "The project delivered **3 fully equipped classrooms**, benefitting **300+ children** and improving educational outcomes by ensuring year-round learning in safe conditions.",
    futureGoals:
      "CCSO plans to **construct additional classrooms** and **train more local educators** to further enhance access to quality education in underserved communities.",
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

export const programs: Program[] = [
  {
    id: "healthcare",
    icon: HeartPulse,
    title: "Healthcare Support",
    desc: "Providing medical assistance & awareness.",
    longDesc: "Our healthcare program focuses on providing essential medical services, preventive care, and health education to underserved communities. We work with local healthcare providers and organize medical camps.",
    stats: { beneficiaries: "5,000+", locations: "2", success: "90%" },
    image: "https://i.pinimg.com/736x/c1/66/bb/c166bb210f5dbca72aec998b089f5019.jpg"
  },
  {
    id: "water",
    icon: Droplet,
    title: "Clean Water Access",
    desc: "Ensuring clean and safe drinking water.",
    longDesc: "Through our water program, we build wells, install filtration systems, and educate communities about water conservation and sanitation practices to prevent waterborne diseases.",
    stats: { wells: "5+", beneficiaries: "500+", villages: "10" },
    image: "/images/water.png"
  },
  {
    id: "education",
    icon: BookOpen,
    title: "Education Programs",
    desc: "Supporting children's education & literacy.",
    longDesc: "We believe education is key to breaking the cycle of poverty. Our program provides school supplies, builds classrooms, trains teachers, and offers scholarships to deserving students.",
    stats: { students: "2,000+", schools: "2", graduates: "1,200+" },
    image: "https://d1c337161ud3pr.cloudfront.net/bluedot/2016/02/03.3_Opinion-3_Big-2.jpg"
  },
  {
    id: "community",
    icon: HandHelping,
    title: "Community Empowerment",
    desc: "Skill training & self-reliance projects.",
    longDesc: "Our community empowerment initiatives focus on vocational training, microfinance support, and leadership development to help communities become self-sustainable.",
    stats: { trained: "3,000+", projects: "5", communities: "20" },
    image: "https://borgenproject.org/wp-content/uploads/Women-Peacemakers.jpg"
  }
];

export const impactMetrics: Metric[] = [
  { icon: Users, number: "20,000+", label: "Lives Impacted" },
  { icon: Globe, number: "4", label: "Payams" },
  { icon: Target, number: "5", label: "Years of Service" },
  { icon: Trophy, number: "20+", label: "Projects Completed" }
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
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Hellena Ding Maker",
    role: "Secretary",
    bio: "Hellena oversees organizational communication, documentation, and record-keeping, ensuring smooth internal operations and transparent reporting at CCSO.",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Mary Atueny",
    role: "Finance Manager",
    bio: "Mary oversees the financial operations of CCSO, managing budgets, financial reporting, and compliance to ensure resources are used effectively and responsibly.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

//history 
export const history = [
  {
    year: "2019",
    title: "CCSO Is Founded",
    description: "Rev. John Mading establishes CCSO to provide emergency relief to displaced persons in Western Lakes State."
  },
  {
    year: "2022",
    title: "First Agricultural Program",
    description: "Launch of our first sustainable agriculture program, training 200 farmers in improved techniques."
  },
  {
    year: "2023",
    title: "Education Initiative Begins",
    description: "Start of our education program with the construction of our first school in Rumbek."
  },
  {
    year: "2024",
    title: "Health Program Expansion",
    description: "Implementation of mobile health clinics to reach remote communities without healthcare access."
  },
  {
    year: "2024",
    title: "Peace-Building Focus",
    description: "Development of our peace and reconciliation program to address community conflicts."
  },
  {
    year: "2025",
    title: "International Partnerships",
    description: "Expansion of our work through key international partnerships and increased donor support."
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
//
export const upcomingEvents = [
  {
    title: "Annual Fundraising Gala",
    date: "October 15, 2025",
    location: "Nairobi, Kenya",
    description: "Join us for an evening of celebration, inspiration, and support for our work in South Sudan.",
    image: "https://images.pexels.com/photos/3321797/pexels-photo-3321797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Virtual Information Session",
    date: "November 5, 2025",
    location: "Online - Zoom",
    description: "Learn about our programs and impact in this informative virtual session with our team.",
    image: "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Volunteer Training Workshop",
    date: "December 10, 2025",
    location: "Juba, South Sudan",
    description: "Comprehensive training for new volunteers joining our field programs in South Sudan.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
export const programStats = {
  title: "Program Details",
  description: "Learn more about our key initiatives and how they're making a difference.",
  items: [
    {
      id: "agriculture",
      label: "Agriculture",
      title: "Food Security",
      description: "Our agricultural programs help communities achieve food security through sustainable farming methods, training, and resources.",
      image: "/images/impact5.png",
      features: [
        {
          title: "Sustainable Farming Training",
          description: "Training farmers in climate-smart agricultural techniques adapted to South Sudan's challenging environment."
        },
        {
          title: "Seed and Tool Distribution",
          description: "Providing quality seeds, tools, and resources to help farmers increase their yields."
        },
        {
          title: "Water Management",
          description: "Implementing irrigation systems and water management techniques to mitigate the impact of droughts."
        },
        {
          title: "Market Access Support",
          description: "Helping farmers connect to markets and increase their income from agricultural products."
        }
      ],
      impact: [
        "500+ farmers to be trained in sustainable techniques",
        "50% average increase in crop yields",
        "10+ communities to be achieved improved food security",
        "AIM: water management systems implementation"
      ]
    },
    {
      id: "education",
      label: "Education",
      title: "Education",
      description: "We believe education is the foundation for sustainable development and work to increase access to quality education.",
      image: "/images/partner.png",
      features: [
        {
          title: "School Infrastructure",
          description: "Building and rehabilitating schools in underserved communities to create safe learning environments."
        },
        {
          title: "Teacher Training",
          description: "Training and supporting teachers to improve the quality of education."
        },
        {
          title: "Adult Literacy Programs",
          description: "Providing literacy classes for adults to improve their skills and livelihood opportunities."
        },
        {
          title: "Educational Materials",
          description: "Supplying textbooks, school supplies, and learning materials to students and schools."
        }
      ],
      impact: [
        "20+ school to be built or rehabilitated",
        "1,000+ children to gain access to education",
        "20 teachers to be trained in modern teaching methods",
        "AIM: literacy programs for programs"
      ]
    },
    {
      id: "health",
      label: "Health",
      title: "Health & Sanitation",
      description: "Our health initiatives improve access to basic healthcare services and promote better hygiene and sanitation practices.",
      image: "/images/health1.JPEG",
      features: [
        {
          title: "Mobile Health Clinics",
          description: "Bringing essential healthcare services to remote communities with limited access."
        },
        {
          title: "Clean Water Projects",
          description: "Drilling wells and establishing clean water sources to prevent waterborne diseases."
        },
        {
          title: "Hygiene Education",
          description: "Teaching proper hygiene practices to prevent disease transmission."
        },
        {
          title: "Maternal & Child Health",
          description: "Supporting pregnant women and children through prenatal care and nutrition programs."
        }
      ],
      impact: [
        "35 clean water wells to be established",
        "8,000+ people to gain access to clean water",
        "20 mobile health clinics to be conducted",
        "50% reduction in waterborne diseases in target areas"
      ]
    },
    {
      id: "peace",
      label: "Peace Building",
      title: "Peace & Reconciliation",
      description: "We work to promote peace, reconciliation, and social cohesion in communities affected by conflict.",
      image: "/images/peace3.jpeg",
      features: [
        {
          title: "Conflict Resolution Training",
          description: "Training community leaders in conflict resolution and mediation skills."
        },
        {
          title: "Interfaith Dialogue",
          description: "Facilitating discussions between different faith communities to promote understanding and cooperation."
        },
        {
          title: "Youth Peace Programs",
          description: "Engaging young people in peace-building activities to prevent radicalization."
        },
        {
          title: "Community Reconciliation",
          description: "Organizing events and initiatives to heal divisions and build community cohesion."
        }
      ],
      impact: [
        "300+ community leaders to be trained in conflict resolution",
        "15 inter-community peace agreements to be facilitated",
        "1,000+ youth to be engaged in peace-building programs",
        "AIM: 70% reduction in violent incidents in target communities"
      ]
    }
  ]
};
// Sample blog data
export const blogPosts = [
  {
    id: 1,
    title: "Bringing Clean Water to Rumbek Village",
    excerpt: "After years of walking miles for clean water, the Rumbek community now has reliable access thanks to a sustainable water project.",
    category: "health",
    date: "April 15, 2025",
    readTime: "5 min read",
    image: "/images/water2.jpeg",
    featured: true
  },
  {
    id: 2,
    title: "Empowering Farmers Through Sustainable Agriculture",
    excerpt: "Our agricultural training program has helped local farmers increase crop yields by 50% using sustainable techniques.",
    category: "agriculture",
    date: "March 28, 2025",
    readTime: "4 min read",
    image: "/images/agri.jpg"
  },
  {
    id: 3,
    title: "New School Opens Doors to 300 Children",
    excerpt: "The opening of a new school in Wau County provides educational opportunities to hundreds of children who previously had no access.",
    category: "education",
    date: "March 10, 2025",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/8466781/pexels-photo-8466781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Youth Peace Ambassadors Program Launches",
    excerpt: "A new initiative engages young people in peace-building activities across communities affected by conflict.",
    category: "peace",
    date: "February 22, 2025",
    readTime: "3 min read",
    image: "https://images.pexels.com/photos/6647024/pexels-photo-6647024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    title: "Mobile Health Clinic Reaches Remote Villages",
    excerpt: "Our mobile health team provided medical care to over 500 people in remote villages with limited healthcare access.",
    category: "health",
    date: "February 15, 2025",
    readTime: "4 min read",
    image: "https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    title: "Community Leaders Trained in Conflict Resolution",
    excerpt: "Twenty community leaders completed intensive training in mediation and conflict resolution techniques.",
    category: "peace",
    date: "January 30, 2025",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 7,
    title: "Adult Literacy Program Changes Lives",
    excerpt: "Our adult literacy program has helped 120 adults learn to read and write, opening new opportunities.",
    category: "education",
    date: "January 18, 2025",
    readTime: "4 min read",
    image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 8,
    title: "Seed Distribution Boosts Food Security",
    excerpt: "A recent seed distribution initiative has helped 300 farming families prepare for the growing season.",
    category: "agriculture",
    date: "January 5, 2025",
    readTime: "3 min read",
    image: "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];
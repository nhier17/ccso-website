import { HeartPulse, Droplet, BookOpen, HandHelping, Users, Globe, Target, Trophy } from "lucide-react";
import { Program, Metric } from "@/types";

export const navbarLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Projects", path: "/projects" },
  { name: "Contact Us", path: "/contact" },
  { name: "Get Involved", path: "/get-involved"}
];

// constants/focusAreas.ts
export const FOCUS_AREAS = [
  {
    id: 1,
    title: "Food Security",
    description:
      "Enhancing agricultural skills and technologies to ensure food security.",
    icon: "/images/food4.jpg",
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
    link: "/volunteer",
    bgClass: "bg-gradient",
  },
  {
    id: "partner",
    title: "Become a Partner",
    description:
      "Collaborate with us to create long-term, sustainable impact in communities.",
    imageSrc: "/images/culture.png",
    link: "/partner",
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

export const successStories = [
  {
    name: "Classrooom Construction",
    location: "South Sudan",
    story: "CCSO's classroom construction project provided safe learning spaces for over 300 children, improving access to quality education and fostering a brighter future for the community.",
    image: "/images/school-project3.jpg"
  },
  {
    name: "Food Distribution",
    location: "Rumbek East",
    story: "CCSO provided emergency food relief to 1,500 families affected by severe flooding, ensuring vulnerable households had access to essential nutrition.",
    image: "/images/food8.jpg"
  },
  {
    name: "Peace Awareness",
    location: "Pacong",
    story: "Through community-led peace awareness programs, CCSO has fostered reconciliation and strengthened social cohesion among over 5,000 residents in conflict-affected areas.",
    image: "/images/peace-project2.jpg"
  }
];
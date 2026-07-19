// Static data centralized for the portfolio website
import { 
  SiAmazonaws,
  SiExpress, 
  SiMongodb, 
  SiNextdotjs, 
  SiReact, 
  SiStrapi, 
  SiTailwindcss
} from "react-icons/si";
import { 
  BiLogoHtml5, 
  BiLogoCss3, 
  BiLogoJavascript, 
  BiLogoNodejs, 
  BiLogoTailwindCss, 
  BiLogoGithub,
  BiLogoLinkedin
} from "react-icons/bi";
import { FaSquareJs, FaBootstrap } from "react-icons/fa6";
import { 
  Mail, 
  Code,
  Smartphone,
  Monitor,
  Palette,
  Database,
  Server,
  Globe,
} from "lucide-react";

// Images - you can update these paths as needed
import img1 from "../components/images/MyPortfolio.png";
import img2 from "../components/images/MineDog.png";
import img4 from "../components/images/ashCourseBundler.png";
import img5 from "../components/images/ashEcommerce.png";
import img6 from "../components/images/expense-tracker.png";
import img7 from "../components/images/currencyConverter.png";
import about1 from "../components/images/about1.png";
import nextjs from "../components/images/nextjs.png";
import home from "../components/images/ashish_portolio_image.jpeg";

// Personal Information
export const personalInfo = {
  name: "Ashish Santani",
  title: "Full-Stack Developer",
  subtitle: "MERN Stack Developer",
  tagline: "HI, I'M Ashish Santani",
  description: `Full-Stack Developer with 1+ year of experience in building production systems for e-commerce platforms generating ₹175Cr+ in annual sales. Specialized in Next.js, React, and Strapi CMS — with hands-on experience in AWS infrastructure, GA4/GTM analytics engineering, and Shopify app development. I am passionate about AI agents and am currently pursuing the Gemini Enterprise Agents development course to deepen my expertise in this field.`,
  location: "Surat, Gujarat",
  email: "ashishasprofessional@gmail.com",
  phone: "+91 9408284318",
  avatar: home,
  resume: "/Ashish-Resume.pdf",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/ashishsantani",
      icon: BiLogoGithub,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/ashishsantani",
      icon: BiLogoLinkedin,
    }
  ]
};

// About Section Data
export const aboutData = {
  title: "Who Am I?",
  images: {
    primary: nextjs,
    secondary: about1
  },
  content: personalInfo.description,
  stats: [
    { label: "Projects Completed", value: "10+" },
    { label: "Years of Experience", value: "1+" },
    { label: "Technologies Mastered", value: "5+" },
    // { label: "Happy Clients", value: "50+" }
  ]
};

// Navigation Items
export const navigationItems = [
  { name: "Home", path: "/", icon: Globe },
  { name: "About", path: "/about", icon: Code },
  { name: "Projects", path: "/projects", icon: Monitor },
  { name: "Contact", path: "/contact", icon: Mail }
];

// Technical Skills Data
export const technicalSkills = [
  {
    name: "HTML",
    icon: BiLogoHtml5,
    color: "#e34c26",
    level: 95,
    category: "Frontend"
  },
  {
    name: "CSS",
    icon: BiLogoCss3,
    color: "#1572b6",
    level: 90,
    category: "Frontend"
  },
  {
    name: "JavaScript",
    icon: BiLogoJavascript,
    color: "#f7df1e",
    level: 88,
    category: "Frontend"
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61dafb",
    level: 85,
    category: "Frontend"
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06b6d4",
    level: 80,
    category: "Frontend"
  },
  {
    name: "Next.js", 
    icon: SiNextdotjs,
    color: "#000000",
    level: 70,
    category: "Frontend"
  },
  {
    name: "Node.js",
    icon: BiLogoNodejs,
    color: "#339933",
    level: 82,
    category: "Backend"
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#000000",
    level: 78,
    category: "Backend"
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47a248",
    level: 75,
    category: "Database"
  },
  {
    name: "Strapi CMS",
    icon: SiStrapi,
    color: "#202020",
    level: 90,
    category: "CMS"
  },
  {
    name: "AWS",
    icon: SiAmazonaws,
    color: "#202020",
    level: 40,
    category: "Cloud"
  }
];

// Experience Data
export const experienceData = [
  {
    id: 1,
    title: "Full-Stack Developer",
    company: "devxlabs.ai",
    period: "May 2025 – Present",
    type: "Full-time",
    location: "Remote",
    achievements: [
      "Leading the frontend powering ₹175Cr+ in commerce: Own the frontend end-to-end — architecture, performance, CMS integration, and analytics — for an e-commerce platform serving 500K+ customers and ₹175Cr+ in sales.",
      "Diagnosed and resolved a critical GA4 data corruption issue where 'source' — a reserved GA4 keyword — was being overwritten by custom event parameters, silently distorting UTM attribution and conversion data; reduced event error rate by 90%. Rebuilt the complete checkout funnel tracking (address, pincode, payment, drop-off) via GTM, restoring accurate attribution across all acquisition channels.",
      "Proactively audited AWS infrastructure, identified idle EC2 instances and redundant CodePipeline services burning client budget — directly reducing cloud spend by 15–20%.",
      "Independently root-caused a recurring third-party API failure that stalled the entire team across multiple attempts; authored a clear RCA and resolved the blocker, restoring project momentum.",
      "Engineered a cart-aware upsell engine surfacing highest-savings recommendations at add-to-cart, driving measurable revenue lift tracked via GA4 event funnels.",
      "Architected a serverless blog feedback pipeline on AWS — real-time rating capture and display — fully provisioned via Terraform.",
      "Refactored a cluttered legacy Cart and Checkout codebase end-to-end, reducing code complexity by 50% and delivering a seamless purchase experience across multiple campaign pages.",
      "Independently built and launched a production Shopify App from scratch — zero prior experience — navigating the App Store review process and coordinating internal and client teams through go-live.",
      "Improved website performance by 40–50% through custom viewport-aware lazy loading hooks for video-heavy sections, directly boosting Core Web Vitals scores."
    ],
    technologies: ["Next.js", "React", "TypeScript", "Strapi CMS", "Google Analytics 4", "Google Tag Manager", "AWS", "Lambda", "DynamoDB", "Terraform", "Remix", "Shopify Polaris", "Node.js"],
    icon: Server,
    current: true
  },
  {
    id: 2,
    title: "Internship",
    company: "devxlabs.ai",
    period: "Aug 2024 – Jun 2025",
    type: "Internship",
    location: "Remote",
    achievements: [
      "Delivered user-centric features by translating Figma designs into pixel-perfect, mobile-first UI components, prioritizing accessibility and seamless user experiences.",
      "Applied clean coding principles and full-stack debugging to refactor legacy codebases, improving readability by 50% and ensuring application stability.",
      "Built reusable Shopify→Strapi and Strapi→Strapi migration scripts adopted team-wide, cutting data transfer time by 75% and eliminating manual effort across projects."
    ],
    technologies: ["Node.js", "Strapi", "Shopify GraphQL API", "JavaScript", "Figma"],
    icon: Code,
    current: false
  },
  {
    id: 3,
    title: "Freelance Shopify Developer",
    company: "B2B E-Commerce",
    period: "Mar 2024 – Jul 2024",
    type: "Freelance",
    location: "Remote",
    achievements: [
      "Developed and launched a Shopify website specifically for Business-to-Business (B2B) clients, focusing on robust features like responsive design, B2B user authentication, breadcrumbs, and custom menus to enhance marketing and customer engagement.",
      "Implemented SEO best practices to improve online visibility and drive organic traffic."
    ],
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS", "SEO"],
    icon: Monitor,
    current: false
  }
];

// Professional Skills Data
export const professionalSkills = [
  {
    name: "Communication Skills",
    level: 78,
    icon: Mail,
    description: "Clear and effective communication with clients and team members"
  },
  {
    name: "Problem Solving",
    level: 85,
    icon: Code,
    description: "Analytical thinking and creative problem-solving abilities"
  },
  {
    name: "Team Work",
    level: 90,
    icon: Globe,
    description: "Collaborative approach and team leadership skills"
  },
  {
    name: "Time Management",
    level: 70,
    icon: Monitor,
    description: "Efficient project planning and deadline management"
  },
  {
    name: "Teaching Skills",
    level: 70,
    icon: Palette,
    description: "Mentoring and knowledge sharing capabilities"
  },
  {
    name: "AI Tools",
    level: 70,
    icon: Database,
    description: "Leveraging AI tools for enhanced productivity"
  }
];

// Services Data
export const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Modern, responsive web applications using React, Next.js, and latest web technologies.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Scalable server-side applications with Node.js, Express, and database integration.",
    technologies: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"]
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive designs that work perfectly on all devices and screen sizes.",
    technologies: ["Responsive Design", "PWA", "Mobile Optimization"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design approach with modern aesthetics and intuitive interfaces.",
    technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"]
  }
];

// Projects Data
export const projects = [
  {
    id: 1,
    title: "My Portfolio",
    description: "As a passionate and dedicated MERN Stack Developer, I have crafted this website to showcase my expertise in building dynamic and interactive web applications. Here, you'll find a collection of my latest projects, each highlighting my skills.",
    image: img1,
    technologies: [
      { name: "HTML", icon: BiLogoHtml5, color: "#e34c26" },
      { name: "CSS", icon: BiLogoCss3, color: "#1572b6" },
      { name: "JavaScript", icon: BiLogoJavascript, color: "#f7df1e" },
      { name: "React", icon: SiReact, color: "#61dafb" }
    ],
    liveUrl: "https://ashportfolio.vercel.app/",
    githubUrl: "https://github.com/ashishsantani/Portfolio",
    category: "Web Application",
    featured: true,
    status: "completed"
  },
  {
    id: 2,
    title: "MineDog Clone",
    description: "I developed a sleek and user-friendly MineDog website using HTML and Bootstrap. The site features a modern and responsive design, ensuring optimal performance, effortless navigation and accessibility across all devices.",
    image: img2,
    technologies: [
      { name: "HTML", icon: BiLogoHtml5, color: "#e34c26" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#6610f2" }
    ],
    liveUrl: "https://main--jovial-naiad-af5f8f.netlify.app/",
    githubUrl: "https://github.com/ashishsantani/MineDog",
    category: "Static Website",
    featured: false,
    status: "completed"
  },
  {
    id: 3,
    title: "CourseBundler Clone",
    description: "Created a full-stack MERN (MongoDB, Express.js, React.js, Node.js) comprehensive ecommerce website aimed at delivering a seamless shopping experience to users. Designed and implemented an admin dashboard enabling CRUD (Create, Read, Update, Delete) operations. Integrated secure payment gateways to ensure safe and reliable transactions for all users.",
    image: img4,
    technologies: [
      { name: "HTML", icon: BiLogoHtml5, color: "#e34c26" },
      { name: "CSS", icon: BiLogoCss3, color: "#1572b6" },
      { name: "JavaScript", icon: BiLogoJavascript, color: "#f7df1e" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Node.js", icon: BiLogoNodejs, color: "#339933" }
    ],
    liveUrl: "https://ashcoursebundler.vercel.app",
    githubUrl: "https://github.com/ashishsantani/CourseBundler-Frontend",
    category: "E-commerce",
    featured: true,
    status: "completed"
  },
  {
    id: 4,
    title: "Ecommerce Clone",
    description: "Created a full-stack MERN (MongoDB, Express.js, React.js, Node.js) comprehensive ecommerce website aimed at delivering a seamless shopping experience to users. Designed and implemented an admin dashboard enabling CRUD (Create, Read, Update, Delete) operations, and integrated real-time inventory management for efficient stock control.",
    image: img5,
    technologies: [
      { name: "HTML", icon: BiLogoHtml5, color: "#e34c26" },
      { name: "CSS", icon: BiLogoCss3, color: "#1572b6" },
      { name: "JavaScript", icon: BiLogoJavascript, color: "#f7df1e" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Node.js", icon: BiLogoNodejs, color: "#339933" }
    ],
    liveUrl: "https://ashecommerceclone.vercel.app",
    githubUrl: "https://github.com/ashishsantani/Ecommerce-clone-frontend",
    category: "E-commerce",
    featured: true,
    status: "completed"
  },
  {
    id: 5,
    title: "Expense Tracker",
    description: "Developed an Expense Tracker Application using Node.js, Express, EJS, HTML, and CSS. The application provides a user-friendly interface for easy expense input and tracking, with real-time updates and total amount calculation. Key feature is intuitive and responsive UI design using HTML, CSS, and EJS templating engine for seamless user experience.",
    image: img6,
    technologies: [
      { name: "HTML", icon: BiLogoHtml5, color: "#e34c26" },
      { name: "CSS", icon: BiLogoCss3, color: "#1572b6" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "Node.js", icon: BiLogoNodejs, color: "#339933" },
      { name: "JavaScript", icon: FaSquareJs, color: "#f7df1e" }
    ],
    liveUrl: "https://expense-tracker-umg4.onrender.com/",
    githubUrl: "https://github.com/ashishsantani/expense-tracker",
    category: "Web Application",
    featured: false,
    status: "completed"
  },
  {
    id: 6,
    title: "Currency Converter",
    description: "The currency converter is a web-based application that allows users to quickly and easily convert amounts between different currencies. It provides a clean, responsive interface designed with Tailwind CSS, React components for dynamic updates, and JavaScript for currency conversion logic. This application leverages real-time exchange rate data from reputable financial APIs.",
    image: img7,
    technologies: [
      { name: "HTML", icon: BiLogoHtml5, color: "#e34c26" },
      { name: "JavaScript", icon: FaSquareJs, color: "#f7df1e" },
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Tailwind CSS", icon: BiLogoTailwindCss, color: "#06b6d4" }
    ],
    liveUrl: "https://ashcurrencyconverter.vercel.app/",
    githubUrl: "https://github.com/ashishsantani/CurrencyConverter",
    category: "Web Application",
    featured: false,
    status: "completed"
  }
];

// Featured Projects (subset of projects)
export const featuredProjects = projects.filter(project => project.featured);

// Contact Information
export const contactInfo = {
  email: personalInfo.email,
  phone: personalInfo.phone,
  location: personalInfo.location,
  availability: "Available for freelance work",
  responseTime: "Usually responds within 24 hours",
  socialLinks: personalInfo.socialLinks
};

// SEO Data
export const seoData = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: `${personalInfo.title} specializing in MERN stack development. Creating modern, responsive web applications with clean code and exceptional user experience.`,
  keywords: "full-stack developer, MERN stack, React developer, Node.js, web development, frontend developer, backend developer",
  author: personalInfo.name,
  siteUrl: personalInfo.socialLinks.portfolio,
  image: home, // OpenGraph image
  twitterHandle: "@yourusername"
};

// Theme Configuration
export const themeConfig = {
  colors: {
    light: {
      primary: "#f97316",
      secondary: "#0ea5e9",
      background: "#ffffff",
      surface: "#f8fafc",
      text: "#1e293b",
      textSecondary: "#64748b"
    },
    dark: {
      primary: "#f97316",
      secondary: "#0ea5e9", 
      background: "#0f172a",
      surface: "#1e293b",
      text: "#f1f5f9",
      textSecondary: "#94a3b8"
    }
  },
  animations: {
    duration: {
      fast: 0.2,
      normal: 0.3,
      slow: 0.5
    },
    easing: {
      default: "cubic-bezier(0.4, 0, 0.2, 1)",
      bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
    }
  }
};

// Export all data as default for easy importing
const portfolioData = {
  personalInfo,
  aboutData,
  navigationItems,
  technicalSkills,
  professionalSkills,
  experienceData,
  services,
  projects,
  featuredProjects,
  contactInfo,
  seoData,
  themeConfig
};

export default portfolioData;
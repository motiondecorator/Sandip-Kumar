import { PersonalInfo, ExperienceItem, EducationItem, SkillCategory, Course, SocialLink } from './types';

export const personalInfo: PersonalInfo = {
  name: "Sandip Kumar Saini",
  role: "Sr. Graphics Designer & Digital Marketing Manager",
  address: "#29 Mohalla Shaheed Bhagat Singh Nagar, Dhandra Road, Dugri, Ludhiana, Punjab, India",
  phone: ["+91 88988 28886", "+91 9779 699699"],
  email: "motiondecorator@gmail.com",
  dob: "18 Dec 1990",
  nationality: "Indian",
  summary: "Dynamic and detail-oriented Creative Graphics Designer cum Digital Marketing Manager with over 12 years of experience in crafting compelling visual designs that drive engagement and enhance brand identity. Specialized in CorelDraw, Adobe Photoshop, Illustrator, After Effects, Premiere Pro, and Media Encoder. Expert in branding, marketing materials, UI design, social media campaigns, and digital strategy.",
  languages: ["English", "Hindi", "Punjabi"],
  hobbies: ["Learning", "Music Listening", "Creative Arts", "Traveling"],
  resumeUrl: "/resume.pdf"
};

export const socialLinks: SocialLink[] = [
  { platform: "Behance", url: "#", iconName: "behance" },
  { platform: "Facebook", url: "#", iconName: "facebook" },
  { platform: "Instagram", url: "#", iconName: "instagram" },
  { platform: "LinkedIn", url: "#", iconName: "linkedin" },
  { platform: "Twitter", url: "#", iconName: "twitter" },
];

export const experience: ExperienceItem[] = [
  {
    id: 1,
    role: "Creative Graphics Designer cum Digital Manager",
    company: "Jindal Fine Industries",
    period: "2017 – Present",
    description: [
      "Managed social media pages, created blog posts, and increased reader satisfaction.",
      "Designed social media graphics aligning with the company mission.",
      "Planned and executed multiple digital campaigns.",
      "Created graphics in After Effects and Illustrator.",
      "Improved product quality using Adobe Creative Suite tools."
    ]
  },
  {
    id: 2,
    role: "Senior Graphics Designer cum Video Editor",
    company: "Girnar Global Pvt. Ltd.",
    period: "2015 – 2017",
    description: [
      "Created brochures, banners, signs, and brand identity elements.",
      "Produced digital assets for web and print.",
      "Enhanced team relationships and creative production workflows.",
      "Edited videos with graphics, titles, audio, and effects.",
      "Created motion graphics that increased customer engagement."
    ]
  },
  {
    id: 3,
    role: "Graphics Designer",
    company: "Metro Max Print Media",
    period: "2014 – 2015",
    description: [
      "Designed digital and print campaigns.",
      "Enhanced brand awareness through creative visuals.",
      "Produced innovative graphics using Photoshop, Illustrator, InDesign."
    ]
  }
];

export const education: EducationItem[] = [
  {
    id: 1,
    degree: "Advanced Certificate in Digital Marketing & Communications",
    institution: "MICA",
    period: "2024 – Present"
  },
  {
    id: 2,
    degree: "BCA (Bachelor of Computer Applications)",
    institution: "Punjab Technical University",
    period: "2012 – 2016"
  },
  {
    id: 3,
    degree: "BCA Course",
    institution: "Excel Net Computer Center",
    period: "2014 – 2015"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Design Skills",
    skills: ["Creativity", "Graphic Design", "Motion Graphics", "Media Design"],
    colorClass: "bg-purple-100 text-purple-800 border-purple-200"
  },
  {
    title: "Marketing & Strategy",
    skills: ["Digital Marketing", "Social Media Management", "Google Analytics", "Digital Strategy"],
    colorClass: "bg-blue-100 text-blue-800 border-blue-200"
  },
  {
    title: "Technical Tools",
    skills: ["Adobe Creative Suite", "After Effects", "Premiere Pro", "CorelDraw", "Illustrator", "Photoshop"],
    colorClass: "bg-emerald-100 text-emerald-800 border-emerald-200"
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Leadership", "Project Management", "Teamwork"],
    colorClass: "bg-amber-100 text-amber-800 border-amber-200"
  }
];

export const courses: Course[] = [
  { id: 1, name: "E-Commerce Fundamentals", provider: "Flipkart Ads" },
  { id: 2, name: "SEO: Link Building", provider: "LinkedIn" },
  { id: 3, name: "SEO: Optimize Your Social Media Profiles", provider: "LinkedIn" }
];
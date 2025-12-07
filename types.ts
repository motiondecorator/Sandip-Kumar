export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  period: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  colorClass: string;
}

export interface Course {
  id: number;
  name: string;
  provider: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  address: string;
  phone: string[];
  email: string;
  dob: string;
  nationality: string;
  summary: string;
  languages: string[];
  hobbies: string[];
  resumeUrl: string;
}
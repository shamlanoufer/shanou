export interface Project {
  id: number;
  title: string;
  year: string;
  cats: string[];
  img: string; // Placeholder name or existing path
  type: string;
  tech: string[];
  link?: string;
  linkLabel?: string;
  desc: string;
  highlights: string[];
  featured?: boolean;
  figmaLink?: string;
  githubLink?: string;
  pdfLink?: string;
}

export interface Service {
  num: string;
  title: string;
  desc: string;
}

export interface SkillCategory {
  num: string;
  title: string;
  skills: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  school: string;
  notes: string;
}

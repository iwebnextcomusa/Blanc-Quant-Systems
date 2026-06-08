export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  iconName: string; // Used to dynamic render Lucide icons
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  results: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  useCase: string;
  iconName: string;
}

export interface MediaItem {
  id: string;
  type: "image" | "video";
  title: string;
  category: string;
  src: string;
  isLocal?: boolean;
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  github: string;
  demo?: string;
  category: "ai-ml" | "software";
}

export interface Skill {
  name: string;
  category: "data-analysis" | "data-science" | "data-visualization" | "tools" | "databases" | "soft-skills";
  level?: number; // percentage out of 100 for visual progress bars
}

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  location?: string;
  period: string;
  description: string[];
  type: "education" | "experience";
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  description?: string;
}

export const personalInfo = {
  name: "Mallipeddi Harish",
  title: "Computer Science (AI & ML) Engineer",
  email: "harishmallipeddi2003@gmail.com",
  phone: "+91 9014504250",
  location: "Hyderabad, India",
  github: "https://github.com/harishmallipeddi",
  linkedin: "https://www.linkedin.com/in/harishmallipeddi-aiml",
  resume: "/MALLIPEDDI_HARISH_Resume.pdf",
  summary: "Enthusiastic Computer Science (AI & ML) student with strong knowledge of Python, SQL, DBMS, OOP, Data Structures, and Software Development Fundamentals. Experienced in building academic and internship projects involving machine learning, data analysis, and database management. Adept at writing clean, efficient code, analyzing data, and solving complex problems with a logical approach. A fast learner with a growth mindset, strong collaboration skills, and a passion for emerging technologies. Looking to contribute as an IT & Digital Technologies Intern while expanding technical expertise and supporting the development of innovative, AI-driven solutions.",
  aboutStory: "I am a B.Tech Computer Science student specializing in Artificial Intelligence and Machine Learning. My passion lies in solving real-world challenges using data-driven approaches and AI models. From processing raw data to building scalable predictive systems, I enjoy the entire lifecycle of software and model development. I have hands-on experience in machine learning frameworks, data visualization libraries, and modern APIs.",
};

export const skills: Skill[] = [
  // Data Analysis
  { name: "Python", category: "data-analysis", level: 90 },
  { name: "SQL", category: "data-analysis", level: 85 },
  { name: "Pandas", category: "data-analysis", level: 80 },
  { name: "NumPy", category: "data-analysis", level: 80 },
  { name: "Data Cleaning", category: "data-analysis", level: 85 },

  // Data Science / ML
  { name: "Machine Learning", category: "data-science", level: 85 },
  { name: "LLM Fundamentals", category: "data-science", level: 75 },
  { name: "Gemini API", category: "data-science", level: 80 },
  { name: "Scikit-Learn", category: "data-science", level: 80 },

  // Data Visualization
  { name: "Matplotlib", category: "data-visualization", level: 80 },
  { name: "Seaborn", category: "data-visualization", level: 80 },
  { name: "Dashboard Concepts", category: "data-visualization", level: 75 },
  { name: "Power BI", category: "data-visualization", level: 85 },

  // Databases
  { name: "MySQL", category: "databases", level: 80 },
  { name: "SQL Databases", category: "databases", level: 80 },

  // Tools & Technologies
  { name: "Git", category: "tools", level: 85 },
  { name: "GitHub", category: "tools", level: 90 },
  { name: "Jupyter Notebook", category: "tools", level: 85 },
  { name: "Flask", category: "tools", level: 75 },
  { name: "Twilio", category: "tools", level: 70 },
  { name: "ngrok", category: "tools", level: 75 },

  // Soft Skills
  { name: "Problem Solving", category: "soft-skills", level: 90 },
  { name: "Team Collaboration", category: "soft-skills", level: 85 },
  { name: "Analytical Thinking", category: "soft-skills", level: 90 },
  { name: "Fast Learner", category: "soft-skills", level: 95 },
];

export const projects: Project[] = [
  {
    id: "ai-sales-agent",
    title: "AI Sales Call Agent",
    description: "Developed an AI-powered voice sales agent automating customer interactions with real-time speech processing and AI-generated responses.",
    longDescription: "Built using Python, Gemini API, and Twilio to create a seamless, real-time conversational agent for sales outreach. Integrated speech recognition and synthesis, setting up webhook communication using Flask and ngrok for secure voice workflow execution.",
    tech: ["Python", "Flask", "Gemini API", "Twilio", "ngrok"],
    github: "https://github.com/harishmallipeddi",
    category: "ai-ml",
  },
  {
    id: "ransomware-detection",
    title: "Detection of Ransomware Attack",
    description: "Built a machine learning-based ransomware detection system analyzing disk and system usage data to flag malicious behavior.",
    longDescription: "Analyzed live system activity patterns and performed feature extraction on disk read/write inputs. Implemented classification algorithms to detect malicious activities and fine-tuned model performance for high detection accuracy.",
    tech: ["Python", "Machine Learning", "Scikit-Learn", "Data Processing"],
    github: "https://github.com/harishmallipeddi",
    category: "ai-ml",
  },
  {
    id: "calories-burned",
    title: "Calories Burned Prediction",
    description: "Developed a predictive machine learning regression model to calculate calories burned based on user-provided physical parameters.",
    longDescription: "Performed extensive data cleaning, exploratory data analysis (EDA), and preprocessing on physiological datasets. Applied and compared multiple regression algorithms to deliver accurate predictive estimates.",
    tech: ["Python", "Pandas", "NumPy", "Regression Algorithms", "Matplotlib"],
    github: "https://github.com/harishmallipeddi",
    category: "ai-ml",
  },
];

export const timeline: TimelineItem[] = [
  {
    id: "internship-edunet",
    title: "Foundations of AI Intern",
    organization: "Edunet Foundation",
    location: "Remote / Hybrid",
    period: "April 2025 – May 2025",
    description: [
      "Developed and deployed ML models using Microsoft Azure Cognitive Services and Azure ML Studio for AI-based applications.",
      "Gained hands-on experience in data preprocessing, model evaluation, and integrating APIs for scalable AI solutions.",
    ],
    type: "experience",
  },
  {
    id: "edu-btech",
    title: "B.Tech in Computer Science (AI & ML)",
    organization: "MallaReddy Institute of Technology And Sciences",
    location: "Hyderabad, Telangana",
    period: "2022 – 2026",
    description: [
      "Specialized in Artificial Intelligence and Machine Learning fundamentals.",
      "Maintained a strong academic record with a cumulative CGPA of 7.6.",
      "Engaged in coding clubs, hackathons, and technical volunteer work.",
    ],
    type: "education",
  },
];

export const achievements: Certification[] = [
  {
    id: "ach-1",
    name: "Hackathon Presenter - 'Bionic Eye'",
    issuer: "College Hackathon",
    description: "Presented an innovative project on Bionic Eye, demonstrating engineering problem-solving and AI integration capabilities.",
  },
  {
    id: "ach-2",
    name: "Learnathon Volunteer",
    issuer: "College Technical Club",
    description: "Contributed to peer-to-peer learning and raised awareness of current tech trends among college students.",
  },
  {
    id: "cert-ai-tools",
    name: "Certification on Learning AI Tools",
    issuer: "OutSkill",
  },
  {
    id: "cert-powerbi",
    name: "Certification on Power-BI",
    issuer: "10000 Coders",
  },
  {
    id: "cert-sales-agent",
    name: "Certification on AI Sales Call Agent",
    issuer: "10000 Coders",
  },
];

export type Job = {
  id: string;
  date: string;
  titleKey: string;
  descriptionKey: string;
  tags?: string[];
  side: "left" | "right";
};

export const jobs: Job[] = [
  {
    id: "exp0",
    date: "March 2025, July 2026",
    titleKey: "exp_0",
    descriptionKey: "exp_0_more",
    tags: ["React", "NodeJs", "PHP", "Laravel", "MySQL", "Cursor", "Claude", "GitHub Copilot"],
    side: "right",
  },
  {
    id: "exp1",
    date: "July 2024, February 2025",
    titleKey: "exp_1",
    descriptionKey: "exp_1_more",
    tags: ["META", "MySQL", "Python", "NodeJs", "React"],
    side: "left",
  },
  {
    id: "exp2",
    date: "November-December, 2024",
    titleKey: "exp_2",
    descriptionKey: "exp_2_more",
    tags: ["React", "TypeScript"],
    side: "right",
  },
  {
    id: "exp3",
    date: "April-August, 2023",
    titleKey: "exp_3",
    descriptionKey: "exp_3_more",
    tags: ["NestJs", "Angular", "PostgreSQL", "TypeScript"],
    side: "left",
  },
  {
    id: "exp4",
    date: "March, 2023",
    titleKey: "exp_4",
    descriptionKey: "exp_4_more",
    tags: ["Flutter", "Firebase", "Google API"],
    side: "right",
  },
];

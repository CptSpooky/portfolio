export interface BulletPointSection {
  text: string;
  icon: string;
  alt: string;
}

export interface InfoSection {
  title: string;
  date: string;
  description: string;
  bulletPoints?: BulletPointSection[];
}

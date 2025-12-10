export interface NewsItem {
  id: number;
  image: string;
  date: string;
  headline: string;
  link: string;
}

export interface EventItem {
  id: number;
  month: string;
  day: string;
  title: string;
  location: string;
  link: string;
}

export interface SocialPost {
  id: number;
  image: string;
  type: 'instagram' | 'linkedin';
  caption: string;
  likes: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}
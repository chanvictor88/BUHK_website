import { NewsItem, EventItem, SocialPost } from './types';

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
    date: 'OCT 24, 2025',
    headline: 'HKBU New College Launches AI-Driven Research Initiative',
    link: '#'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
    date: 'OCT 22, 2025',
    headline: 'Global Exchange Partners Visit Campus for Sustainability Summit',
    link: '#'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
    date: 'OCT 18, 2025',
    headline: 'Student Innovation Team Wins Gold at International Tech Fair',
    link: '#'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=600&q=80',
    date: 'OCT 15, 2025',
    headline: 'Professor Lee Awarded Prestigious Humanities Fellowship',
    link: '#'
  }
];

export const EVENT_ITEMS: EventItem[] = [
  {
    id: 1,
    month: 'OCT',
    day: '26',
    title: 'Future of Education Symposium 2025',
    location: 'Academic Community Hall',
    link: '#'
  },
  {
    id: 2,
    month: 'NOV',
    day: '02',
    title: 'Undergraduate Open Day: Explore Your Path',
    location: 'Main Campus Atrium',
    link: '#'
  },
  {
    id: 3,
    month: 'NOV',
    day: '14',
    title: 'Distinguished Lecture Series: Dr. Jane Doe',
    location: 'Lecture Theatre 3',
    link: '#'
  }
];

export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=400&q=80',
    type: 'instagram',
    caption: 'Graduation day joy! 🎓 #HKBUNewCollege #ClassOf2025',
    likes: 1240
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=400&q=80',
    type: 'linkedin',
    caption: 'Honored to present our research on urban sustainability.',
    likes: 856
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=400&q=80',
    type: 'instagram',
    caption: 'Campus sunset vibes 🌅',
    likes: 2100
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=400&q=80',
    type: 'instagram',
    caption: 'Robotics club competition ready!',
    likes: 943
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80',
    type: 'linkedin',
    caption: 'Networking with industry leaders at the annual gala.',
    likes: 760
  }
];

export const SYSTEM_INSTRUCTION = `You are the AI Assistant for HKBU New College. 
Your tone is professional, welcoming, and helpful. 
You help current and prospective students, staff, and visitors finding information about admissions, programmes, research, and campus life.
If asked about the weather, check the top alert bar context (Severe Weather Arrangement).
Briefly answer questions. If you don't know, suggest they contact the General Office.`;